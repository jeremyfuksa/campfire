# Campfire Design System

This repository contains both the Campfire docs/demo app (served via Vite) and a distributable component library that can be consumed from other projects.

## Live Site

The docs/demo site is deployed to GitHub Pages at https://jeremyfuksa.github.io/campfire so you can browse the getting-started flow, design tokens, and components without cloning the repo.

## Getting Started

### Option 1 — Install via npm

```bash
npm install @jeremyfuksa/campfire
# or
yarn add @jeremyfuksa/campfire
```

Then add the CSS tokens once (usually in your root entry file) and import components as needed:

```ts
import '@jeremyfuksa/campfire/styles.css';
import { Button } from '@jeremyfuksa/campfire';

export function Example() {
  return <Button>Campfire</Button>;
}
```

### Option 2 — Clone + run locally

```bash
git clone https://github.com/jeremyfuksa/campfire.git
cd campfire
npm install
npm run dev     # Docs & playground
npm run build   # Production build of the docs site
```

## Building the Library Locally

The reusable components live under `src/components` and are re‑exported from `src/lib/index.ts`. Run:

```bash
npm run build:lib
```

This generates ESM, CJS, and type declarations in `dist/`.

### Publishing / Installing

1. `npm run release` (runs `build:lib` then `npm publish --access public`)

Because the components rely on CSS custom properties and Tailwind‑style utility classes generated inside `styles/globals.css`, importing the stylesheet (as shown in Option 1) is required before using any components.

### Cutting a Release

```bash
npm version patch   # or minor/major according to changes
npm run release     # builds dist/ and publishes to npm
```

Ensure you're logged in (`npm login`) and have registry permissions.

## Design Tokens

Tokens are authored as W3C DTCG-format JSON under `src/tokens/` and built with [Style Dictionary](https://styledictionary.com/) into multiple distribution formats. Run `npm run tokens` to rebuild after editing.

### Consuming tokens outside Tailwind

Three published entrypoints, pick whichever matches your tool:

```ts
// 1. Plain CSS custom properties (works in any environment)
import '@jeremyfuksa/campfire/tokens.css';
//   :root { --primary-500: #607a97; ... }
//   .dark { --bg-base: var(--neutral-950); ... }

// 2. Typed JS object (for runtime access in React, Node, etc.)
import tokens from '@jeremyfuksa/campfire/tokens';
console.log(tokens.color.primary['500'].value); // "#607a97"

// 3. Raw W3C DTCG JSON (for Figma Make, design-tool importers)
import tokensJson from '@jeremyfuksa/campfire/tokens.json';
//   { "color": { "primary": { "500": { "$value": "#607a97", "$type": "color" } } } }
//
// Dark-mode override values are available at:
import darkTokens from '@jeremyfuksa/campfire/tokens.dark.json';
```

Importing the full library stylesheet (`@jeremyfuksa/campfire/styles.css`) already includes these tokens — the standalone `./tokens.css` export is for projects that want tokens *without* the component bundle.

### Docs page export

In the docs app (Design Tokens page) you can also click **Export JSON** to download `campfire-palettes.json`, a flat palette snapshot kept for backward compatibility.

## Editor & Terminal Themes

Campfire colors are available as themes for popular editors and terminals! See the [`themes/`](./themes) directory for:

- **VS Code** - Full color themes (light & dark)
- **iTerm2** - macOS terminal themes
- **Windows Terminal** - Windows terminal color schemes
- **Hyper** - Cross-platform terminal themes
- **Alacritty** - GPU-accelerated terminal themes
- **Kitty** - Fast terminal emulator themes
- **Color Exports** - JSON, CSS for custom integrations

📖 **[Installation Guide](./themes/README.md)**

## Theme Customization

Campfire includes a powerful theming system that supports light, dark, and system preference modes.

### Using the Theme Provider

Wrap your app with the `ThemeProvider`:

```tsx
import { ThemeProvider } from '@jeremyfuksa/campfire';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Theme Hooks

**useTheme** - Access and control the theme:

```tsx
import { useTheme } from '@jeremyfuksa/campfire';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

**useResolvedTheme** - Get the actual theme (resolves "system" to light/dark):

```tsx
import { useResolvedTheme } from '@jeremyfuksa/campfire';

function MyComponent() {
  const resolvedTheme = useResolvedTheme(); // "light" | "dark"
  return <div>Current theme: {resolvedTheme}</div>;
}
```

**useThemeToggle** - Simple toggle between light and dark:

```tsx
import { useThemeToggle } from '@jeremyfuksa/campfire';

function QuickToggle() {
  const toggle = useThemeToggle();
  return <button onClick={toggle}>🌓</button>;
}
```

## Testing

Campfire uses Vitest and React Testing Library for comprehensive testing.

### Running Tests

```bash
npm test              # Run tests in watch mode
npm run test:ui       # Run tests with Vitest UI
npm run test:coverage # Generate coverage report
```

### Writing Tests

All components are tested for:
- Rendering with various props
- User interactions
- Accessibility (via jest-axe)
- Keyboard navigation
- ARIA attributes

Example test:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@jeremyfuksa/campfire';

it('handles click events', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  await userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

### Contributing Tests

When adding components, include tests in `src/components/ui/__tests__/`. See `button.test.tsx` for reference.
