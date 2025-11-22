import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Toggle } from "../toggle";

expect.extend(toHaveNoViolations);

describe("Toggle", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Toggle aria-label="Toggle">Toggle</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveTextContent("Toggle");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Toggle className="custom-toggle" aria-label="Custom">
          Custom
        </Toggle>
      );
      const toggle = container.querySelector(".custom-toggle");
      expect(toggle).toBeInTheDocument();
    });

    it("renders with aria-label", () => {
      render(<Toggle aria-label="Mute audio">Mute</Toggle>);
      const toggle = screen.getByLabelText("Mute audio");
      expect(toggle).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Toggle variant="default" aria-label="Default">Default</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveClass("bg-transparent");
    });

    it("renders outline variant", () => {
      render(<Toggle variant="outline" aria-label="Outline">Outline</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveClass("border", "border-input");
    });
  });

  describe("Sizes", () => {
    it("renders default size", () => {
      render(<Toggle size="default" aria-label="Default">Default</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveClass("h-9");
    });

    it("renders small size", () => {
      render(<Toggle size="sm" aria-label="Small">Small</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveClass("h-8");
    });

    it("renders large size", () => {
      render(<Toggle size="lg" aria-label="Large">Large</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveClass("h-10");
    });
  });

  describe("Toggle State", () => {
    it("starts in unpressed state by default", () => {
      render(<Toggle aria-label="Toggle">Toggle</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveAttribute("data-state", "off");
      expect(toggle).toHaveAttribute("aria-pressed", "false");
    });

    it("renders in pressed state when defaultPressed is true", () => {
      render(<Toggle defaultPressed aria-label="Pressed">Pressed</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveAttribute("data-state", "on");
      expect(toggle).toHaveAttribute("aria-pressed", "true");
    });

    it("toggles state on click", async () => {
      const user = userEvent.setup();
      render(<Toggle aria-label="Toggle">Toggle</Toggle>);
      const toggle = screen.getByRole("button");

      expect(toggle).toHaveAttribute("data-state", "off");

      await user.click(toggle);
      expect(toggle).toHaveAttribute("data-state", "on");

      await user.click(toggle);
      expect(toggle).toHaveAttribute("data-state", "off");
    });

    it("calls onPressedChange when toggled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Toggle onPressedChange={handleChange} aria-label="Toggle">
          Toggle
        </Toggle>
      );
      const toggle = screen.getByRole("button");

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(true);

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(false);
    });
  });

  describe("Disabled State", () => {
    it("renders in disabled state", () => {
      render(<Toggle disabled aria-label="Disabled">Disabled</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toBeDisabled();
    });

    it("does not toggle when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Toggle disabled onPressedChange={handleChange} aria-label="Disabled">
          Disabled
        </Toggle>
      );
      const toggle = screen.getByRole("button");

      await user.click(toggle);
      expect(handleChange).not.toHaveBeenCalled();
      expect(toggle).toHaveAttribute("data-state", "off");
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      const { rerender } = render(
        <Toggle pressed={false} onPressedChange={handleChange} aria-label="Controlled">
          Controlled
        </Toggle>
      );
      const toggle = screen.getByRole("button");

      expect(toggle).toHaveAttribute("data-state", "off");

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(true);

      rerender(
        <Toggle pressed={true} onPressedChange={handleChange} aria-label="Controlled">
          Controlled
        </Toggle>
      );
      expect(toggle).toHaveAttribute("data-state", "on");
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports keyboard interaction with Space", async () => {
      const user = userEvent.setup();
      render(<Toggle aria-label="Keyboard">Toggle</Toggle>);
      const toggle = screen.getByRole("button");

      toggle.focus();
      expect(toggle).toHaveFocus();

      await user.keyboard(" ");
      expect(toggle).toHaveAttribute("data-state", "on");

      await user.keyboard(" ");
      expect(toggle).toHaveAttribute("data-state", "off");
    });

    it("supports keyboard interaction with Enter", async () => {
      const user = userEvent.setup();
      render(<Toggle aria-label="Keyboard">Toggle</Toggle>);
      const toggle = screen.getByRole("button");

      toggle.focus();

      await user.keyboard("{Enter}");
      expect(toggle).toHaveAttribute("data-state", "on");
    });
  });

  describe("Common Use Cases", () => {
    it("works as bold text toggle", () => {
      render(
        <Toggle aria-label="Toggle bold">
          <svg data-testid="bold-icon" />
          <span className="sr-only">Bold</span>
        </Toggle>
      );
      expect(screen.getByTestId("bold-icon")).toBeInTheDocument();
    });

    it("works with icon only", () => {
      render(
        <Toggle aria-label="Toggle italic">
          <svg data-testid="italic-icon" />
        </Toggle>
      );
      expect(screen.getByTestId("italic-icon")).toBeInTheDocument();
    });

    it("works with text and icon", () => {
      render(
        <Toggle aria-label="Toggle notifications">
          <svg data-testid="bell-icon" />
          Notifications
        </Toggle>
      );
      expect(screen.getByTestId("bell-icon")).toBeInTheDocument();
      expect(screen.getByText("Notifications")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Toggle aria-label="Accessible toggle">Toggle</Toggle>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with all variants", async () => {
      const variants = ["default", "outline"] as const;
      for (const variant of variants) {
        const { container } = render(
          <Toggle variant={variant} aria-label={`${variant} toggle`}>
            {variant}
          </Toggle>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });

    it("should not have violations with all sizes", async () => {
      const sizes = ["default", "sm", "lg"] as const;
      for (const size of sizes) {
        const { container } = render(
          <Toggle size={size} aria-label={`${size} toggle`}>
            {size}
          </Toggle>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });

    it("has proper aria-pressed attribute", () => {
      render(<Toggle aria-label="Toggle">Toggle</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveAttribute("aria-pressed");
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      const { container } = render(<Toggle aria-label="Test">Test</Toggle>);
      const toggle = container.querySelector('[data-slot="toggle"]');
      expect(toggle).toHaveAttribute("data-slot", "toggle");
    });

    it("has data-state attribute", () => {
      render(<Toggle aria-label="State">State</Toggle>);
      const toggle = screen.getByRole("button");
      expect(toggle).toHaveAttribute("data-state");
    });
  });
});
