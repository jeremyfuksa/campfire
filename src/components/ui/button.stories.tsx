import type { Meta } from "@storybook/react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {
  args: {
    children: "Button",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Small = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Icon = {
  args: {
    size: "icon",
    children: "🔥",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const WithIcon = {
  args: {
    children: (
      <>
        <Download size={16} className="mr-2" />
        Download
      </>
    ),
  },
};

export const Loading = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 size={16} className="mr-2 animate-spin" />
        Loading...
      </>
    ),
  },
};
