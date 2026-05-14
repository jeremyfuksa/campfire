import { render, cleanup } from "@testing-library/react";
import { describe, it, afterEach, expect } from "vitest";
import React from "react";
import { ThemeProvider } from "../components/theme-provider";

// Smoke-render every Story export so regressions like "broken story import,"
// "story render throws," or "removed component still referenced by story"
// fail loudly. This is the lightest form of visual-regression coverage —
// it doesn't compare screenshots, but every story exercising its render path
// catches the most common breakages and complements the per-component tests
// in src/components/ui/__tests__/.

type StoryExport = {
  render?: (args?: unknown) => React.ReactElement;
  args?: Record<string, unknown>;
};

type StoryModule = Record<string, unknown> & {
  default?: { component?: React.ComponentType<unknown> };
};

// eager glob: load every stories file at module init so the test list is
// known up-front (no async describe).
const modules = import.meta.glob<StoryModule>(
  "../components/ui/*.stories.tsx",
  { eager: true },
);

const isStoryExport = (value: unknown): value is StoryExport =>
  typeof value === "object" && value !== null;

const RUNTIME_INTERNAL_KEYS = new Set([
  "default",
  "__esModule",
  "Story",
  "StoryObj",
  "Meta",
  "tags",
]);

const STORYBOOK_PARAM_KEYS = new Set([
  "args",
  "argTypes",
  "parameters",
  "decorators",
  "loaders",
  "play",
  "tags",
  "name",
  "storyName",
]);

afterEach(() => {
  cleanup();
});

describe("stories smoke", () => {
  for (const [modPath, mod] of Object.entries(modules)) {
    const fileName = modPath.split("/").pop()!.replace(/\.stories\.tsx$/, "");
    const Component = mod.default?.component;

    for (const [exportName, value] of Object.entries(mod)) {
      if (RUNTIME_INTERNAL_KEYS.has(exportName)) continue;
      if (!isStoryExport(value)) continue;

      it(`${fileName} › ${exportName}`, () => {
        if (typeof value.render === "function") {
          // Storybook treats `render` as a function component; if we just
          // invoke it directly, any hooks inside fail with "invalid hook
          // call." Wrap it in a real component so React mounts a fiber.
          const StoryRender = value.render;
          const Wrapper: React.FC = () =>
            StoryRender(value.args) as React.ReactElement;
          render(
            <ThemeProvider>
              <Wrapper />
            </ThemeProvider>,
          );
          return;
        }
        // Args-only story: instantiate the meta.component with args.
        // Filter out Storybook-only keys that the component itself doesn't accept.
        if (!Component) return;
        const filteredArgs = Object.fromEntries(
          Object.entries(value.args ?? {}).filter(
            ([k]) => !STORYBOOK_PARAM_KEYS.has(k),
          ),
        );
        expect(() =>
          render(
            <ThemeProvider>
              {React.createElement(Component, filteredArgs)}
            </ThemeProvider>,
          ),
        ).not.toThrow();
      });
    }
  }
});
