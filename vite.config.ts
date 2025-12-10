import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { InlineConfig } from "vitest";

interface VitestUserConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/campfire/",
  plugins: [react()],
  server: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
} as VitestUserConfigExport);
