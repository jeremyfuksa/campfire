# Campfire
- Purpose: static React/TypeScript implementation of the Campfire Design System downloaded from Figma; showcases pages such as Design Tokens, Foundation Components, Layouts, etc.
- Stack: plain React + TypeScript components (no bundler configured yet), shared CSS variables in `styles/globals.css`, Font Awesome for icons, Google Fonts, and a Node script for exporting tokens.
- Structure: `App.tsx` drives navigation; `components/` holds per-page experience plus composable UI, `styles/` has system-wide theme tokens, `scripts/export-tokens.js` parses the CSS variables into a Figma-ready JSON file, and `guidelines/` stores design/usage notes.
- Tooling state: repo lacks package.json/build tooling; plan is to stand up a Vite React app to serve this UI.
- Entry points: render `App` (default export) after wiring into a bundler like Vite; Node script is run manually when exporting tokens for Figma.
- Testing/linting: none defined yet.
- Platform: macOS (Darwin) shell utilities available normally (git, node, npm, etc.).