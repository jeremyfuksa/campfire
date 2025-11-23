import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./search-input";
import { useState } from "react";

const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const Interactive: Story = {
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <div className="w-[300px] space-y-2">
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
        />
        {query && (
          <p className="text-sm text-muted-foreground">
            Searching for: {query}
          </p>
        )}
      </div>
    );
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "React components",
    placeholder: "Search...",
  },
};

export const Large: Story = {
  render: () => (
    <SearchInput
      placeholder="Search documentation..."
      className="w-[500px] h-12 text-lg"
    />
  ),
};

export const WithClear: Story = {
  render: () => {
    const [query, setQuery] = useState("Clear me");
    return (
      <div className="w-[300px] space-y-2">
        <div className="relative">
          <SearchInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>
    );
  },
};
