import type { Meta } from "@storybook/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Grid,
  Italic,
  List,
  Strikethrough,
  Underline,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { useState } from "react";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Single = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Strikethrough size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
      <ToggleGroupItem value="year">Year</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Small = {
  render: () => (
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="xs">XS</ToggleGroupItem>
      <ToggleGroupItem value="s">S</ToggleGroupItem>
      <ToggleGroupItem value="m">M</ToggleGroupItem>
      <ToggleGroupItem value="l">L</ToggleGroupItem>
      <ToggleGroupItem value="xl">XL</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Large = {
  render: () => (
    <ToggleGroup type="single" size="lg">
      <ToggleGroupItem value="grid">
        <Grid size={16} className="mr-2" />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <List size={16} className="mr-2" />
        List
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Interactive = {
  render: () => {
    const [value, setValue] = useState("center");
    return (
      <div className="space-y-2">
        <ToggleGroup type="single" value={value} onValueChange={setValue}>
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
          <ToggleGroupItem value="justify">Justify</ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">Selected: {value}</p>
      </div>
    );
  },
};

export const Disabled = {
  render: () => (
    <ToggleGroup type="single" disabled>
      <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
