import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "body",
        "body-lg",
        "body-sm",
        "label",
        "label-lg",
        "label-sm",
        "muted",
        "subtle",
      ],
    },
    as: {
      control: "select",
      options: ["p", "span", "div"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    variant: "body",
    children: "The campfire crackles in the dusk; bring a story to share.",
  },
};

export const BodyLarge: Story = {
  args: {
    variant: "body-lg",
    children: "The campfire crackles in the dusk; bring a story to share.",
  },
};

export const BodySmall: Story = {
  args: {
    variant: "body-sm",
    children: "The campfire crackles in the dusk; bring a story to share.",
  },
};

export const Label: Story = {
  args: {
    variant: "label",
    children: "Email address",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Quiet auxiliary text — supports the primary message without competing with it.",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Smallest, lowest-contrast typography for metadata and timestamps.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-md">
      <Text variant="body-lg">Body large — opening sentence weight.</Text>
      <Text variant="body">Body — the workhorse paragraph style.</Text>
      <Text variant="body-sm">Body small — denser supporting copy.</Text>
      <Text variant="label">Label — form fields and inline names.</Text>
      <Text variant="muted">Muted — quiet auxiliary text.</Text>
      <Text variant="subtle">Subtle — captions and timestamps.</Text>
    </div>
  ),
};
