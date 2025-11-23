import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Autocomplete, AutocompleteOption } from "./autocomplete";

const fruits: AutocompleteOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
  { value: "kiwi", label: "Kiwi" },
  { value: "lemon", label: "Lemon" },
];

const meta = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: fruits,
    placeholder: "Select a fruit",
  },
};

export const WithValue: Story = {
  args: {
    options: fruits,
    value: "banana",
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: "400px" }}>
        <Autocomplete
          options={fruits}
          multiple
          value={value}
          onValueChange={(v) => setValue(v as string[])}
          placeholder="Select fruits"
        />
      </div>
    );
  },
};

export const WithMaxSelected: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: "400px" }}>
        <Autocomplete
          options={fruits}
          multiple
          maxSelected={3}
          value={value}
          onValueChange={(v) => setValue(v as string[])}
          placeholder="Select up to 3 fruits"
        />
      </div>
    );
  },
};

export const Creatable: Story = {
  render: () => {
    const [options, setOptions] = useState(fruits);
    const [value, setValue] = useState<string>();

    return (
      <div style={{ width: "400px" }}>
        <Autocomplete
          options={options}
          value={value}
          onValueChange={(v) => setValue(v as string)}
          creatable
          onCreate={(newValue) => {
            setOptions([...options, { value: newValue.toLowerCase(), label: newValue }]);
            setValue(newValue.toLowerCase());
          }}
          placeholder="Select or create a fruit"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    options: fruits,
    disabled: true,
    placeholder: "Disabled",
  },
};
