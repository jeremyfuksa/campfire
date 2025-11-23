import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Link } from "../link";

expect.extend(toHaveNoViolations);

describe("Link", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Link href="/test">Link text</Link>);
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent("Link text");
    });

    it("renders with href attribute", () => {
      render(<Link href="/about">About</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/about");
    });

    it("renders with custom className", () => {
      render(<Link href="/test" className="custom-link">Custom</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("custom-link");
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Link href="/test" variant="default">Default</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("text-[var(--interactive-default)]");
    });

    it("renders subtle variant", () => {
      render(<Link href="/test" variant="subtle">Subtle</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("text-[var(--text-secondary)]");
    });

    it("renders bold variant", () => {
      render(<Link href="/test" variant="bold">Bold</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("text-[var(--interactive-default)]");
      expect(link).toHaveClass("font-medium");
    });

    it("renders muted variant", () => {
      render(<Link href="/test" variant="muted">Muted</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("text-[var(--text-tertiary)]");
    });
  });

  describe("Underline Options", () => {
    it("defaults to hover underline", () => {
      render(<Link href="/test">Hover</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("hover:underline");
    });

    it("renders with always underline", () => {
      render(<Link href="/test" underline="always">Always</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("underline");
    });

    it("renders with hover underline", () => {
      render(<Link href="/test" underline="hover">Hover</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveClass("hover:underline");
    });

    it("renders with no underline", () => {
      render(<Link href="/test" underline="none">None</Link>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveClass("underline");
      expect(link).not.toHaveClass("hover:underline");
    });
  });

  describe("External Links", () => {
    it("renders external link with target blank", () => {
      render(<Link href="https://example.com" external>External</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renders external icon for external links", () => {
      const { container } = render(
        <Link href="https://example.com" external>External</Link>
      );
      const icon = container.querySelector(".fa-arrow-up-right-from-square");
      expect(icon).toBeInTheDocument();
    });

    it("does not render external icon for internal links", () => {
      const { container } = render(<Link href="/internal">Internal</Link>);
      const icon = container.querySelector(".fa-arrow-up-right-from-square");
      expect(icon).not.toBeInTheDocument();
    });

    it("does not set target blank for non-external links", () => {
      render(<Link href="/internal">Internal</Link>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target");
      expect(link).not.toHaveAttribute("rel");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Link href="/test">Accessible Link</Link>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with all variants", async () => {
      const variants = ["default", "subtle", "bold", "muted"] as const;
      for (const variant of variants) {
        const { container } = render(
          <Link href="/test" variant={variant}>{variant}</Link>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });

    it("should not have violations with external link", async () => {
      const { container } = render(
        <Link href="https://example.com" external>External Link</Link>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Common Use Cases", () => {
    it("renders navigation link", () => {
      render(<Link href="/dashboard">Dashboard</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/dashboard");
    });

    it("renders documentation link", () => {
      render(
        <Link href="https://docs.example.com" external>
          Documentation
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("accepts custom inline styles", () => {
      render(
        <Link href="/test" style={{ color: "red" }}>
          Styled Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveStyle({ color: "red" });
    });
  });
});
