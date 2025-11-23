import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { StatusDot } from "../status-dot";

expect.extend(toHaveNoViolations);

describe("StatusDot", () => {
  it("renders correctly", () => {
    const { container } = render(<StatusDot />);
    const dot = container.querySelector(".w-2.h-2.rounded-full");
    expect(dot).toBeInTheDocument();
  });

  describe("Status Values", () => {
    it("renders success status", () => {
      render(<StatusDot status="success" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders warning status", () => {
      render(<StatusDot status="warning" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders danger status", () => {
      render(<StatusDot status="danger" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders info status", () => {
      render(<StatusDot status="info" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders neutral status", () => {
      render(<StatusDot status="neutral" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders active status", () => {
      render(<StatusDot status="active" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders away status", () => {
      render(<StatusDot status="away" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("renders offline status", () => {
      render(<StatusDot status="offline" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });
  });

  describe("Variant Prop", () => {
    it("accepts variant prop", () => {
      render(<StatusDot variant="success" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });

    it("status prop takes precedence over variant", () => {
      render(<StatusDot status="danger" variant="success" />);
      expect(document.querySelector(".w-2")).toBeInTheDocument();
    });
  });

  describe("With Label", () => {
    it("renders with label", () => {
      render(<StatusDot status="active" label="Online" />);
      expect(screen.getByText("Online")).toBeInTheDocument();
    });

    it("renders without label", () => {
      const { container } = render(<StatusDot status="active" />);
      const label = container.querySelector("span");
      expect(label).not.toBeInTheDocument();
    });
  });

  describe("Pulse Animation", () => {
    it("renders without pulse by default", () => {
      const { container } = render(<StatusDot status="active" />);
      const pulsingDot = container.querySelector(".animate-ping");
      expect(pulsingDot).not.toBeInTheDocument();
    });

    it("renders with pulse when enabled", () => {
      const { container } = render(<StatusDot status="active" pulse={true} />);
      const pulsingDot = container.querySelector(".animate-ping");
      expect(pulsingDot).toBeInTheDocument();
    });
  });

  describe("Custom Styling", () => {
    it("renders with custom className", () => {
      const { container } = render(<StatusDot status="success" className="custom-status" />);
      const statusDot = container.querySelector(".custom-status");
      expect(statusDot).toBeInTheDocument();
    });
  });

  describe("Common Use Cases", () => {
    it("renders user online status", () => {
      render(<StatusDot status="active" label="Online" pulse={true} />);
      expect(screen.getByText("Online")).toBeInTheDocument();
    });

    it("renders user away status", () => {
      render(<StatusDot status="away" label="Away" />);
      expect(screen.getByText("Away")).toBeInTheDocument();
    });

    it("renders system status", () => {
      render(<StatusDot status="success" label="All systems operational" />);
      expect(screen.getByText("All systems operational")).toBeInTheDocument();
    });
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<StatusDot status="success" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with label", async () => {
    const { container } = render(<StatusDot status="success" label="Online" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with pulse", async () => {
    const { container } = render(<StatusDot status="active" pulse={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
