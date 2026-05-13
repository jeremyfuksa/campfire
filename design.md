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
  text-heading: "#3d3028"
typography:
  heading-h1:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  heading-h2:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  heading-h3:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  heading-h4:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 2rem
  heading-h5:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.75rem
  heading-h6:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.75rem
  body-lg:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.75rem
  body-md:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5rem
  body-sm:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
  label-sm:
    fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1rem
    letterSpacing: 0.04em
  code-md:
    fontFamily: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace'
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
  editorial-h1:
    fontFamily: '"Fraunces", "Georgia", serif'
    fontSize: 48px
    fontWeight: 425
    lineHeight: 48px
    letterSpacing: -0.02em
    fontVariation: '"WONK" 1, "opsz" 72'
  editorial-h2:
    fontFamily: '"Fraunces", "Georgia", serif'
    fontSize: 36px
    fontWeight: 400
    lineHeight: 38px
    letterSpacing: -0.02em
    fontVariation: '"WONK" 1, "opsz" 72'
  editorial-h3:
    fontFamily: '"Fraunces", "Georgia", serif'
    fontSize: 30px
    fontWeight: 400
    lineHeight: 33px
    letterSpacing: -0.01em
    fontVariation: '"WONK" 1, "opsz" 72'
  editorial-pullquote:
    fontFamily: '"Fraunces", "Georgia", serif'
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 2rem
    fontVariation: '"WONK" 1, "opsz" 72'
  editorial-metric:
    fontFamily: '"Fraunces", "Georgia", serif'
    fontSize: 1.875rem
    fontWeight: 400
    lineHeight: 2.25rem
    fontVariation: '"WONK" 1, "opsz" 72'
rounded:
  none: 0
  sm: 0.375rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  xxl: 1.75rem
  full: 9999px
spacing:
  unit: 0.25rem
  xxs: 0.25rem
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  lg: 1.25rem
  xl: 1.5rem
  xxl: 2rem
  xxxl: 2.5rem
  huge: 3rem
  giant: 4rem
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
  heading-1:
    textColor: "{colors.on-surface}"
    typography: "{typography.heading-h1}"
  heading-2:
    textColor: "{colors.on-surface}"
    typography: "{typography.heading-h2}"
  heading-3:
    textColor: "{colors.on-surface}"
    typography: "{typography.heading-h3}"
  heading-4:
    textColor: "{colors.on-surface}"
    typography: "{typography.heading-h4}"
  heading-5:
    textColor: "{colors.on-surface}"
    typography: "{typography.heading-h5}"
  heading-6:
    textColor: "{colors.on-surface}"
    typography: "{typography.heading-h6}"
  body-paragraph:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  body-lead:
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body-lg}"
  code-inline:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: 0 0.25rem
  editorial-heading-1:
    textColor: "{colors.text-heading}"
    typography: "{typography.editorial-h1}"
  editorial-heading-2:
    textColor: "{colors.text-heading}"
    typography: "{typography.editorial-h2}"
  editorial-heading-3:
    textColor: "{colors.text-heading}"
    typography: "{typography.editorial-h3}"
  editorial-pullquote:
    textColor: "{colors.text-heading}"
    typography: "{typography.editorial-pullquote}"
    padding: 1rem 1.5rem
  editorial-metric-value:
    textColor: "{colors.text-heading}"
    typography: "{typography.editorial-metric}"
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

Campfire ships three families across two deployment contexts — software UI and editorial — with strict rules about where each family is allowed to appear.

- **Work Sans** is the UI typeface. In software contexts (dashboards, admin tools, product surfaces) it carries every heading, body, label, button, and navigation element. In editorial contexts it still carries body copy, captions, metadata, and chrome. Work Sans is the default everywhere; Fraunces is the exception, not the inversion.
- **Fraunces** is the editorial display face, used **only** when Campfire is deployed to editorial surfaces (e.g., long-form writing, case studies, marketing pages, the personal site). Editorial headings (`editorial-h1`–`editorial-h3`), pull quotes, and case-study metric values use Fraunces at weight 400 (or 425 for h1) with `font-variation-settings: "WONK" 1, "opsz" 72` to engage the optical-size and WONK axes. Software UI surfaces never use Fraunces — using it inside a product UI is a misread of the system, not a stylistic choice.
- **Fira Code** is reserved for technical content. Allowed surfaces: fenced code blocks, inline `<code>`, syntax-highlighted snippets, raw token values rendered as data (hex codes, spacing scales, dimension tokens), keyboard keys (`<kbd>`), and tabular numerics inside data tables and chart tooltips. **Disallowed surfaces (zero exceptions): CTAs, buttons, links, navigation items, eyebrows, dates, badges/tags that aren't displaying a raw token value, hero copy, marketing accents, body prose, and any other "techy-feeling" decoration.** If the element is something a user clicks, taps, or reads as prose, it is Work Sans. The test: is the literal text of this element a piece of code or a raw machine value? If no, it does not get Fira Code.

### Software heading scale (Work Sans)

h1 (48/56, bold, -0.02em) → h2 (36/40, bold, -0.015em) → h3 (30/36, semibold, -0.01em) → h4 (24/32, semibold) → h5 (20/28, semibold) → h6 (18/28, semibold). Letter-spacing tightens only at the largest sizes; smaller headings stay at default tracking so they sit naturally inside dense UI. Heading color is `on-surface` — same ink as body copy; size and weight alone carry hierarchy.

### Editorial heading scale (Fraunces)

`editorial-h1` (48/48, 425) → `editorial-h2` (36/38, 400) → `editorial-h3` (30/33, 400). Pull quotes and case-study metric values draw from `editorial-pullquote` and `editorial-metric`. All editorial Fraunces tokens carry the `"WONK" 1, "opsz" 72` variation. Editorial headings use the `text-heading` color (`#3d3028` light / warm cream dark) — a warm near-black that reads as ink rather than the neutral gray used for body copy. The contrast between the warm heading and the cool slate UI is intentional: it makes editorial moments feel typeset.

### Body, labels, and code

Body copy targets `1rem / 1.5rem` as the default reading size; `body-lg` (18/28) is reserved for ledes and post-header excerpts; `body-sm` (14/20) is for dense tables and metadata. Never set long-form prose smaller than the default. Labels use `label-sm` (12/16, semibold, +0.04em tracking). Code uses `code-md` and is the canonical home for Fira Code; the only other places Fira Code may appear are the technical surfaces enumerated above (raw token values, `<kbd>`, tabular numerics).

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
- Don't use Fraunces in software UI. Fraunces is the editorial display face; deploying it inside a product (dashboards, admin tools, in-app chrome) is a misuse of the system. Software headings use Work Sans.
- Don't use Work Sans for editorial display. When Campfire is deployed to editorial surfaces, headlines, pull quotes, and metric values use the `editorial-*` Fraunces tokens — falling back to Work Sans flattens the editorial voice.
- Don't use Fira Code on non-technical UI. CTAs, buttons, links, navigation, badges, dates, eyebrows, hero copy, and body prose are always Work Sans — no exceptions for "techy" styling. Fira Code is allowed only on code, raw token values (hex codes, spacing values), `<kbd>` keys, and tabular numerics. If the text is something the user reads as language or clicks as an affordance, it is Work Sans.
