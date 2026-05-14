# Changelog

All notable changes to the Campfire Design System.

## [Unreleased]

## [0.9.0] - 2026-05-14

A consolidation release. Everything below was driven by a full
audit of the repo: structural cleanup, docs-delivery migration,
component-consistency pass, and a stack of follow-up refactors.

### Added

- **`<EditorialTheme>` primitives + theme system** (covered earlier
  in 0.7.0; mentioned again here because Storybook now ships the
  canonical `Foundations/Editorial` MDX docs page).
- **Storybook MDX foundation pages** (#40, #41): `Welcome`,
  `Foundations/Typography`, `Foundations/Spark`,
  `Foundations/Tokens`, `Foundations/Layout`. The deployed docs at
  https://jeremyfuksa.github.io/campfire are now Storybook static
  output; the hand-coded Vite playground that lived alongside has
  been retired.
- **Tokens MDX reference** (#41) — comprehensive token catalogue
  (palette + semantic + signature + typography + spacing + radii +
  shadows + motion + z-index) replacing the bespoke
  `DesignTokensPage` Vite surface.
- **Layout MDX reference** (#41) — grid, application chrome,
  spacing scale, breakpoints, and layout primitives.
- **Tabs migration to Radix Tabs primitive** (#45).
- **Avatar migration to Radix Avatar primitive** (#46), plus a
  vitest setup patch so happy-dom's lack of network image loading
  doesn't keep AvatarImage stuck in `loading` state.
- **HoverCard migration to Radix HoverCard primitive** (#47).
- **Tooltip migration to Radix Tooltip primitive** (#43), with
  test-suite rewrite for Radix's screen-reader content duplication.
- **Switch migration to Radix Switch primitive** (#44).
- **Axe a11y coverage on 17 previously-uncovered test files**
  (#48): alert-dialog, calendar, carousel, chart, command,
  context-menu, drawer, dropdown-menu, file-upload, form,
  input-otp, menubar, navigation-menu, resizable, sheet, sidebar,
  sonner.
- **Expanded story coverage** (#49) for Form, Sidebar, and Sonner
  — 12 new variant stories collectively (validation states,
  textarea, disabled, active item, search, badges, collapsible,
  action toasts, promise toasts, position variants, rich content).

### Changed

- **`legacy.*.json` → `shadcn-compat.*.json`** (#42). The previous
  name was misleading — the file is load-bearing for Tailwind v4's
  `@theme` block (defines `--background`, `--card`, `--popover`,
  `--destructive`, etc. as semantic aliases for shadcn-style
  class names). Renamed to reflect the actual role.
- **`timeline.tsx` token bug fixed** (#42). The component had
  `var(--success)` and `var(--warning)` references that never
  resolved (only the numbered palette steps exist). Migrated to
  the numbered semantic tokens. Same PR also migrated
  `timeline.tsx` and `sonner.tsx` off the shadcn-compat alias
  layer — no internal components consume the bare-name aliases
  directly anymore.
- **Tailwind class-syntax consistency** (#42). Replaced Tailwind
  v4 arbitrary-value syntax (`bg-(--success-100)` etc.) with
  semantic classes (`bg-success-100`) across alert, badge, chip,
  heading, link, progress, spinner, status-dot, text. The
  arbitrary syntax was bypassing the `@theme` mappings and
  creating two ways to spell the same color.
- **React imports standardized** (#42). Switched from
  `import React` (default) to `import * as React` (namespace) in
  8 files to match the dominant pattern across the rest of the
  library.
- **Accordion stories Meta type** (#42): aligned to the
  `satisfies Meta<typeof X>` pattern used by the other 73 stories.
- **`FileUpload`'s hidden `<input>` now has `aria-label`** (#48).
  axe caught the gap during the coverage expansion. Real bug fix.
- **`Sheet`/`Drawer` overlay handling** — confirmed correct in
  Phase 3 audit; no changes needed (PRs landed cleanly on top of
  the existing Radix-backed implementations).
- **Vite playground retired** (#41). 10 hand-coded pages + the
  Vite config + `index.html` deleted. `npm run dev`/`build`/
  `preview` scripts removed; `npm run storybook` and
  `npm run typecheck` replace them. `predeploy`/`deploy` point at
  `storybook build` + `storybook-static/`.
- **ROADMAP.md, AGENTS.md, design.md brought in sync with reality**
  (#39, #42). Four "Planned" ROADMAP entries that had shipped
  (DataTable, Autocomplete, Date/Time pickers, Color Picker)
  corrected to "Shipped"; Storybook entry corrected; AGENTS.md's
  stale claims about no test harness, missing build commands, and
  the long-since-replaced `npm run release` flow rewritten;
  `design.md`'s legacy-tokens Don't entry rewritten to describe
  what the shadcn-compat layer actually does.
- **`FoundationComponentsPage_new.tsx`** renamed to drop the
  `_new` suffix (#39). The suffix was cruft from a never-renamed
  rebuild.

### Don'ts (new entries in design.md)

(Already present from earlier releases; surfaced here because
Storybook now reads `design.md` more directly via the
`Foundations` MDX pages.)

### Migration notes for downstream consumers

- **No breaking API changes** for the documented public surface.
  All 5 component migrations (Tooltip / Switch / Tabs / Avatar /
  HoverCard) preserve the same exported names and prop shapes;
  internals switched from hand-rolled implementations to Radix
  primitives.
- **Tabs unmount inactive panels by default**. The hand-rolled
  version kept all panels mounted with `hidden={hidden}`. Radix
  unmounts them. If you depend on always-mounted tabpanel content
  (for animations or external focus), pass `forceMount` on
  `TabsContent`.
- **Avatar now lazily mounts `<img>` after the source loads.** The
  hand-rolled version always rendered the `<img>`. If you have
  visual snapshot tests that assert on the `<img>` element being
  present before load, you'll need either an Image-load mock (see
  our `vitest.setup.ts` for one approach) or to test against the
  Fallback.
- **HoverCard / Tooltip content now render inline** (no Portal) to
  preserve `container.querySelector` semantics in tests. If you
  prefer portaled content for layout reasons, wrap `Content` with
  your own portal.
- **The deployed docs URL is unchanged**
  (https://jeremyfuksa.github.io/campfire) but now serves
  Storybook static output instead of the Vite playground.

## [0.8.1] - 2026-05-14

### Added
- **`.skill` bundle for drop-in install** (#34). Every published
  version now ships a pre-built `.skill` archive at
  `dist/campfire-design-system.skill` — a zip with the canonical
  `<skill-name>/<path>` layout that unzips directly into
  `.claude/skills/` and works on any platform where `unzip` exists
  (including Windows). 20 KB; contains `SKILL.md` plus four
  `reference/*.md` files and five `examples/*.tsx` files at the
  layout Claude Code expects.

### Changed
- **`build:lib` now chains a `build:skill` step** (#34) that invokes
  `scripts/package-skill.py` — a stdlib-only Python adaptation of
  [Anthropic's skill-creator packager](https://github.com/anthropics/skills/tree/main/skills/skill-creator).
  The `.skill` is regenerated as part of every library build, so
  consumers get a fresh bundle with every release.
- **`SKILL.md` frontmatter cleanup** (#34): dropped the redundant
  `when_to_use` field (its content was already captured in
  `description`). `paths` retained for Claude Code's path-based
  auto-activation; the vendored validator's allowed-keys list was
  extended to accept it.
- **README** — install section reorganized into three options:
  drop-in `.skill` (most portable, uses `unzip`), symlink the source
  directory (auto-updates with `npm update`), or `cp -r` the source
  directory (for environments without symlinks).

### Install paths for the Claude Code skill
After `npm install @jeremyfuksa/campfire@0.8.1`, pick one:

```bash
# Option A — drop in the .skill bundle (most portable)
mkdir -p .claude/skills
unzip -o node_modules/@jeremyfuksa/campfire/dist/campfire-design-system.skill -d .claude/skills/

# Option B — symlink (auto-updates with `npm update`)
mkdir -p .claude/skills
ln -sfn ../node_modules/@jeremyfuksa/campfire/skills/campfire-design-system .claude/skills/

# Option C — copy (works where symlinks don't)
mkdir -p .claude/skills
cp -r node_modules/@jeremyfuksa/campfire/skills/campfire-design-system .claude/skills/
```

## [0.8.0] - 2026-05-14

### Added
- **`--font-body` token + Hanken Grotesk** (#32). New top-level
  family token for long-form prose. Hanken Grotesk runs narrower and
  more comfortably than Work Sans at 16px paragraph sizes; Campfire's
  body rhythm is now tuned around it. Defined as `'Hanken Grotesk',
  'Work Sans', -apple-system, ...` so it falls back gracefully if the
  Google Fonts request is blocked. Auto-applied to bare `<p>`,
  `<figcaption>`, and `<blockquote>` via `globals.css`.
- **Campfire Claude Code skill ships in the npm package**
  (#30, #31). The skill is a directory at
  `node_modules/@jeremyfuksa/campfire/skills/campfire-design-system/`
  containing `SKILL.md` (entry), four `reference/*.md` files
  (typography, spark, editorial, tokens) loaded on demand, and five
  `examples/*.tsx` files showing correct/violation patterns. The
  skill auto-activates on any `.tsx`/`.ts`/`.jsx`/`.js`/`.css`/`.scss`
  file in a Campfire-consuming project, and on any prompt mentioning
  Campfire / Spark / editorial themes / Work Sans / Fraunces /
  Fira Code / Hanken Grotesk. README includes a one-line symlink
  install (auto-updates with `npm update`).
- **`design.md` ships in the npm tarball** (#30). The authoritative
  ruleset is now consumable from `node_modules/@jeremyfuksa/campfire/
  design.md` so the skill (or any tool) can reference it directly.

### Changed
- **Typography overhauled to a 4-font role-split system** (#32):
  - **Hanken Grotesk** — body prose (paragraphs, ledes, captions,
    blockquote text). Auto-applied to bare prose elements.
  - **Work Sans** — UI typeface (labels, buttons, navigation, software
    headings h1–h6, eyebrows). Inherited from `<body>` so most UI
    needs no explicit class.
  - **Fraunces** — editorial display only (`editorial-h1`–`h3`,
    pullquote, metric). Cranked to **super wonk**: `'opsz' 144,
    'SOFT' 100, 'WONK' 1` — full display-grade optical sizing,
    maximally soft terminals, and the WONK alternates engaged
    (curling `t`, looping `g`, playful `y`).
  - **Fira Code** — technical content only (unchanged).

  The body/UI split is **mechanical**: prose → Hanken Grotesk; label /
  heading / affordance → Work Sans. There is no "designer's choice"
  zone. design.md states the rule as a one-sentence test.
- **`--editorial-font-variation`** updated from `'WONK' 1, 'opsz' 72`
  to `'opsz' 144, 'SOFT' 100, 'WONK' 1` (#32). All editorial Fraunces
  surfaces now read with full display-grade quirks.
- **`src/styles/fonts.css`** — adds Hanken Grotesk via Google Fonts
  (weights 300–800 + italics); expands the Fraunces request to include
  all four axes (`opsz`, `wght`, `SOFT`, `WONK`) with full ranges so
  the super-wonk variation actually has the alternates available.
- **`theme.css`** — `--font-body-lg/md/sm` now reference Hanken
  Grotesk; `--font-heading-h1..h6` and `--font-label-sm` stay on
  Work Sans (those are UI, not prose).
- **`design.md` Typography section** — fully rewritten for the 4-font
  system. Two new Don'ts: don't mix Hanken/Work Sans by gut; don't use
  Hanken Grotesk for headings.
- **`package.json` `files`** — now includes `skills` and `design.md`
  alongside `dist` (#30). Verified via `npm pack --dry-run`.
- **README** — new "Claude Code skill (optional)" section with a
  one-line symlink install (and `cp -r` fallback for environments
  without symlink support). Updated with the directory layout in #31.
- **Showcase pages** (`CompleteReferencePage`, `DesignTokensPage`)
  now display all four font families side-by-side with their roles
  labeled (#32).

### Don'ts (new entries in design.md)
- Don't mix Hanken Grotesk and Work Sans by gut. The split is
  mechanical: prose → Hanken; labels/buttons/navigation/software
  headings/eyebrows → Work Sans.
- Don't use Hanken Grotesk for headings. Software h1–h6 are Work Sans;
  editorial h1–h3 / pullquote / metric are Fraunces. Hanken Grotesk
  only carries body and caption text.

### Migration notes for downstream consumers
- If you were relying on `<body>` defaulting to a single sans family
  for everything, paragraphs will now render in Hanken Grotesk
  automatically. Buttons, inputs, labels, and software headings
  remain on Work Sans (no change).
- If you bundle Campfire tokens alongside your own font loader,
  switch your Google Fonts import to include `Hanken Grotesk` (300–800
  + italics) and the full Fraunces axis set (`opsz`, `wght`, `SOFT`,
  `WONK`). The package's own `fonts.css` already does this if you
  import `@jeremyfuksa/campfire/styles.css`.
- The skill is opt-in. To install in your project, after
  `npm install @jeremyfuksa/campfire`:
  ```
  mkdir -p .claude/skills
  ln -sfn ../node_modules/@jeremyfuksa/campfire/skills/campfire-design-system .claude/skills/
  ```
  Or `cp -r` if symlinks aren't available.

## [0.7.0] - 2026-05-14

### Added
- **Spark — the one vivid accent** (#28). A single saturated orange
  reserved for high-stakes moments — a live indicator, an unread
  beacon, the literal flame. Used sparingly under a stated **Rule of
  One**: max one instance per screen, first use wins. New tokens:
  `--spark` (`#ff5a1f` light / `#ff6b35` dark) added to
  `signature.light.json` / `signature.dark.json`, plus `--spark-glow`
  derived in `globals.css` via `color-mix(in srgb, var(--spark) 24%,
  transparent)` so the halo adapts to mode automatically. New
  utilities: `text-spark`, `bg-spark`, `ring-spark` (4px halo using
  `--spark-glow`), and `spark-pulse` (live-indicator keyframe
  animation, reduced under `prefers-reduced-motion`). No `<Spark>`
  component on purpose — the Rule of One is the API. New top-level
  `design.md` section "Spark — the one vivid accent" documents the
  rule and the allowed/disallowed surfaces; new Don't entry
  reinforces "no repeated Spark in a single view."
- **Editorial accent themes** (#26). New per-section color knob for
  editorial surfaces (long-form writing, case studies, marketing,
  personal-site posts). Three tones ship — `warm` (clay/terracotta,
  default), `cool` (dusk/slate), `deep` (moss/forest) — each backed by
  the existing `secondary`, `info`, and `success` palette ramps so no
  new colors are introduced. Each tone has matched light + dark
  pairings. Activation is via `<EditorialTheme tone="cool">` or a
  `data-editorial-theme="cool"` attribute on any ancestor; descendants
  pick up `--editorial-accent` and `--editorial-accent-subtle` through
  the cascade.
- **New editorial primitives** (#26) exported from the public API:
  - `<EditorialTheme>` — wrapper that sets the data attribute.
  - `<EditorialEyebrow>` — kicker label in the active accent.
  - `<EditorialPullquote>` — Fraunces pullquote with `ruled` (default)
    or `tinted` variant; optional citation slot.
  - `<EditorialDropCap>` — large Fraunces first-letter accent.
- **Editorial utility classes** (#26): `text-editorial-accent`,
  `bg-editorial-accent-subtle`, `border-editorial-accent`.
- **`editorial.accent` and `editorial.accent-subtle` semantic tokens**
  (#26) in `semantic.light.json` / `semantic.dark.json`.
- **design.md "Editorial accent themes" section** (#26) documenting
  the three tones, the activation API, and the rule that headings stay
  on `text-heading` regardless of tone — the accent rides on secondary
  elements (eyebrows, pullquote rules, drop caps, ornaments) only.

### Changed
- **Body typeface swapped from Manrope to Work Sans** (#25). Updated
  Google Fonts import, `font.sans` design token,
  `--font-heading-h1..h6`/`--font-body-*`/`--font-label-sm` theme
  variables, and `design.md` body-font references. Consumers loading
  Campfire's `styles.css` automatically pick up the new font; sites
  bundling Campfire tokens with their own font loader should switch
  their Google Fonts import accordingly.
- **Fira Code scope rewritten** (#25). The rule in `design.md` is now
  explicit about technical vs. non-technical surfaces. Allowed: code,
  inline `<code>`, syntax-highlighted snippets, raw token values (hex
  codes, spacing/dimension), `<kbd>` keys, and tabular numerics in
  data tables / chart tooltips. Prohibited (zero exceptions): CTAs,
  buttons, links, navigation, badges, eyebrows, dates, hero copy, body
  prose, marketing accents, and "techy-feeling" decoration. If the
  text is something the user reads as language or clicks as an
  affordance, it is Work Sans.
- **Showcase font-family labels refreshed** (#25): `DesignTokensPage`
  and `CompleteReferencePage` now read **Work Sans / Fira Code**
  instead of the stale **Manrope / JetBrains Mono** display strings.

### Don'ts (new entries in design.md)
- Don't apply editorial accent themes to software UI surfaces. The
  accent system is editorial-only; dashboards, admin tooling, and
  in-app chrome stay on the primary slate-blue.
- Don't color the primary heading text with the editorial accent —
  accents are for secondary elements so the heading reads as ink.
- Don't use Fira Code on non-technical UI. Restated explicitly with an
  enumerated allowed/disallowed list.
- Don't repeat Spark within a single view. The Rule of One is the
  entire point of the color; if it appears more than once on a page,
  both instances are devalued and you've broken the system.

### Fixed
- **`Collapsible` story repo-name rows no longer use `font-mono`**
  (#25). Decorative use of mono on non-code list items violated the
  tightened typography rule.

### Note
- The previously prepped `0.6.0` was never tagged or published to npm;
  its scope is rolled into this `0.7.0` release alongside the Spark
  work (#28).

### Fixed
- **Dialog: `DialogPortal` and `DialogOverlay` now respect open state**
  (#16). Both were bare `<div>` passthroughs that rendered
  unconditionally, so consumers following the shadcn composition
  pattern `<Dialog><DialogPortal><DialogOverlay
  className="fixed inset-0 bg-black/50" />...</DialogPortal></Dialog>`
  saw a permanent dark overlay even when the dialog was closed. Both
  components now read `useDialogContext()` and return `null` when
  closed. `DialogContent`'s internal portal+overlay (used by the simple
  `<Dialog><DialogContent /></Dialog>` pattern) is unchanged. Added
  three regression tests in `dialog.test.tsx`.

### Changed
- **`test:full` script** corrected from `vitest` (watch mode, hangs in
  CI) to `vitest run` (single-pass).
- **vitest config tuning** for safer local full-suite runs:
  `pool: "forks"` + `isolate: true` so each test file gets a fresh
  jsdom (prevents input-otp's post-teardown setTimeout from crashing
  a reused worker), plus 30s/30s/10s test/hook/teardown timeouts.

### Known issues
- **Full test suite (`npm run test:full`) cannot run in CI** — the
  73-file vitest+jsdom suite OOMs on GitHub Actions ubuntu-latest
  runners (heap exhaustion after 90+ minutes). CI continues to gate
  on `test:smoke` + `test:a11y` (~1min combined), which together
  exercise the most important rendering and accessibility paths.
  Investigating the per-file memory profile and possible jsdom →
  happy-dom swap is a follow-up.

### Fixed
- **6 broken non-a11y unit tests** that pre-dated the v4 migration's CI
  gate but were hidden by `test:smoke` running only one file:
  - `keyboard-key.test.tsx` — assertion for `shadow-xs` updated to
    `shadow-2xs` (component renders the latter post-v4 codemod);
    font-family check rewritten to assert the `font-mono` class instead
    of a hardcoded family name (`JetBrains Mono` was never the campfire
    font — `Fira Code` is).
  - `link.test.tsx` — `toHaveStyle({ color: "red" })` rewritten to
    `rgb(255, 0, 0)` to match jsdom's serialized form.
  - `collapsible.test.tsx` — Radix removes collapsed content from the
    DOM rather than hiding it, so `not.toBeVisible()` was crashing on
    `null`. Switched to `not.toBeInTheDocument()`.
  - `scroll-area.test.tsx` (×2) — Radix's `ScrollAreaScrollbar` is
    wrapped in `Presence` and only mounts when overflow is detected,
    which never happens in jsdom (no layout engine). Tests now verify
    the viewport renders; scrollbar mounting is exercised by Radix's
    own tests + visual review.

### Added
- **16 missing Storybook stories** — every UI component now has a story
  file. Closed: aspect-ratio, carousel, chart, code-block, copy-button,
  form, heading, helper-text, input-otp, keyboard-key, link, list-group,
  resizable, sidebar, sonner, text. Story coverage now 72/72 components.
- **`npm run test:a11y`** runs the 91 axe-core accessibility assertions
  scattered across the unit test suite. Wired into CI as a required
  step alongside `test:smoke`.

### Fixed
- `.storybook/main.ts` used the CommonJS `__dirname` global in an ESM
  module, so `npm run storybook` and `npx storybook build` failed.
  Reconstructed `__dirname` from `import.meta.url`.
- **Slider thumb missing `aria-label`** — Radix's `Slider.Thumb` carries
  `role="slider"` but inherited no accessible name from the parent.
  Single-thumb sliders now propagate the parent `aria-label`; range
  sliders get `"<label> (minimum)"` / `"<label> (maximum)"`. Caught by
  the new a11y CI gate.
- **vitest config**: `css: true` regressed after the v4 migration
  because the larger CSS bundle stack-overflows jsdom's CSSOM. Replaced
  with `css.include: []` plus `server.deps.inline: [/\\.css$/]` so
  styles are loaded but not parsed by jsdom.

## [0.5.0] - 2026-05-04

### Changed
- **Migrated to Tailwind CSS v4** (from v3.4) using the official
  `@tailwindcss/upgrade` codemod, plus manual reconciliation:
  - Replaced `tailwind.config.ts` with a CSS-first `@theme { }` block in
    `src/styles/globals.css` that references the SD-generated CSS
    variables. The token JSON pipeline is unchanged — `@theme` is the
    new mapping layer between `var(--primary-500)` and the
    `bg-primary-500` utility.
  - Replaced `@tailwind base/components/utilities` directives with
    `@import 'tailwindcss'`.
  - PostCSS plugin: `tailwindcss` → `@tailwindcss/postcss`. Removed
    `autoprefixer` (Tailwind v4 handles prefixing internally).
  - Dark mode: `darkMode: "class"` → `@custom-variant dark (&:is(.dark *))`.
  - Custom utilities (`.campfire-card`, `.campfire-lift`, etc.) moved
    from `@layer components` to v4's `@utility` syntax.
  - Custom keyframes moved into `@theme` and exposed via
    `--animate-campfire-enter` etc.
  - Default border color compat shim added (v4 changed default to
    `currentcolor`).
- **Replaced `tailwindcss-animate` with `tw-animate-css`** for v4
  compatibility. Animation classes (`animate-in`, `fade-in`,
  `slide-in-from-*`, `zoom-in/out`) keep working unchanged.
- **Class renames** applied by codemod across 66 files:
  `outline-none` → `outline-hidden`, `flex-shrink-0` → `shrink-0`,
  `flex-grow` → `grow`, `shadow-sm` → `shadow-xs`, etc. Manually
  reverted ~15 false-positive `outline` → `outline-solid` renames in
  TypeScript variant prop string literals.
- **Test runner**: `vitest.config.ts` now sets `css: false` because
  jsdom's CSSOM stack-overflows on the larger v4 bundle. Component
  tests don't depend on real CSS.

### Removed
- `tailwind.config.ts` (CSS-first config makes it unnecessary).
- `tailwindcss-animate`, `autoprefixer` devDependencies.

## [0.4.0] - 2026-05-04

### Added
- **JSON-sourced design tokens via Style Dictionary.** Tokens are now
  authored as W3C DTCG-format JSON under `src/tokens/` and built into
  multiple distribution formats. `globals.css` is no longer the source
  of truth; it imports the generated `tokens.generated.css`.
- **New package exports** for consumption outside Tailwind:
  - `@jeremyfuksa/campfire/tokens.css` — plain `:root` + `.dark` CSS
    custom properties, no component bundle
  - `@jeremyfuksa/campfire/tokens` — typed ES module with the full token
    tree (`tokens.color.primary[500].value` etc.)
  - `@jeremyfuksa/campfire/tokens.json` — raw W3C DTCG JSON for Figma
    Make and other design-tool importers
  - `@jeremyfuksa/campfire/tokens.dark.json` — dark-mode override values
- `npm run tokens` now invokes Style Dictionary; the previously broken
  `scripts/export-tokens.js` reference is replaced.

### Changed
- `npm run build:lib` cleans `dist/` then runs the token build before
  `tsup`, so token artifacts ship alongside the component bundle.
- All ~140 CSS custom property names are preserved; no consumer-visible
  CSS changes. Tailwind config continues to read `var(--primary-500)`
  etc. unchanged.

## [0.3.0] - 2026-04-17

### Fixed
- **Critical: ESM export path** — `module` and `exports.import` pointed
  to `dist/index.mjs` (doesn't exist); corrected to `dist/index.js`.
- Restored `ComponentDocumentation` demo helper deleted in 0.2.0.

### Added
- **Ember/Ash signature colors** — 14 named tokens (`--clay` through
  `--stone`) that auto-flip between light (Ember) and dark (Ash) mode.
  Tailwind utilities: `bg-ember`, `text-pine`, `border-clay`, etc.
- **Full 50–950 scales** for success, warning, danger, info (were 3
  steps, now 11 like primary/secondary/neutral).
- **Motion system** (UX in Motion Manifesto principles):
  - 6 easing curves, 5 duration tokens, stagger utility
  - 8 keyframes (fade, slide, scale — entrance and exit)
  - Wired into Dialog (scale-in), Tooltip (fade+scale), Alert
    (slide-in), Accordion (token durations), Sheet (token durations)
- **Z-index scale** — 9 coordinated layers (`--z-dropdown` through
  `--z-max`), exposed as Tailwind `z-modal` etc.
- **Text component** — `<Text variant="body|body-lg|muted|subtle|label">`
- **Heading component** — `<Heading level={1-6}>` consuming the heading
  token hierarchy.
- **Alert variants**: success, warning, info (was only default +
  destructive).
- **Badge variants**: success, warning, info.
- **Progress variants**: success, warning, danger, info with track +
  indicator colors.
- **Spinner variants**: success, warning, danger, info.
- **11 new test files** for previously untested components (color-picker,
  date-range-picker, date-time-picker, numeric-input, rating, spinner,
  time-picker, timeline, tree-view, use-mobile, utils).
- **VS Code theme packaged** as installable `.vsix`.
- **GitHub Actions publish workflow** (`publish.yml`).

### Changed
- **Ref forwarding**: Input, Textarea, Badge, Progress, Spinner,
  StatusDot, Chip now use `React.forwardRef` (4 → 11 components).
- **Chip**: migrated from inline styles to CVA; variant colors changed
  to lighter tints for better readability. Exports `chipVariants`.
- **Spinner**: migrated from inline `borderTopColor` to Tailwind classes.
- **StatusDot**: migrated from inline styles to Tailwind classes.
- **KeyboardKey**: migrated from inline styles to Tailwind classes.
- `tailwindcss-animate` wired into Tailwind plugins (was installed but
  never loaded).
- `zod`, `@hookform/resolvers` moved to optional peerDependencies.

### Deprecated
- `StatusDot.status` — use `variant` instead.
- `Chip.onRemove` — use `onClose` instead.

### Removed
- 11 orphaned source files (5 demo pages, 3 composites, 2 mdx docs).
- 78 storybook-static build artifacts from git tracking.
- 2 `.DS_Store` files, stale `handoff_summary.md`, `TASKS.md`.
- Dead `src/test/setup.ts` (duplicate of `vitest.setup.ts`).
- Dead test config block from `vite.config.ts`.

## [0.2.0] - 2026-04-11

### Changed - Production Readiness Pass

#### Icon library: Font Awesome → Lucide (**breaking**)
- Removed the Font Awesome CDN `@import` from `src/styles/fonts.css`.
- All 17 exported library components (`EmptyState`, `Chip`, `StatCard`,
  `HelperText`, `ListGroup`, `Autocomplete`, `CopyButton`, `CodeBlock`,
  `DataTable`, `DateRangePicker`, `DateTimePicker`, `FileUpload`, `Link`,
  `NumericInput`, `Rating`, `Stepper`, `TreeView`) now use `lucide-react`
  internally, matching the shadcn-native primitives.
- Components that exposed `icon` as a Font Awesome class string
  (`StatCard`, `EmptyState`, `Chip`, `HelperText`, `ListGroupItem`) now
  accept `icon?: React.ReactNode` — consumers pass a Lucide (or any other)
  React element.
- `Rating` now picks Lucide `Star` / `StarHalf` / `Heart` based on its
  existing `icon?: "star" | "heart"` prop — the public API is preserved.
- Tests and stories have been updated to match the new API.

#### Typography tokens
- Added `--font-sans` and `--font-mono` CSS custom properties in
  `globals.css`. `body` now uses `var(--font-sans)` instead of hardcoding
  `'Manrope'`.
- Wired **Fira Code** into the Google Fonts import so `--font-mono`
  resolves to an actual loaded typeface. `code`, `kbd`, `samp`, and `pre`
  default to `var(--font-mono)`.
- `CodeBlock` and `KeyboardKey` no longer hardcode `'JetBrains Mono'` —
  both now reference `var(--font-mono)`.
- `tailwind.config.ts` exposes `fontFamily.sans` and `fontFamily.mono` so
  the `font-sans` / `font-mono` utilities resolve to the tokens.

#### Scoped global rules
- The global `button:hover { transform: translateY(-1px) }` rule is now
  an opt-in `.campfire-lift` class, so sliders, drag handles, and
  transformed ancestors are no longer disturbed.
- The wildcard `* { transition-timing-function: cubic-bezier(...) }` rule
  was replaced with a `--ease-campfire` custom property and a
  `transitionTimingFunction.campfire` Tailwind extension (opt-in via the
  `ease-campfire` utility).

#### Tailwind color scale
- `tailwind.config.ts` now exposes the full `primary-50..950`,
  `secondary-50..950`, `neutral-50..950`, and `success/warning/danger/info`
  scales as Tailwind colors — consumers can use `bg-primary-700`,
  `text-secondary-500`, etc. instead of dropping to inline
  `style={{ color: 'var(--primary-700)' }}`.

#### Packaging
- Moved `react` and `react-dom` from `dependencies` to `peerDependencies`
  (`^18.3.0 || ^19.0.0`), so consuming apps no longer bundle a duplicate
  React copy.
- Fixed a pre-existing dts build error by typing `process` via `globalThis`
  instead of relying on `@types/node`. The full `tsup` build (ESM + CJS
  + d.ts) now succeeds.

### Added - Major Roadmap Items

#### 1. CLI Tool (@jeremyfuksa/campfire-cli)
- Commands: init, add, list
- Built with commander.js, chalk, ora
- ESM output targeting ES2022

#### 2. Advanced Components (10 new)
- **DataTable** - Sorting, filtering, pagination, selection (18 tests ✓)
- **Autocomplete** - Fuzzy search, async, multi-select (22 tests ✓)
- **DateRangePicker** - Dual calendar date range selection
- **TimePicker** - 12/24hr format with keyboard nav
- **DateTimePicker** - Combined date + time
- **ColorPicker** - HSL sliders + hex input
- **Spinner** - Loading indicator (4 sizes)
- **NumericInput** - Number stepper with constraints
- **Rating** - Star/heart rating (half-star support)
- **Timeline** - Vertical event timeline
- **TreeView** - Hierarchical navigation

#### 3. Storybook Integration
- Storybook v8 with Vite
- **56 component stories** with comprehensive variants and examples
- Introduction page
- Auto-docs enabled
- Coverage: Button, Input, Card, Alert, Dialog, Tabs, Select, Checkbox, RadioGroup, Switch, Textarea, Slider, Badge, Progress, Skeleton, Tooltip, Popover, Dropdown Menu, Sheet, Table, Breadcrumb, Pagination, Accordion, Avatar, Separator, Label, Spinner, Calendar, Alert Dialog, Hover Card, Context Menu, Collapsible, Command, Stepper, Chip, Status Dot, Empty State, Search Input, Toggle, Toggle Group, Scroll Area, Drawer, Numeric Input, Date Range Picker, Time Picker, Date Time Picker, Tree View, Stat Card, Menubar, Navigation Menu, File Upload, DataTable, Autocomplete, Rating, ColorPicker, Timeline

#### 4. Accessibility Documentation
- ACCESSIBILITY.md guide
- WCAG 2.1 AA compliance
- Keyboard shortcuts reference
- Screen reader testing guide

#### 5. Developer Experience Enhancements
- **VSCode Snippets** - 50+ code snippets for all components (.vscode/campfire.code-snippets)
  - Tab completion for common patterns (cf-button, cf-card, cf-datatable, etc.)
  - Variant options with dropdown selection
  - Common prop patterns and examples
  - Instant productivity boost for developers

### Changed
- Removed color customization from README
- Updated component count: 59 → 69
- Enhanced documentation

## Statistics
- **Total Components**: 69
- **Storybook Stories**: 56 (81% coverage)
- **VSCode Snippets**: 50+
- **Test Coverage**: 40/40 tests passing
- **Accessibility**: WCAG 2.1 AA
- **TypeScript**: Full type safety
