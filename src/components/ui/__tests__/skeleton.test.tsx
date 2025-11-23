import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Skeleton } from "../skeleton";

expect.extend(toHaveNoViolations);

describe("Skeleton", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(<Skeleton />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(<Skeleton className="h-10 w-32" />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveClass("h-10", "w-32");
    });

    it("has animate-pulse class", () => {
      const { container } = render(<Skeleton />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveClass("animate-pulse");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Skeleton aria-label="Loading..." />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("supports aria-label", () => {
      const { container } = render(<Skeleton aria-label="Loading content" />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveAttribute("aria-label", "Loading content");
    });

    it("supports aria-busy", () => {
      const { container } = render(<Skeleton aria-busy="true" />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveAttribute("aria-busy", "true");
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      const { container } = render(<Skeleton />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveAttribute("data-slot", "skeleton");
    });

    it("accepts custom data attributes", () => {
      const { container } = render(<Skeleton data-testid="skeleton-loader" />);
      const skeleton = container.querySelector('[data-testid="skeleton-loader"]');
      expect(skeleton).toBeInTheDocument();
    });
  });

  describe("Common Use Cases", () => {
    it("renders as rectangular placeholder", () => {
      const { container } = render(<Skeleton className="h-4 w-full" />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveClass("h-4", "w-full");
    });

    it("renders as circular placeholder", () => {
      const { container } = render(<Skeleton className="h-12 w-12 rounded-full" />);
      const skeleton = container.querySelector('[data-slot="skeleton"]');
      expect(skeleton).toHaveClass("rounded-full");
    });
  });
});
