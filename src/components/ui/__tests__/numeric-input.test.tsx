import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { NumericInput } from "../numeric-input";

expect.extend(toHaveNoViolations);

describe("NumericInput", () => {
  it("renders without crashing", () => {
    render(<NumericInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with initial value", () => {
    render(<NumericInput value={42} />);
    expect(screen.getByDisplayValue("42")).toBeInTheDocument();
  });

  it("renders increment and decrement buttons by default", () => {
    render(<NumericInput />);
    expect(screen.getByLabelText("Increment")).toBeInTheDocument();
    expect(screen.getByLabelText("Decrement")).toBeInTheDocument();
  });

  it("hides controls when showControls is false", () => {
    render(<NumericInput showControls={false} />);
    expect(screen.queryByLabelText("Increment")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Decrement")).not.toBeInTheDocument();
  });

  it("calls onChange when increment is clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<NumericInput value={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText("Increment"));
    expect(handleChange).toHaveBeenCalledWith(6);
  });

  it("calls onChange when decrement is clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<NumericInput value={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText("Decrement"));
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it("respects max boundary", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<NumericInput value={10} max={10} onChange={handleChange} />);

    const incrementBtn = screen.getByLabelText("Increment");
    expect(incrementBtn).toBeDisabled();
  });

  it("respects min boundary", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<NumericInput value={0} min={0} onChange={handleChange} />);

    const decrementBtn = screen.getByLabelText("Decrement");
    expect(decrementBtn).toBeDisabled();
  });

  it("respects custom step", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<NumericInput value={0} step={5} onChange={handleChange} />);

    await user.click(screen.getByLabelText("Increment"));
    expect(handleChange).toHaveBeenCalledWith(5);
  });

  it("disables input and buttons when disabled", () => {
    render(<NumericInput disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
    expect(screen.getByLabelText("Increment")).toBeDisabled();
    expect(screen.getByLabelText("Decrement")).toBeDisabled();
  });

  it("applies custom className", () => {
    const { container } = render(<NumericInput className="custom-numeric" />);
    const wrapper = container.querySelector(".custom-numeric");
    expect(wrapper).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <label>
        Quantity
        <NumericInput value={5} />
      </label>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
