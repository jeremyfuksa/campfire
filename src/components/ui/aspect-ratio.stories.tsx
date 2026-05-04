import type { Meta } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    ratio: { control: "number" },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

const placeholder = (
  <div className="flex items-center justify-center w-full h-full bg-muted rounded-md text-muted-foreground text-sm">
    Aspect content
  </div>
);

export const Square = {
  args: { ratio: 1 },
  render: (args: { ratio?: number }) => (
    <div className="w-72">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};

export const Sixteen9 = {
  name: "16:9",
  args: { ratio: 16 / 9 },
  render: (args: { ratio?: number }) => (
    <div className="w-96">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};

export const Four3 = {
  name: "4:3",
  args: { ratio: 4 / 3 },
  render: (args: { ratio?: number }) => (
    <div className="w-96">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};

export const Portrait = {
  args: { ratio: 3 / 4 },
  render: (args: { ratio?: number }) => (
    <div className="w-64">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};
