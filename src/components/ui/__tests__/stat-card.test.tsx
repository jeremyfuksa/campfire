import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { StatCard } from "../stat-card";

expect.extend(toHaveNoViolations);

describe("StatCard", () => {
  it("renders with label and value", () => {
    render(<StatCard label="Total Users" value="1,234" />);
    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
  });

  it("accepts numeric value", () => {
    render(<StatCard label="Count" value={42} />);
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  describe("Icon", () => {
    it("renders with icon", () => {
      const { container } = render(<StatCard label="Users" value="100" icon="fa-users" />);
      expect(container.querySelector(".fa-users")).toBeInTheDocument();
    });

    it("renders without icon", () => {
      const { container } = render(<StatCard label="Users" value="100" />);
      expect(container.querySelector("i")).not.toBeInTheDocument();
    });

    it("applies custom icon colors", () => {
      const { container } = render(
        <StatCard
          label="Users"
          value="100"
          icon="fa-users"
          iconColor="red"
          iconBgColor="blue"
        />
      );
      const iconContainer = container.querySelector(".w-12.h-12");
      expect(iconContainer).toBeInTheDocument();
    });
  });

  describe("Trend", () => {
    it("renders positive trend", () => {
      const { container } = render(
        <StatCard label="Sales" value="$1,000" trend={{ value: 12, isPositive: true }} />
      );
      expect(screen.getByText("12%")).toBeInTheDocument();
      expect(container.querySelector(".fa-arrow-up")).toBeInTheDocument();
    });

    it("renders negative trend", () => {
      const { container } = render(
        <StatCard label="Sales" value="$1,000" trend={{ value: 5, isPositive: false }} />
      );
      expect(screen.getByText("5%")).toBeInTheDocument();
      expect(container.querySelector(".fa-arrow-down")).toBeInTheDocument();
    });

    it("displays absolute value for negative trend", () => {
      render(<StatCard label="Revenue" value="$500" trend={{ value: -10, isPositive: false }} />);
      expect(screen.getByText("10%")).toBeInTheDocument();
    });

    it("renders without trend", () => {
      const { container } = render(<StatCard label="Count" value="50" />);
      expect(container.querySelector(".fa-arrow-up")).not.toBeInTheDocument();
      expect(container.querySelector(".fa-arrow-down")).not.toBeInTheDocument();
    });
  });

  it("renders with custom className", () => {
    const { container } = render(
      <StatCard label="Test" value="123" className="custom-stat" />
    );
    expect(container.querySelector(".custom-stat")).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<StatCard label="Users" value="1,234" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with all features", async () => {
    const { container } = render(
      <StatCard
        label="Revenue"
        value="$10,000"
        icon="fa-dollar-sign"
        trend={{ value: 15, isPositive: true }}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
