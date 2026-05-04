import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 2,
    children: "Gather around the campfire",
  },
};

export const Level1: Story = {
  args: { level: 1, children: "Page title" },
};

export const Level2: Story = {
  args: { level: 2, children: "Section title" },
};

export const Level3: Story = {
  args: { level: 3, children: "Subsection title" },
};

export const Hierarchy: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Heading level={1}>Heading 1 — page title</Heading>
      <Heading level={2}>Heading 2 — section</Heading>
      <Heading level={3}>Heading 3 — subsection</Heading>
      <Heading level={4}>Heading 4 — component title</Heading>
      <Heading level={5}>Heading 5 — card title</Heading>
      <Heading level={6}>Heading 6 — small title</Heading>
    </div>
  ),
};

export const SemanticOverride: Story = {
  name: "Visual ≠ semantic level",
  render: () => (
    <div className="flex flex-col gap-2">
      <Heading level={2} as="h1">
        H1 element styled as level 2
      </Heading>
      <p className="text-sm text-muted-foreground">
        Use <code>as</code> to keep semantic order while picking a different
        visual size.
      </p>
    </div>
  ),
};
