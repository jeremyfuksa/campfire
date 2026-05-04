import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/lib/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  clean: false,
  external: ["react", "react-dom"],
  css: true,
  sourcemap: true,
  treeshake: true,
});
