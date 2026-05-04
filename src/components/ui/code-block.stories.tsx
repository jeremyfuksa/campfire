import type { Meta } from "@storybook/react";
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

const sample = `import { Button } from '@jeremyfuksa/campfire';

export function Example() {
  return <Button>Gather around</Button>;
}`;

export const Default = {
  args: {
    code: sample,
    language: "tsx",
  },
};

export const WithLineNumbers = {
  args: {
    code: sample,
    language: "tsx",
    showLineNumbers: true,
  },
};

export const Bash = {
  args: {
    code: "npm install @jeremyfuksa/campfire\nnpm run dev",
    language: "bash",
  },
};
