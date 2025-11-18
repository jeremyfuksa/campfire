# Repository Guidelines

## Project Structure & Module Organization
The Vite React app lives under `src/`, with `src/main.tsx` bootstrapping the UI and `src/App.tsx` orchestrating navigation across the design-system experiences. Feature-specific components stay inside `src/components`, while shared tokens, fonts, and Font Awesome hookups sit in `src/styles`. High-level rationale, usage notes, and design context belong in `guidelines/`, and `scripts/export-tokens.js` regenerates the Figma token payload consumed by design tooling. Static assets such as `index.html` and `FIGMA-QUICKSTART.md` remain at the repo root for quick reference.

## Build, Test, and Development Commands
- `npm install` – pulls the React, Radix, and tooling dependencies defined in `package.json`.
- `npm run dev` – starts the Vite dev server, letting you iterate on components with hot reload.
- `npm run build` – runs `tsc` type-checks and produces the optimized Vite build output.
- `npm run preview` – serves the last build locally to validate production bundles.
- `npm run tokens` (or `node scripts/export-tokens.js`) – exports CSS variables into the JSON format expected by the Figma Tokens plugin.

## Coding Style & Naming Conventions
Write idiomatic TypeScript function components with hooks, and keep each component in its own `PascalCase.tsx` file. Co-locate structured data (arrays/maps that drive UI) near the top of the component file, and favor CSS custom properties defined in `src/styles/globals.css` over literal colors or spacing values. Utility-class strings (clsx/CVA) carry most layout decisions, so keep them declarative and ordered from high-level layout to fine-grained tweaks. Keep comments scarce—add brief explanations only for unusual layout hacks or mapping logic.

## Testing Guidelines
An automated test harness is not yet wired in; rely on `npm run dev` for rapid verification and introduce component-level tests alongside new frameworks you add. Prefer co-locating tests next to the components they cover (`ComponentName.test.tsx`) so they travel with the feature once testing lands.

## Commit & Pull Request Guidelines
Git metadata is not vendored here, so stick to concise, imperative subjects that mention the scope (for example, `feat: add layout cards` or `fix: sync token export schema`). Each pull request should describe motivation, screenshots for visual tweaks, linked issues (if any), and call out manual steps such as rerunning `npm run tokens`.

## Releases & Versioning
Cut releases from the repo root using `npm run release`, which now bumps the semantic version (`npm version patch`) before building and publishing the `@jeremyfuksa/campfire` package. When preparing for a commit that will reach users, bump `package.json` manually (`npm version patch|minor|major`) if the change is not covered by a dedicated release script so consumers can rely on explicit semver increments.
