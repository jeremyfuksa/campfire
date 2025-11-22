import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "../popover";

expect.extend(toHaveNoViolations);

describe("Popover", () => {
  describe("Popover Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );
      const popover = container.querySelector('[data-slot="popover"]');
      expect(popover).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Popover>
          <PopoverTrigger>Trigger</PopoverTrigger>
        </Popover>
      );
      const popover = container.querySelector('[data-slot="popover"]');
      expect(popover).toHaveAttribute("data-slot", "popover");
    });
  });

  describe("PopoverTrigger Component", () => {
    it("renders correctly", () => {
      render(
        <Popover>
          <PopoverTrigger>Click me</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Popover>
          <PopoverTrigger>Trigger</PopoverTrigger>
        </Popover>
      );
      const trigger = container.querySelector('[data-slot="popover-trigger"]');
      expect(trigger).toHaveAttribute("data-slot", "popover-trigger");
    });

    it("toggles popover on click", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Toggle</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      );

      const trigger = screen.getByText("Toggle");
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();

      await user.click(trigger);
      expect(screen.getByText("Popover content")).toBeInTheDocument();

      await user.click(trigger);
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
    });

    it("renders as button by default", () => {
      render(
        <Popover>
          <PopoverTrigger>Trigger</PopoverTrigger>
        </Popover>
      );
      const trigger = screen.getByText("Trigger");
      expect(trigger.tagName).toBe("BUTTON");
    });

    it("supports asChild prop", () => {
      render(
        <Popover>
          <PopoverTrigger asChild>
            <button>Custom Button</button>
          </PopoverTrigger>
        </Popover>
      );
      expect(screen.getByText("Custom Button")).toBeInTheDocument();
    });
  });

  describe("PopoverContent Component", () => {
    it("renders content when open", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>This is the popover content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      expect(screen.getByText("This is the popover content")).toBeInTheDocument();
    });

    it("has data-slot attribute", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      const content = container.querySelector('[data-slot="popover-content"]');
      expect(content).toBeInTheDocument();
    });

    it("renders with custom className", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent className="custom-content">Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      const content = container.querySelector(".custom-content");
      expect(content).toBeInTheDocument();
    });

    it("renders in portal by default", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Portaled content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      const content = screen.getByText("Portaled content");
      expect(content).toBeInTheDocument();
    });
  });

  describe("PopoverAnchor Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Popover>
          <PopoverAnchor />
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );
      const anchor = container.querySelector('[data-slot="popover-anchor"]');
      expect(anchor).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Popover>
          <PopoverAnchor />
        </Popover>
      );
      const anchor = container.querySelector('[data-slot="popover-anchor"]');
      expect(anchor).toHaveAttribute("data-slot", "popover-anchor");
    });
  });

  describe("Open/Close Behavior", () => {
    it("opens on trigger click", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      expect(screen.queryByText("Content")).not.toBeInTheDocument();
      await user.click(screen.getByText("Open"));
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("closes when clicking outside", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Content</PopoverContent>
          </Popover>
          <button>Outside</button>
        </div>
      );

      await user.click(screen.getByText("Open"));
      expect(screen.getByText("Content")).toBeInTheDocument();

      await user.click(screen.getByText("Outside"));
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });

    it("closes on Escape key", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      expect(screen.getByText("Content")).toBeInTheDocument();

      await user.keyboard("{Escape}");
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode with open prop", () => {
      render(
        <Popover open={true}>
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent>Controlled content</PopoverContent>
        </Popover>
      );

      expect(screen.getByText("Controlled content")).toBeInTheDocument();
    });

    it("respects defaultOpen prop", () => {
      render(
        <Popover defaultOpen={true}>
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent>Initially open</PopoverContent>
        </Popover>
      );

      expect(screen.getByText("Initially open")).toBeInTheDocument();
    });
  });

  describe("Positioning", () => {
    it("accepts align prop", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent align="start">Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("accepts side prop", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent side="bottom">Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("accepts sideOffset prop", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent sideOffset={10}>Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  describe("Common Use Cases", () => {
    it("works as user profile card", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>View Profile</PopoverTrigger>
          <PopoverContent>
            <div>
              <h3>John Doe</h3>
              <p>Software Engineer</p>
            </div>
          </PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("View Profile"));
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    });

    it("works as settings menu", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <PopoverTrigger>Settings</PopoverTrigger>
          <PopoverContent>
            <button>Account</button>
            <button>Privacy</button>
            <button>Notifications</button>
          </PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Settings"));
      expect(screen.getByRole("button", { name: "Account" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Privacy" })).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger>Open popover</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open popover"));
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("trigger has proper ARIA attributes", () => {
      const { container } = render(
        <Popover>
          <PopoverTrigger>Trigger</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      const trigger = container.querySelector('[data-slot="popover-trigger"]');
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
      expect(trigger).toHaveAttribute("aria-expanded");
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      await user.click(screen.getByText("Open"));

      expect(container.querySelector('[data-slot="popover"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="popover-trigger"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="popover-content"]')).toBeInTheDocument();
    });
  });
});
