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

if (!globalThis.matchMedia) {
  // Some libraries read matchMedia off globalThis; provide the same stub.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).matchMedia = window.matchMedia;
}

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

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  writable: true,
  value: vi.fn(),
});

Object.defineProperty(SVGElement.prototype, "scrollIntoView", {
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

Object.defineProperty(document, "elementFromPoint", {
  writable: true,
  value: () => document.body || null,
});
