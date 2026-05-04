import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "./copy-button";

const meta = {
  title: "Components/CopyButton",
  component: CopyButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    showText: { control: "boolean" },
  },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "campfire-design-system",
    showText: true,
  },
};

export const IconOnly: Story = {
  args: {
    text: "campfire-design-system",
    size: "icon",
    showText: false,
  },
};

export const Outline: Story = {
  args: {
    text: "https://example.com/share",
    variant: "outline",
  },
};
