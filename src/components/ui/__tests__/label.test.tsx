import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Label } from "../label";
import { Input } from "../input";

expect.extend(toHaveNoViolations);

describe("Label", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Label>Label text</Label>);
      expect(screen.getByText("Label text")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<Label className="custom-label">Text</Label>);
      const label = screen.getByText("Text");
      expect(label).toHaveClass("custom-label");
    });

    it("renders with htmlFor attribute", () => {
      render(<Label htmlFor="input-id">Email</Label>);
      const label = screen.getByText("Email");
      expect(label).toHaveAttribute("for", "input-id");
    });
  });

  describe("Form Association", () => {
    it("associates with input via htmlFor", () => {
      render(
        <div>
          <Label htmlFor="email-input">Email Address</Label>
          <Input id="email-input" />
        </div>
      );

      const label = screen.getByText("Email Address");
      const input = screen.getByRole("textbox");

      expect(label).toHaveAttribute("for", "email-input");
      expect(input).toHaveAttribute("id", "email-input");
    });

    it("clicking label focuses associated input", async () => {
      render(
        <div>
          <Label htmlFor="test-input">Test Label</Label>
          <Input id="test-input" />
        </div>
      );

      const label = screen.getByText("Test Label");
      const input = screen.getByRole("textbox");

      label.click();
      expect(input).toHaveFocus();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      render(<Label data-testid="label">Test</Label>);
      const label = screen.getByTestId("label");
      expect(label).toHaveAttribute("data-slot", "label");
    });
  });
});
