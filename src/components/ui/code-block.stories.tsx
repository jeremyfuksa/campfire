import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./code-block";

const meta = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    language: { control: "text" },
    showLineNumbers: { control: "boolean" },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sample = `import { Button } from '@jeremyfuksa/campfire';

export function Example() {
  return <Button>Gather around</Button>;
}`;

export const Default: Story = {
  args: {
    code: sample,
    language: "tsx",
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: sample,
    language: "tsx",
    showLineNumbers: true,
  },
};

export const Bash: Story = {
  args: {
    code: "npm install @jeremyfuksa/campfire\nnpm run dev",
    language: "bash",
  },
};
