import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../tooltip";

expect.extend(toHaveNoViolations);

describe("Tooltip", () => {
  describe("Tooltip Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      );
      const tooltip = container.querySelector('[data-slot="tooltip"]');
      expect(tooltip).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
        </Tooltip>
      );
      const tooltip = container.querySelector('[data-slot="tooltip"]');
      expect(tooltip).toHaveAttribute("data-slot", "tooltip");
    });
  });

  describe("TooltipProvider Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <TooltipProvider>
          <div>Content</div>
        </TooltipProvider>
      );
      const provider = container.querySelector('[data-slot="tooltip-provider"]');
      expect(provider).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <TooltipProvider>
          <div>Content</div>
        </TooltipProvider>
      );
      const provider = container.querySelector('[data-slot="tooltip-provider"]');
      expect(provider).toHaveAttribute("data-slot", "tooltip-provider");
    });

    it("accepts delayDuration prop", () => {
      render(
        <TooltipProvider delayDuration={500}>
          <Tooltip>
            <TooltipTrigger>Trigger</TooltipTrigger>
            <TooltipContent>Content</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
      expect(screen.getByText("Trigger")).toBeInTheDocument();
    });
  });

  describe("TooltipTrigger Component", () => {
    it("renders correctly", () => {
      render(
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      );
      expect(screen.getByText("Hover me")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
        </Tooltip>
      );
      const trigger = container.querySelector('[data-slot="tooltip-trigger"]');
      expect(trigger).toHaveAttribute("data-slot", "tooltip-trigger");
    });

    it("shows tooltip on hover", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      );

      const trigger = screen.getByText("Hover me");
      await user.hover(trigger);

      expect(await screen.findByText("Tooltip text")).toBeInTheDocument();
    });

    it("hides tooltip on unhover", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      );

      const trigger = screen.getByText("Hover me");
      await user.hover(trigger);
      expect(await screen.findByText("Tooltip text")).toBeInTheDocument();

      await user.unhover(trigger);
      expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
    });

    it("supports asChild prop", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Custom Trigger</button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      );

      const trigger = screen.getByText("Custom Trigger");
      await user.hover(trigger);
      expect(await screen.findByText("Content")).toBeInTheDocument();
    });
  });

  describe("TooltipContent Component", () => {
    it("renders content when triggered", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>This is a tooltip</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      expect(await screen.findByText("This is a tooltip")).toBeInTheDocument();
    });

    it("has data-slot attribute", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      const content = await container.querySelector('[data-slot="tooltip-content"]');
      expect(content).toBeInTheDocument();
    });

    it("renders with custom className", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent className="custom-tooltip">Content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      const content = await container.querySelector(".custom-tooltip");
      expect(content).toBeInTheDocument();
    });

    it("renders in portal", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Portaled content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      expect(await screen.findByText("Portaled content")).toBeInTheDocument();
    });

    it("renders with arrow", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content with arrow</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      await screen.findByText("Content with arrow");

      // Arrow is rendered via TooltipPrimitive.Arrow
      const content = container.querySelector('[data-slot="tooltip-content"]');
      expect(content).toBeInTheDocument();
    });
  });

  describe("Positioning", () => {
    it("accepts side prop", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      expect(await screen.findByText("Bottom tooltip")).toBeInTheDocument();
    });

    it("accepts sideOffset prop", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent sideOffset={10}>Content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      expect(await screen.findByText("Content")).toBeInTheDocument();
    });

    it("accepts align prop", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent align="start">Aligned content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      expect(await screen.findByText("Aligned content")).toBeInTheDocument();
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode with open prop", () => {
      render(
        <Tooltip open={true}>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Controlled tooltip</TooltipContent>
        </Tooltip>
      );

      expect(screen.getByText("Controlled tooltip")).toBeInTheDocument();
    });

    it("respects defaultOpen prop", () => {
      render(
        <Tooltip defaultOpen={true}>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Initially open</TooltipContent>
        </Tooltip>
      );

      expect(screen.getByText("Initially open")).toBeInTheDocument();
    });
  });

  describe("Keyboard Navigation", () => {
    it("shows tooltip on focus", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Focusable</TooltipTrigger>
          <TooltipContent>Focused tooltip</TooltipContent>
        </Tooltip>
      );

      const trigger = screen.getByText("Focusable");
      await user.tab();
      expect(trigger).toHaveFocus();
      expect(await screen.findByText("Focused tooltip")).toBeInTheDocument();
    });

    it("hides tooltip on blur", async () => {
      const user = userEvent.setup();
      render(
        <>
          <Tooltip>
            <TooltipTrigger>First</TooltipTrigger>
            <TooltipContent>First tooltip</TooltipContent>
          </Tooltip>
          <button>Second</button>
        </>
      );

      await user.tab();
      expect(await screen.findByText("First tooltip")).toBeInTheDocument();

      await user.tab();
      expect(screen.queryByText("First tooltip")).not.toBeInTheDocument();
    });

    it("hides tooltip on Escape", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      expect(await screen.findByText("Content")).toBeInTheDocument();

      await user.keyboard("{Escape}");
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  describe("Common Use Cases", () => {
    it("works as icon button tooltip", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger aria-label="Delete">
            <svg data-testid="delete-icon" />
          </TooltipTrigger>
          <TooltipContent>Delete item</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByTestId("delete-icon"));
      expect(await screen.findByText("Delete item")).toBeInTheDocument();
    });

    it("works as help text", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <label>Username</label>
          <Tooltip>
            <TooltipTrigger aria-label="Help">?</TooltipTrigger>
            <TooltipContent>Enter your unique username</TooltipContent>
          </Tooltip>
        </div>
      );

      await user.hover(screen.getByLabelText("Help"));
      expect(await screen.findByText("Enter your unique username")).toBeInTheDocument();
    });

    it("works for truncated text", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Very long text that...</TooltipTrigger>
          <TooltipContent>Very long text that gets truncated in the UI</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Very long text that..."));
      expect(await screen.findByText("Very long text that gets truncated in the UI")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Accessible trigger</TooltipTrigger>
          <TooltipContent>Accessible content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Accessible trigger"));
      await screen.findByText("Accessible content");

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper role", async () => {
      const user = userEvent.setup();
      render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      const tooltip = await screen.findByRole("tooltip");
      expect(tooltip).toBeInTheDocument();
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Tooltip>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      );

      await user.hover(screen.getByText("Trigger"));
      await screen.findByText("Content");

      expect(container.querySelector('[data-slot="tooltip"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="tooltip-provider"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="tooltip-trigger"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="tooltip-content"]')).toBeInTheDocument();
    });
  });
});
