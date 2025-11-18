# Campfire Design System

This repository contains both the Campfire docs/demo app (served via Vite) and a distributable component library that can be consumed from other projects.

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

## Design Tokens → JSON Export

In the docs app (Design Tokens page) you can click **Export JSON** to download `campfire-palettes.json`, which mirrors the palette defined in source and can be imported into other tools.
