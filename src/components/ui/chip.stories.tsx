import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Chip",
  },
};

export const WithRemove: Story = {
  args: {
    children: "Removable",
    onRemove: () => alert("Chip removed"),
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip>React</Chip>
      <Chip>TypeScript</Chip>
      <Chip>Tailwind</Chip>
      <Chip>Vite</Chip>
    </div>
  ),
};

export const WithRemoveHandlers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip onRemove={() => console.log("Removed React")}>React</Chip>
      <Chip onRemove={() => console.log("Removed TypeScript")}>TypeScript</Chip>
      <Chip onRemove={() => console.log("Removed Tailwind")}>Tailwind</Chip>
      <Chip onRemove={() => console.log("Removed Vite")}>Vite</Chip>
    </div>
  ),
};

export const Tags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip onRemove={() => {}}>JavaScript</Chip>
      <Chip onRemove={() => {}}>CSS</Chip>
      <Chip onRemove={() => {}}>HTML</Chip>
      <Chip onRemove={() => {}}>Node.js</Chip>
      <Chip onRemove={() => {}}>Express</Chip>
      <Chip onRemove={() => {}}>MongoDB</Chip>
    </div>
  ),
};

export const Skills: Story = {
  render: () => (
    <div className="w-[400px] space-y-3">
      <div>
        <h4 className="text-sm font-medium mb-2">Frontend</h4>
        <div className="flex flex-wrap gap-2">
          <Chip>React</Chip>
          <Chip>Vue</Chip>
          <Chip>Angular</Chip>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Backend</h4>
        <div className="flex flex-wrap gap-2">
          <Chip>Node.js</Chip>
          <Chip>Python</Chip>
          <Chip>Go</Chip>
        </div>
      </div>
    </div>
  ),
};
