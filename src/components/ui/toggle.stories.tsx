import type { Meta } from "@storybook/react";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import { Toggle } from "./toggle";
import { useState } from "react";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default = {
  args: {
    children: "Toggle",
  },
};

export const WithIcon = {
  args: {
    children: <Bold size={16} />,
    "aria-label": "Toggle bold",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    children: <Italic size={16} />,
    "aria-label": "Toggle italic",
  },
};

export const Small = {
  args: {
    size: "sm",
    children: <Underline size={14} />,
    "aria-label": "Toggle underline",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: <Strikethrough size={18} />,
    "aria-label": "Toggle strikethrough",
  },
};

export const Interactive = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <div className="space-y-2">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Bold size={16} className="mr-2" />
          Bold
        </Toggle>
        <p className="text-sm text-muted-foreground">
          State: {pressed ? "Pressed" : "Not pressed"}
        </p>
      </div>
    );
  },
};

export const TextFormatting = {
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Toggle bold">
        <Bold size={16} />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic size={16} />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline size={16} />
      </Toggle>
      <Toggle aria-label="Toggle strikethrough">
        <Strikethrough size={16} />
      </Toggle>
    </div>
  ),
};

export const Disabled = {
  args: {
    disabled: true,
    children: <Bold size={16} />,
    "aria-label": "Toggle bold",
  },
};
