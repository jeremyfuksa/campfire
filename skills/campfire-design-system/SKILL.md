---
name: campfire-design-system
description: Apply Campfire Design System rules when working in a project that imports `@jeremyfuksa/campfire`. Use when writing or modifying UI components, choosing colors / typography / tokens, reviewing styles, or whenever the user mentions Campfire, Spark, editorial themes, Work Sans, Fraunces, or Fira Code scope.
when_to_use: Auto-activates on any TSX/TS/JSX/JS/CSS/SCSS file in a Campfire-consuming project. Manually invoke before writing UI, choosing tokens, or reviewing styles.
paths: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js,**/*.css,**/*.scss"
---

# Campfire Design System

The authoritative rules live in this skill's reference files and in the package's `design.md`. Before doing UI work, consult them — don't restate or paraphrase rules from memory.

## Where the rules live

- This skill's `reference/` directory contains focused, on-demand docs (read them when relevant).
- The package's full `design.md` ships at `node_modules/@jeremyfuksa/campfire/design.md` and is the single source of truth if anything in `reference/` ever conflicts.

## When to consult the rules

Before:
- Writing or modifying any UI component
- Adding any `font-family`, color, spacing, or typography style
- Choosing tokens for a new surface or feature
- Reviewing a PR that touches styles or visual design

For ongoing work in the same session, you don't have to re-read for every change — once is enough as long as you remember the rules. If the conversation pivots to a new topic (e.g. from color to typography), re-skim the relevant `reference/` file.

## High-violation patterns (quick check)

These are the rules people break even after reading the docs. If you see any of these in code you're writing or reviewing, flag and fix:

1. **Spark — Rule of One.** `text-spark`, `bg-spark`, `ring-spark`, `spark-pulse`, or any `var(--spark)` reference may appear at most **once per rendered screen**. A second instance is always a violation. There is intentionally no `<Spark>` component — the Rule of One is the API. → [reference/spark.md](reference/spark.md)
2. **Fira Code is technical-only.** `font-mono` and `var(--font-mono)` belong on code, raw token values (hex codes, spacing values), `<kbd>` keys, and tabular numerics. **Never** on CTAs, buttons, links, navigation, badges, eyebrows, dates, hero copy, body prose, or "techy-feeling" decoration. → [reference/typography.md](reference/typography.md)
3. **Fraunces is editorial-only.** Software UI uses Work Sans for headings. Fraunces appears only in editorial contexts. → [reference/typography.md](reference/typography.md)
4. **Editorial themes are editorial-only.** `<EditorialTheme>` and `data-editorial-theme="warm|cool|deep"` don't belong inside software UI surfaces. → [reference/editorial.md](reference/editorial.md)
5. **Editorial accent never colors heading text.** Inside editorial sections, the accent rides on secondary elements only — eyebrows, pullquote rules, drop caps, ornaments. → [reference/editorial.md](reference/editorial.md)
6. **Body font is Work Sans, not Manrope.** Manrope was replaced in v0.7.0. New code referencing `Manrope` is stale. → [reference/typography.md](reference/typography.md)

## Reference files (read on demand)

- **[reference/typography.md](reference/typography.md)** — Full typography rules: Work Sans body/heading scale, Fira Code allowed/disallowed surfaces, Fraunces editorial scope.
- **[reference/spark.md](reference/spark.md)** — Spark accent: token values, `--spark-glow`, the Rule of One in detail, allowed/disallowed surfaces, the `spark-pulse` animation.
- **[reference/editorial.md](reference/editorial.md)** — Editorial accent themes (warm/cool/deep), `<EditorialTheme>` activation, the four editorial primitives, heading-color rule.
- **[reference/tokens.md](reference/tokens.md)** — Token catalogue: color palette, signature colors, semantic roles, spacing, radii, shadows, motion. The "what tokens exist" lookup.

## Examples (read when designing similar code)

- **[examples/spark-correct.tsx](examples/spark-correct.tsx)** — Canonical Spark uses (live indicator, hero CTA, editorial underline). Each example uses Spark exactly once.
- **[examples/spark-violation.tsx](examples/spark-violation.tsx)** — What NOT to do: multiple Spark instances on one surface, Spark on hover/border/divider.
- **[examples/typography-correct.tsx](examples/typography-correct.tsx)** — Right uses of Work Sans, Fira Code, Fraunces.
- **[examples/typography-violation.tsx](examples/typography-violation.tsx)** — `font-mono` on a CTA, Manrope import, Fraunces in software UI.
- **[examples/editorial-correct.tsx](examples/editorial-correct.tsx)** — `<EditorialTheme>` wrapping an article with eyebrow, pullquote, drop cap.

## How to apply

When **suggesting code**: cite the relevant rule by name and link to the reference file ("per `reference/spark.md`, this can be the only Spark on the page"). Make the rationale visible to the developer.

When **reviewing code**: point at the specific rule being violated, not just "this looks off." Quote the relevant line from the reference file. Suggest the corrected token or class.

When **the user asks for a color/font that doesn't exist in the system**: don't invent a hex or fall back to a generic Tailwind utility. Look up the closest token in `reference/tokens.md` and use that. If nothing fits, surface the gap to the user — adding a new token is a conscious design decision, not an inline fallback.

## What this skill does NOT do

- It doesn't modify `design.md` or any reference file itself — those are deliberate changes with broader implications.
- It doesn't override user requests. If the user explicitly asks you to violate a rule (e.g. "I know Spark Rule of One; do it twice anyway"), proceed but note the violation.
- It doesn't apply outside Campfire-consuming projects. If `@jeremyfuksa/campfire` isn't in `package.json`, this skill shouldn't activate.
