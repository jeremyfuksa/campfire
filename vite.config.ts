/// <reference types="vitest" />

import type { TestUserConfig } from "vitest/config";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const config = {
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
} satisfies UserConfig & { test?: TestUserConfig };

export default defineConfig(config);
