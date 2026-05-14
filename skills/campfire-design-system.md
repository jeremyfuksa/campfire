---
name: campfire-design-system
description: Apply Campfire Design System rules when working in a project that imports `@jeremyfuksa/campfire`. Use when writing or modifying UI components, choosing colors / typography / tokens, reviewing styles, or whenever the user mentions Campfire, Spark, editorial themes, Work Sans, Fraunces, or Fira Code scope.
---

# Campfire Design System

The authoritative rules live in the package's `design.md`. Before doing UI work in a Campfire-consuming project, read it. Don't restate or paraphrase rules from memory — read the file every time.

## Where to find the rules

1. First try the installed copy:
   `./node_modules/@jeremyfuksa/campfire/design.md`
2. If that file isn't present, the package isn't installed in this project and this skill probably shouldn't be active. Confirm with the user before proceeding.

The `design.md` is the single source of truth. The "high-violation patterns" section below is a fast cross-check for the gotchas that get broken even after reading design.md — use it as a checklist while writing code, but always defer to design.md if there's ever ambiguity.

## When to consult design.md

Read it before:
- Writing or modifying any UI component
- Adding any `font-family`, color, spacing, or typography style
- Choosing tokens for a new surface or feature
- Reviewing a PR that touches styles or visual design

For ongoing work in the same session, you don't have to re-read design.md for every change — once is enough as long as you remember the rules. If a discussion shifts to a new area of the system (e.g. you've been working on color and the user pivots to typography), re-skim the relevant section.

## High-violation patterns (quick check)

These are the rules people break even after reading design.md. If you see any of these in code you're writing or reviewing, flag and fix:

1. **Spark — Rule of One.** `text-spark`, `bg-spark`, `ring-spark`, `spark-pulse`, or any `var(--spark)` reference may appear at most **once per rendered screen**. A second instance is always a violation. There is intentionally no `<Spark>` component — the Rule of One is the API.
2. **Fira Code is technical-only.** `font-mono` and `var(--font-mono)` belong on code, raw token values (hex codes, spacing values), `<kbd>` keys, and tabular numerics inside data tables / chart tooltips. **Never** on CTAs, buttons, links, navigation, badges, eyebrows, dates, hero copy, body prose, or "techy-feeling" decoration. The test: is the literal text a piece of code or a raw machine value? If no, it stays on Work Sans.
3. **Fraunces is editorial-only.** Software UI surfaces (dashboards, admin tooling, in-app chrome) use Work Sans for headings. Fraunces (`--font-heading-editorial`, `editorial-h1`–`editorial-h3`, pullquote, metric tokens) appears only in editorial contexts: long-form writing, case studies, marketing pages, the personal site.
4. **Editorial themes are editorial-only.** `<EditorialTheme>` and the `data-editorial-theme="warm|cool|deep"` attribute do not belong inside software UI surfaces. They're for editorial pages.
5. **Editorial accent never colors heading text.** Inside an editorial section, the accent rides on secondary elements — eyebrows, pullquote rules, drop caps, ornaments. Primary headings stay on `text-heading` (warm near-black) regardless of the active tone.
6. **Body font is Work Sans, not Manrope.** Manrope was replaced in v0.7.0. New code that references `Manrope`, imports it from Google Fonts, or sets `font-family: Manrope` is stale and should be updated to Work Sans.

## How to apply

When **suggesting code**: cite the relevant design.md section by name ("per the Spark section, this can be the only Spark on the page" or "per the typography rule, Fira Code is for code only — switch this CTA to the default Work Sans"). This makes the rationale visible to the developer.

When **reviewing code**: point at the specific rule being violated, not just "this looks off." Quote the relevant line from design.md if possible. Suggest the corrected token or class.

When **the user asks for a color/font that doesn't exist in the system**: don't invent a hex or fall back to a generic tailwind utility. Look up the closest semantic or signature token in `design.md` / `dist/tokens.css` and use that. If nothing fits, surface the gap to the user — adding a new token is a conscious design decision, not an inline fallback.

## What this skill does NOT do

- It doesn't modify `design.md` itself — that's a deliberate change with broader implications.
- It doesn't override user requests. If the user explicitly asks you to violate a rule (e.g. "I know Spark Rule of One; do it twice anyway"), proceed but note the violation.
- It doesn't apply outside Campfire-consuming projects. If `@jeremyfuksa/campfire` isn't in `package.json`, this skill shouldn't activate.
