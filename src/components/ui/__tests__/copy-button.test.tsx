import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { CopyButton } from "../copy-button";

expect.extend(toHaveNoViolations);

describe("CopyButton", () => {
  const mockClipboard = {
    writeText: vi.fn(),
  };

  beforeEach(() => {
    Object.assign(navigator, { clipboard: mockClipboard });
    mockClipboard.writeText.mockResolvedValue(undefined);
  });

  it("renders with default text", () => {
    render(<CopyButton text="test text" />);
    expect(screen.getByRole("button", { name: /copy/i })).toBeInTheDocument();
  });

  it("copies text to clipboard", async () => {
    const user = userEvent.setup();
    const textToCopy = "Hello, World!";
    render(<CopyButton text={textToCopy} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockClipboard.writeText).toHaveBeenCalledWith(textToCopy);
  });

  it("shows copied state", async () => {
    const user = userEvent.setup();
    render(<CopyButton text="test" />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  it("hides text when showText is false", () => {
    render(<CopyButton text="test" showText={false} />);
    expect(screen.queryByText("Copy")).not.toBeInTheDocument();
  });

  it("accepts variant prop", () => {
    render(<CopyButton text="test" variant="outline" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("accepts size prop", () => {
    render(<CopyButton text="test" size="lg" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<CopyButton text="test text" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
