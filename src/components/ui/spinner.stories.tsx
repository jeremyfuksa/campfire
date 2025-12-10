import type { Meta } from "@storybook/react";
import { Spinner } from "./spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

export const Default = {
  args: {
    size: "md",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge = {
  args: {
    size: "xl",
  },
};

export const AllSizes = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted-foreground">Extra Large</span>
      </div>
    </div>
  ),
};

export const WithLabel = {
  render: () => (
    <div className="flex flex-col items-center gap-2">
      <Spinner size="lg" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  ),
};

export const InButton = {
  render: () => (
    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
      <Spinner size="sm" />
      Loading...
    </button>
  ),
};
