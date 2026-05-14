#!/usr/bin/env node
/**
 * Prepend `"use client";` to dist/index.js and dist/index.cjs so Next.js
 * App Router (and other RSC frameworks) accept the bundled components.
 *
 * esbuild treats top-level string literals as no-op expressions and strips
 * them, so adding `"use client";` to the source entry doesn't work. tsup's
 * `banner` option also gets stripped under `splitting: true`. Prepending
 * the bytes after tsup finishes is the reliable workaround.
 *
 * Source map references are preserved automatically because they live on
 * trailing `//# sourceMappingURL=` lines.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const DIRECTIVE = '"use client";\n';
const TARGETS = ["dist/index.js", "dist/index.cjs"];

for (const relPath of TARGETS) {
  const absPath = resolve(process.cwd(), relPath);
  const original = await readFile(absPath, "utf8");

  if (original.startsWith(DIRECTIVE) || original.startsWith("'use client';")) {
    console.log(`  unchanged (already present): ${relPath}`);
    continue;
  }

  // CJS bundles start with `'use strict';` (Node's own directive).
  // Insert "use client" before it so both directives sit at the top.
  let prefix = DIRECTIVE;
  let body = original;
  if (original.startsWith("'use strict';")) {
    prefix = DIRECTIVE;
    body = original; // keep 'use strict' after "use client"
  }

  await writeFile(absPath, prefix + body, "utf8");
  console.log(`  prepended "use client": ${relPath}`);
}
