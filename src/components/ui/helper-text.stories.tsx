import type { Meta } from "@storybook/react";
import { HelperText } from "./helper-text";

const meta = {
  title: "Components/HelperText",
  component: HelperText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success", "warning"],
    },
  },
} satisfies Meta<typeof HelperText>;

export default meta;

export const Default = {
  args: {
    children: "We'll never share your email.",
  },
};

export const Error = {
  args: {
    variant: "error",
    children: "Email address is required.",
  },
};

export const Success = {
  args: {
    variant: "success",
    children: "Username is available.",
  },
};

export const Warning = {
  args: {
    variant: "warning",
    children: "Password strength: weak.",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <HelperText>Default supporting copy.</HelperText>
      <HelperText variant="success">Success state.</HelperText>
      <HelperText variant="warning">Warning state.</HelperText>
      <HelperText variant="error">Error state.</HelperText>
    </div>
  ),
};
