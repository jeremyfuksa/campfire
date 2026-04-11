import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { DollarSign, Users } from "lucide-react";
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
      render(
        <StatCard
          label="Users"
          value="100"
          icon={<Users data-testid="stat-icon-users" />}
        />,
      );
      expect(screen.getByTestId("stat-card-icon")).toBeInTheDocument();
      expect(screen.getByTestId("stat-icon-users")).toBeInTheDocument();
    });

    it("renders without icon", () => {
      render(<StatCard label="Users" value="100" />);
      expect(screen.queryByTestId("stat-card-icon")).not.toBeInTheDocument();
    });

    it("applies custom icon colors", () => {
      render(
        <StatCard
          label="Users"
          value="100"
          icon={<Users />}
          iconColor="red"
          iconBgColor="blue"
        />,
      );
      expect(screen.getByTestId("stat-card-icon")).toBeInTheDocument();
    });
  });

  describe("Trend", () => {
    it("renders positive trend", () => {
      render(
        <StatCard label="Sales" value="$1,000" trend={{ value: 12, isPositive: true }} />,
      );
      expect(screen.getByText("12%")).toBeInTheDocument();
      expect(screen.getByTestId("stat-card-trend-up")).toBeInTheDocument();
    });

    it("renders negative trend", () => {
      render(
        <StatCard label="Sales" value="$1,000" trend={{ value: 5, isPositive: false }} />,
      );
      expect(screen.getByText("5%")).toBeInTheDocument();
      expect(screen.getByTestId("stat-card-trend-down")).toBeInTheDocument();
    });

    it("displays absolute value for negative trend", () => {
      render(<StatCard label="Revenue" value="$500" trend={{ value: -10, isPositive: false }} />);
      expect(screen.getByText("10%")).toBeInTheDocument();
    });

    it("renders without trend", () => {
      render(<StatCard label="Count" value="50" />);
      expect(screen.queryByTestId("stat-card-trend-up")).not.toBeInTheDocument();
      expect(screen.queryByTestId("stat-card-trend-down")).not.toBeInTheDocument();
    });
  });

  it("renders with custom className", () => {
    const { container } = render(
      <StatCard label="Test" value="123" className="custom-stat" />,
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
        icon={<DollarSign />}
        trend={{ value: 15, isPositive: true }}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
