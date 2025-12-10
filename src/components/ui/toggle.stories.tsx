import type { Meta } from "@storybook/react";
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
    children: <i className="fa-solid fa-bold"></i>,
    "aria-label": "Toggle bold",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    children: <i className="fa-solid fa-italic"></i>,
    "aria-label": "Toggle italic",
  },
};

export const Small = {
  args: {
    size: "sm",
    children: <i className="fa-solid fa-underline"></i>,
    "aria-label": "Toggle underline",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: <i className="fa-solid fa-strikethrough"></i>,
    "aria-label": "Toggle strikethrough",
  },
};

export const Interactive = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <div className="space-y-2">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <i className="fa-solid fa-bold mr-2"></i>
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
        <i className="fa-solid fa-bold"></i>
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <i className="fa-solid fa-italic"></i>
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <i className="fa-solid fa-underline"></i>
      </Toggle>
      <Toggle aria-label="Toggle strikethrough">
        <i className="fa-solid fa-strikethrough"></i>
      </Toggle>
    </div>
  ),
};

export const Disabled = {
  args: {
    disabled: true,
    children: <i className="fa-solid fa-bold"></i>,
    "aria-label": "Toggle bold",
  },
};
