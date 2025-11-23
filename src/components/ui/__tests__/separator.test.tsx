import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Separator } from "../separator";

expect.extend(toHaveNoViolations);

describe("Separator", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(<Separator />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(<Separator className="custom-separator" />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveClass("custom-separator");
    });
  });

  describe("Orientation", () => {
    it("defaults to horizontal orientation", () => {
      const { container } = render(<Separator />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("data-orientation", "horizontal");
    });

    it("renders with horizontal orientation", () => {
      const { container } = render(<Separator orientation="horizontal" />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("data-orientation", "horizontal");
    });

    it("renders with vertical orientation", () => {
      const { container } = render(<Separator orientation="vertical" />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("data-orientation", "vertical");
    });
  });

  describe("Decorative", () => {
    it("defaults to decorative true", () => {
      const { container } = render(<Separator />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("aria-orientation", "horizontal");
      // Decorative separators have no role
      expect(separator).not.toHaveAttribute("role", "separator");
    });

    it("renders as decorative when explicitly set", () => {
      const { container } = render(<Separator decorative={true} />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).not.toHaveAttribute("role", "separator");
    });

    it("renders as semantic separator when decorative is false", () => {
      const { container } = render(<Separator decorative={false} />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("role", "separator");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Separator />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with vertical orientation", async () => {
      const { container } = render(<Separator orientation="vertical" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations as semantic separator", async () => {
      const { container } = render(<Separator decorative={false} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      const { container } = render(<Separator />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("data-slot", "separator-root");
    });

    it("has data-orientation attribute", () => {
      const { container } = render(<Separator orientation="vertical" />);
      const separator = container.querySelector('[data-slot="separator-root"]');
      expect(separator).toHaveAttribute("data-orientation", "vertical");
    });
  });
});
