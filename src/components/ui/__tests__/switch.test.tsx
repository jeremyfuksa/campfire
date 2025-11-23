import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import * as React from "react";
import { Switch } from "../switch";

expect.extend(toHaveNoViolations);

describe("Switch", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Switch aria-label="Toggle notifications" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeInTheDocument();
    });

    it("renders unchecked by default", () => {
      render(<Switch aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).not.toBeChecked();
    });

    it("renders in checked state", () => {
      render(<Switch checked aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeChecked();
    });

    it("renders disabled", () => {
      render(<Switch disabled aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeDisabled();
    });

    it("applies custom className", () => {
      render(<Switch className="custom-switch" aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toHaveClass("custom-switch");
    });
  });

  describe("User Interactions", () => {
    it("toggles on click", async () => {
      const user = userEvent.setup();
      render(<Switch aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      expect(switchElement).not.toBeChecked();
      await user.click(switchElement);
      expect(switchElement).toBeChecked();
      await user.click(switchElement);
      expect(switchElement).not.toBeChecked();
    });

    it("calls onCheckedChange when toggled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch onCheckedChange={handleChange} aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(true);

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it("does not toggle when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch disabled onCheckedChange={handleChange} aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      await user.click(switchElement);
      expect(handleChange).not.toHaveBeenCalled();
      expect(switchElement).not.toBeChecked();
    });

    it("supports keyboard interaction with Space", async () => {
      const user = userEvent.setup();
      render(<Switch aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      switchElement.focus();
      expect(switchElement).not.toBeChecked();

      await user.keyboard(" ");
      expect(switchElement).toBeChecked();

      await user.keyboard(" ");
      expect(switchElement).not.toBeChecked();
    });

    it("can be focused", () => {
      render(<Switch aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      switchElement.focus();
      expect(switchElement).toHaveFocus();
    });
  });

  describe("Controlled Component", () => {
    it("works as controlled component", async () => {
      const ControlledSwitch = () => {
        const [checked, setChecked] = React.useState(false);
        return (
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
            aria-label="Controlled"
          />
        );
      };

      const user = userEvent.setup();
      render(<ControlledSwitch />);
      const switchElement = screen.getByRole("switch");

      expect(switchElement).not.toBeChecked();
      await user.click(switchElement);
      expect(switchElement).toBeChecked();
      await user.click(switchElement);
      expect(switchElement).not.toBeChecked();
    });

    it("respects controlled checked value", () => {
      const { rerender } = render(<Switch checked={false} aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).not.toBeChecked();

      rerender(<Switch checked={true} aria-label="Toggle" />);
      expect(switchElement).toBeChecked();
    });
  });

  describe("Uncontrolled Component", () => {
    it("works with defaultChecked", () => {
      render(<Switch defaultChecked aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeChecked();
    });

    it("toggles when uncontrolled", async () => {
      const user = userEvent.setup();
      render(<Switch defaultChecked={false} aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      expect(switchElement).not.toBeChecked();
      await user.click(switchElement);
      expect(switchElement).toBeChecked();
    });
  });

  describe("Validation States", () => {
    it("renders with required attribute", () => {
      render(<Switch required aria-label="Required" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeRequired();
    });
  });

  describe("Form Integration", () => {
    it("accepts name attribute", () => {
      render(<Switch name="notifications" aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeInTheDocument();
    });

    it("accepts value attribute", () => {
      render(<Switch value="on" aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<Switch aria-label="Toggle setting" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when checked", async () => {
      const { container } = render(<Switch checked aria-label="Toggle" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when disabled", async () => {
      const { container } = render(<Switch disabled aria-label="Toggle" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper aria-describedby", () => {
      render(
        <div>
          <Switch aria-describedby="switch-desc" aria-label="Toggle" />
          <p id="switch-desc">Enable notifications</p>
        </div>
      );
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toHaveAttribute("aria-describedby", "switch-desc");
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      render(<Switch aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toHaveAttribute("data-slot", "switch");
    });

    it("has data-state attribute", () => {
      const { rerender } = render(<Switch aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");

      expect(switchElement).toHaveAttribute("data-state", "unchecked");

      rerender(<Switch checked aria-label="Toggle" />);
      expect(switchElement).toHaveAttribute("data-state", "checked");
    });
  });

  describe("ID Attribute", () => {
    it("accepts id attribute", () => {
      render(<Switch id="notification-switch" aria-label="Toggle" />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toHaveAttribute("id", "notification-switch");
    });
  });
});
