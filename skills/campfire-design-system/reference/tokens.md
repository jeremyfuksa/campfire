# Token catalogue

Tokens are authored as W3C DTCG JSON under `src/tokens/` and built with Style Dictionary into CSS custom properties. The full generated CSS lives at `dist/tokens.css` (in the published package) or `src/styles/tokens.generated.css` (during local development).

If a color or value you need isn't here, **don't invent a hex** — surface the gap to the user.

## Color palette ramps

Each ramp goes 50/100/200/300/400/500/600/700/800/900/950. Use the higher numbers for text on light backgrounds; lower numbers for backgrounds and tints.

- **`--primary-*`** (slate blue) — actionable elements: buttons, links, focused states, selected nav. `primary-600` is the default action; `700` hover; `800` active.
- **`--secondary-*`** (clay/terracotta) — warmth and accent. Empty states, marketing accents, occasional highlights. **Never** for primary affordances.
- **`--neutral-*`** — carry 95% of any screen. Backgrounds use 50/100/200; text uses 500–950.
- **`--success-*`** / **`--warning-*`** / **`--danger-*`** / **`--info-*`** — status colors paired with `on-*` companions for pre-validated contrast.

## Semantic roles (preferred over primitives)

Reach for these before primitives. Defined in `semantic.light.json` / `semantic.dark.json`.

| Variable                    | Role                                                  |
| --------------------------- | ----------------------------------------------------- |
| `--bg-base`                 | Page background                                       |
| `--bg-subtle`               | Subtle surface (cards, list rows)                     |
| `--bg-muted`                | More inset surface                                    |
| `--bg-emphasis`             | Inverted/dark emphasis                                |
| `--text-primary`            | Default text                                          |
| `--text-secondary`          | De-emphasized text                                    |
| `--text-tertiary`           | Captions, metadata                                    |
| `--text-disabled`           | Disabled state                                        |
| `--text-inverse`            | Text on dark backgrounds                              |
| `--text-heading`            | Editorial heading ink (warm near-black)               |
| `--border-default`          | Default border                                        |
| `--border-strong`           | Stronger border                                       |
| `--border-subtle`           | Faint divider                                         |
| `--interactive-default`     | Action color (= `--primary-600`)                      |
| `--interactive-hover`       | Action hover                                          |
| `--interactive-active`      | Action active                                         |
| `--interactive-disabled`    | Action disabled                                       |
| `--editorial-accent`        | Active editorial accent (warm/cool/deep)              |
| `--editorial-accent-subtle` | Soft companion to editorial accent                    |

## Signature colors (decorative palette)

Named brand tones in `signature.light.json` / `signature.dark.json`. Use for illustration accents, signature charts, decorative tinting. Each has light + dark mode pairings.

`--clay`, `--flamingo`, `--terracotta`, `--ember`, `--golden-amber`, `--hay`, `--sage`, `--moss`, `--pine`, `--cello`, `--blue-calx`, `--dusk`, `--mauve-earth`, `--stone`

Plus the special **`--spark`** (`#ff5a1f` light / `#ff6b35` dark) and derived `--spark-glow`. Spark is governed by the Rule of One — see `reference/spark.md`.

## Typography tokens

See `reference/typography.md` for full rules. Quick reference:

- `--font-sans` — Space Grotesk + system fallbacks (UI default; buttons, labels, navigation, software headings inherit from this)
- `--font-body` — Hanken Grotesk + Space Grotesk fallback (long-form prose; auto-applied to `<p>`, `<figcaption>`, `<blockquote>`)
- `--font-mono` — Fira Code + monospace fallbacks (technical-only)
- `--font-heading-editorial` — Fraunces + serif fallbacks (editorial-only)
- `--font-heading-h1` through `--font-heading-h6` — software heading scale (Space Grotesk)
- `--font-body-lg` / `--font-body-md` / `--font-body-sm` — body sizes (Hanken Grotesk)
- `--font-label-sm` — label text (Space Grotesk)
- `--font-code-md` — code text (Fira Code)
- `--font-editorial-h1` through `--font-editorial-h3`, `--font-editorial-pullquote`, `--font-editorial-metric` (Fraunces)
- `--editorial-font-variation` — `'opsz' 144, 'SOFT' 100, 'WONK' 1` (super wonk: full display optical sizing + maximally soft terminals + WONK alts engaged)

## Spacing

4px base unit (`0.25rem`). Tailwind utility classes map 1:1.

`--spacing-xxs` (1) / `xs` (2) / `sm` (3) / `md` (4) / `lg` (5) / `xl` (6) / `xxl` (8) / `xxxl` (10) / `huge` (12) / `giant` (16). Plus named layout slots: `--spacing-container-padding` (6), `--spacing-card-gap` (4), `--spacing-section-margin` (16).

## Radii

`--radius-sm` (6px) chips/badges/keys, `--radius-base` (8px) buttons/inputs, `--radius-md` (12px) small cards/alerts, `--radius-lg` (16px) primary cards/dialogs, `--radius-xl` / `--radius-xxl` marketing/hero only, `--radius-full` (9999px) avatars/pills.

## Shadows / elevation

Depth in Campfire is expressed through **borders and tonal shifts first, shadows second**.

- Level 0 — Page: `--bg-base`, no border, no shadow
- Level 1 — Section: `--bg-subtle` background OR `--bg-base` + `--border-subtle`
- Level 2 — Floating: `--bg-base` + `--border-default` + `--shadow-sm` (popovers, dropdowns)
- Level 3 — Modal: `--bg-base` + larger `--shadow-lg` + scrim (dialogs only)

Shadow tokens: `--shadow-2xs` / `--shadow-xs` / `--shadow-sm` / `--shadow-md` / `--shadow-lg` / `--shadow-xl` / `--shadow-focus` (the focus ring glow).

## Motion

`--duration-fastest` (75ms) / `--duration-fast` (150ms) / `--duration-normal` (250ms) / `--duration-slow` (400ms) / `--duration-slower` (600ms).

Easings: `--ease-default` / `--ease-in` / `--ease-out` / `--ease-in-out` / `--ease-spring` / `--ease-campfire`.

Animation utilities: `campfire-enter` (slide+fade up), `campfire-enter-scale` (scale in with spring), `campfire-enter-fade` (fade only), `campfire-stagger` (apply to a parent, children animate in sequence).

## Z-index

Layered scale to keep stacking predictable: `--z-base` / `--z-dropdown` / `--z-sticky` / `--z-overlay` / `--z-modal` / `--z-popover` / `--z-toast` / `--z-tooltip` / `--z-max`. Always reach for these before raw numeric values.

## Lookup recipe

1. **Need a color?** Check semantic roles first. If none fit, check the palette ramps. If you're tempted to use a signature color, ask yourself: is this decorative or functional? Functional → semantic. Decorative → signature.
2. **Need a font?** Always start at the typography tokens. Don't reach for raw font-family declarations.
3. **Need spacing/sizing?** Use named tokens, not raw px/rem values.
4. **Stuck?** Surface to the user. Adding a new token is a deliberate act, not a workaround.
