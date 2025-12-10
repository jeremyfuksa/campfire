import type { Meta } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

export const Default = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithIcon = {
  render: () => (
    <Alert className="w-[400px]">
      <i className="fa-solid fa-circle-info mr-2"></i>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message with an icon.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Operation successful</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertDescription>
        This alert only has a description without a title.
      </AlertDescription>
    </Alert>
  ),
};
