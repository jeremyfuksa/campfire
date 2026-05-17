# Contributing to Campfire

Thanks for picking up Campfire. This guide covers the dev loop, the rules every change is held to, and how releases work.

## Dev loop

```bash
npm install
npm run storybook   # docs + playground on http://localhost:6006
```

Storybook is the only dev surface. The hand-coded Vite playground was retired in v0.9.x; everything lives in Storybook stories under `src/components/ui/*.stories.tsx` and MDX pages under `src/docs/`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run storybook` | Storybook dev server. |
| `npm run build-storybook` | Static Storybook for GitHub Pages. |
| `npm run typecheck` | `tsc --noEmit` over the whole repo. |
| `npm test` | Smoke tests (single file, runs in CI). |
| `npm run test:full` | Full Vitest suite — every component test + axe gates. |
| `npm run test:a11y` | Just the axe-core assertions (CI gate). |
| `npm run tokens` | Regenerate `src/styles/tokens.generated.css` from `src/tokens/*.json` via Style Dictionary. |
| `npm run build:lib` | Produces the published library: tokens → tsup (ESM + CJS + .d.ts + CSS) → `add-use-client.mjs` → packages the Claude skill. Outputs to `dist/`. |
| `npm run build:skill` | Packages `skills/campfire-design-system/` into `dist/campfire-design-system.skill`. |

## What makes a good PR

Each new component should ship as a triple:

```
src/components/ui/<name>.tsx
src/components/ui/<name>.stories.tsx
src/components/ui/__tests__/<name>.test.tsx
```

The test must include at least one render assertion and one axe-core assertion (see any existing test for the pattern). The story must cover the primary variants of the API — not just a single Default.

If you're adding to `src/lib/index.ts`, you're declaring public API. Treat it as a stability commitment.

## Design rules

`design.md` is authoritative. The short version:

- **Typography roles are mechanical**: prose → Hanken Grotesk, UI labels/headings/affordances → Space Grotesk, editorial display → Fraunces, code-only surfaces → Fira Code.
- **Spark's Rule of One**: at most one Spark-colored thing per viewport. Spark is editorial only — never on UI affordances.
- **Editorial themes** (`warm`, `cool`, `deep`) scope only to `<EditorialTheme>`-wrapped regions.

The `skills/campfire-design-system/` Claude skill encodes these rules. If you change a rule, update both `design.md` and the skill.

## Tokens

Tokens live in `src/tokens/*.json` (W3C DTCG format). Style Dictionary compiles them into:

- `src/styles/tokens.generated.css` (consumed by `globals.css` `@theme` block)
- `dist/tokens.css`, `dist/tokens.json`, `dist/tokens.dark.json`, `dist/tokens.js`

Don't hand-edit anything under `tokens.generated.css` or `dist/` — rerun `npm run tokens`.

## Coding style

- TypeScript function components.
- Each ui component: kebab-case filename, named exports, paired story + test.
- Prefer Tailwind classes that resolve to CSS vars (`bg-primary`, `text-muted-foreground`) over inline `style={{ ... }}`.
- Don't add comments to explain *what* code does. Add comments only for unusual hacks, hidden invariants, or workarounds (see existing components for the bar).
- No emojis in source.

## Commit + PR style

- Imperative commit subjects with scope: `feat: add layout cards`, `fix: sync token export schema`, `docs: update typography rules`.
- Update `CHANGELOG.md` in the same PR as the change.
- Call out anything that affects consumers (token renames, breaking prop changes, font-loading changes, public-API additions).

## Releases

The repo follows semver. Public API surface is everything in `src/lib/index.ts` + the token names exported in `dist/tokens.*`.

1. Open a `chore(release): X.Y.Z` PR. It updates `CHANGELOG.md` and bumps `package.json` + `package-lock.json` only.
2. Merge to `main`.
3. Tag the merge commit: `git tag -a vX.Y.Z -m "Release vX.Y.Z" && git push origin vX.Y.Z`.
4. `.github/workflows/publish.yml` fires on `v*` tag push, verifies the tag matches `package.json` version, runs the smoke suite + library build, and publishes `@jeremyfuksa/campfire` to npm with sigstore provenance.

Do not use `npm run release` for anything user-visible — it bypasses CI.

## Skipped tests

A few tests are intentionally skipped with documented reasons (Radix `pointerleave` doesn't fire through happy-dom; `react-resizable-panels` has an upstream axe gap). If you're unskipping one of these, also remove the comment explaining why it was skipped.
