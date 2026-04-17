import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Spinner } from "../spinner";

expect.extend(toHaveNoViolations);

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has accessible loading label", () => {
    render(<Spinner />);
    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("renders sr-only text", () => {
    render(<Spinner />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  describe("Sizes", () => {
    it("renders sm size", () => {
      const { container } = render(<Spinner size="sm" />);
      const spinner = container.querySelector(".h-4.w-4");
      expect(spinner).toBeInTheDocument();
    });

    it("renders md size (default)", () => {
      const { container } = render(<Spinner size="md" />);
      const spinner = container.querySelector(".h-8.w-8");
      expect(spinner).toBeInTheDocument();
    });

    it("renders lg size", () => {
      const { container } = render(<Spinner size="lg" />);
      const spinner = container.querySelector(".h-12.w-12");
      expect(spinner).toBeInTheDocument();
    });

    it("renders xl size", () => {
      const { container } = render(<Spinner size="xl" />);
      const spinner = container.querySelector(".h-16.w-16");
      expect(spinner).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Spinner variant="default" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
    });

    it("renders primary variant", () => {
      render(<Spinner variant="primary" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
    });
  });

  it("applies custom className", () => {
    const { container } = render(<Spinner className="custom-spinner" />);
    const spinner = container.querySelector(".custom-spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Spinner />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
