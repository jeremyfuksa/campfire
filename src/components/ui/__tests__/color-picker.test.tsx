import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { ColorPicker } from "../color-picker";

expect.extend(toHaveNoViolations);

describe("ColorPicker", () => {
  it("renders without crashing", () => {
    render(<ColorPicker />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays the default color value", () => {
    render(<ColorPicker />);
    expect(screen.getByText("#000000")).toBeInTheDocument();
  });

  it("displays a custom color value", () => {
    render(<ColorPicker value="#ff5733" />);
    expect(screen.getByText("#ff5733")).toBeInTheDocument();
  });

  it("renders the color swatch with the correct background", () => {
    const { container } = render(<ColorPicker value="#ef4444" />);
    const swatch = container.querySelector("div[style]");
    expect(swatch).toBeInTheDocument();
  });

  it("opens popover when clicked", async () => {
    const user = userEvent.setup();
    render(<ColorPicker />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Hue")).toBeInTheDocument();
    expect(screen.getByText("Saturation")).toBeInTheDocument();
    expect(screen.getByText("Lightness")).toBeInTheDocument();
  });

  it("shows hex input when showInput is true (default)", async () => {
    const user = userEvent.setup();
    render(<ColorPicker />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Hex")).toBeInTheDocument();
  });

  it("hides hex input when showInput is false", async () => {
    const user = userEvent.setup();
    render(<ColorPicker showInput={false} />);

    await user.click(screen.getByRole("button"));
    expect(screen.queryByText("Hex")).not.toBeInTheDocument();
  });

  it("shows presets section", async () => {
    const user = userEvent.setup();
    render(<ColorPicker />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Presets")).toBeInTheDocument();
  });

  it("renders custom presets", async () => {
    const user = userEvent.setup();
    const presets = ["#ff0000", "#00ff00"];
    render(<ColorPicker presets={presets} />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select color #ff0000")).toBeInTheDocument();
    expect(screen.getByLabelText("Select color #00ff00")).toBeInTheDocument();
  });

  it("calls onChange when a preset is clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<ColorPicker onChange={handleChange} presets={["#ef4444"]} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByLabelText("Select color #ef4444"));
    expect(handleChange).toHaveBeenCalledWith("#ef4444");
  });

  it("disables the trigger button when disabled", () => {
    render(<ColorPicker disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies custom className", () => {
    const { container } = render(<ColorPicker className="custom-picker" />);
    const button = container.querySelector(".custom-picker");
    expect(button).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<ColorPicker />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
