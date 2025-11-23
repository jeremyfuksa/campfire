import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";

expect.extend(toHaveNoViolations);

describe("Tabs", () => {
  describe("Tabs Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      );
      const tabs = container.querySelector('[data-slot="tabs"]');
      expect(tabs).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const tabs = container.querySelector('[data-slot="tabs"]');
      expect(tabs).toHaveAttribute("data-slot", "tabs");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Tabs defaultValue="tab1" className="custom-tabs">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const tabs = container.querySelector('[data-slot="tabs"]');
      expect(tabs).toHaveClass("custom-tabs");
    });
  });

  describe("TabsList Component", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const list = container.querySelector('[data-slot="tabs-list"]');
      expect(list).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const list = container.querySelector('[data-slot="tabs-list"]');
      expect(list).toHaveAttribute("data-slot", "tabs-list");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList className="custom-list">
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const list = container.querySelector('[data-slot="tabs-list"]');
      expect(list).toHaveClass("custom-list");
    });
  });

  describe("TabsTrigger Component", () => {
    it("renders correctly", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">First Tab</TabsTrigger>
            <TabsTrigger value="tab2">Second Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      expect(screen.getByRole("tab", { name: "First Tab" })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: "Second Tab" })).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const trigger = container.querySelector('[data-slot="tabs-trigger"]');
      expect(trigger).toHaveAttribute("data-slot", "tabs-trigger");
    });

    it("shows active state", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Active Tab</TabsTrigger>
            <TabsTrigger value="tab2">Inactive Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );

      const activeTab = screen.getByRole("tab", { name: "Active Tab" });
      const inactiveTab = screen.getByRole("tab", { name: "Inactive Tab" });

      expect(activeTab).toHaveAttribute("data-state", "active");
      expect(inactiveTab).toHaveAttribute("data-state", "inactive");
    });

    it("can be disabled", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>Disabled Tab</TabsTrigger>
          </TabsList>
        </Tabs>
      );

      const disabledTab = screen.getByRole("tab", { name: "Disabled Tab" });
      expect(disabledTab).toBeDisabled();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1" className="custom-trigger">Custom</TabsTrigger>
          </TabsList>
        </Tabs>
      );
      const trigger = container.querySelector(".custom-trigger");
      expect(trigger).toBeInTheDocument();
    });
  });

  describe("TabsContent Component", () => {
    it("renders content for active tab", () => {
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
        </Tabs>
      );

      expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
      expect(screen.queryByText("Content for Tab 2")).not.toBeVisible();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      );
      const content = container.querySelector('[data-slot="tabs-content"]');
      expect(content).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="custom-content">Content</TabsContent>
        </Tabs>
      );
      const content = container.querySelector(".custom-content");
      expect(content).toBeInTheDocument();
    });
  });

  describe("Tab Switching", () => {
    it("switches content on tab click", async () => {
      const user = userEvent.setup();
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      expect(screen.getByText("Content 1")).toBeInTheDocument();

      const tab2 = screen.getByRole("tab", { name: "Tab 2" });
      await user.click(tab2);

      expect(screen.getByText("Content 2")).toBeInTheDocument();
      expect(screen.queryByText("Content 1")).not.toBeVisible();
    });

    it("updates active state on tab switch", async () => {
      const user = userEvent.setup();
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
        </Tabs>
      );

      const tab1 = screen.getByRole("tab", { name: "Tab 1" });
      const tab2 = screen.getByRole("tab", { name: "Tab 2" });

      expect(tab1).toHaveAttribute("data-state", "active");
      expect(tab2).toHaveAttribute("data-state", "inactive");

      await user.click(tab2);

      expect(tab1).toHaveAttribute("data-state", "inactive");
      expect(tab2).toHaveAttribute("data-state", "active");
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports arrow key navigation", async () => {
      const user = userEvent.setup();
      render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      );

      const tab1 = screen.getByRole("tab", { name: "Tab 1" });
      const tab2 = screen.getByRole("tab", { name: "Tab 2" });

      tab1.focus();
      expect(tab1).toHaveFocus();

      await user.keyboard("{ArrowRight}");
      expect(tab2).toHaveFocus();
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode", async () => {
      const user = userEvent.setup();
      render(
        <Tabs value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      );

      const tab1 = screen.getByRole("tab", { name: "Tab 1" });
      expect(tab1).toHaveAttribute("data-state", "active");
      expect(screen.getByText("Content 1")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Details</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Overview content</TabsContent>
          <TabsContent value="tab2">Details content</TabsContent>
          <TabsContent value="tab3">Settings content</TabsContent>
        </Tabs>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper ARIA roles", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      );

      expect(screen.getByRole("tablist")).toBeInTheDocument();
      expect(screen.getByRole("tab")).toBeInTheDocument();
      expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", () => {
      const { container } = render(
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content</TabsContent>
        </Tabs>
      );

      expect(container.querySelector('[data-slot="tabs"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="tabs-list"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="tabs-trigger"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="tabs-content"]')).toBeInTheDocument();
    });
  });
});
