import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { EmptyState } from "../empty-state";

expect.extend(toHaveNoViolations);

describe("EmptyState", () => {
  it("renders with title", () => {
    render(<EmptyState title="No results found" />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("renders with description", () => {
    render(
      <EmptyState
        title="No items"
        description="You haven't created any items yet"
      />
    );
    expect(screen.getByText("No items")).toBeInTheDocument();
    expect(screen.getByText("You haven't created any items yet")).toBeInTheDocument();
  });

  it("renders without description", () => {
    render(<EmptyState title="Empty" />);
    expect(screen.getByText("Empty")).toBeInTheDocument();
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });

  describe("Icon", () => {
    it("renders with default icon", () => {
      const { container } = render(<EmptyState title="Empty" />);
      const icon = container.querySelector(".fa-inbox");
      expect(icon).toBeInTheDocument();
    });

    it("renders with custom icon", () => {
      const { container } = render(<EmptyState title="No files" icon="fa-file" />);
      const icon = container.querySelector(".fa-file");
      expect(icon).toBeInTheDocument();
    });
  });

  describe("Action Button", () => {
    it("renders action button when provided", () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          title="No items"
          action={{ label: "Create Item", onClick: handleClick }}
        />
      );
      expect(screen.getByRole("button", { name: "Create Item" })).toBeInTheDocument();
    });

    it("calls onClick when action button is clicked", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <EmptyState
          title="No items"
          action={{ label: "Add New", onClick: handleClick }}
        />
      );

      await user.click(screen.getByRole("button", { name: "Add New" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not render action button when not provided", () => {
      render(<EmptyState title="Empty" />);
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });

  describe("Custom Styling", () => {
    it("renders with custom className", () => {
      const { container } = render(
        <EmptyState title="Empty" className="custom-empty-state" />
      );
      const emptyState = container.querySelector(".custom-empty-state");
      expect(emptyState).toBeInTheDocument();
    });
  });

  describe("Common Use Cases", () => {
    it("renders empty search results", () => {
      render(
        <EmptyState
          icon="fa-magnifying-glass"
          title="No results found"
          description="Try adjusting your search terms"
        />
      );
      expect(screen.getByText("No results found")).toBeInTheDocument();
      expect(screen.getByText("Try adjusting your search terms")).toBeInTheDocument();
    });

    it("renders empty inbox", () => {
      render(
        <EmptyState
          icon="fa-inbox"
          title="Inbox is empty"
          description="All caught up! No new messages."
        />
      );
      expect(screen.getByText("Inbox is empty")).toBeInTheDocument();
    });

    it("renders empty list with action", () => {
      const handleCreate = vi.fn();
      render(
        <EmptyState
          icon="fa-list"
          title="No items yet"
          description="Get started by creating your first item"
          action={{ label: "Create Item", onClick: handleCreate }}
        />
      );
      expect(screen.getByRole("button", { name: "Create Item" })).toBeInTheDocument();
    });
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <EmptyState title="Empty state" description="Description text" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with action button", async () => {
    const { container } = render(
      <EmptyState
        title="Empty"
        action={{ label: "Action", onClick: () => {} }}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
