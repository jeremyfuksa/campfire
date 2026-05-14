import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Toaster } from "../sonner";

expect.extend(toHaveNoViolations);

describe("Sonner", () => {
  it("renders toaster", () => {
    const { container } = render(<Toaster />);
    expect(container.querySelector('[data-slot="toaster"]')).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Toaster />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
