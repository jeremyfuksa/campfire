# Style & Conventions
- Components are idiomatic React function components written in TypeScript; hooks (`useState`, `useEffect`) drive local state.
- Layout relies on utility-class strings (Tailwind-like) mixed with inline styles referencing CSS variables defined in `styles/globals.css`.
- Design tokens live as CSS custom properties grouped by semantic names; prefer using those variables instead of hex literals.
- Icons come from Font Awesome via the CDN import in `styles/globals.css`.
- Keep design sections decomposed into small components inside `components/`; data is usually expressed as structured arrays near the top of each file.
- Comments are sparse; rely on self-descriptive names. Add brief clarifying comments only around complex mapping logic or layout hacks.