import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../command";

describe("Command", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    );
    expect(container.querySelector('[data-slot="command"]')).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(
      <Command>
        <CommandInput placeholder="Type to search" />
      </Command>
    );
    expect(screen.getByPlaceholderText("Type to search")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(
      <Command>
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>
    );
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("renders groups with items", () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>Item 1</CommandItem>
            <CommandItem>Item 2</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
    expect(screen.getByText("Suggestions")).toBeInTheDocument();
  });
});
