import type { Meta } from "@storybook/react";
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

export const Default = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} />;
  },
};

export const WithValue = {
  args: {
    value: 3.5,
    allowHalf: true,
  },
};

export const ReadOnly = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const Small = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="sm" />;
  },
};

export const Large = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} size="lg" />;
  },
};

export const Hearts = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} icon="heart" />;
  },
};

export const MaxTen = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} max={10} />;
  },
};

export const Disabled = {
  args: {
    value: 3,
    disabled: true,
  },
};
