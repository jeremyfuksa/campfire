import { defineConfig } from "tsup";
import fs from "node:fs";
import path from "node:path";

// Collect per-component entry points from src/components/ui/*.tsx so that
// consumers can `import { Button } from "@jeremyfuksa/campfire/button"`.
// The full barrel (`index`) stays as the primary entry.
const componentsDir = "src/components/ui";
const componentEntries = Object.fromEntries(
  fs
    .readdirSync(componentsDir)
    .filter(
      (file) =>
        file.endsWith(".tsx") &&
        !file.endsWith(".stories.tsx") &&
        !file.endsWith(".test.tsx"),
    )
    .map((file) => {
      const name = file.replace(/\.tsx$/, "");
      return [name, path.join(componentsDir, file)];
    }),
);

export default defineConfig({
  entry: {
    index: "src/lib/index.ts",
    ...componentEntries,
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  clean: false,
  external: ["react", "react-dom"],
  css: true,
  sourcemap: true,
  treeshake: true,
});
