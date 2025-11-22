import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../hover-card";

expect.extend(toHaveNoViolations);

describe("HoverCard", () => {
  it("renders trigger", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    );
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("shows content on hover", async () => {
    const user = userEvent.setup();
    render(
      <HoverCard>
        <HoverCardTrigger>Hover trigger</HoverCardTrigger>
        <HoverCardContent>Hover card content</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText("Hover trigger"));
    expect(await screen.findByText("Hover card content")).toBeInTheDocument();
  });

  it("hides content on unhover", async () => {
    const user = userEvent.setup();
    render(
      <HoverCard>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText("Trigger"));
    expect(await screen.findByText("Content")).toBeInTheDocument();

    await user.unhover(screen.getByText("Trigger"));
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <HoverCard>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>Accessible content</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText("Trigger"));
    await screen.findByText("Accessible content");

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
