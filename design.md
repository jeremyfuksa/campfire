---
name: Campfire
description: A warm, dependable React component library built on layered design tokens, semantic theming, and accessible Radix primitives.
colors:
  primary: "#4c627d"
  primary-hover: "#3e4f66"
  primary-active: "#364456"
  on-primary: "#f7f8f9"
  primary-subtle: "#ebeef2"
  primary-muted: "#d2dae3"
  secondary: "#8d5443"
  secondary-hover: "#75473a"
  on-secondary: "#faf6f5"
  surface: "#f7f8f9"
  surface-subtle: "#edeef1"
  surface-muted: "#d8dbe0"
  surface-emphasis: "#2b303b"
  surface-inverse: "#1c1f26"
  on-surface: "#2b303b"
  on-surface-secondary: "#5e6371"
  on-surface-tertiary: "#747b8a"
  on-surface-disabled: "#5e6371"
  on-surface-inverse: "#f7f8f9"
  border: "#d8dbe0"
  border-subtle: "#edeef1"
  border-strong: "#b8bcc5"
  focus-ring: "#4c627d"
  success: "#475824"
  on-success: "#f4f9ec"
  warning: "#ef991f"
  on-warning: "#522a03"
  danger: "#be2b29"
  on-danger: "#fef5f4"
  info: "#576580"
  on-info: "#f4f7fb"
typography:
  display-2xl:
    fontFamily: Manrope
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 4rem
    letterSpacing: -0.02em
  display-xl:
    fontFamily: Manrope
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Manrope
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  heading-lg:
    fontFamily: Manrope
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 2.25rem
  heading-md:
    fontFamily: Manrope
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 2rem
  heading-sm:
    fontFamily: Manrope
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.75rem
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
  label-sm:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1rem
    letterSpacing: 0.04em
  code-md:
    fontFamily: Fira Code
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
rounded:
  none: 0
  sm: 0.375rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  "2xl": 1.75rem
  full: 9999px
spacing:
  unit: 0.25rem
  "1": 0.25rem
  "2": 0.5rem
  "3": 0.75rem
  "4": 1rem
  "5": 1.25rem
  "6": 1.5rem
  "8": 2rem
  "10": 2.5rem
  "12": 3rem
  "16": 4rem
  "20": 5rem
  "24": 6rem
  container-padding: 1.5rem
  card-gap: 1rem
  section-margin: 4rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 1rem
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  button-secondary:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 1rem
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 0.75rem
  button-destructive:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-danger}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 1rem
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 0.75rem
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 1.5rem
  card-elevated:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 1.5rem
  badge:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary-active}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 0.125rem 0.5rem
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 0.125rem 0.5rem
  badge-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-warning}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 0.125rem 0.5rem
  badge-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-danger}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 0.125rem 0.5rem
  alert:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 1rem
  dialog-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 1.5rem
  tooltip:
    backgroundColor: "{colors.surface-emphasis}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 0.375rem 0.625rem
  navigation-link:
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: 0.5rem 0.75rem
  navigation-link-active:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary-active}"
  button-secondary-warm:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 1rem
  button-secondary-warm-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-disabled:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface-disabled}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 2.5rem
    padding: 0 1rem
  chip-muted:
    backgroundColor: "{colors.primary-muted}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 0.125rem 0.5rem
  badge-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.on-info}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 0.125rem 0.5rem
  caption:
    textColor: "{colors.on-surface-tertiary}"
    typography: "{typography.body-sm}"
  skeleton:
    backgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.sm}"
  footer-inverse:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    padding: 2rem 1.5rem
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  separator-subtle:
    backgroundColor: "{colors.border-subtle}"
    height: 1px
  rule-strong:
    backgroundColor: "{colors.border-strong}"
    height: 1px
  focus-indicator:
    backgroundColor: "{colors.focus-ring}"
    rounded: "{rounded.md}"
    height: 2px
---

# Campfire Design System

## Overview

Campfire is the design language for products that should feel like a place to settle in: warm, steady, and quietly confident. The system pairs a slate-blue primary with a clay-red secondary to evoke a campfire at dusk — cool surroundings, warm focal points. The intent is to make dense, professional interfaces (dashboards, admin tooling, knowledge surfaces) feel approachable without sliding into novelty.

The emotional register is **deliberate, legible, unhurried**. Components prefer generous spacing, restrained color, and typography that holds up at small sizes. Every visual decision flows from layered design tokens (primitives → semantic → signature), so a single token change ripples through the entire surface area.

## Colors

The palette is anchored by two families and surrounded by neutral and status roles.

- **Primary (slate blue, `#607a97`)** carries actionable elements: buttons, links, focused states, selected navigation. The 600/700/800 ramps drive default/hover/active so contrast against `on-primary` text never falls below WCAG AA.
- **Secondary (clay, `#b87b6a`)** is reserved for moments that need warmth — empty-state illustrations, marketing accents, occasional highlights. It is never used for primary affordances; that prevents the palette from feeling alarmingly hot.
- **Neutrals** carry 95% of any given screen. Backgrounds use the 50/100/200 ramp; text uses 500–950. This keeps interfaces calm and makes the primary feel decisive when it appears.
- **Status colors** (success/warning/danger/info) are tuned to live alongside the neutrals without screaming. They are paired with `on-*` companions so foreground/background pairings are pre-validated for contrast.
- **Dark mode** flips `bg.*` and `text.*` semantic roles via a parallel `semantic.dark.json`. Components consume only semantic tokens, so neither the React code nor the Tailwind classes change between modes.

## Typography

**Manrope** is the UI typeface — geometric enough to feel modern, humanist enough to stay friendly at small sizes. **Fira Code** handles inline code, snippets, and the documentation site's code blocks.

- A 10-step text scale (`xs` → `6xl`) drives both display and body copy. Display sizes use tighter tracking (`-0.02em`) to compensate for optical looseness at large sizes.
- Weights cluster around regular (400), medium (500), semibold (600), and bold (700). Light (300) and extrabold (800) exist but are reserved for editorial pages — never functional UI.
- Line-height tokens are paired explicitly with each text size so vertical rhythm stays predictable across components.
- Headings use semibold by default; bold is reserved for display sizes where extra optical weight is needed.
- Body copy targets `1rem / 1.5rem` as the default reading size; `body-sm` (14/20) is for dense tables and metadata, never long-form prose.

## Layout

Campfire uses an 8px-derived rhythm expressed through a 4px base unit, which gives finer control for icon alignment and form-field interiors without losing predictable rhythm at component scale.

- **Grid:** 12-column max-width container at `80rem` (1280px). Gutters scale from `1rem` on mobile to `1.5rem` on desktop.
- **Application chrome:** `5rem` header, `3.75rem` secondary nav, `16rem` sidebar — all expressed as named dimension tokens so layout primitives stay token-driven.
- **Spacing scale:** 1 / 2 / 3 / 4 / 5 / 6 / 8 / 10 / 12 / 16 / 20 / 24 in the same `0.25rem` quantum as Tailwind's default scale, so utility classes map 1:1 with design tokens.
- **Density:** components default to a "comfortable" density. A future "compact" variant can be introduced by halving vertical padding tokens without retouching component code.
- **Containment:** every page has at most one full-bleed surface. Cards, panels, and tables sit inside max-width containers so line lengths stay readable on ultra-wide displays.

## Elevation & Depth

Depth in Campfire is expressed through **borders and tonal shifts first, shadows second**. The system avoids heavy drop shadows because they read as decorative against neutral backgrounds.

- **Level 0 — Page:** `surface` background, no border, no shadow. The canvas.
- **Level 1 — Section:** `surface-subtle` background **or** `surface` with a `border-subtle` 1px border. Used for cards, list rows, and grouped content.
- **Level 2 — Floating:** `surface` background, `border` 1px border, soft shadow `0 1px 2px rgba(28,31,38,0.06), 0 4px 12px rgba(28,31,38,0.08)`. Used for popovers, dropdowns, and tooltips.
- **Level 3 — Modal:** `surface` background, no border, larger shadow `0 10px 32px rgba(28,31,38,0.18)`, plus a scrim `rgba(28,31,38,0.5)` over the page. Reserved for dialogs and command palettes.
- **Focus:** a 2px `focus-ring` outline at 2px offset on every interactive element. Never replaced by a color change alone.

In dark mode, shadows lose most of their contribution; depth is carried instead by stepping `surface` → `surface-subtle` → `surface-muted` from darker to lighter.

## Shapes

Campfire's corner-radius language is **moderately rounded** — soft enough to feel approachable, restrained enough to look operational rather than playful.

- **`sm` (6px):** chips, badges, inline tags, keyboard keys.
- **`base` (8px):** the default for buttons, inputs, segmented controls.
- **`md` (12px):** small cards, alerts, menu surfaces.
- **`lg` (16px):** primary cards, dialog surfaces, drawer panels.
- **`xl` / `2xl`:** marketing surfaces and hero treatments only.
- **`full`:** avatars, status dots, pill-shaped tags.

Iconography is line-based at 1.5–2px stroke with rounded caps and joins so it harmonizes with the corner radii. Decorative illustration uses gentle organic curves; sharp geometric forms are reserved for data visualization.

## Components

Campfire ships ~80 React primitives under `src/components/ui/`, all built on Radix UI for accessibility-correct behavior and styled with Tailwind classes that resolve to semantic tokens.

### Foundations

- **Button** — `primary`, `secondary`, `ghost`, `outline`, `link`, and `destructive` variants. Sizes `sm` / `md` / `lg`. Loading and disabled states are first-class props.
- **Input / Textarea / Select** — share the same height, radius, focus ring, and padding tokens so forms compose visually without manual alignment.
- **Card** — a layout primitive (header, body, footer subparts). Elevation is a prop, not a separate component.
- **Badge / Chip / StatusDot** — three sizes of status communication. Badges convey count or state, chips are removable filter affordances, status dots are minimal indicators.

### Disclosure & Overlays

- **Dialog, Sheet, Drawer, Popover, HoverCard, DropdownMenu, ContextMenu, Tooltip** — all built on Radix. They share a unified motion language: 150ms fade + 8px slide for entry, 100ms fade for exit.
- **Command** — keyboard-first command palette with a fuzzy filter and grouping support.

### Data

- **DataTable** — sortable, filterable, paginated table primitive. Row density and column resizing are configurable via props.
- **Pagination, Stepper, Timeline, Progress, Spinner** — progress and sequence primitives sharing the same status color vocabulary.
- **Chart** — lightweight wrappers over a charting library; tokens drive axis, grid, and series colors so charts respect theme and brand.

### Navigation

- **Sidebar, NavigationMenu, Breadcrumb, Tabs, Menubar, Pagination** — share the active-item treatment (`primary-subtle` background, `primary-active` text) so the user's location reads consistently regardless of the navigation pattern.

### Theming

- **ThemeProvider** + `useTheme` / `useResolvedTheme` / `useThemeToggle` hooks manage light, dark, and system modes via a `localStorage` key. Components never read theme state directly — they style themselves against semantic tokens.

## Do's and Don'ts

**Do**

- Reach for semantic tokens (`bg.base`, `text.primary`, `border.default`) before primitive tokens. New components should not need to touch primitives directly.
- Pair every status color with its `on-*` companion. The contrast has been validated; don't redo it inline.
- Use Radix primitives whenever the behavior involves focus management, escape handling, or ARIA semantics. Do not rebuild dialog/menu/popover roles by hand.
- Keep one primary action per surface. Secondary buttons are abundant; primary buttons are scarce.
- Test in both light and dark mode before merging. The design system promises parity, and untested dark mode is the most common regression.
- Add a story (`*.stories.tsx`) and a test (`__tests__/*.test.tsx`) alongside any new component. The docs site renders stories directly, so visual regressions surface in review.

**Don't**

- Don't introduce hardcoded hex values in components. If a needed color is missing, add a token and consume it.
- Don't use the secondary (clay) color for primary actions. It is reserved for warmth and accent; primary actions belong to the slate-blue primary.
- Don't replace focus rings with color changes. Keyboard users rely on the visible 2px outline; color shifts alone fail accessibility audits.
- Don't stack more than two elevation levels on the same surface. Three nested cards is a layout problem, not a depth problem.
- Don't bypass `ThemeProvider` to detect dark mode (e.g., reading `matchMedia` directly inside a component). The provider is the single source of truth.
- Don't reach into legacy tokens (`legacy.*`). They exist for backward compatibility and will be removed at the next major version.
