import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    environmentOptions: {
      // Prevent happy-dom from making real network requests for iframes
      // (recharts/embla iframes try to fetch external URLs in tests).
      happyDOM: {
        settings: {
          disableJavaScriptFileLoading: true,
          disableJavaScriptEvaluation: false,
          disableCSSFileLoading: true,
          disableComputedStyleRendering: true,
          fetch: { disableSameOriginPolicy: false },
        },
      },
    },
    setupFiles: ["./vitest.setup.ts"],
    testTimeout: 30000,
    hookTimeout: 30000,
    teardownTimeout: 10000,
    // input-otp schedules a setTimeout that touches `window`; if a worker
    // is reused while a timer fires after teardown, it crashes the worker.
    // Forks pool with isolate=true gives each test file a fresh process
    // and a fresh jsdom, so post-teardown timers are safely orphaned.
    pool: "forks",
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
