# Repository Guidelines

## Project Structure & Module Organization
This repo serves two purposes: it's a Vite docs/playground app **and** a publishable npm component library. Both live under `src/`.

- `src/main.tsx` + `src/App.tsx` — the Vite docs app's entry and navigation. Deployed to GitHub Pages.
- `src/components/ui/*.tsx` — the ~70 UI components (Button, Dialog, DataTable, etc.) that ship in the library. Each has a paired `*.stories.tsx` and `__tests__/*.test.tsx`.
- `src/components/*.tsx` — docs-app pages (`FoundationComponentsPage`, `DesignTokensPage`, `GridsLayoutsPage`, etc.) plus shared widgets (`ThemeProvider`, `BackgroundGradients`, `PageWithSidebar`).
- `src/lib/index.ts` — the published library barrel. Anything not re-exported here doesn't ship to consumers.
- `src/tokens/*.json` — design tokens in W3C DTCG format. Built by `style-dictionary.config.mjs` (run `npm run tokens`) into `src/styles/tokens.generated.css` and the `dist/tokens.*` outputs.
- `src/styles/` — `globals.css` (Tailwind v4 `@theme` block + base layer), `fonts.css` (Google Fonts import for Space Grotesk, Hanken Grotesk, Fraunces, Fira Code), `tokens.generated.css` (gitignored, regenerated from `src/tokens/`).
- `design.md` — authoritative design-system rules (typography role split, Spark Rule of One, editorial themes, color tokens). Also ships in the npm tarball.
- `skills/campfire-design-system/` — a Claude Code skill (SKILL.md + reference docs + examples) that teaches Claude the rules from `design.md`. Packaged into `dist/campfire-design-system.skill` by `npm run build:skill`.
- `scripts/` — build helpers (`package-skill.py` produces the `.skill` bundle; `add-use-client.mjs` prepends the directive to dist bundles).

## Build, Test, and Development Commands
- `npm install` — installs deps.
- `npm run dev` — Vite dev server for the docs app.
- `npm run build` — `tsc` + Vite production build of the docs app.
- `npm run preview` — serves the last build.
- `npm run tokens` — rebuilds tokens from `src/tokens/*.json` via Style Dictionary.
- `npm run build:lib` — produces the published library: `npm run tokens` → `tsup` (ESM + CJS + d.ts + CSS) → `node scripts/add-use-client.mjs` → `npm run build:skill`. Outputs to `dist/`.
- `npm run build:skill` — packages the Claude Code skill directory into `dist/campfire-design-system.skill`.
- `npm test` — smoke tests (single file). Used by CI.
- `npm run test:full` — full vitest suite (~73 component tests). OOMs in CI's ubuntu-latest, so we only run the smoke subset there.
- `npm run test:a11y` — runs every axe-core accessibility assertion across the test suite. Required CI gate.
- `npm run storybook` — Storybook v10 dev server. Configured in `.storybook/`. Not currently deployed (decision pending — see ROADMAP).
- `npm run deploy` — builds the docs app and pushes to `gh-pages`.

## Coding Style & Naming Conventions
- TypeScript function components with hooks. Each component in its own kebab-case `.tsx` file under `src/components/ui/` (the published surface) or PascalCase `.tsx` for docs-app pages.
- Tailwind utility classes carry most layout. For semantic tokens, prefer the Tailwind classes that resolve to CSS vars (`bg-primary`, `text-muted-foreground`) over inline `style={{ backgroundColor: 'var(...)' }}`.
- Apply the design-system rules in `design.md` — Spark's Rule of One, the typography role split (Hanken Grotesk for prose, Space Grotesk for UI, Fraunces for editorial display, Fira Code for technical), editorial themes scoped to editorial surfaces only. The `skills/campfire-design-system/` skill encodes these for AI tooling.
- Comments are scarce. Add them only for unusual hacks, hidden invariants, or workarounds.

## Testing Guidelines
The repo runs Vitest with React Testing Library and `jest-axe` for accessibility assertions. Every component in `src/components/ui/` has a paired `__tests__/*.test.tsx` covering render, interactions, and axe-core a11y. New components should ship with the same triple: `name.tsx`, `name.stories.tsx`, `__tests__/name.test.tsx`.

CI runs `npm test` (smoke) and `npm run test:a11y` (a11y gate). The full `npm run test:full` suite is reliable locally but OOMs on GitHub Actions ubuntu-latest runners — investigation tracked in CHANGELOG under Known Issues.

## Commit & Pull Request Guidelines
- Concise, imperative subjects with scope: `feat: add layout cards`, `fix: sync token export schema`, `docs: update design.md typography rules`.
- PR descriptions should cover motivation, manual test steps, and call out anything that affects consumers (token renames, breaking prop changes, font-loading changes, etc.).
- Update `CHANGELOG.md` in the same PR as the change it describes. Cut releases via the dedicated `chore(release): X.Y.Z` PR pattern — see recent release PRs for the format.

## Releases & Versioning
The repo follows semver. Release flow:
1. Open a `chore(release): X.Y.Z` PR that updates `CHANGELOG.md` and bumps `package.json` + `package-lock.json`.
2. After merge, tag the merge commit: `git tag -a vX.Y.Z -m "Release vX.Y.Z" && git push origin vX.Y.Z`.
3. `.github/workflows/publish.yml` fires on `v*` tag push, verifies tag/version match, runs the smoke test + library build, and publishes `@jeremyfuksa/campfire` to npm with provenance attestation.

The legacy `npm run release` script (which does `npm version patch && npm run build:lib && npm publish`) bypasses CI and the PR review — prefer the tagged-CI flow for anything user-visible.
