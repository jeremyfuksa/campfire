import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { RadioGroup, RadioGroupItem } from "../radio-group";

expect.extend(toHaveNoViolations);

describe("RadioGroup", () => {
  describe("RadioGroup Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('[data-slot="radio-group"]');
      expect(radioGroup).toBeInTheDocument();
    });

    it("has role radiogroup", () => {
      render(
        <RadioGroup aria-label="Options">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('[data-slot="radio-group"]');
      expect(radioGroup).toHaveAttribute("data-slot", "radio-group");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <RadioGroup className="custom-group">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector(".custom-group");
      expect(radioGroup).toBeInTheDocument();
    });
  });

  describe("RadioGroupItem Component", () => {
    it("renders correctly", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );
      const radios = screen.getAllByRole("radio");
      expect(radios).toHaveLength(2);
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const item = container.querySelector('[data-slot="radio-group-item"]');
      expect(item).toHaveAttribute("data-slot", "radio-group-item");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <RadioGroup>
          <RadioGroupItem value="option1" className="custom-item" aria-label="Custom" />
        </RadioGroup>
      );
      const item = container.querySelector(".custom-item");
      expect(item).toBeInTheDocument();
    });

    it("renders indicator when checked", () => {
      const { container } = render(
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const indicator = container.querySelector('[data-slot="radio-group-indicator"]');
      expect(indicator).toBeInTheDocument();
    });
  });

  describe("Selection Behavior", () => {
    it("allows only one item to be selected", async () => {
      const user = userEvent.setup();
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
          <RadioGroupItem value="option3" aria-label="Option 3" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      const option2 = screen.getByLabelText("Option 2");
      const option3 = screen.getByLabelText("Option 3");

      await user.click(option1);
      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();
      expect(option3).not.toBeChecked();

      await user.click(option2);
      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
      expect(option3).not.toBeChecked();
    });

    it("works with defaultValue", () => {
      render(
        <RadioGroup defaultValue="option2">
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      const option2 = screen.getByLabelText("Option 2");

      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });

    it("calls onValueChange when selection changes", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <RadioGroup onValueChange={handleChange}>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );

      await user.click(screen.getByLabelText("Option 1"));
      expect(handleChange).toHaveBeenCalledWith("option1");

      await user.click(screen.getByLabelText("Option 2"));
      expect(handleChange).toHaveBeenCalledWith("option2");
    });
  });

  describe("Disabled State", () => {
    it("disables entire radio group", () => {
      render(
        <RadioGroup disabled>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      const option2 = screen.getByLabelText("Option 2");

      expect(option1).toBeDisabled();
      expect(option2).toBeDisabled();
    });

    it("disables individual radio item", () => {
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" disabled aria-label="Option 2" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      const option2 = screen.getByLabelText("Option 2");

      expect(option1).not.toBeDisabled();
      expect(option2).toBeDisabled();
    });

    it("does not call onValueChange when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <RadioGroup disabled onValueChange={handleChange}>
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );

      await user.click(screen.getByLabelText("Option 1"));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const { rerender } = render(
        <RadioGroup value="option1" onValueChange={handleChange}>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      const option2 = screen.getByLabelText("Option 2");

      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();

      await user.click(option2);
      expect(handleChange).toHaveBeenCalledWith("option2");

      rerender(
        <RadioGroup value="option2" onValueChange={handleChange}>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );

      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports arrow key navigation for focus", async () => {
      const user = userEvent.setup();
      render(
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
          <RadioGroupItem value="option3" aria-label="Option 3" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      const option2 = screen.getByLabelText("Option 2");
      const option3 = screen.getByLabelText("Option 3");

      option1.focus();
      expect(option1).toHaveFocus();

      await user.keyboard("{ArrowDown}");
      expect(option2).toHaveFocus();

      await user.keyboard("{ArrowDown}");
      expect(option3).toHaveFocus();
    });

    it("supports Space key to select", async () => {
      const user = userEvent.setup();
      render(
        <RadioGroup>
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText("Option 1");
      option1.focus();

      await user.keyboard(" ");
      expect(option1).toBeChecked();
    });
  });

  describe("Orientation", () => {
    it("renders with horizontal orientation", () => {
      const { container } = render(
        <RadioGroup orientation="horizontal">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('[data-slot="radio-group"]');
      expect(radioGroup).toHaveAttribute("data-orientation", "horizontal");
    });

    it("renders with vertical orientation", () => {
      const { container } = render(
        <RadioGroup orientation="vertical">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('[data-slot="radio-group"]');
      expect(radioGroup).toHaveAttribute("data-orientation", "vertical");
    });
  });

  describe("Common Use Cases", () => {
    it("works as form control with labels", async () => {
      const user = userEvent.setup();
      render(
        <RadioGroup>
          <div>
            <RadioGroupItem value="small" id="size-small" />
            <label htmlFor="size-small">Small</label>
          </div>
          <div>
            <RadioGroupItem value="medium" id="size-medium" />
            <label htmlFor="size-medium">Medium</label>
          </div>
          <div>
            <RadioGroupItem value="large" id="size-large" />
            <label htmlFor="size-large">Large</label>
          </div>
        </RadioGroup>
      );

      const mediumLabel = screen.getByText("Medium");
      await user.click(mediumLabel);

      const mediumRadio = screen.getByLabelText("Medium");
      expect(mediumRadio).toBeChecked();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <RadioGroup aria-label="Size options">
          <RadioGroupItem value="small" aria-label="Small" />
          <RadioGroupItem value="medium" aria-label="Medium" />
          <RadioGroupItem value="large" aria-label="Large" />
        </RadioGroup>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when disabled", async () => {
      const { container } = render(
        <RadioGroup disabled aria-label="Options">
          <RadioGroupItem value="option1" aria-label="Option 1" />
          <RadioGroupItem value="option2" aria-label="Option 2" />
        </RadioGroup>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("supports aria-label", () => {
      render(
        <RadioGroup aria-label="Choose a size">
          <RadioGroupItem value="small" aria-label="Small" />
        </RadioGroup>
      );
      expect(screen.getByRole("radiogroup", { name: "Choose a size" })).toBeInTheDocument();
    });

    it("supports aria-invalid", () => {
      const { container } = render(
        <RadioGroup aria-invalid={true}>
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('[data-slot="radio-group"]');
      expect(radioGroup).toHaveAttribute("aria-invalid", "true");
    });

    it("supports required attribute", () => {
      render(
        <RadioGroup required aria-label="Options">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = screen.getByRole("radiogroup", { name: "Options" });
      // Radix UI uses aria-required instead of HTML required attribute
      expect(radioGroup).toHaveAttribute("aria-required", "true");
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", () => {
      const { container } = render(
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1" aria-label="Option 1" />
        </RadioGroup>
      );

      expect(container.querySelector('[data-slot="radio-group"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="radio-group-item"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="radio-group-indicator"]')).toBeInTheDocument();
    });
  });
});
