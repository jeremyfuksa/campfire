# Spark — the one vivid accent

**Use sparingly.** Campfire is muted by design. Spark is the single saturated orange reserved for high-stakes moments — a live indicator, an unread beacon, the literal flame. Its loudness is earned through scarcity: one instance per screen, max. Everywhere else, defer to the slate/terracotta core.

## Token values

| Token            | Light value             | Dark value              | Notes                                                            |
| ---------------- | ----------------------- | ----------------------- | ---------------------------------------------------------------- |
| `--spark`        | `#ff5a1f`               | `#ff6b35`               | Defined in `signature.light.json` / `signature.dark.json`        |
| `--spark-glow`   | `color-mix(srgb, var(--spark) 24%, transparent)` | `color-mix(srgb, var(--spark) 32%, transparent)` | Derived in `globals.css`; auto-adapts to mode |

## Rule of One

> If you can already see Spark on the page, you cannot add another instance. The first use wins.

This is **the rule**, not a guideline. It's enforced by code review. There is intentionally no `<Spark>`, `<SparkBadge>`, or `<SparkDot>` component — the Rule of One is the API. If there's no component to repeat, repetition becomes harder.

When reviewing code, scan the rendered surface for any of: `text-spark`, `bg-spark`, `ring-spark`, `spark-pulse`, `var(--spark)`, `#ff5a1f`, `#ff6b35`. If you find more than one, that's a violation regardless of how subtle the second instance is.

## Use Spark for

- **Live, recording, or streaming indicators** — the pulsing dot. Use the `spark-pulse` utility, which animates a halo using `--spark-glow`. Automatically reduces to a steady glow under `prefers-reduced-motion`.
- **Critical unread / new-activity beacons** — the "you have one important new thing" dot.
- **The flame ember in the Campfire logo mark.**
- **One brand-spark accent per editorial spread** — an underline on a single key word in a pull quote, a glyph between sections.
- **A single hero CTA in marketing-grade moments** — only when the CTA is the most important action on the page.

## Don't use Spark for

- **General primary actions** — that's `--primary-600`. Spark is not a "more important primary."
- **Errors or warnings** — those have their own ramps (`danger.*`, `warning.*`). Don't conflate signal types.
- **Hover states, dividers, borders, gradients, chrome** — Spark doesn't get hover variants. The static color is the entire system.
- **Body text, links, or anything repeated within a single view** — repetition kills the signal.
- **Decorative tinting** — Spark is signal, not surface. If you want warm decoration, reach for `secondary` or signature `clay` / `terracotta` / `ember` / `golden-amber`.

## Utility classes

| Class           | Effect                                                                  |
| --------------- | ----------------------------------------------------------------------- |
| `text-spark`    | Sets `color: var(--spark)`                                              |
| `bg-spark`      | Sets `background-color: var(--spark)`                                   |
| `ring-spark`    | 4px halo using `var(--spark-glow)`                                      |
| `spark-pulse`   | Live-indicator keyframe animation. Pair with a small (~8px) round element. |

## The pulse animation

`spark-pulse` is a 1.6-second box-shadow animation that ripples a halo of `--spark-glow` outward. Under `prefers-reduced-motion: reduce`, the animation collapses to a steady glow.

Pattern:
```tsx
<span aria-hidden="true" className="spark-pulse inline-block h-2 w-2 rounded-full" />
```

## Why no component?

The Rule of One is enforced by friction. A `<SparkDot>` component invites people to drop one in anywhere. Inline utilities invite the question "should this be Spark?" — and the answer is almost always "no, because there's already one elsewhere on the page." That friction is a feature.

When the user explicitly asks for a Spark component because the same widget needs to appear in many places, that's a sign the design is wrong, not the rule. Push back: which one of these instances is actually the most important? Make that one Spark and demote the rest.
