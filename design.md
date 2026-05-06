# Campfire Design

This document captures the design philosophy, architectural decisions, and conventions behind the Campfire Design System. It complements `README.md` (how to use it) and `AGENTS.md` (repository guidelines) by explaining *why* the system is built the way it is.

## Goals

1. **One source of truth for visual design.** Colors, type, spacing, motion, and elevation are authored once as design tokens and consumed everywhere — CSS, JS, JSON, and downstream tooling.
2. **Composable, accessible React components.** Every UI primitive ships with sensible defaults, ARIA semantics, keyboard support, and tested behavior.
3. **Drop-in adoption.** Consumers should get value from a single `npm install` and one CSS import, without buying into the rest of the app's architecture.
4. **Designer/developer parity.** The same tokens power Tailwind utilities, raw CSS, the Figma library, and editor/terminal themes — so handoff is a transcription, not a translation.

## Architecture Overview

The repo is a dual-purpose workspace: a Vite-served docs/demo site **and** a publishable component library.

```
src/
├── tokens/          W3C DTCG token sources (JSON)
├── styles/          Global CSS, generated token layer, fonts
├── components/
│   ├── ui/          Library primitives (Button, Input, Dialog, …)
│   └── *.tsx        Docs/demo-only pages and shells
├── lib/             Public entry point for the npm package
├── test/            Smoke and integration tests
└── App.tsx          Docs site shell

themes/              Editor/terminal theme exports
style-dictionary.config.mjs   Token build pipeline
tsup.config.ts                Library bundling (ESM + CJS + types)
vite.config.ts                Docs site build
```

The split between `src/components/ui/*` (shipped) and the page-level components (docs only) is deliberate: the library surface area stays small and stable while the docs site can iterate freely.

## Design Tokens

Tokens are the foundation. They are authored as **W3C DTCG-format JSON** under `src/tokens/` so they are tool-agnostic and round-trippable through Figma, Style Dictionary, and any future design tooling.

### Layers

Tokens are layered from primitive to semantic so themes can be swapped without touching component code:

1. **Primitives** — `palette.json`, `dimension.json`, `typography.json`, `motion.json`, `shadow.json`, `z-index.json`. Raw values with no contextual meaning.
2. **Semantic (light/dark)** — `semantic.light.json`, `semantic.dark.json`. Roles like `bg.base`, `fg.muted`, `border.subtle` that map onto primitives per mode.
3. **Signature (light/dark)** — `signature.light.json`, `signature.dark.json`. Brand-specific accents and gradients used by hero/marketing surfaces.
4. **Legacy** — `legacy.*.json`. Compatibility aliases retained for older consumers; new code should not reference these.

### Build pipeline

`npm run tokens` runs `style-dictionary.config.mjs`, which emits:

- `src/styles/tokens.generated.css` — CSS custom properties consumed by the docs site and library stylesheet.
- `dist/tokens.css`, `dist/tokens.dark.json`, `dist/tokens.json`, `dist/tokens.js`, `dist/tokens.d.ts` — published entry points for downstream consumers (CSS, raw JSON, typed JS).

Three published entrypoints (`@jeremyfuksa/campfire/tokens.css`, `/tokens`, `/tokens.json`) let projects pick whichever matches their toolchain. The full library stylesheet (`/styles.css`) already contains the CSS variant.

### Theming

Light and dark are first-class. `ThemeProvider` reads/writes a `localStorage` key and applies a `.dark` class to `<html>`; CSS variables under `.dark` override the light defaults. The `system` mode subscribes to `prefers-color-scheme`. Components never read theme state directly — they style themselves against semantic tokens, so adding a third theme is a token-only change.

## Components

Component primitives live in `src/components/ui/` and follow consistent rules:

- **One component per file**, lowercase-kebab filenames (`alert-dialog.tsx`), `PascalCase` exports.
- **Radix UI primitives** provide accessibility-correct behavior (focus management, escape handling, ARIA wiring) for anything stateful: dialogs, menus, popovers, tabs, etc.
- **CVA + Tailwind utility classes** drive variants. Variant props are typed via `VariantProps<typeof variants>`, so every state is enumerable from the type system.
- **Token-only styling.** Class strings reference utilities backed by CSS variables (e.g. `bg-bg-base`, `text-fg-default`). Hardcoded hex values are not allowed in components.
- **Stories alongside source.** Each component ships a `.stories.tsx` file used by the docs site as a living spec.
- **Tests in `__tests__/`.** Vitest + React Testing Library + jest-axe cover render output, interaction, keyboard nav, and a11y violations.

### Naming conventions

- Components export both the root and any subparts (`Card`, `CardHeader`, `CardBody`).
- Boolean props are affirmative (`disabled`, not `notEnabled`); string-enum props avoid `type` (reserved by HTML) in favor of `variant`, `size`, `tone`.
- Event handlers follow React conventions: `onChange`, `onValueChange`, `onOpenChange`.

## Accessibility

Accessibility is a baseline requirement, not a phase. See `ACCESSIBILITY.md` for the full checklist; the short version:

- All interactive components are keyboard-operable, with visible focus rings driven by semantic focus tokens.
- Color contrast meets WCAG 2.1 AA in both light and dark; tokens are tuned together rather than independently.
- Screen-reader semantics come from Radix primitives; we do not rebuild dialog/menu/popover roles by hand.
- `npm run test:a11y` runs jest-axe scans across components.

## Documentation Site

`src/App.tsx` is a single-page shell that routes between Getting Started, Foundations, Components, Tokens, Grids/Layouts, Testing, and a Complete Reference. Pages mostly render the same `*.stories.tsx` files used in tests, keeping examples honest. The site is deployed to GitHub Pages via `npm run deploy`.

## Distribution

- `npm run build:lib` — clean `dist/`, rebuild tokens, run `tsup` to emit ESM, CJS, and `.d.ts` files.
- `npm run release` — `npm version patch && build:lib && npm publish --access public`.
- `package.json#exports` defines the public API surface: the root entry, `./styles.css`, `./tokens`, `./tokens.css`, `./tokens.json`, and `./tokens.dark.json`. Anything outside these paths is internal and may change without a major version bump.

## Editor & Terminal Themes

The same palette is exported to VS Code, iTerm2, Windows Terminal, Hyper, Alacritty, and Kitty under `themes/`. These are generated from the token sources so they cannot drift from the React components.

## Decisions & Trade-offs

- **W3C DTCG over Tailwind config as source of truth.** Tailwind is a consumer of tokens, not the authority. This costs a build step but makes tokens portable to Figma and other design tools.
- **Radix UI over a hand-rolled primitive layer.** Accessibility correctness is hard; we prefer to inherit it. The trade-off is an external dependency surface we have to track.
- **CVA over runtime style props.** Variants are static and analyzable; this keeps bundle sizes predictable and makes the docs site able to enumerate every visual state.
- **Single package, not a monorepo.** The library is small enough that the overhead of workspaces would outweigh the benefit. If components grow into independently versioned surfaces (e.g. icons, charts), revisit.
- **Docs site colocated with the library.** The site is the most thorough integration test we have; splitting them would create drift.

## Future Work

See `ROADMAP.md` for the active list. Open architectural questions:

- Whether to ship a Tailwind preset alongside the CSS export.
- Whether `legacy.*` token aliases can be removed at the next major.
- Whether to extract Storybook from the bespoke docs shell once stories outnumber pages.
