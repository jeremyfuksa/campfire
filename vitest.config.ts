import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    testTimeout: 30000,
    hookTimeout: 30000,
    teardownTimeout: 10000,
    // Cap concurrent forks to keep peak heap manageable in CI runners.
    // input-otp schedules a setTimeout that touches `window`; if a worker
    // is reused while a timer fires after teardown, it crashes the worker.
    // Bounded forks + isolate per file = each test file gets a fresh
    // jsdom window and timers are safely orphaned.
    pool: "forks",
    maxForks: 2,
    minForks: 1,
    isolate: true,
    // Stub global stylesheets — jsdom's CSSOM stack-overflows on the v4
    // bundle, and the tests don't need real styles applied (only computed
    // properties from inline styles and direct className assertions).
    server: {
      deps: {
        inline: [/\.css$/],
      },
    },
    css: {
      include: [],
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.config.ts",
        "**/*.d.ts",
        "**/main.tsx",
        "**/App.tsx",
        "src/components/*Page*.tsx",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
