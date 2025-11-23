import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";
import { Checkbox } from "../checkbox";

expect.extend(toHaveNoViolations);

describe("Checkbox", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Checkbox aria-label="Accept terms" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<Checkbox className="custom-class" aria-label="Test" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("custom-class");
    });

    it("renders unchecked by default", () => {
      render(<Checkbox aria-label="Default" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();
    });

    it("renders in checked state", () => {
      render(<Checkbox checked aria-label="Checked" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeChecked();
    });

    it("renders in disabled state", () => {
      render(<Checkbox disabled aria-label="Disabled" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeDisabled();
    });

    it("renders with aria-label", () => {
      render(<Checkbox aria-label="Accept terms and conditions" />);
      const checkbox = screen.getByLabelText("Accept terms and conditions");
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe("User Interactions", () => {
    it("toggles checked state on click", async () => {
      const user = userEvent.setup();
      render(<Checkbox aria-label="Toggle" />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it("calls onCheckedChange when toggled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox onCheckedChange={handleChange} aria-label="Test" />);
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledWith(true);

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it("does not toggle when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Checkbox disabled onCheckedChange={handleChange} aria-label="Disabled" />
      );
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).not.toHaveBeenCalled();
      expect(checkbox).not.toBeChecked();
    });

    it("supports keyboard interaction with Space key", async () => {
      const user = userEvent.setup();
      render(<Checkbox aria-label="Keyboard test" />);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      expect(checkbox).not.toBeChecked();

      await user.keyboard(" ");
      expect(checkbox).toBeChecked();

      await user.keyboard(" ");
      expect(checkbox).not.toBeChecked();
    });

    it("can be focused", () => {
      render(<Checkbox aria-label="Focusable" />);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      expect(checkbox).toHaveFocus();
    });
  });

  describe("Controlled Component", () => {
    it("works as controlled component", async () => {
      const ControlledCheckbox = () => {
        const [checked, setChecked] = React.useState(false);
        return (
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            aria-label="Controlled"
          />
        );
      };

      const user = userEvent.setup();
      render(<ControlledCheckbox />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it("respects controlled checked value", () => {
      const { rerender } = render(
        <Checkbox checked={false} aria-label="Controlled" />
      );
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();

      rerender(<Checkbox checked={true} aria-label="Controlled" />);
      expect(checkbox).toBeChecked();
    });
  });

  describe("Uncontrolled Component", () => {
    it("works as uncontrolled component with defaultChecked", () => {
      render(<Checkbox defaultChecked aria-label="Uncontrolled" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeChecked();
    });

    it("toggles state when uncontrolled", async () => {
      const user = userEvent.setup();
      render(<Checkbox defaultChecked={false} aria-label="Uncontrolled toggle" />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).not.toBeChecked();
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });

  describe("Indeterminate State", () => {
    it("supports indeterminate state", () => {
      render(<Checkbox checked="indeterminate" aria-label="Indeterminate" />);
      const checkbox = screen.getByRole("checkbox");

      // Radix UI sets data-state attribute for indeterminate
      expect(checkbox).toHaveAttribute("data-state", "indeterminate");
    });

    it("calls onCheckedChange with indeterminate value", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Checkbox
          checked="indeterminate"
          onCheckedChange={handleChange}
          aria-label="Indeterminate test"
        />
      );
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      // First click should toggle from indeterminate to checked
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Validation States", () => {
    it("renders with aria-invalid attribute", () => {
      render(<Checkbox aria-invalid={true} aria-label="Invalid" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-invalid", "true");
    });

    it("renders with required attribute", () => {
      render(<Checkbox required aria-label="Required" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeRequired();
    });
  });

  describe("Form Integration", () => {
    it("accepts name attribute for form integration", () => {
      render(<Checkbox name="accept-terms" aria-label="Terms" />);
      // Radix UI creates a hidden input with the name attribute
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("accepts value attribute", () => {
      render(<Checkbox value="yes" aria-label="Value test" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
    });

    it("works within a form", async () => {
      const handleSubmit = vi.fn((e) => e.preventDefault());
      const user = userEvent.setup();

      render(
        <form onSubmit={handleSubmit}>
          <Checkbox name="subscribe" value="newsletter" aria-label="Subscribe" />
          <button type="submit">Submit</button>
        </form>
      );

      const checkbox = screen.getByRole("checkbox");
      const submitButton = screen.getByRole("button", { name: "Submit" });

      await user.click(checkbox);
      await user.click(submitButton);

      expect(handleSubmit).toHaveBeenCalled();
      expect(checkbox).toBeChecked();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations with aria-label", async () => {
      const { container } = render(
        <Checkbox aria-label="I accept the terms and conditions" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when checked", async () => {
      const { container } = render(
        <Checkbox checked aria-label="Checked checkbox" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when disabled", async () => {
      const { container} = render(
        <Checkbox disabled aria-label="Disabled checkbox" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when required", async () => {
      const { container } = render(
        <Checkbox required aria-label="Required checkbox" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper aria-describedby association", () => {
      render(
        <div>
          <Checkbox aria-describedby="helper-text" aria-label="Test" />
          <p id="helper-text">This is helper text</p>
        </div>
      );
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-describedby", "helper-text");
    });

    it("supports aria-labelledby", () => {
      render(
        <div>
          <span id="checkbox-label">Accept terms</span>
          <Checkbox aria-labelledby="checkbox-label" />
        </div>
      );
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-label");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-slot attribute", () => {
      render(<Checkbox aria-label="Slot test" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("data-slot", "checkbox");
    });

    it("has data-state attribute reflecting checked state", () => {
      const { rerender } = render(<Checkbox aria-label="State test" />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toHaveAttribute("data-state", "unchecked");

      rerender(<Checkbox checked aria-label="State test" />);
      expect(checkbox).toHaveAttribute("data-state", "checked");
    });

    it("accepts custom data attributes", () => {
      render(
        <Checkbox
          data-testid="custom-checkbox"
          data-custom="value"
          aria-label="Custom data"
        />
      );
      const checkbox = screen.getByTestId("custom-checkbox");
      expect(checkbox).toHaveAttribute("data-custom", "value");
    });
  });

  describe("ID Attribute", () => {
    it("accepts id attribute for label association", () => {
      render(
        <div>
          <Checkbox id="my-checkbox" />
          <label htmlFor="my-checkbox">Label text</label>
        </div>
      );
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("id", "my-checkbox");
    });
  });

  describe("Visual Indicator", () => {
    it("shows check icon when checked", () => {
      const { container } = render(<Checkbox checked aria-label="Check icon test" />);
      // The check icon is rendered via the Indicator component
      const indicator = container.querySelector('[data-slot="checkbox-indicator"]');
      expect(indicator).toBeInTheDocument();
    });
  });
});
