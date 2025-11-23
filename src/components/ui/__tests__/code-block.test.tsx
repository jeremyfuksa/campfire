import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { CodeBlock } from "../code-block";

expect.extend(toHaveNoViolations);

describe("CodeBlock", () => {
  const mockClipboard = {
    writeText: vi.fn(),
  };

  beforeEach(() => {
    Object.assign(navigator, { clipboard: mockClipboard });
    mockClipboard.writeText.mockResolvedValue(undefined);
  });

  it("renders code", () => {
    render(<CodeBlock code="console.log('Hello');" />);
    expect(screen.getByText("console.log('Hello');")).toBeInTheDocument();
  });

  it("displays language", () => {
    render(<CodeBlock code="print('Hello')" language="python" />);
    expect(screen.getByText("python")).toBeInTheDocument();
  });

  it("defaults to javascript language", () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText("javascript")).toBeInTheDocument();
  });

  describe("Copy Functionality", () => {
    it("shows copy button", () => {
      render(<CodeBlock code="test code" />);
      expect(screen.getByRole("button", { name: /copy/i })).toBeInTheDocument();
    });

    it("copies code to clipboard", async () => {
      const user = userEvent.setup();
      const code = "const test = true;";
      render(<CodeBlock code={code} />);

      const copyButton = screen.getByRole("button", { name: /copy/i });
      await user.click(copyButton);

      expect(mockClipboard.writeText).toHaveBeenCalledWith(code);
    });

    it("shows copied state", async () => {
      const user = userEvent.setup();
      render(<CodeBlock code="test" />);

      const copyButton = screen.getByRole("button", { name: /copy/i });
      await user.click(copyButton);

      expect(screen.getByText("Copied!")).toBeInTheDocument();
    });
  });

  describe("Line Numbers", () => {
    it("does not show line numbers by default", () => {
      const { container } = render(<CodeBlock code="line 1\nline 2" />);
      expect(container.querySelector(".select-none")).not.toBeInTheDocument();
    });

    it("shows line numbers when enabled", () => {
      const { container } = render(
        <CodeBlock code="line 1\nline 2\nline 3" showLineNumbers={true} />
      );
      expect(container.querySelector(".select-none")).toBeInTheDocument();
    });
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<CodeBlock code="const x = 1;" language="javascript" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
