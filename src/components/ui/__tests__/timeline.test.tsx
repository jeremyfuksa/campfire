import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Timeline, type TimelineItem } from "../timeline";

expect.extend(toHaveNoViolations);

describe("Timeline", () => {
  const items: TimelineItem[] = [
    { id: "1", title: "First Event", description: "First description", date: "Jan 1" },
    { id: "2", title: "Second Event", description: "Second description", date: "Feb 1" },
    { id: "3", title: "Third Event" },
  ];

  it("renders without crashing", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("First Event")).toBeInTheDocument();
  });

  it("renders all items", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("First Event")).toBeInTheDocument();
    expect(screen.getByText("Second Event")).toBeInTheDocument();
    expect(screen.getByText("Third Event")).toBeInTheDocument();
  });

  it("renders descriptions when provided", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("First description")).toBeInTheDocument();
    expect(screen.getByText("Second description")).toBeInTheDocument();
  });

  it("renders dates when provided", () => {
    render(<Timeline items={items} />);
    expect(screen.getByText("Jan 1")).toBeInTheDocument();
    expect(screen.getByText("Feb 1")).toBeInTheDocument();
  });

  it("handles items without description or date", () => {
    render(<Timeline items={[{ id: "1", title: "Minimal Item" }]} />);
    expect(screen.getByText("Minimal Item")).toBeInTheDocument();
  });

  it("renders with status variants", () => {
    const statusItems: TimelineItem[] = [
      { id: "1", title: "Success", status: "success" },
      { id: "2", title: "Error", status: "error" },
      { id: "3", title: "Warning", status: "warning" },
      { id: "4", title: "Default", status: "default" },
    ];
    render(<Timeline items={statusItems} />);
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("Warning")).toBeInTheDocument();
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  it("renders with custom icon", () => {
    const itemsWithIcon: TimelineItem[] = [
      { id: "1", title: "With Icon", icon: <span data-testid="custom-icon">★</span> },
    ];
    render(<Timeline items={itemsWithIcon} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Timeline items={items} className="custom-timeline" />);
    const timeline = container.querySelector(".custom-timeline");
    expect(timeline).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Timeline items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
