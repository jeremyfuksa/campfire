#!/usr/bin/env node
// Keep package.json `exports` in sync with src/components/ui/*.tsx.
//
// Modes:
//   node scripts/sync-exports.mjs            # validate; exit 1 if drift
//   node scripts/sync-exports.mjs --write    # rewrite package.json in place
//
// Static entries (".", "./styles.css", "./tokens", etc.) are preserved
// verbatim; only per-component subpath entries are managed here.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const componentsDir = path.join(root, "src/components/ui");
const pkgPath = path.join(root, "package.json");

const write = process.argv.includes("--write");

const components = fs
  .readdirSync(componentsDir)
  .filter(
    (f) =>
      f.endsWith(".tsx") && !f.endsWith(".stories.tsx") && !f.endsWith(".test.tsx"),
  )
  .map((f) => f.replace(/\.tsx$/, ""))
  .sort();

const STATIC_EXPORTS = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
    require: "./dist/index.cjs",
  },
  "./styles.css": "./dist/index.css",
  "./tokens": {
    types: "./dist/tokens.d.ts",
    import: "./dist/tokens.js",
  },
  "./tokens.json": "./dist/tokens.json",
  "./tokens.dark.json": "./dist/tokens.dark.json",
  "./tokens.css": "./dist/tokens.css",
};

const componentExports = Object.fromEntries(
  components.map((name) => [
    `./${name}`,
    {
      types: `./dist/${name}.d.ts`,
      import: `./dist/${name}.js`,
      require: `./dist/${name}.cjs`,
    },
  ]),
);

const desired = { ...STATIC_EXPORTS, ...componentExports };

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const current = pkg.exports ?? {};

const sameShape =
  JSON.stringify(current) === JSON.stringify(desired);

if (sameShape) {
  console.log(`exports map up to date (${components.length} components)`);
  process.exit(0);
}

if (!write) {
  console.error("package.json `exports` is out of sync with src/components/ui/.");
  console.error("Run: node scripts/sync-exports.mjs --write");
  process.exit(1);
}

pkg.exports = desired;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log(`exports map updated (${components.length} components)`);
