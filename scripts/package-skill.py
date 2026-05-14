#!/usr/bin/env python3
"""
Package a skill folder into a distributable `.skill` file (a zip archive).

Vendored and lightly adapted from Anthropic's skill-creator skill:
https://github.com/anthropics/skills/blob/main/skills/skill-creator/scripts/package_skill.py

Adaptations vs. upstream:
- `paths` is added to ALLOWED_PROPERTIES so Claude Code's path-based
  auto-activation extension validates.
- Bundled the validator and packager into one file with no external
  Python dependencies (stdlib-only — no PyYAML).
- Replaced PyYAML parsing with simple key:value regex parsing since
  SKILL.md frontmatter is always shallow.

Usage:
    python scripts/package-skill.py <path/to/skill-folder> [output-directory]

Example:
    python scripts/package-skill.py skills/campfire-design-system dist
"""

from __future__ import annotations

import fnmatch
import re
import sys
import zipfile
from pathlib import Path


# Frontmatter keys that may appear in a SKILL.md.
# Upstream agent-skills spec + Claude Code's `paths` extension.
ALLOWED_PROPERTIES = {
    "name",
    "description",
    "license",
    "allowed-tools",
    "metadata",
    "compatibility",
    "paths",
}

# Exclusion rules when packaging.
EXCLUDE_DIRS = {"__pycache__", "node_modules"}
EXCLUDE_GLOBS = {"*.pyc"}
EXCLUDE_FILES = {".DS_Store"}
# Directories excluded only at the skill root (not when nested deeper).
ROOT_EXCLUDE_DIRS = {"evals"}


def parse_frontmatter_keys(frontmatter_text: str) -> set[str]:
    """Return the set of top-level keys present in YAML frontmatter.

    Recognizes `key: value` and `key:` block scalars. Ignores indented
    lines (which are values under their parent key) and comments.
    """
    keys: set[str] = set()
    for line in frontmatter_text.splitlines():
        if not line or line.lstrip().startswith("#"):
            continue
        if line[0] in " \t":
            # Indented — belongs to a nested value, not a top-level key.
            continue
        match = re.match(r"^([A-Za-z0-9_-]+)\s*:", line)
        if match:
            keys.add(match.group(1))
    return keys


def extract_value(frontmatter_text: str, key: str) -> str | None:
    """Extract the value of a top-level scalar key from frontmatter."""
    pattern = re.compile(rf"^{re.escape(key)}\s*:\s*(.*)$", re.MULTILINE)
    match = pattern.search(frontmatter_text)
    if not match:
        return None
    raw = match.group(1).strip()
    # Strip surrounding quotes if present.
    if (raw.startswith("\"") and raw.endswith("\"")) or (
        raw.startswith("'") and raw.endswith("'")
    ):
        raw = raw[1:-1]
    return raw


def validate_skill(skill_path: Path) -> tuple[bool, str]:
    """Validate a skill folder's SKILL.md frontmatter."""
    skill_md = skill_path / "SKILL.md"
    if not skill_md.exists():
        return False, "SKILL.md not found"

    content = skill_md.read_text()
    if not content.startswith("---"):
        return False, "No YAML frontmatter found"

    match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
    if not match:
        return False, "Invalid frontmatter format"

    frontmatter_text = match.group(1)
    keys = parse_frontmatter_keys(frontmatter_text)

    unexpected = keys - ALLOWED_PROPERTIES
    if unexpected:
        return False, (
            f"Unexpected key(s) in SKILL.md frontmatter: {', '.join(sorted(unexpected))}. "
            f"Allowed properties are: {', '.join(sorted(ALLOWED_PROPERTIES))}"
        )

    if "name" not in keys:
        return False, "Missing 'name' in frontmatter"
    if "description" not in keys:
        return False, "Missing 'description' in frontmatter"

    name = extract_value(frontmatter_text, "name") or ""
    if name:
        if not re.match(r"^[a-z0-9-]+$", name):
            return False, f"Name '{name}' must be kebab-case (lowercase letters, digits, hyphens)"
        if name.startswith("-") or name.endswith("-") or "--" in name:
            return False, f"Name '{name}' cannot start/end with hyphen or contain consecutive hyphens"
        if len(name) > 64:
            return False, f"Name is too long ({len(name)} characters; max 64)"

    description = extract_value(frontmatter_text, "description") or ""
    if description:
        if "<" in description or ">" in description:
            return False, "Description cannot contain angle brackets (< or >)"
        if len(description) > 1024:
            return False, f"Description is too long ({len(description)} characters; max 1024)"

    return True, "Skill is valid!"


def should_exclude(rel_path: Path) -> bool:
    """Check if a path should be excluded from the .skill archive."""
    parts = rel_path.parts
    if any(part in EXCLUDE_DIRS for part in parts):
        return True
    # rel_path is relative to skill_path.parent; parts[0] is the skill folder
    # name and parts[1] (if present) is the first subdirectory.
    if len(parts) > 1 and parts[1] in ROOT_EXCLUDE_DIRS:
        return True
    name = rel_path.name
    if name in EXCLUDE_FILES:
        return True
    return any(fnmatch.fnmatch(name, pat) for pat in EXCLUDE_GLOBS)


def package_skill(skill_path: Path, output_dir: Path | None) -> Path | None:
    skill_path = skill_path.resolve()

    if not skill_path.exists():
        print(f"Error: skill folder not found: {skill_path}", file=sys.stderr)
        return None
    if not skill_path.is_dir():
        print(f"Error: path is not a directory: {skill_path}", file=sys.stderr)
        return None

    print("Validating skill...")
    valid, message = validate_skill(skill_path)
    if not valid:
        print(f"Validation failed: {message}", file=sys.stderr)
        return None
    print(f"  {message}")

    if output_dir is None:
        output_dir = Path.cwd()
    output_dir = output_dir.resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    out_file = output_dir / f"{skill_path.name}.skill"

    with zipfile.ZipFile(out_file, "w", zipfile.ZIP_DEFLATED) as zipf:
        for file_path in sorted(skill_path.rglob("*")):
            if not file_path.is_file():
                continue
            arcname = file_path.relative_to(skill_path.parent)
            if should_exclude(arcname):
                print(f"  skipped: {arcname}")
                continue
            zipf.write(file_path, arcname)
            print(f"  added:   {arcname}")

    print(f"Packaged: {out_file}")
    return out_file


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python scripts/package-skill.py <skill-folder> [output-dir]", file=sys.stderr)
        return 1

    skill_path = Path(sys.argv[1])
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else None

    result = package_skill(skill_path, output_dir)
    return 0 if result else 1


if __name__ == "__main__":
    sys.exit(main())
