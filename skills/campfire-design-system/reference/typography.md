# Typography rules

Four families across two deployment contexts (software UI and editorial). Two of them — Hanken Grotesk and Work Sans — split the sans-serif workload by **role**, not by surface, so the same page can use both without it feeling jarring.

## The role split

| Role                                   | Family          | Token         | Mechanism                             |
| -------------------------------------- | --------------- | ------------- | ------------------------------------- |
| Body prose, ledes, captions, blockquote | Hanken Grotesk | `--font-body` | Applied to `<p>`, `<figcaption>`, `<blockquote>` in `globals.css` |
| Labels, buttons, navigation, software headings, eyebrows, all UI chrome | Work Sans | `--font-sans` | Default on `<body>`; everything inherits it unless overridden |
| Editorial display (`editorial-h1`–`editorial-h3`, pullquote text, metric values) | Fraunces        | `--font-heading-editorial` | Explicit `font-family: var(--font-heading-editorial)` on editorial elements only |
| Code, raw token values, `<kbd>`, tabular numerics | Fira Code | `--font-mono` | Applied to `<code>`, `<kbd>`, `<samp>`, `<pre>`; `font-mono` utility for explicit cases |

## Hanken Grotesk — body prose

Hanken Grotesk runs narrower and more comfortably than Work Sans at 16px paragraph sizes. It carries any element the reader is **reading as prose** — paragraphs, ledes, captions, blockquote text, post-header excerpts. It applies in both software and editorial contexts; "body" is the role, not the surface.

Token references:
- `--font-body` (root family)
- `--font-body-lg` / `--font-body-md` / `--font-body-sm` (size variants)

Body copy targets `1rem / 1.5rem` as the default; `body-lg` (18/28) for ledes and post-header excerpts; `body-sm` (14/20) for dense tables and metadata. Never set long-form prose smaller than the default.

## Work Sans — UI typeface

Work Sans carries everything the reader is **interacting with** or scanning as a label. Buttons, inputs, dropdowns, navigation items, software headings (h1–h6), tabs, breadcrumbs, badges (when not displaying a raw token value), eyebrows, kickers, captions of UI elements (e.g. table column headers).

Token references:
- `--font-sans` (root family — the body element default; everything inherits unless overridden)
- `--font-heading-h1` through `--font-heading-h6` (software heading scale)
- `--font-label-sm` (label text)
- Tailwind utility: default `font-sans`

Software heading scale: h1 (48/56, bold, -0.02em) → h2 (36/40, bold, -0.015em) → h3 (30/36, semibold, -0.01em) → h4 (24/32, semibold) → h5 (20/28, semibold) → h6 (18/28, semibold). Heading color is `--text-primary`; size and weight alone carry hierarchy.

Labels use `label-sm` (12/16, semibold, +0.04em tracking) — labels are UI, not prose.

## The body/UI test

When unsure which family an element gets, apply this test:

> Is this text a paragraph of prose, OR a label / heading / affordance?

- **Prose** (paragraphs, ledes, captions, quoted blocks): Hanken Grotesk via `--font-body`.
- **Label / heading / affordance** (buttons, navigation, software h1–h6, eyebrows, table headers): Work Sans via `--font-sans` (which is the inherited default, so no class needed).

There is no third category. If you find yourself reaching for one because it "feels right" without the test giving a clear answer, the design probably needs sharpening, not a font choice.

**Note on history:** Manrope was the body font through v0.6.x and was replaced by Work Sans in v0.7.0. Work Sans then got demoted to UI-only when Hanken Grotesk took over body in v0.8.0. Any `Manrope` reference in new code is stale; any Work Sans reference on a paragraph is also wrong (use `--font-body`).

## Fraunces — editorial-only, super wonk

Fraunces is the editorial display face. Used **only** when Campfire is deployed to editorial surfaces — long-form writing, case studies, marketing pages, the personal site.

Editorial headings (`editorial-h1`–`editorial-h3`), pull quotes, and case-study metric values use Fraunces at weight 400 (or 425 for h1) with the **super wonk** variation:

```
font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 1;
```

What each axis does:
- **`opsz` 144** — full display-grade optical sizing. Engages the most pronounced display features (longer terminals, more dramatic contrast).
- **`SOFT` 100** — maximally soft, rounded terminals. Warms the letterforms.
- **`WONK` 1** — engages the WONK alternates: the curling `t`, the looping `g`, the playful `y`. This is what makes editorial Fraunces unmistakably itself.

The full variation is exposed as `--editorial-font-variation` so you can apply it consistently:

```css
font-family: var(--font-heading-editorial);
font-variation-settings: var(--editorial-font-variation);
```

### Allowed surfaces

- Editorial headlines (`editorial-h1`, `editorial-h2`, `editorial-h3`)
- Pull quotes (`editorial-pullquote`, `<EditorialPullquote>`)
- Case-study metric values (`editorial-metric`)
- Drop caps (`<EditorialDropCap>`)
- Editorial eyebrows when paired with editorial typography (`<EditorialEyebrow>`)

### Disallowed surfaces (zero exceptions)

- Software UI headings — those use Work Sans
- Body copy — body is Hanken Grotesk even on editorial pages
- Buttons, navigation, badges, any UI chrome

Token references:
- `--font-heading-editorial`
- `--font-editorial-h1` through `--font-editorial-h3`
- `--font-editorial-pullquote`, `--font-editorial-metric`
- `--editorial-font-variation` (the opsz + SOFT + WONK settings)

## Editorial heading color rule

Editorial headings use `--text-heading` (`#3d3028` light / warm cream `#f5e6d0` dark) — a warm near-black that reads as ink rather than the neutral gray used for body copy. This intentional contrast between the warm heading and the cool slate UI makes editorial moments feel typeset.

**Editorial accent themes do not change heading color.** Even when an `<EditorialTheme tone="cool">` is active, the h1/h2/h3 stay on `--text-heading`. The accent rides on secondary elements only — see `reference/editorial.md`.

## Fira Code — technical-only

Fira Code is the monospace font, reserved for **technical content**. The test for whether a surface gets Fira Code: *is the literal text a piece of code or a raw machine value?* If no, it's prose (Hanken) or UI (Work Sans).

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

If the user reads the text as language or clicks it as an affordance, it is Hanken Grotesk (prose) or Work Sans (UI/label).

Token references:
- `--font-mono` (root)
- `--font-code-md`
- Tailwind utility: `font-mono`
