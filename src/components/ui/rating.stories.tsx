import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Rating } from "./rating";

const meta = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    icon: {
      control: "select",
      options: ["star", "heart"],
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  },
};

export const WithValue: Story = {
  args: {
    value: 3.5,
    allowHalf: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="sm" />;
  },
};

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="lg" />;
  },
};

export const Hearts: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} icon="heart" />;
  },
};

export const MaxTen: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} max={10} />;
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};
