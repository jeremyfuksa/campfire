import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Slider } from "../slider";

expect.extend(toHaveNoViolations);

describe("Slider", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(<Slider defaultValue={[50]} aria-label="Volume" />);
      const slider = container.querySelector('[data-slot="slider"]');
      expect(slider).toBeInTheDocument();
    });

    it("has role slider", () => {
      render(<Slider defaultValue={[50]} aria-label="Volume" />);
      const slider = screen.getByRole("slider");
      expect(slider).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(<Slider defaultValue={[50]} aria-label="Test" />);
      const slider = container.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute("data-slot", "slider");
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Slider defaultValue={[50]} className="custom-slider" aria-label="Custom" />
      );
      const slider = container.querySelector(".custom-slider");
      expect(slider).toBeInTheDocument();
    });
  });

  describe("Single Value", () => {
    it("renders with single thumb", () => {
      const { container } = render(<Slider defaultValue={[50]} aria-label="Volume" />);
      const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
      expect(thumbs).toHaveLength(1);
    });

    it("works with defaultValue", () => {
      render(<Slider defaultValue={[75]} min={0} max={100} aria-label="Volume" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuenow", "75");
    });

    it("works with value prop", () => {
      render(<Slider value={[25]} min={0} max={100} aria-label="Volume" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuenow", "25");
    });

    it("calls onValueChange when value changes", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Slider defaultValue={[50]} onValueChange={handleChange} aria-label="Volume" />
      );

      const thumb = screen.getByRole("slider");
      thumb.focus();

      await user.keyboard("{ArrowRight}");
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Range Values", () => {
    it("renders with multiple thumbs for range", () => {
      const { container } = render(
        <Slider defaultValue={[25, 75]} aria-label="Price range" />
      );
      const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
      expect(thumbs).toHaveLength(2);
    });

    it("works with range defaultValue", () => {
      render(<Slider defaultValue={[20, 80]} min={0} max={100} aria-label="Range" />);
      const sliders = screen.getAllByRole("slider");
      expect(sliders).toHaveLength(2);
      expect(sliders[0]).toHaveAttribute("aria-valuenow", "20");
      expect(sliders[1]).toHaveAttribute("aria-valuenow", "80");
    });

    it("calls onValueChange with array for range", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Slider defaultValue={[30, 70]} onValueChange={handleChange} aria-label="Range" />
      );

      const sliders = screen.getAllByRole("slider");
      sliders[0].focus();

      await user.keyboard("{ArrowRight}");
      expect(handleChange).toHaveBeenCalledWith(expect.arrayContaining([expect.any(Number), 70]));
    });
  });

  describe("Min and Max", () => {
    it("defaults to min 0 and max 100", () => {
      render(<Slider defaultValue={[50]} aria-label="Default range" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuemin", "0");
      expect(slider).toHaveAttribute("aria-valuemax", "100");
    });

    it("accepts custom min and max", () => {
      render(<Slider defaultValue={[5]} min={0} max={10} aria-label="Custom range" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuemin", "0");
      expect(slider).toHaveAttribute("aria-valuemax", "10");
    });

    it("accepts negative min", () => {
      render(<Slider defaultValue={[0]} min={-100} max={100} aria-label="Negative range" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuemin", "-100");
    });
  });

  describe("Step", () => {
    it("accepts step prop", () => {
      const { container } = render(
        <Slider defaultValue={[50]} step={10} aria-label="Stepped" />
      );
      const slider = container.querySelector('[data-slot="slider"]');
      expect(slider).toBeInTheDocument();
    });
  });

  describe("Disabled State", () => {
    it("renders in disabled state", () => {
      const { container } = render(
        <Slider defaultValue={[50]} disabled aria-label="Disabled" />
      );
      const slider = container.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute("data-disabled");
    });

    it("does not call onValueChange when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Slider defaultValue={[50]} disabled onValueChange={handleChange} aria-label="Disabled" />
      );

      const slider = screen.getByRole("slider");
      slider.focus();

      await user.keyboard("{ArrowRight}");
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("Controlled Mode", () => {
    it("works in controlled mode", () => {
      const { rerender } = render(
        <Slider value={[30]} aria-label="Controlled" />
      );
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuenow", "30");

      rerender(<Slider value={[60]} aria-label="Controlled" />);
      expect(slider).toHaveAttribute("aria-valuenow", "60");
    });
  });

  describe("Orientation", () => {
    it("defaults to horizontal orientation", () => {
      const { container } = render(<Slider defaultValue={[50]} aria-label="Horizontal" />);
      const slider = container.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute("data-orientation", "horizontal");
    });

    it("renders with vertical orientation", () => {
      const { container } = render(
        <Slider defaultValue={[50]} orientation="vertical" aria-label="Vertical" />
      );
      const slider = container.querySelector('[data-slot="slider"]');
      expect(slider).toHaveAttribute("data-orientation", "vertical");
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports arrow keys for horizontal slider", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Slider defaultValue={[50]} onValueChange={handleChange} aria-label="Keyboard" />
      );

      const slider = screen.getByRole("slider");
      slider.focus();

      await user.keyboard("{ArrowRight}");
      expect(handleChange).toHaveBeenCalled();
    });

    it("supports Home and End keys", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Slider defaultValue={[50]} min={0} max={100} onValueChange={handleChange} aria-label="Keys" />
      );

      const slider = screen.getByRole("slider");
      slider.focus();

      await user.keyboard("{End}");
      expect(handleChange).toHaveBeenCalledWith([100]);

      await user.keyboard("{Home}");
      expect(handleChange).toHaveBeenCalledWith([0]);
    });
  });

  describe("Common Use Cases", () => {
    it("works as volume control", () => {
      render(<Slider defaultValue={[70]} min={0} max={100} aria-label="Volume" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuenow", "70");
    });

    it("works as price range filter", () => {
      render(
        <Slider defaultValue={[100, 500]} min={0} max={1000} aria-label="Price range" />
      );
      const sliders = screen.getAllByRole("slider");
      expect(sliders).toHaveLength(2);
      expect(sliders[0]).toHaveAttribute("aria-valuenow", "100");
      expect(sliders[1]).toHaveAttribute("aria-valuenow", "500");
    });

    it("works as opacity control", () => {
      render(<Slider defaultValue={[0.8]} min={0} max={1} step={0.01} aria-label="Opacity" />);
      const slider = screen.getByRole("slider");
      expect(slider).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <Slider defaultValue={[50]} aria-label="Volume control" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with range", async () => {
      const { container } = render(
        <Slider defaultValue={[25, 75]} aria-label="Range slider" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when disabled", async () => {
      const { container } = render(
        <Slider defaultValue={[50]} disabled aria-label="Disabled slider" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper ARIA attributes", () => {
      render(<Slider defaultValue={[50]} min={0} max={100} aria-label="Slider" />);
      const slider = screen.getByRole("slider");
      expect(slider).toHaveAttribute("aria-valuenow", "50");
      expect(slider).toHaveAttribute("aria-valuemin", "0");
      expect(slider).toHaveAttribute("aria-valuemax", "100");
    });
  });

  describe("Data Attributes", () => {
    it("all components have data-slot attributes", () => {
      const { container } = render(<Slider defaultValue={[50]} aria-label="Test" />);

      expect(container.querySelector('[data-slot="slider"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="slider-track"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="slider-range"]')).toBeInTheDocument();
      expect(container.querySelector('[data-slot="slider-thumb"]')).toBeInTheDocument();
    });
  });
});
