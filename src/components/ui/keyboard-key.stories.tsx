import type { Meta } from "@storybook/react";
import { KeyboardKey, KeyboardShortcut } from "./keyboard-key";

const meta = {
  title: "Components/KeyboardKey",
  component: KeyboardKey,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof KeyboardKey>;

export default meta;

export const Default = {
  args: { children: "K" },
};

export const SingleKeys = {
  render: () => (
    <div className="flex gap-2">
      <KeyboardKey>Esc</KeyboardKey>
      <KeyboardKey>Tab</KeyboardKey>
      <KeyboardKey>Space</KeyboardKey>
      <KeyboardKey>Enter</KeyboardKey>
    </div>
  ),
};

export const Shortcut = {
  render: () => <KeyboardShortcut keys={["⌘", "K"]} />,
};

export const ChainedShortcut = {
  render: () => <KeyboardShortcut keys={["Ctrl", "Shift", "P"]} />,
};

export const SequentialShortcut = {
  render: () => <KeyboardShortcut keys={["g", "p"]} separator="then" />,
};
