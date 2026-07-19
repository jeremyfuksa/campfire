# CLAUDE.md

Campfire Design System — a React component library (~70 components on Radix primitives + Tailwind v4), published to npm as `@jeremyfuksa/campfire` (v2.x). Storybook, deployed to GitHub Pages (https://jeremyfuksa.github.io/campfire), is the docs site. See `AGENTS.md` for structure, style, and release conventions.

## Commands

- `npm run test` — smoke subset only (`vitest run src/test`). This is what CI runs.
- `npm run test:full` — full suite (~73 component suites). Local only; see gotcha below.
- `npm run test:a11y` — axe-core accessibility assertions. Required CI gate.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run build:lib` — full library build: `rm -rf dist` → `tokens` → `validate:exports` → `tsup` → `add-use-client.mjs` → `build:skill` → bundle-size check.
- `npm run storybook` / `npm run build-storybook` — Storybook dev server / static build.
- `npm run tokens` — regenerates token outputs (including `src/styles/tokens.generated.css`) from `src/tokens/*.json` via Style Dictionary.
- `npm run sync:exports` / `npm run validate:exports` — regenerate / verify per-component subpath exports in `package.json`.

CI (`.github/workflows/ci.yml`) runs exactly: smoke tests → a11y tests → typecheck → `build:lib` → `build-storybook`.

## Gotchas

- **Do not switch CI to `test:full`.** The full suite exhausts memory on GitHub Actions ubuntu-latest runners — that is *why* CI runs only the smoke subset. Running only `npm run test` in CI is deliberate, not an oversight.
- **`build:lib` requires python3.** The `build:skill` step shells out to `python3 scripts/package-skill.py`, which produces `dist/campfire-design-system.skill`.
- **Exports discipline.** Every component gets a per-component subpath export in `package.json`. `npm run validate:exports` fails the build on drift; fix drift with `npm run sync:exports`, never by hand-editing the exports map.
- **`src/styles/tokens.generated.css` is gitignored.** If it's missing (fresh clone), run `npm run tokens` to regenerate it.

## Sources of truth

- `design.md` is the authoritative design ruleset (typography role split, Spark Rule of One, editorial themes, color tokens). It ships in the npm tarball and is mirrored by the global `campfire-css` skill.
- `src/lib/index.ts` is the shipping barrel — anything not re-exported there does not reach consumers.

## Consumer status (as of 2026-07-18)

Published to npm as `@jeremyfuksa/campfire` v2.x; the Storybook on GitHub Pages is the docs site. jeremyfuksa.com is removing its unused dependency on the package (jeremyfuksa/jeremyfuksa.com#178), leaving no known in-house consumer — the library currently stands as an independently published system. Whether anything adopts it is a direction decision that stays with Jeremy (tracked in issue #56).
