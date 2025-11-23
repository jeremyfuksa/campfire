import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";

expect.extend(toHaveNoViolations);

describe("ToggleGroup", () => {
  describe("ToggleGroup Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toHaveAttribute("data-slot", "toggle-group");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <ToggleGroup type="single" className="custom-group">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector(".custom-group");
      expect(group).toBeInTheDocument();
    });
  });

  describe("Single Type", () => {
    it("allows only one item selected at a time", async () => {
      const user = userEvent.setup();
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">
            Item 2
          </ToggleGroupItem>
        </ToggleGroup>
      );

      const item1 = screen.getByLabelText("Item 1");
      const item2 = screen.getByLabelText("Item 2");

      await user.click(item1);
      expect(item1).toHaveAttribute("data-state", "on");

      await user.click(item2);
      expect(item2).toHaveAttribute("data-state", "on");
      expect(item1).toHaveAttribute("data-state", "off");
    });

    it("works with defaultValue", () => {
      render(
        <ToggleGroup type="single" defaultValue="item2">
          <ToggleGroupItem value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">
            Item 2
          </ToggleGroupItem>
        </ToggleGroup>
      );

      const item2 = screen.getByLabelText("Item 2");
      expect(item2).toHaveAttribute("data-state", "on");
    });
  });

  describe("Multiple Type", () => {
    it("allows multiple items selected at once", async () => {
      const user = userEvent.setup();
      render(
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">
            Item 2
          </ToggleGroupItem>
          <ToggleGroupItem value="item3" aria-label="Item 3">
            Item 3
          </ToggleGroupItem>
        </ToggleGroup>
      );

      const item1 = screen.getByLabelText("Item 1");
      const item2 = screen.getByLabelText("Item 2");
      const item3 = screen.getByLabelText("Item 3");

      await user.click(item1);
      await user.click(item3);

      expect(item1).toHaveAttribute("data-state", "on");
      expect(item2).toHaveAttribute("data-state", "off");
      expect(item3).toHaveAttribute("data-state", "on");
    });

    it("works with defaultValue array", () => {
      render(
        <ToggleGroup type="multiple" defaultValue={["item1", "item3"]}>
          <ToggleGroupItem value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">
            Item 2
          </ToggleGroupItem>
          <ToggleGroupItem value="item3" aria-label="Item 3">
            Item 3
          </ToggleGroupItem>
        </ToggleGroup>
      );

      const item1 = screen.getByLabelText("Item 1");
      const item2 = screen.getByLabelText("Item 2");
      const item3 = screen.getByLabelText("Item 3");

      expect(item1).toHaveAttribute("data-state", "on");
      expect(item2).toHaveAttribute("data-state", "off");
      expect(item3).toHaveAttribute("data-state", "on");
    });
  });

  describe("ToggleGroupItem Component", () => {
    it("renders correctly", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="test" aria-label="Test">
            Test Item
          </ToggleGroupItem>
        </ToggleGroup>
      );
      expect(screen.getByText("Test Item")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="test" aria-label="Test">Test</ToggleGroupItem>
        </ToggleGroup>
      );
      const item = container.querySelector('[data-slot="toggle-group-item"]');
      expect(item).toHaveAttribute("data-slot", "toggle-group-item");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="test" className="custom-item" aria-label="Custom">
            Custom
          </ToggleGroupItem>
        </ToggleGroup>
      );
      const item = container.querySelector(".custom-item");
      expect(item).toBeInTheDocument();
    });

    it("can be disabled", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="disabled" disabled aria-label="Disabled">
            Disabled
          </ToggleGroupItem>
        </ToggleGroup>
      );

      const item = screen.getByLabelText("Disabled");
      expect(item).toBeDisabled();
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      const { container } = render(
        <ToggleGroup type="single" variant="default">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toHaveAttribute("data-variant", "default");
    });

    it("renders outline variant", () => {
      const { container } = render(
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toHaveAttribute("data-variant", "outline");
    });

    it("passes variant to items via context", () => {
      const { container } = render(
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const item = container.querySelector('[data-slot="toggle-group-item"]');
      expect(item).toHaveAttribute("data-variant", "outline");
    });
  });

  describe("Sizes", () => {
    it("renders default size", () => {
      const { container } = render(
        <ToggleGroup type="single" size="default">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toHaveAttribute("data-size", "default");
    });

    it("renders small size", () => {
      const { container } = render(
        <ToggleGroup type="single" size="sm">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toHaveAttribute("data-size", "sm");
    });

    it("renders large size", () => {
      const { container } = render(
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const group = container.querySelector('[data-slot="toggle-group"]');
      expect(group).toHaveAttribute("data-size", "lg");
    });

    it("passes size to items via context", () => {
      const { container } = render(
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      const item = container.querySelector('[data-slot="toggle-group-item"]');
      expect(item).toHaveAttribute("data-size", "lg");
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode (single)", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <ToggleGroup type="single" value="item1" onValueChange={handleChange}>
          <ToggleGroupItem value="item1" aria-label="Item 1">Item 1</ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">Item 2</ToggleGroupItem>
        </ToggleGroup>
      );

      const item2 = screen.getByLabelText("Item 2");
      await user.click(item2);

      expect(handleChange).toHaveBeenCalledWith("item2");
    });

    it("works in controlled mode (multiple)", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <ToggleGroup type="multiple" value={["item1"]} onValueChange={handleChange}>
          <ToggleGroupItem value="item1" aria-label="Item 1">Item 1</ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">Item 2</ToggleGroupItem>
        </ToggleGroup>
      );

      const item2 = screen.getByLabelText("Item 2");
      await user.click(item2);

      expect(handleChange).toHaveBeenCalledWith(["item1", "item2"]);
    });
  });

  describe("Common Use Cases", () => {
    it("works as text alignment toolbar", async () => {
      const user = userEvent.setup();
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="left" aria-label="Align left">
            Left
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            Center
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            Right
          </ToggleGroupItem>
        </ToggleGroup>
      );

      const center = screen.getByLabelText("Align center");
      await user.click(center);
      expect(center).toHaveAttribute("data-state", "on");
    });

    it("works as text formatting toolbar with icons", () => {
      render(
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <svg data-testid="bold-icon" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <svg data-testid="italic-icon" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <svg data-testid="underline-icon" />
          </ToggleGroupItem>
        </ToggleGroup>
      );

      expect(screen.getByTestId("bold-icon")).toBeInTheDocument();
      expect(screen.getByTestId("italic-icon")).toBeInTheDocument();
      expect(screen.getByTestId("underline-icon")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations (single)", async () => {
      const { container } = render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="item1" aria-label="Item 1">Item 1</ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">Item 2</ToggleGroupItem>
        </ToggleGroup>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have accessibility violations (multiple)", async () => {
      const { container } = render(
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="item1" aria-label="Item 1">Item 1</ToggleGroupItem>
          <ToggleGroupItem value="item2" aria-label="Item 2">Item 2</ToggleGroupItem>
        </ToggleGroup>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper role", () => {
      render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="item1" aria-label="Item">Item</ToggleGroupItem>
        </ToggleGroup>
      );
      expect(screen.getByRole("group")).toBeInTheDocument();
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", () => {
      const { container } = render(
        <ToggleGroup type="single">
          <ToggleGroupItem value="test" aria-label="Test">Test</ToggleGroupItem>
        </ToggleGroup>
      );

      expect(container.querySelector('[data-slot="toggle-group"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="toggle-group-item"]')).toBeInTheDocument();
    });
  });
});
