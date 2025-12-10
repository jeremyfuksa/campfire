import React from "react";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

const safeReplaceSync = () => {
  if (typeof CSSStyleSheet === "undefined") return;
  CSSStyleSheet.prototype.replaceSync = function () {
    return;
  };
};

if (typeof CSSStyleSheet !== "undefined") {
  safeReplaceSync();
} else {
  const interval = setInterval(() => {
    if (typeof CSSStyleSheet !== "undefined") {
      safeReplaceSync();
      clearInterval(interval);
    }
  }, 10);
}

const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    args[0].includes("Could not parse CSS stylesheet")
  ) {
    return;
  }
  originalConsoleError(...args);
};

const originalConsoleWarn = console.warn;
console.warn = (...args: unknown[]) => {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    args[0].includes("Could not parse CSS stylesheet")
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

const originalStderrWrite = process.stderr.write.bind(process.stderr);
process.stderr.write = (chunk: string | Uint8Array, ...rest: unknown[]) => {
  if (
    typeof chunk === "string" &&
    chunk.includes("Could not parse CSS stylesheet")
  ) {
    return true;
  }
  return originalStderrWrite(chunk, ...rest);
};

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock ResizeObserver for tests (used by Radix UI components)
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  // JSDOM does not implement these browser APIs; provide minimal shims so
  // layout-aware components (matchMedia consumers, Radix portals, carousels)
  // can mount safely in tests.
  const defaultMatchMedia = () => ({
    matches: false,
    media: "",
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });

  if (!global.matchMedia) {
    global.matchMedia = defaultMatchMedia as unknown as typeof global.matchMedia;
  }

  if (!global.window.matchMedia) {
    global.window.matchMedia = defaultMatchMedia;
  }

  if (!global.IntersectionObserver) {
    global.IntersectionObserver = class IntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof global.IntersectionObserver;
  }

  if (!global.document.elementFromPoint) {
    global.document.elementFromPoint = () => null;
  }

  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = () => {};
  }

  if (!Element.prototype.hasPointerCapture) {
    Element.prototype.hasPointerCapture = () => false;
  }

  if (!Element.prototype.setPointerCapture) {
    Element.prototype.setPointerCapture = () => {};
  }

  if (!Element.prototype.releasePointerCapture) {
    Element.prototype.releasePointerCapture = () => {};
  }

  // cmdk relies on this to find bounding boxes.
  if (!Element.prototype.getBoundingClientRect) {
    Element.prototype.getBoundingClientRect = () =>
      ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
      }) as DOMRect;
  }

  const mockClipboard = {
    writeText: vi.fn().mockResolvedValue(undefined),
    readText: vi.fn().mockResolvedValue(""),
  };

  let clipboardStore = mockClipboard;

  try {
    Object.defineProperty(navigator, "clipboard", {
      get: () => clipboardStore,
      set: (value) => {
        clipboardStore = value as typeof mockClipboard;
        // expose for components that need a stable reference
        (globalThis as Record<string, unknown>).__clipboardMock = clipboardStore;
      },
      configurable: true,
    });
  } catch {
    // If the property is non-configurable in this environment, remove then reassign.
    // @ts-expect-error - navigator typings are strict
    delete navigator.clipboard;
    Object.defineProperty(navigator, "clipboard", {
      get: () => clipboardStore,
      set: (value) => {
        clipboardStore = value as typeof mockClipboard;
        (globalThis as Record<string, unknown>).__clipboardMock = clipboardStore;
      },
      configurable: true,
    });
  }

  (globalThis as Record<string, unknown>).__clipboardMock = clipboardStore;

  if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = (cb: FrameRequestCallback) =>
      setTimeout(() => cb(Date.now()), 0);
  }

  if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = (id: number) => clearTimeout(id);
  }

  // Simplify Recharts responsive container so chart tests do not require layout.
  vi.mock("recharts", async (importOriginal) => {
    const actual = await importOriginal<typeof import("recharts")>("recharts");
    return {
      ...actual,
      ResponsiveContainer: ({
        width = 400,
        height = 300,
        children,
      }: {
        width?: number | string;
        height?: number | string;
        children:
          | React.ReactNode
          | ((args: { width: number; height: number }) => React.ReactNode);
      }) => {
        const resolvedWidth = typeof width === "number" ? width : 400;
        const resolvedHeight = typeof height === "number" ? height : 300;
        const content =
          typeof children === "function"
            ? children({ width: resolvedWidth, height: resolvedHeight })
            : children;
        return React.createElement(
          "div",
          { style: { width: resolvedWidth, height: resolvedHeight } },
          content,
        );
      },
    };
  });
});
