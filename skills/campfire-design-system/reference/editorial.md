# Editorial accent themes

Editorial surfaces opt into a single accent color that carries through eyebrows, pullquote rules, drop caps, and small chrome. The accent is exposed as a CSS variable (`--editorial-accent`, plus a soft companion `--editorial-accent-subtle` for background tints), which means a section or article can swap tones without restyling its children.

## The three tones

| Tone (default `warm`) | Accent source         | Subtle source         | Reads as                  |
| --------------------- | --------------------- | --------------------- | ------------------------- |
| `warm` (default)      | `--secondary-700`     | `--secondary-100`     | clay/terracotta — fire, ember, sunset |
| `cool`                | `--info-900`          | `--info-100`          | dusk/slate — evening, water, distance |
| `deep`                | `--success-800`       | `--success-100`       | moss/forest — understory, study, depth |

All three are sourced from existing palette ramps — no new colors are introduced. Each tone has matched light + dark mode pairings.

## Activation

Wrap the editorial region in `<EditorialTheme tone="cool">` (or set `data-editorial-theme="cool"` on any ancestor element). All descendant uses of `text-editorial-accent`, `bg-editorial-accent-subtle`, and `border-editorial-accent` automatically pick up the active accent.

```tsx
<EditorialTheme tone="cool">
  <article>
    <EditorialEyebrow>Field Notes · No. 04</EditorialEyebrow>
    <h2>Sitting close to the coals</h2>
    <p>...</p>
    <EditorialPullquote cite="Field Notes, p. 12">...</EditorialPullquote>
  </article>
</EditorialTheme>
```

## The four primitives

| Component            | Purpose                                                                | Notes                                                          |
| -------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| `<EditorialTheme>`   | Wrapper that sets `data-editorial-theme`. Defaults to `tone="warm"`.   | Use `as` prop to render a different element tag (default `div`).|
| `<EditorialEyebrow>` | Kicker label in the active accent color, uppercase + tracking.         | Use above editorial headings, never above software UI headings.|
| `<EditorialPullquote>` | Fraunces pullquote with a colored left rule (`variant="ruled"`, default) or a tinted background (`variant="tinted"`). Optional citation slot via `cite` prop. | Renders a `<figure>` with `<blockquote>` inside. |
| `<EditorialDropCap>` | Large Fraunces first-letter accent. Floats left.                       | Use as the first child of a paragraph.                         |

## Utility classes

| Class                          | Effect                                            |
| ------------------------------ | ------------------------------------------------- |
| `text-editorial-accent`        | Sets text color to the active editorial accent    |
| `bg-editorial-accent-subtle`   | Background using the soft companion color         |
| `border-editorial-accent`      | Border color using the active accent              |

These consume the CSS variables, so they recolor automatically when the surrounding `<EditorialTheme>` tone changes.

## Heading color rule

> Headings remain on `--text-heading` regardless of the active tone.

The accent is for **secondary** editorial elements only — eyebrows, pullquote rules, drop caps, ornaments — never for the primary heading text itself. Letting the heading stay on warm ink keeps the editorial voice intact while color tells the story alongside it.

If you find code coloring a `<h1>`, `<h2>`, or `<h3>` with `text-editorial-accent` inside an editorial section, that's a violation. The heading stays on `--text-heading`.

## Don't use editorial themes for

- **Software UI surfaces.** The accent system is for editorial pages — long-form writing, case studies, marketing, the personal site. Dashboards, admin tooling, and in-app chrome stay on the primary slate-blue.
- **Heading text** (see above).
- **Any element that should stay calm.** The accent is meant to be noticed, not dispersed. Use it on a few small surfaces per section, not as a general highlighter.

## When to use which tone

Tone choice is editorial — it sets the mood of a piece. There's no rule that ties a tone to a topic, but conventions:

- **`warm`** — the default. Use when the content is personal, optimistic, or about people/community.
- **`cool`** — quieter, more reflective. Good for analytical or dusk-mood writing.
- **`deep`** — substantial, considered. Good for case studies and longer-form study pieces.

Switching tone between articles is the point — that's what makes the system feel alive across a site. Within a single article, pick one tone and stay.
