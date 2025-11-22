import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { ListGroup, ListGroupItem } from "../list-group";

expect.extend(toHaveNoViolations);

describe("ListGroup", () => {
  it("renders correctly", () => {
    render(
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
      </ListGroup>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("renders items with icons", () => {
    const { container } = render(
      <ListGroup>
        <ListGroupItem icon="fa-user">User</ListGroupItem>
        <ListGroupItem icon="fa-envelope">Email</ListGroupItem>
      </ListGroup>
    );
    expect(container.querySelector(".fa-user")).toBeInTheDocument();
    expect(container.querySelector(".fa-envelope")).toBeInTheDocument();
  });

  it("renders items with actions", () => {
    render(
      <ListGroup>
        <ListGroupItem action={<button>Delete</button>}>Item with action</ListGroupItem>
      </ListGroup>
    );
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  it("calls onClick when item is clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(
      <ListGroup>
        <ListGroupItem onClick={handleClick}>Clickable Item</ListGroupItem>
      </ListGroup>
    );
    
    await user.click(screen.getByText("Clickable Item"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders active state", () => {
    const { container } = render(
      <ListGroup>
        <ListGroupItem active>Active Item</ListGroupItem>
      </ListGroup>
    );
    const item = container.querySelector("li");
    expect(item).toHaveClass("bg-bg-subtle");
  });

  it("renders disabled state", () => {
    const handleClick = vi.fn();
    render(
      <ListGroup>
        <ListGroupItem disabled onClick={handleClick}>Disabled Item</ListGroupItem>
      </ListGroup>
    );
    const item = screen.getByText("Disabled Item").closest("li");
    expect(item).toHaveClass("opacity-60", "cursor-not-allowed");
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(
      <ListGroup>
        <ListGroupItem disabled onClick={handleClick}>Disabled</ListGroupItem>
      </ListGroup>
    );
    
    await user.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
      </ListGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
