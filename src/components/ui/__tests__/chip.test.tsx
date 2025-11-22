import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Chip } from "../chip";

expect.extend(toHaveNoViolations);

describe("Chip", () => {
  it("renders with label", () => {
    render(<Chip label="Test Chip" />);
    expect(screen.getByText("Test Chip")).toBeInTheDocument();
  });

  it("renders with children", () => {
    render(<Chip>Child Content</Chip>);
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("prefers children over label", () => {
    render(<Chip label="Label">Children</Chip>);
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(screen.queryByText("Label")).not.toBeInTheDocument();
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Chip variant="default">Default</Chip>);
      expect(screen.getByText("Default")).toBeInTheDocument();
    });

    it("renders primary variant", () => {
      render(<Chip variant="primary">Primary</Chip>);
      expect(screen.getByText("Primary")).toBeInTheDocument();
    });

    it("renders success variant", () => {
      render(<Chip variant="success">Success</Chip>);
      expect(screen.getByText("Success")).toBeInTheDocument();
    });

    it("renders warning variant", () => {
      render(<Chip variant="warning">Warning</Chip>);
      expect(screen.getByText("Warning")).toBeInTheDocument();
    });

    it("renders danger variant", () => {
      render(<Chip variant="danger">Danger</Chip>);
      expect(screen.getByText("Danger")).toBeInTheDocument();
    });
  });

  describe("With Icon", () => {
    it("renders with icon", () => {
      const { container } = render(<Chip label="With Icon" icon="fa-star" />);
      const icon = container.querySelector(".fa-star");
      expect(icon).toBeInTheDocument();
    });
  });

  describe("Removable", () => {
    it("renders remove button with onRemove", () => {
      const handleRemove = vi.fn();
      const { container } = render(<Chip label="Removable" onRemove={handleRemove} />);
      const removeButton = container.querySelector(".fa-xmark");
      expect(removeButton).toBeInTheDocument();
    });

    it("calls onRemove when clicked", async () => {
      const handleRemove = vi.fn();
      const user = userEvent.setup();
      const { container } = render(<Chip label="Removable" onRemove={handleRemove} />);

      const removeButton = container.querySelector("button");
      await user.click(removeButton!);

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when clicked", async () => {
      const handleClose = vi.fn();
      const user = userEvent.setup();
      const { container } = render(<Chip label="Closable" onClose={handleClose} />);

      const closeButton = container.querySelector("button");
      await user.click(closeButton!);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("prefers onClose over onRemove", async () => {
      const handleRemove = vi.fn();
      const handleClose = vi.fn();
      const user = userEvent.setup();
      const { container } = render(
        <Chip label="Both" onRemove={handleRemove} onClose={handleClose} />
      );

      const button = container.querySelector("button");
      await user.click(button!);

      expect(handleClose).toHaveBeenCalledTimes(1);
      expect(handleRemove).not.toHaveBeenCalled();
    });
  });

  it("renders with custom className", () => {
    const { container } = render(<Chip label="Custom" className="custom-chip" />);
    const chip = container.querySelector(".custom-chip");
    expect(chip).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Chip label="Accessible Chip" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have violations with remove button", async () => {
    const { container } = render(<Chip label="Removable" onRemove={() => {}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
