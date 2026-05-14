#!/usr/bin/env node
/**
 * Prepend `"use client";` to every published JS/CJS entry under dist/ so
 * Next.js App Router (and other RSC frameworks) accept the bundled
 * components. Both the barrel `dist/index.{js,cjs}` and every per-component
 * subpath entry need the directive; client hooks live throughout the tree.
 *
 * esbuild treats top-level string literals as no-op expressions and strips
 * them, so adding `"use client";` to the source entry doesn't work. tsup's
 * `banner` option also gets stripped under `splitting: true`. Prepending
 * the bytes after tsup finishes is the reliable workaround.
 *
 * Source map references are preserved automatically because they live on
 * trailing `//# sourceMappingURL=` lines.
 *
 * Internal split chunks (fonts-*, plus tsup's per-chunk shared code) are
 * skipped — the directive only matters on entry points consumers import.
 */

import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";

const DIRECTIVE = '"use client";\n';
const DIST = resolve(process.cwd(), "dist");

const isEntry = (name) =>
  (name.endsWith(".js") || name.endsWith(".cjs")) &&
  // skip tokens (no React)
  !name.startsWith("tokens") &&
  // skip shared chunk files (have content hashes in the name like `fonts-RCR6IO25.cjs`)
  !/^[a-z0-9-]+-[A-Z0-9]{8}\.(c?js)$/.test(name);

const files = (await readdir(DIST)).filter(isEntry);

for (const name of files) {
  const absPath = join(DIST, name);
  const original = await readFile(absPath, "utf8");

  if (original.startsWith(DIRECTIVE) || original.startsWith("'use client';")) {
    console.log(`  unchanged (already present): ${name}`);
    continue;
  }

  await writeFile(absPath, DIRECTIVE + original, "utf8");
  console.log(`  prepended "use client": ${name}`);
}
