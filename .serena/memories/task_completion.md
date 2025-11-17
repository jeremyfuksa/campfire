# Task Completion Checklist
1. Run `npm run lint` / `npm run test` once such scripts exist; currently none are available, so rely on TypeScript build output and manual verification in the Vite dev server.
2. If the change touches design tokens, regenerate `figma-tokens.json` via `node scripts/export-tokens.js` and confirm the JSON updates cleanly.
3. Preview the UI locally through the Vite dev server to ensure navigation between sections still works and dark/light theming toggles correctly.
4. Document any new commands or scripts in the repo and update onboarding memories if tooling changes.