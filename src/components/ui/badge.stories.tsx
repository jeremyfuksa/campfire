import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Badge>
      <i className="fa-solid fa-check mr-1"></i>
      Verified
    </Badge>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Badge className="bg-green-500">Active</Badge>
        <Badge className="bg-yellow-500">Pending</Badge>
        <Badge variant="destructive">Inactive</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="outline" className="border-blue-500 text-blue-500">
          Draft
        </Badge>
        <Badge variant="outline" className="border-purple-500 text-purple-500">
          Review
        </Badge>
        <Badge variant="outline" className="border-green-500 text-green-500">
          Published
        </Badge>
      </div>
    </div>
  ),
};
