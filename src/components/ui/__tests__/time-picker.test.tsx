import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { TimePicker } from "../time-picker";

expect.extend(toHaveNoViolations);

describe("TimePicker", () => {
  it("renders without crashing", () => {
    render(<TimePicker />);
    expect(screen.getByPlaceholderText("HH")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("MM")).toBeInTheDocument();
  });

  it("renders AM/PM toggle in 12-hour mode (default)", () => {
    render(<TimePicker />);
    expect(screen.getByText("AM")).toBeInTheDocument();
  });

  it("hides AM/PM toggle in 24-hour mode", () => {
    render(<TimePicker use24Hour />);
    expect(screen.queryByText("AM")).not.toBeInTheDocument();
    expect(screen.queryByText("PM")).not.toBeInTheDocument();
  });

  it("parses initial value in 12-hour mode", () => {
    render(<TimePicker value="14:30" />);
    expect(screen.getByDisplayValue("02")).toBeInTheDocument();
    expect(screen.getByDisplayValue("30")).toBeInTheDocument();
    expect(screen.getByText("PM")).toBeInTheDocument();
  });

  it("parses initial value in 24-hour mode", () => {
    render(<TimePicker value="14:30" use24Hour />);
    expect(screen.getByDisplayValue("14")).toBeInTheDocument();
    expect(screen.getByDisplayValue("30")).toBeInTheDocument();
  });

  it("toggles AM/PM when button is clicked", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="09:00" />);

    expect(screen.getByText("AM")).toBeInTheDocument();
    await user.click(screen.getByText("AM"));
    expect(screen.getByText("PM")).toBeInTheDocument();
  });

  it("disables inputs when disabled", () => {
    render(<TimePicker disabled />);
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it("disables AM/PM button when disabled", () => {
    render(<TimePicker disabled />);
    expect(screen.getByText("AM")).toBeDisabled();
  });

  it("applies custom className", () => {
    const { container } = render(<TimePicker className="custom-time" />);
    const wrapper = container.querySelector(".custom-time");
    expect(wrapper).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<TimePicker value="10:30" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
