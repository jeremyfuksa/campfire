import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Toaster } from "../sonner";

describe("Sonner", () => {
  it("renders toaster", () => {
    const { container } = render(<Toaster />);
    expect(container.querySelector('[data-slot="toaster"]')).toBeInTheDocument();
  });
});
