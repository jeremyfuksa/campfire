import type { Meta, StoryObj } from "@storybook/react";
import { KeyboardKey, KeyboardShortcut } from "./keyboard-key";

const meta = {
  title: "Components/KeyboardKey",
  component: KeyboardKey,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof KeyboardKey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "K" },
};

export const SingleKeys: Story = {
  render: () => (
    <div className="flex gap-2">
      <KeyboardKey>Esc</KeyboardKey>
      <KeyboardKey>Tab</KeyboardKey>
      <KeyboardKey>Space</KeyboardKey>
      <KeyboardKey>Enter</KeyboardKey>
    </div>
  ),
};

export const Shortcut: Story = {
  render: () => <KeyboardShortcut keys={["⌘", "K"]} />,
};

export const ChainedShortcut: Story = {
  render: () => <KeyboardShortcut keys={["Ctrl", "Shift", "P"]} />,
};

export const SequentialShortcut: Story = {
  render: () => <KeyboardShortcut keys={["g", "p"]} separator="then" />,
};
