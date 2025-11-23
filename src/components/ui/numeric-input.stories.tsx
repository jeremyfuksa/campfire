import type { Meta, StoryObj } from "@storybook/react";
import { NumericInput } from "./numeric-input";
import { useState } from "react";
import { Label } from "./label";

const meta = {
  title: "Components/NumericInput",
  component: NumericInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumericInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return (
      <div className="space-y-2 w-[200px]">
        <div className="flex justify-between">
          <Label>Quantity</Label>
          <span className="text-sm text-muted-foreground">{value}</span>
        </div>
        <NumericInput value={value} onChange={setValue} min={0} max={100} />
      </div>
    );
  },
};

export const WithRange: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Amount (0-100)</Label>
        <NumericInput value={value} onChange={setValue} min={0} max={100} step={5} />
      </div>
    );
  },
};

export const Decimal: Story = {
  render: () => {
    const [value, setValue] = useState(2.5);
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Price ($)</Label>
        <NumericInput
          value={value}
          onChange={setValue}
          min={0}
          max={1000}
          step={0.5}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    value: 10,
    disabled: true,
  },
};

export const NegativeRange: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Temperature (°C)</Label>
        <NumericInput
          value={value}
          onChange={setValue}
          min={-50}
          max={50}
          step={1}
        />
      </div>
    );
  },
};

export const LargeSteps: Story = {
  render: () => {
    const [value, setValue] = useState(100);
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Budget ($)</Label>
        <NumericInput
          value={value}
          onChange={setValue}
          min={0}
          max={10000}
          step={100}
        />
      </div>
    );
  },
};
