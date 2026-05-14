# Typography rules

Three families across two deployment contexts (software UI and editorial), with strict rules about where each family is allowed.

## Work Sans — the UI typeface

Work Sans is the body and UI font everywhere. In software contexts (dashboards, admin tools, product surfaces) it carries every heading, body, label, button, and navigation element. In editorial contexts it still carries body copy, captions, metadata, and chrome. **Work Sans is the default everywhere; Fraunces is the exception, not the inversion.**

Token references:
- `--font-sans` (root)
- `--font-heading-h1` through `--font-heading-h6`
- `--font-body-lg` / `--font-body-md` / `--font-body-sm`
- `--font-label-sm`
- Tailwind utility: default `font-sans`

Software heading scale: h1 (48/56, bold, -0.02em) → h2 (36/40, bold, -0.015em) → h3 (30/36, semibold, -0.01em) → h4 (24/32, semibold) → h5 (20/28, semibold) → h6 (18/28, semibold). Heading color is `--text-primary` (same as body); size and weight alone carry hierarchy.

**Note:** Manrope was the body font through v0.6.x and was replaced by Work Sans in v0.7.0. Any `Manrope` reference in new code is stale.

## Fira Code — technical-only

Fira Code is the monospace font, reserved for **technical content**. The test for whether a surface gets Fira Code: *is the literal text a piece of code or a raw machine value?* If no, it's Work Sans.

### Allowed surfaces

- Fenced code blocks
- Inline `<code>` elements
- Syntax-highlighted snippets
- Raw token values rendered as data (hex codes like `#ff5a1f`, spacing values like `1.5rem`, dimension tokens)
- Keyboard keys (`<kbd>` elements, `<KeyboardKey>` component)
- Tabular numerics inside data tables and chart tooltips

### Disallowed surfaces (zero exceptions)

- CTAs, buttons, links
- Navigation items
- Badges, chips, tags (unless displaying a raw token value)
- Eyebrows, kickers
- Dates, timestamps, metadata
- Hero copy, marketing accents
- Body prose
- Any "techy-feeling" decoration

If the user reads the text as language or clicks it as an affordance, it gets Work Sans.

Token references:
- `--font-mono` (root)
- `--font-code-md`
- Tailwind utility: `font-mono`

## Fraunces — editorial-only

Fraunces is the editorial display face. Used **only** when Campfire is deployed to editorial surfaces — long-form writing, case studies, marketing pages, the personal site.

Editorial headings (`editorial-h1`–`editorial-h3`), pull quotes, and case-study metric values use Fraunces at weight 400 (or 425 for h1) with `font-variation-settings: "WONK" 1, "opsz" 72` to engage the optical-size and WONK axes.

### Allowed surfaces

- Editorial headlines (`editorial-h1`, `editorial-h2`, `editorial-h3`)
- Pull quotes (`editorial-pullquote`, `<EditorialPullquote>`)
- Case-study metric values (`editorial-metric`)
- Drop caps (`<EditorialDropCap>`)
- Editorial eyebrows when paired with editorial typography (`<EditorialEyebrow>`)

### Disallowed surfaces (zero exceptions)

- Software UI headings — those use Work Sans
- Body copy in editorial contexts — body is still Work Sans even on editorial pages
- Buttons, navigation, badges, any UI chrome

Token references:
- `--font-heading-editorial`
- `--font-editorial-h1` through `--font-editorial-h3`
- `--font-editorial-pullquote`, `--font-editorial-metric`
- `--editorial-font-variation` (the WONK + opsz settings)

## Editorial heading color rule

Editorial headings use `--text-heading` (`#3d3028` light / warm cream `#f5e6d0` dark) — a warm near-black that reads as ink rather than the neutral gray used for body copy. This intentional contrast between the warm heading and the cool slate UI makes editorial moments feel typeset.

**Editorial accent themes do not change heading color.** Even when an `<EditorialTheme tone="cool">` is active, the h1/h2/h3 stay on `--text-heading`. The accent rides on secondary elements only — see `reference/editorial.md`.

## Body, labels, and code sizes

Body copy targets `1rem / 1.5rem` as the default reading size. `body-lg` (18/28) is reserved for ledes and post-header excerpts; `body-sm` (14/20) is for dense tables and metadata. Never set long-form prose smaller than the default.

Labels use `label-sm` (12/16, semibold, +0.04em tracking).

Code uses `code-md` and is the canonical home for Fira Code.
