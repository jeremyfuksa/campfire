import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "../context-menu";

expect.extend(toHaveNoViolations);

describe("ContextMenu", () => {
  it("renders trigger content", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
    expect(screen.getByText("Right-click me")).toBeInTheDocument();
  });

  it("opens menu on right-click", async () => {
    const user = userEvent.setup();
    render(
      <ContextMenu>
        <ContextMenuTrigger>Trigger</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Action 1</ContextMenuItem>
          <ContextMenuItem>Action 2</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    await user.pointer({ keys: "[MouseRight]", target: screen.getByText("Trigger") });
    expect(await screen.findByText("Action 1")).toBeInTheDocument();
  });

  it("trigger has no axe violations", async () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger>Right-click area</ContextMenuTrigger>
      </ContextMenu>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
