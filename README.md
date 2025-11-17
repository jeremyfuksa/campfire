# Campfire Design System

This repository contains both the Campfire docs/demo app (served via Vite) and a distributable component library that can be consumed from other projects.

## Getting Started

```bash
npm install
npm run dev     # Docs & playground
npm run build   # Production build of the docs site
```

## Building the Library

The reusable components live under `src/components` and are re‑exported from `src/lib/index.ts`. Run:

```bash
npm run build:lib
```

This generates ESM, CJS, and type declarations in `dist/`.

### Publishing / Installing

1. `npm run build:lib`
2. `npm publish` (or `npm pack` + publish to your registry)

Consumers should install the package and include the CSS/token file once:

```ts
import '@campfire/design-system/styles.css';
import { Button } from '@campfire/design-system';

export function Example() {
  return <Button>Campfire</Button>;
}
```

Because the components rely on CSS custom properties and Tailwind‑style utility classes generated inside `styles/globals.css`, importing the stylesheet is required before using any components.

## Design Tokens → JSON Export

In the docs app (Design Tokens page) you can click **Export JSON** to download `campfire-palettes.json`, which mirrors the palette defined in source and can be imported into other tools.
