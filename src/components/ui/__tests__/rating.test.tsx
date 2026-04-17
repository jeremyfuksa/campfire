import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Rating } from "../rating";

expect.extend(toHaveNoViolations);

describe("Rating", () => {
  it("renders without crashing", () => {
    render(<Rating />);
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("renders default 5 stars", () => {
    render(<Rating />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);
  });

  it("renders custom number of stars", () => {
    render(<Rating max={10} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(10);
  });

  it("has aria-label on the group", () => {
    render(<Rating />);
    expect(screen.getByLabelText("Rating")).toBeInTheDocument();
  });

  it("has aria-labels on individual stars", () => {
    render(<Rating max={3} />);
    expect(screen.getByLabelText("Rate 1 out of 3")).toBeInTheDocument();
    expect(screen.getByLabelText("Rate 2 out of 3")).toBeInTheDocument();
    expect(screen.getByLabelText("Rate 3 out of 3")).toBeInTheDocument();
  });

  it("calls onChange when a star is clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Rating onChange={handleChange} />);

    await user.click(screen.getByLabelText("Rate 3 out of 5"));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it("does not call onChange when readOnly", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Rating onChange={handleChange} readOnly />);

    await user.click(screen.getByLabelText("Rate 3 out of 5"));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("does not call onChange when disabled", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Rating onChange={handleChange} disabled />);

    await user.click(screen.getByLabelText("Rate 3 out of 5"));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { container } = render(<Rating className="custom-rating" />);
    const rating = container.querySelector(".custom-rating");
    expect(rating).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Rating value={3} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
