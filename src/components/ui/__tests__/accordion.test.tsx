import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../accordion";

expect.extend(toHaveNoViolations);

describe("Accordion", () => {
  describe("Accordion Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const accordion = container.querySelector('[data-slot="accordion"]');
      expect(accordion).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const accordion = container.querySelector('[data-slot="accordion"]');
      expect(accordion).toHaveAttribute("data-slot", "accordion");
    });
  });

  describe("Single Type", () => {
    it("allows only one item open at a time", async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger1 = screen.getByText("Item 1");
      const trigger2 = screen.getByText("Item 2");

      await user.click(trigger1);
      expect(trigger1).toHaveAttribute("data-state", "open");

      await user.click(trigger2);
      expect(trigger2).toHaveAttribute("data-state", "open");
      expect(trigger1).toHaveAttribute("data-state", "closed");
    });

    it("supports collapsible mode", async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText("Trigger");

      await user.click(trigger);
      expect(trigger).toHaveAttribute("data-state", "open");

      await user.click(trigger);
      expect(trigger).toHaveAttribute("data-state", "closed");
    });
  });

  describe("Multiple Type", () => {
    it("allows multiple items open at once", async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger1 = screen.getByText("Item 1");
      const trigger2 = screen.getByText("Item 2");

      await user.click(trigger1);
      await user.click(trigger2);

      expect(trigger1).toHaveAttribute("data-state", "open");
      expect(trigger2).toHaveAttribute("data-state", "open");
    });
  });

  describe("AccordionItem Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const item = container.querySelector('[data-slot="accordion-item"]');
      expect(item).toBeInTheDocument();
    });

    it("has border styling", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const item = container.querySelector('[data-slot="accordion-item"]');
      expect(item).toHaveClass("border-b");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test" className="custom-item">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const item = container.querySelector('[data-slot="accordion-item"]');
      expect(item).toHaveClass("custom-item");
    });
  });

  describe("AccordionTrigger Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger>Click me</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const trigger = container.querySelector('[data-slot="accordion-trigger"]');
      expect(trigger).toBeInTheDocument();
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("has chevron icon", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const trigger = container.querySelector('[data-slot="accordion-trigger"]');
      const chevron = trigger?.querySelector("svg");
      expect(chevron).toBeInTheDocument();
    });

    it("toggles content on click", async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="test">
            <AccordionTrigger>Toggle</AccordionTrigger>
            <AccordionContent>Hidden content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText("Toggle");
      expect(trigger).toHaveAttribute("data-state", "closed");

      await user.click(trigger);
      expect(trigger).toHaveAttribute("data-state", "open");
    });

    it("can be disabled", () => {
      render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger disabled>Disabled</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText("Disabled");
      expect(trigger).toBeDisabled();
    });
  });

  describe("AccordionContent Component", () => {
    it("renders content", async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="test">
            <AccordionTrigger>Open me</AccordionTrigger>
            <AccordionContent>This is the content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByText("Open me");
      await user.click(trigger);

      expect(screen.getByText("This is the content")).toBeInTheDocument();
    });

    it("has data-slot attribute", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      await user.click(screen.getByText("Trigger"));

      const content = container.querySelector('[data-slot="accordion-content"]');
      expect(content).toBeInTheDocument();
    });

    it("renders with custom className", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent className="custom-content">Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      await user.click(screen.getByText("Trigger"));

      const contentWrapper = container.querySelector(".custom-content");
      expect(contentWrapper).toBeInTheDocument();
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports keyboard navigation", async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger1 = screen.getByText("Item 1");
      trigger1.focus();
      expect(trigger1).toHaveFocus();

      await user.keyboard(" ");
      expect(trigger1).toHaveAttribute("data-state", "open");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Question 1</AccordionTrigger>
            <AccordionContent>Answer 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Question 2</AccordionTrigger>
            <AccordionContent>Answer 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper ARIA attributes", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      const trigger = container.querySelector('[data-slot="accordion-trigger"]');
      expect(trigger).toHaveAttribute("aria-expanded");
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", () => {
      const { container } = render(
        <Accordion type="single">
          <AccordionItem value="test">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      );

      expect(container.querySelector('[data-slot="accordion"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="accordion-item"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="accordion-trigger"]')).toBeInTheDocument();
    });
  });
});
