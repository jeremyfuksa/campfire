import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../collapsible";

expect.extend(toHaveNoViolations);

describe("Collapsible", () => {
  describe("Collapsible Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );
      const collapsible = container.querySelector('[data-slot="collapsible"]');
      expect(collapsible).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );
      const collapsible = container.querySelector('[data-slot="collapsible"]');
      expect(collapsible).toHaveAttribute("data-slot", "collapsible");
    });
  });

  describe("CollapsibleTrigger Component", () => {
    it("renders correctly", () => {
      render(
        <Collapsible>
          <CollapsibleTrigger>Click to expand</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );
      expect(screen.getByText("Click to expand")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Trigger</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );
      const trigger = container.querySelector('[data-slot="collapsible-trigger"]');
      expect(trigger).toHaveAttribute("data-slot", "collapsible-trigger");
    });

    it("toggles content on click", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Hidden content</CollapsibleContent>
        </Collapsible>
      );

      const trigger = screen.getByText("Toggle");
      const collapsible = container.querySelector('[data-slot="collapsible"]');

      expect(collapsible).toHaveAttribute("data-state", "closed");

      await user.click(trigger);
      expect(collapsible).toHaveAttribute("data-state", "open");

      await user.click(trigger);
      expect(collapsible).toHaveAttribute("data-state", "closed");
    });

    it("can be disabled", () => {
      render(
        <Collapsible>
          <CollapsibleTrigger disabled>Disabled</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      const trigger = screen.getByText("Disabled");
      expect(trigger).toBeDisabled();
    });

    it("renders as button", () => {
      render(
        <Collapsible>
          <CollapsibleTrigger>Trigger</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      const trigger = screen.getByText("Trigger");
      expect(trigger.tagName).toBe("BUTTON");
    });
  });

  describe("CollapsibleContent Component", () => {
    it("renders content when open", async () => {
      const user = userEvent.setup();
      render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>This is the content</CollapsibleContent>
        </Collapsible>
      );

      const trigger = screen.getByText("Toggle");
      await user.click(trigger);

      expect(screen.getByText("This is the content")).toBeInTheDocument();
    });

    it("has data-slot attribute", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      await user.click(screen.getByText("Toggle"));

      const content = container.querySelector('[data-slot="collapsible-content"]');
      expect(content).toBeInTheDocument();
    });

    it("has proper data-state when open", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      await user.click(screen.getByText("Toggle"));

      const content = container.querySelector('[data-slot="collapsible-content"]');
      expect(content).toHaveAttribute("data-state", "open");
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode", () => {
      const { container } = render(
        <Collapsible open={true}>
          <CollapsibleTrigger>Trigger</CollapsibleTrigger>
          <CollapsibleContent>Controlled content</CollapsibleContent>
        </Collapsible>
      );

      const collapsible = container.querySelector('[data-slot="collapsible"]');
      expect(collapsible).toHaveAttribute("data-state", "open");
      expect(screen.getByText("Controlled content")).toBeInTheDocument();
    });

    it("respects defaultOpen prop", () => {
      const { container } = render(
        <Collapsible defaultOpen={true}>
          <CollapsibleTrigger>Trigger</CollapsibleTrigger>
          <CollapsibleContent>Initially open</CollapsibleContent>
        </Collapsible>
      );

      const collapsible = container.querySelector('[data-slot="collapsible"]');
      expect(collapsible).toHaveAttribute("data-state", "open");
      expect(screen.getByText("Initially open")).toBeInTheDocument();
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports keyboard interaction", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      const trigger = screen.getByText("Toggle");
      trigger.focus();
      expect(trigger).toHaveFocus();

      await user.keyboard(" ");
      const collapsible = container.querySelector('[data-slot="collapsible"]');
      expect(collapsible).toHaveAttribute("data-state", "open");
    });
  });

  describe("Common Use Cases", () => {
    it("works as expandable section", async () => {
      const user = userEvent.setup();
      render(
        <Collapsible>
          <CollapsibleTrigger>Show more details</CollapsibleTrigger>
          <CollapsibleContent>
            <div>Additional information here</div>
          </CollapsibleContent>
        </Collapsible>
      );

      expect(screen.queryByText("Additional information here")).not.toBeVisible();

      await user.click(screen.getByText("Show more details"));
      expect(screen.getByText("Additional information here")).toBeInTheDocument();
    });

    it("works with icon in trigger", async () => {
      const user = userEvent.setup();
      render(
        <Collapsible>
          <CollapsibleTrigger>
            <svg data-testid="expand-icon" />
            Expand
          </CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      expect(screen.getByTestId("expand-icon")).toBeInTheDocument();
      await user.click(screen.getByText("Expand"));
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle content</CollapsibleTrigger>
          <CollapsibleContent>Collapsible content</CollapsibleContent>
        </Collapsible>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when open", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      await user.click(screen.getByText("Toggle"));
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper ARIA attributes", () => {
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Trigger</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      const trigger = container.querySelector('[data-slot="collapsible-trigger"]');
      expect(trigger).toHaveAttribute("aria-expanded");
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", () => {
      const { container } = render(
        <Collapsible>
          <CollapsibleTrigger>Trigger</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );

      expect(container.querySelector('[data-slot="collapsible"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="collapsible-trigger"]')).toBeInTheDocument();
    });
  });
});
