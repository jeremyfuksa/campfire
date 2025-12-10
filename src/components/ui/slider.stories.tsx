import type { Meta } from "@storybook/react";
import { Slider } from "./slider";
import { useState } from "react";
import { Label } from "./label";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

export const Default = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const WithLabel = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="space-y-4 w-[300px]">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-sm text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const Range = {
  render: () => {
    const [value, setValue] = useState([25, 75]);
    return (
      <div className="space-y-4 w-[300px]">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const WithSteps = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="space-y-4 w-[300px]">
        <div className="flex justify-between">
          <Label>Quantity</Label>
          <span className="text-sm text-muted-foreground">{value[0]}</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={10} />
      </div>
    );
  },
};

export const Disabled = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: "w-[300px]",
  },
};

export const MinMax = {
  render: () => {
    const [value, setValue] = useState([20]);
    return (
      <div className="space-y-4 w-[300px]">
        <div className="flex justify-between">
          <Label>Temperature (°C)</Label>
          <span className="text-sm text-muted-foreground">{value[0]}°C</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={-10}
          max={40}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>-10°C</span>
          <span>40°C</span>
        </div>
      </div>
    );
  },
};
