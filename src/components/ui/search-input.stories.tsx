import type { Meta } from "@storybook/react";
import { useState } from "react";
import { SearchInput } from "./search-input";

const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;

const suggestions = [
  "React components",
  "Vue components",
  "Design systems",
  "Accessibility",
  "Autocomplete",
  "Filtered lists",
];

export const Default = {
  args: {
    placeholder: "Search...",
    suggestions,
  },
};

export const Interactive = {
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <div className="w-[300px] space-y-2">
        <SearchInput
          suggestions={suggestions}
          placeholder="Search products..."
          onSearch={(value) => setQuery(value)}
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

export const WithSuggestions = {
  args: {
    suggestions,
    placeholder: "Popular searches",
  },
};

export const Large = {
  render: () => (
    <SearchInput
      placeholder="Search documentation..."
      suggestions={suggestions}
      className="w-[500px] h-12 text-lg"
    />
  ),
};

export const WithCallback = {
  render: () => {
    const [query, setQuery] = useState("");
    return (
      <div className="w-[300px] space-y-2">
        <div className="relative">
          <SearchInput
            suggestions={suggestions}
            placeholder="Search..."
            onSearch={(value) => setQuery(value)}
          />
          {query && (
            <p className="text-sm text-muted-foreground">
              Last search: {query}
            </p>
          )}
        </div>
      </div>
    );
  },
};
