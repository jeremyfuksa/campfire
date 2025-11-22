import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { SearchInput } from "../search-input";

expect.extend(toHaveNoViolations);

describe("SearchInput", () => {
  it("renders correctly", () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(<SearchInput placeholder="Find items..." />);
    expect(screen.getByPlaceholderText("Find items...")).toBeInTheDocument();
  });

  it("handles input changes", async () => {
    const user = userEvent.setup();
    render(<SearchInput />);
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "test query");
    expect(input).toHaveValue("test query");
  });

  it("calls onSearch when search is performed", async () => {
    const handleSearch = vi.fn();
    const user = userEvent.setup();
    render(<SearchInput onSearch={handleSearch} suggestions={["apple", "banana"]} />);
    
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "app");
    
    const suggestion = await screen.findByText("apple");
    await user.click(suggestion);
    
    expect(handleSearch).toHaveBeenCalledWith("apple");
  });

  it("shows suggestions when typing", async () => {
    const user = userEvent.setup();
    render(<SearchInput suggestions={["apple", "apricot", "banana"]} />);
    
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "ap");
    
    expect(await screen.findByText("apple")).toBeInTheDocument();
    expect(await screen.findByText("apricot")).toBeInTheDocument();
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
  });

  it("clears input when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(<SearchInput />);
    
    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "test");
    
    const clearButton = screen.getByRole("button");
    await user.click(clearButton);
    
    expect(input).toHaveValue("");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<SearchInput placeholder="Search" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
