import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "subtle", "bold", "muted"],
    },
    underline: {
      control: "select",
      options: ["always", "hover", "none"],
    },
    external: { control: "boolean" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Read the docs",
  },
};

export const External: Story = {
  args: {
    href: "https://example.com",
    external: true,
    children: "Visit example.com",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" variant="default">Default link</Link>
      <Link href="#" variant="bold">Bold link</Link>
      <Link href="#" variant="subtle">Subtle link</Link>
      <Link href="#" variant="muted">Muted link</Link>
    </div>
  ),
};

export const UnderlineModes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" underline="hover">Underlined on hover</Link>
      <Link href="#" underline="none">No underline</Link>
    </div>
  ),
};
