import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Calendar } from "../calendar";

describe("Calendar", () => {
  it("renders correctly", () => {
    const { container } = render(<Calendar />);
    expect(container.querySelector('[data-slot="calendar"]')).toBeInTheDocument();
  });

  it("renders with selected date", () => {
    const date = new Date(2024, 0, 15);
    render(<Calendar mode="single" selected={date} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
