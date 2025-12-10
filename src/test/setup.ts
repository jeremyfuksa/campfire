import { expect, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend expect with DOM matchers for Testing Library.
expect.extend(matchers);

// JSDOM lacks some browser APIs that components rely on; provide light stubs.
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(global, "ResizeObserver", {
  writable: true,
  value: ResizeObserver,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    media: query,
    matches: false,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

Object.defineProperty(navigator, "clipboard", {
  writable: true,
  value: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserver,
});

Object.defineProperty(Element.prototype, "scrollIntoView", {
  writable: true,
  value: vi.fn(),
});

Element.prototype.getBoundingClientRect = function () {
  return {
    x: 0,
    y: 0,
    width: 300,
    height: 200,
    top: 0,
    left: 0,
    right: 300,
    bottom: 200,
    toJSON: () => ({}),
  };
};
