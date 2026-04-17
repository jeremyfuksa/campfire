import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { DateRangePicker } from "../date-range-picker";

expect.extend(toHaveNoViolations);

describe("DateRangePicker", () => {
  it("renders without crashing", () => {
    render(<DateRangePicker />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays default placeholder", () => {
    render(<DateRangePicker />);
    expect(screen.getByText("Pick a date range")).toBeInTheDocument();
  });

  it("displays custom placeholder", () => {
    render(<DateRangePicker placeholder="Select dates" />);
    expect(screen.getByText("Select dates")).toBeInTheDocument();
  });

  it("displays formatted date range when value is provided", () => {
    const value = {
      from: new Date(2025, 0, 15),
      to: new Date(2025, 0, 20),
    };
    render(<DateRangePicker value={value} />);
    expect(screen.getByText("Jan 15, 2025 - Jan 20, 2025")).toBeInTheDocument();
  });

  it("displays only from date when to is not set", () => {
    const value = {
      from: new Date(2025, 0, 15),
    };
    render(<DateRangePicker value={value} />);
    expect(screen.getByText("Jan 15, 2025")).toBeInTheDocument();
  });

  it("opens calendar popover when clicked", async () => {
    const user = userEvent.setup();
    render(<DateRangePicker />);

    await user.click(screen.getByRole("button"));
    // Calendar should be visible (look for navigation elements)
    const tables = screen.getAllByRole("grid");
    expect(tables.length).toBeGreaterThan(0);
  });

  it("disables the trigger button when disabled", () => {
    render(<DateRangePicker disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies custom className", () => {
    const { container } = render(<DateRangePicker className="custom-drp" />);
    const button = container.querySelector(".custom-drp");
    expect(button).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<DateRangePicker />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
