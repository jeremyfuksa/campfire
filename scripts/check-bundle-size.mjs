#!/usr/bin/env node
// Bundle size gate. Run after `npm run build:lib`. Compares the freshly
// built artifacts against committed budgets and exits non-zero on regression.
//
// Two kinds of budgets:
//   - Aggregate: every JS / CSS byte under dist/ that ships in the npm tarball.
//     This is the headline number for "what does adding @jeremyfuksa/campfire
//     cost a consumer who imports everything."
//   - Per-entry: a handful of representative single-component imports to
//     guard tree-shakability — if `import { Button }` starts pulling in the
//     world, the budget fires.
//
// The budgets are intentionally generous — they're "regression alarms," not
// "shrink-or-die." Update them in the same PR as any change that earns the
// new size.

import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const AGGREGATE_BUDGETS = {
  "all .js":   { raw: 1.2 * 1024 * 1024, gzip: 220 * 1024 },
  "all .cjs":  { raw: 1.3 * 1024 * 1024, gzip: 230 * 1024 },
  "all .css":  { raw: 200 * 1024,        gzip: 32 * 1024 },
};

// "What does one component cost?" The budget here is the entry file + its
// inlined deps after tsup splits. We pick a few representative entries:
// a leaf (no Radix), a Radix wrapper, and a heavy one (chart pulls Recharts).
const ENTRY_BUDGETS = {
  "button.js":  { raw: 220 * 1024, gzip: 45 * 1024 },
  "avatar.js":  { raw: 220 * 1024, gzip: 45 * 1024 },
  "chart.js":   { raw: 220 * 1024, gzip: 45 * 1024 },
};

function bytes(files) {
  let raw = 0;
  let gzip = 0;
  for (const f of files) {
    const buf = fs.readFileSync(f);
    raw += buf.length;
    gzip += gzipSync(buf).length;
  }
  return { raw, gzip };
}

const allFiles = fs.readdirSync(dist).map((f) => path.join(dist, f));
const groups = {
  "all .js": allFiles.filter((f) => f.endsWith(".js")),
  "all .cjs": allFiles.filter((f) => f.endsWith(".cjs")),
  "all .css": allFiles.filter((f) => f.endsWith(".css")),
};

const fmt = (n) => `${(n / 1024).toFixed(1)} KB`;
const pad = (s, n) => String(s).padEnd(n);

let failed = false;
const rows = [];

for (const [label, files] of Object.entries(groups)) {
  if (!files.length) {
    console.error(`MISSING  ${label}`);
    failed = true;
    continue;
  }
  const { raw, gzip } = bytes(files);
  const budget = AGGREGATE_BUDGETS[label];
  const ok = raw <= budget.raw && gzip <= budget.gzip;
  if (!ok) failed = true;
  rows.push({ label, raw, gzip, budget, ok });
}

for (const [name, budget] of Object.entries(ENTRY_BUDGETS)) {
  const file = path.join(dist, name);
  if (!fs.existsSync(file)) {
    console.error(`MISSING  ${name}`);
    failed = true;
    continue;
  }
  // For per-entry checks, follow imports one level deep to capture the
  // chunk(s) the entry references. This approximates "what one component
  // costs after tree-shaking" — not a perfect metric, but catches the
  // common regression of accidentally inlining a giant shared chunk.
  const source = fs.readFileSync(file, "utf8");
  const chunkNames = [
    ...new Set(
      [...source.matchAll(/['"]\.\/(chunk-[A-Z0-9]+\.js)['"]/g)].map(
        (m) => m[1],
      ),
    ),
  ];
  const files = [file, ...chunkNames.map((c) => path.join(dist, c))];
  const { raw, gzip } = bytes(files);
  const ok = raw <= budget.raw && gzip <= budget.gzip;
  if (!ok) failed = true;
  rows.push({ label: `${name} (+chunks)`, raw, gzip, budget, ok });
}

console.log(pad("group", 24), pad("raw", 14), pad("gzip", 14), "budget (raw / gzip)");
for (const r of rows) {
  const rawCell = `${fmt(r.raw)} / ${fmt(r.budget.raw)}`;
  const gzipCell = `${fmt(r.gzip)} / ${fmt(r.budget.gzip)}`;
  const mark = r.ok ? "OK" : "FAIL";
  console.log(
    pad(r.label, 24),
    pad(fmt(r.raw), 14),
    pad(fmt(r.gzip), 14),
    rawCell,
    "·",
    gzipCell,
    mark,
  );
}

if (failed) {
  console.error(
    "\nBundle size regression. Either reduce the change or raise the budget in scripts/check-bundle-size.mjs.",
  );
  process.exit(1);
}
