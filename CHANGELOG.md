# Changelog

All notable changes to the Campfire Design System.

## [Unreleased]

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
