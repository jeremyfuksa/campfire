import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Info, Star } from "lucide-react";
import { HelperText } from "../helper-text";

expect.extend(toHaveNoViolations);

describe("HelperText", () => {
  it("renders correctly", () => {
    render(<HelperText>This is helper text</HelperText>);
    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<HelperText variant="default">Default helper text</HelperText>);
      expect(screen.getByText("Default helper text")).toBeInTheDocument();
    });

    it("renders error variant", () => {
      render(<HelperText variant="error">Error message</HelperText>);
      expect(screen.getByText("Error message")).toBeInTheDocument();
      expect(screen.getByTestId("helper-text-icon-error")).toBeInTheDocument();
    });

    it("renders success variant", () => {
      render(<HelperText variant="success">Success message</HelperText>);
      expect(screen.getByText("Success message")).toBeInTheDocument();
      expect(screen.getByTestId("helper-text-icon-success")).toBeInTheDocument();
    });

    it("renders warning variant", () => {
      render(<HelperText variant="warning">Warning message</HelperText>);
      expect(screen.getByText("Warning message")).toBeInTheDocument();
      expect(screen.getByTestId("helper-text-icon-warning")).toBeInTheDocument();
    });
  });

  describe("Icons", () => {
    it("renders default icon for error variant", () => {
      render(<HelperText variant="error">Error</HelperText>);
      expect(screen.getByTestId("helper-text-icon-error")).toBeInTheDocument();
    });

    it("renders custom icon", () => {
      render(
        <HelperText variant="default" icon={<Info data-testid="custom-info-icon" />}>
          Custom icon
        </HelperText>,
      );
      expect(screen.getByTestId("custom-info-icon")).toBeInTheDocument();
    });

    it("custom icon overrides default variant icon", () => {
      render(
        <HelperText variant="error" icon={<Star data-testid="custom-star-icon" />}>
          Custom icon overrides
        </HelperText>,
      );
      expect(screen.getByTestId("custom-star-icon")).toBeInTheDocument();
    });

    it("does not render icon for default variant without custom icon", () => {
      render(<HelperText variant="default">No icon</HelperText>);
      expect(screen.queryByTestId("helper-text-icon-default")).not.toBeInTheDocument();
    });
  });

  it("renders with custom className", () => {
    const { container } = render(
      <HelperText className="custom-helper">Custom</HelperText>,
    );
    const helperText = container.querySelector(".custom-helper");
    expect(helperText).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<HelperText>Accessible helper text</HelperText>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with all variants", async () => {
    const variants = ["default", "error", "success", "warning"] as const;
    for (const variant of variants) {
      const { container } = render(
        <HelperText variant={variant}>{variant} text</HelperText>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
