import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Badge } from "../badge";

expect.extend(toHaveNoViolations);

describe("Badge", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText("New")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<Badge className="custom-badge">Badge</Badge>);
      const badge = screen.getByText("Badge");
      expect(badge).toHaveClass("custom-badge");
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Badge variant="default">Default</Badge>);
      const badge = screen.getByText("Default");
      expect(badge).toHaveClass("bg-primary");
    });

    it("renders secondary variant", () => {
      render(<Badge variant="secondary">Secondary</Badge>);
      const badge = screen.getByText("Secondary");
      expect(badge).toHaveClass("bg-secondary");
    });

    it("renders destructive variant", () => {
      render(<Badge variant="destructive">Destructive</Badge>);
      const badge = screen.getByText("Destructive");
      expect(badge).toHaveClass("bg-destructive");
    });

    it("renders outline variant", () => {
      render(<Badge variant="outline">Outline</Badge>);
      const badge = screen.getByText("Outline");
      expect(badge).toHaveClass("text-foreground");
    });
  });

  describe("asChild prop", () => {
    it("renders as child component", () => {
      render(
        <Badge asChild>
          <a href="/link">Link Badge</a>
        </Badge>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveTextContent("Link Badge");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Badge>Accessible</Badge>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with all variants", async () => {
      const variants = ["default", "secondary", "destructive", "outline"] as const;
      for (const variant of variants) {
        const { container } = render(<Badge variant={variant}>{variant}</Badge>);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      render(<Badge data-testid="badge">Test</Badge>);
      const badge = screen.getByTestId("badge");
      expect(badge).toHaveAttribute("data-slot", "badge");
    });
  });
});
