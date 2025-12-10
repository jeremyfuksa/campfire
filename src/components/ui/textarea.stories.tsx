import type { Meta } from "@storybook/react";
import { Textarea } from "./textarea";
import { Label } from "./label";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

export const Default = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const WithLabel = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithValue = {
  args: {
    defaultValue:
      "This is a textarea with some default text content. You can edit this text.",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const WithRows = {
  args: {
    placeholder: "Textarea with 8 rows",
    rows: 8,
  },
};

export const LimitedHeight = {
  args: {
    placeholder: "This textarea has a max height",
    className: "max-h-32",
  },
};
