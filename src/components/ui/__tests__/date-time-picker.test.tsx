import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { DateTimePicker } from "../date-time-picker";

expect.extend(toHaveNoViolations);

describe("DateTimePicker", () => {
  it("renders without crashing", () => {
    render(<DateTimePicker />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays default placeholder", () => {
    render(<DateTimePicker />);
    expect(screen.getByText("Pick a date and time")).toBeInTheDocument();
  });

  it("displays custom placeholder", () => {
    render(<DateTimePicker placeholder="Choose date/time" />);
    expect(screen.getByText("Choose date/time")).toBeInTheDocument();
  });

  it("displays formatted date and time when value is provided", () => {
    const date = new Date(2025, 0, 15, 14, 30);
    render(<DateTimePicker value={date} />);
    // Format: "MMM d, yyyy HH:mm"
    expect(screen.getByText(/Jan 15, 2025/)).toBeInTheDocument();
  });

  it("opens popover when clicked", async () => {
    const user = userEvent.setup();
    render(<DateTimePicker />);

    await user.click(screen.getByRole("button"));
    // Calendar grid and Time section should be visible
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("shows Confirm button inside popover", async () => {
    const user = userEvent.setup();
    render(<DateTimePicker />);

    await user.click(screen.getByRole("button"));
    const confirmBtn = screen.getByText("Confirm");
    expect(confirmBtn).toBeInTheDocument();
  });

  it("disables the trigger button when disabled", () => {
    render(<DateTimePicker disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies custom className", () => {
    const { container } = render(<DateTimePicker className="custom-dtp" />);
    const button = container.querySelector(".custom-dtp");
    expect(button).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<DateTimePicker />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
