import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Progress } from "../progress";

expect.extend(toHaveNoViolations);

describe("Progress", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(<Progress value={50} />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toBeInTheDocument();
    });

    it("renders with 0 value", () => {
      const { container } = render(<Progress value={0} />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toBeInTheDocument();
    });

    it("renders with 100 value", () => {
      const { container } = render(<Progress value={100} />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toBeInTheDocument();
    });

    it("renders without value", () => {
      const { container } = render(<Progress />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(<Progress value={50} className="custom-progress" />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toHaveClass("custom-progress");
    });
  });

  describe("Progress Values", () => {
    it("applies correct transform for 0%", () => {
      const { container } = render(<Progress value={0} />);
      const indicator = container.querySelector('[data-slot="progress-indicator"]');
      expect(indicator).toHaveStyle({ transform: "translateX(-100%)" });
    });

    it("applies correct transform for 50%", () => {
      const { container } = render(<Progress value={50} />);
      const indicator = container.querySelector('[data-slot="progress-indicator"]');
      expect(indicator).toHaveStyle({ transform: "translateX(-50%)" });
    });

    it("applies correct transform for 100%", () => {
      const { container } = render(<Progress value={100} />);
      const indicator = container.querySelector('[data-slot="progress-indicator"]');
      expect(indicator).toHaveStyle({ transform: "translateX(-0%)" });
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Progress value={60} aria-label="Loading progress" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("supports aria-label", () => {
      const { container } = render(<Progress value={50} aria-label="Upload progress" />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toHaveAttribute("aria-label", "Upload progress");
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute on root", () => {
      const { container } = render(<Progress value={50} />);
      const progress = container.querySelector('[data-slot="progress"]');
      expect(progress).toBeInTheDocument();
    });

    it("has data-slot attribute on indicator", () => {
      const { container } = render(<Progress value={50} />);
      const indicator = container.querySelector('[data-slot="progress-indicator"]');
      expect(indicator).toBeInTheDocument();
    });
  });
});
