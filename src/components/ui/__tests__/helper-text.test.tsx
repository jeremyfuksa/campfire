import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
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
      const { container } = render(<HelperText variant="error">Error message</HelperText>);
      expect(screen.getByText("Error message")).toBeInTheDocument();
      const icon = container.querySelector(".fa-circle-exclamation");
      expect(icon).toBeInTheDocument();
    });

    it("renders success variant", () => {
      const { container } = render(<HelperText variant="success">Success message</HelperText>);
      expect(screen.getByText("Success message")).toBeInTheDocument();
      const icon = container.querySelector(".fa-circle-check");
      expect(icon).toBeInTheDocument();
    });

    it("renders warning variant", () => {
      const { container } = render(<HelperText variant="warning">Warning message</HelperText>);
      expect(screen.getByText("Warning message")).toBeInTheDocument();
      const icon = container.querySelector(".fa-triangle-exclamation");
      expect(icon).toBeInTheDocument();
    });
  });

  describe("Icons", () => {
    it("renders default icon for error variant", () => {
      const { container } = render(<HelperText variant="error">Error</HelperText>);
      const icon = container.querySelector(".fa-circle-exclamation");
      expect(icon).toBeInTheDocument();
    });

    it("renders custom icon", () => {
      const { container } = render(
        <HelperText variant="default" icon="fa-info-circle">
          Custom icon
        </HelperText>
      );
      const icon = container.querySelector(".fa-info-circle");
      expect(icon).toBeInTheDocument();
    });

    it("custom icon overrides default variant icon", () => {
      const { container } = render(
        <HelperText variant="error" icon="fa-star">
          Custom icon overrides
        </HelperText>
      );
      const customIcon = container.querySelector(".fa-star");
      const defaultIcon = container.querySelector(".fa-circle-exclamation");
      expect(customIcon).toBeInTheDocument();
      expect(defaultIcon).not.toBeInTheDocument();
    });

    it("does not render icon for default variant without custom icon", () => {
      const { container } = render(<HelperText variant="default">No icon</HelperText>);
      const icon = container.querySelector("i");
      expect(icon).not.toBeInTheDocument();
    });
  });

  it("renders with custom className", () => {
    const { container } = render(
      <HelperText className="custom-helper">Custom</HelperText>
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
        <HelperText variant={variant}>{variant} text</HelperText>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
