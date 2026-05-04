import type { Meta, StoryObj } from "@storybook/react";
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
type Story = StoryObj<typeof meta>;

const placeholder = (
  <div className="flex items-center justify-center w-full h-full bg-muted rounded-md text-muted-foreground text-sm">
    Aspect content
  </div>
);

export const Square: Story = {
  args: { ratio: 1 },
  render: (args) => (
    <div className="w-72">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};

export const Sixteen9: Story = {
  name: "16:9",
  args: { ratio: 16 / 9 },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};

export const Four3: Story = {
  name: "4:3",
  args: { ratio: 4 / 3 },
  render: (args) => (
    <div className="w-96">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  args: { ratio: 3 / 4 },
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args}>{placeholder}</AspectRatio>
    </div>
  ),
};
