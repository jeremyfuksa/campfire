import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Input } from "../input";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Input placeholder="Enter text" />);
      const input = screen.getByPlaceholderText("Enter text");
      expect(input).toBeInTheDocument();
    });

    it("defaults to text input role", () => {
      render(<Input />);
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<Input className="custom-class" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("custom-class");
    });

    it("renders with aria-label for accessibility", () => {
      render(<Input aria-label="Email address" />);
      const input = screen.getByLabelText("Email address");
      expect(input).toBeInTheDocument();
    });

    it("renders disabled input", () => {
      render(<Input disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
    });

    it("renders with value", () => {
      render(<Input value="test value" onChange={() => {}} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("test value");
    });

    it("renders with defaultValue", () => {
      render(<Input defaultValue="default text" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("default text");
    });
  });

  describe("Input Types", () => {
    it("renders as email input", () => {
      render(<Input type="email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "email");
    });

    it("renders as password input", () => {
      render(<Input type="password" />);
      const input = document.querySelector('input[type="password"]');
      expect(input).toBeInTheDocument();
    });

    it("renders as number input", () => {
      render(<Input type="number" />);
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("type", "number");
    });

    it("renders as tel input", () => {
      render(<Input type="tel" />);
      const input = document.querySelector('input[type="tel"]');
      expect(input).toBeInTheDocument();
    });

    it("renders as url input", () => {
      render(<Input type="url" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "url");
    });

    it("renders as search input", () => {
      render(<Input type="search" />);
      const input = screen.getByRole("searchbox");
      expect(input).toHaveAttribute("type", "search");
    });

    it("renders as date input", () => {
      render(<Input type="date" />);
      const input = document.querySelector('input[type="date"]');
      expect(input).toBeInTheDocument();
    });

    it("renders as time input", () => {
      render(<Input type="time" />);
      const input = document.querySelector('input[type="time"]');
      expect(input).toBeInTheDocument();
    });

    it("renders as file input", () => {
      render(<Input type="file" />);
      const input = document.querySelector('input[type="file"]');
      expect(input).toBeInTheDocument();
    });
  });

  describe("User Interactions", () => {
    it("handles text input", async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Type here" />);
      const input = screen.getByPlaceholderText("Type here");

      await user.type(input, "Hello World");
      expect(input).toHaveValue("Hello World");
    });

    it("handles onChange events", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Input onChange={handleChange} />);
      const input = screen.getByRole("textbox");

      await user.type(input, "test");
      expect(handleChange).toHaveBeenCalledTimes(4); // Once per character
    });

    it("handles onFocus events", async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();

      render(<Input onFocus={handleFocus} />);
      const input = screen.getByRole("textbox");

      await user.click(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles onBlur events", async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();

      render(<Input onBlur={handleBlur} />);
      const input = screen.getByRole("textbox");

      await user.click(input);
      await user.tab(); // Tab away to blur
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("handles onKeyDown events", async () => {
      const handleKeyDown = vi.fn();
      const user = userEvent.setup();

      render(<Input onKeyDown={handleKeyDown} />);
      const input = screen.getByRole("textbox");

      input.focus();
      await user.keyboard("{Enter}");
      expect(handleKeyDown).toHaveBeenCalledTimes(1);
    });

    it("does not accept input when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Input disabled onChange={handleChange} />);
      const input = screen.getByRole("textbox");

      await user.type(input, "test");
      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toHaveValue("");
    });

    it("handles clear action", async () => {
      const user = userEvent.setup();
      render(<Input defaultValue="initial value" />);
      const input = screen.getByRole("textbox");

      expect(input).toHaveValue("initial value");
      await user.clear(input);
      expect(input).toHaveValue("");
    });
  });

  describe("Validation States", () => {
    it("renders with aria-invalid attribute", () => {
      render(<Input aria-invalid={true} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("renders with required attribute", () => {
      render(<Input required />);
      const input = screen.getByRole("textbox");
      expect(input).toBeRequired();
    });

    it("renders with pattern validation", () => {
      render(<Input pattern="[0-9]{3}" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("pattern", "[0-9]{3}");
    });

    it("renders with minLength validation", () => {
      render(<Input minLength={5} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("minLength", "5");
    });

    it("renders with maxLength validation", () => {
      render(<Input maxLength={10} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("maxLength", "10");
    });

    it("respects maxLength constraint", async () => {
      const user = userEvent.setup();
      render(<Input maxLength={5} />);
      const input = screen.getByRole("textbox");

      await user.type(input, "1234567890");
      expect(input).toHaveValue("12345");
    });
  });

  describe("Placeholder and Labels", () => {
    it("displays placeholder text", () => {
      render(<Input placeholder="Enter your email" />);
      const input = screen.getByPlaceholderText("Enter your email");
      expect(input).toBeInTheDocument();
    });

    it("hides placeholder when input has value", async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Type here" />);
      const input = screen.getByPlaceholderText("Type here");

      await user.type(input, "text");
      expect(input).toHaveValue("text");
      // Placeholder is still in the DOM but not visible
      expect(input).toHaveAttribute("placeholder", "Type here");
    });
  });

  describe("Readonly State", () => {
    it("renders as readonly", () => {
      render(<Input readOnly value="readonly value" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("readonly");
    });

    it("does not accept input when readonly", async () => {
      const user = userEvent.setup();
      render(<Input readOnly defaultValue="initial" />);
      const input = screen.getByRole("textbox");

      await user.type(input, "new text");
      expect(input).toHaveValue("initial");
    });
  });

  describe("Number Input Specific", () => {
    it("accepts numeric input for number type", async () => {
      const user = userEvent.setup();
      render(<Input type="number" />);
      const input = screen.getByRole("spinbutton");

      await user.type(input, "123");
      expect(input).toHaveValue(123);
    });

    it("respects min and max for number input", () => {
      render(<Input type="number" min={0} max={100} />);
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("min", "0");
      expect(input).toHaveAttribute("max", "100");
    });

    it("respects step for number input", () => {
      render(<Input type="number" step={0.1} />);
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("step", "0.1");
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <div>
          <label htmlFor="test-input">Test Label</label>
          <Input id="test-input" />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when disabled", async () => {
      const { container } = render(
        <div>
          <label htmlFor="disabled-input">Disabled Input</label>
          <Input id="disabled-input" disabled />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations when required", async () => {
      const { container } = render(
        <div>
          <label htmlFor="required-input">Required Input</label>
          <Input id="required-input" required />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with aria-invalid", async () => {
      const { container } = render(
        <div>
          <label htmlFor="invalid-input">Invalid Input</label>
          <Input id="invalid-input" aria-invalid={true} />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has proper aria-describedby association", () => {
      render(
        <div>
          <Input aria-describedby="helper-text" />
          <p id="helper-text">Helper text</p>
        </div>
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-describedby", "helper-text");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-slot attribute", () => {
      render(<Input />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("data-slot", "input");
    });

    it("accepts custom data attributes", () => {
      render(<Input data-testid="custom-input" data-custom="value" />);
      const input = screen.getByTestId("custom-input");
      expect(input).toHaveAttribute("data-custom", "value");
    });
  });

  describe("Autocomplete", () => {
    it("supports autocomplete attribute", () => {
      render(<Input autoComplete="email" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("autocomplete", "email");
    });

    it("supports autocomplete off", () => {
      render(<Input autoComplete="off" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("autocomplete", "off");
    });
  });

  describe("Name and ID", () => {
    it("accepts name attribute", () => {
      render(<Input name="username" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("name", "username");
    });

    it("accepts id attribute", () => {
      render(<Input id="email-input" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id", "email-input");
    });
  });
});
