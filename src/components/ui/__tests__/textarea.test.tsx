import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Textarea } from "../textarea";

expect.extend(toHaveNoViolations);

describe("Textarea", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Textarea placeholder="Enter text" />);
      const textarea = screen.getByPlaceholderText("Enter text");
      expect(textarea).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<Textarea className="custom-class" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveClass("custom-class");
    });

    it("renders disabled", () => {
      render(<Textarea disabled aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toBeDisabled();
    });

    it("renders with value", () => {
      render(<Textarea value="test value" onChange={() => {}} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveValue("test value");
    });

    it("renders with defaultValue", () => {
      render(<Textarea defaultValue="default text" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveValue("default text");
    });
  });

  describe("User Interactions", () => {
    it("handles text input", async () => {
      const user = userEvent.setup();
      render(<Textarea placeholder="Type here" />);
      const textarea = screen.getByPlaceholderText("Type here");

      await user.type(textarea, "Hello World");
      expect(textarea).toHaveValue("Hello World");
    });

    it("handles onChange events", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Textarea onChange={handleChange} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.type(textarea, "test");
      expect(handleChange).toHaveBeenCalled();
    });

    it("handles onFocus events", async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();

      render(<Textarea onFocus={handleFocus} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.click(textarea);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles onBlur events", async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();

      render(<Textarea onBlur={handleBlur} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.click(textarea);
      await user.tab();
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("does not accept input when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Textarea disabled onChange={handleChange} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.type(textarea, "test");
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("handles clear action", async () => {
      const user = userEvent.setup();
      render(<Textarea defaultValue="initial value" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      expect(textarea).toHaveValue("initial value");
      await user.clear(textarea);
      expect(textarea).toHaveValue("");
    });

    it("handles multiline text", async () => {
      const user = userEvent.setup();
      render(<Textarea aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.type(textarea, "Line 1{Enter}Line 2{Enter}Line 3");
      expect(textarea).toHaveValue("Line 1\nLine 2\nLine 3");
    });
  });

  describe("Validation States", () => {
    it("renders with aria-invalid", () => {
      render(<Textarea aria-invalid={true} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-invalid", "true");
    });

    it("renders with required attribute", () => {
      render(<Textarea required aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toBeRequired();
    });

    it("renders with minLength validation", () => {
      render(<Textarea minLength={10} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("minLength", "10");
    });

    it("renders with maxLength validation", () => {
      render(<Textarea maxLength={100} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("maxLength", "100");
    });

    it("respects maxLength constraint", async () => {
      const user = userEvent.setup();
      render(<Textarea maxLength={5} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.type(textarea, "1234567890");
      expect(textarea).toHaveValue("12345");
    });
  });

  describe("Placeholder", () => {
    it("displays placeholder text", () => {
      render(<Textarea placeholder="Enter description" />);
      const textarea = screen.getByPlaceholderText("Enter description");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("Readonly State", () => {
    it("renders as readonly", () => {
      render(<Textarea readOnly value="readonly value" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("readonly");
    });

    it("does not accept input when readonly", async () => {
      const user = userEvent.setup();
      render(<Textarea readOnly defaultValue="initial" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");

      await user.type(textarea, "new text");
      expect(textarea).toHaveValue("initial");
    });
  });

  describe("Rows", () => {
    it("accepts rows attribute", () => {
      render(<Textarea rows={5} aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("rows", "5");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <div>
          <label htmlFor="description">Description</label>
          <Textarea id="description" />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when disabled", async () => {
      const { container } = render(
        <div>
          <label htmlFor="disabled-textarea">Disabled</label>
          <Textarea id="disabled-textarea" disabled />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when required", async () => {
      const { container } = render(
        <div>
          <label htmlFor="required-textarea">Required</label>
          <Textarea id="required-textarea" required />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper aria-describedby", () => {
      render(
        <div>
          <Textarea aria-describedby="helper" aria-label="Text area" />
          <p id="helper">Helper text</p>
        </div>
      );
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-describedby", "helper");
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      render(<Textarea aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("data-slot", "textarea");
    });

    it("accepts custom data attributes", () => {
      render(<Textarea data-testid="custom" data-custom="value" aria-label="Text area" />);
      const textarea = screen.getByTestId("custom");
      expect(textarea).toHaveAttribute("data-custom", "value");
    });
  });

  describe("Name and ID", () => {
    it("accepts name attribute", () => {
      render(<Textarea name="comment" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("name", "comment");
    });

    it("accepts id attribute", () => {
      render(<Textarea id="comment-textarea" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("id", "comment-textarea");
    });
  });

  describe("Autocomplete", () => {
    it("supports autocomplete attribute", () => {
      render(<Textarea autoComplete="off" aria-label="Text area" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("autocomplete", "off");
    });
  });
});
