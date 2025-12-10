import type { Meta } from "@storybook/react";
import { Separator } from "./separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

export const Horizontal = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Campfire</h4>
        <p className="text-sm text-muted-foreground">
          A comprehensive design system
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Documentation</div>
        <Separator orientation="vertical" />
        <div>Examples</div>
      </div>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div className="flex h-10 items-center space-x-4">
      <div className="text-sm">Home</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Products</div>
      <Separator orientation="vertical" />
      <div className="text-sm">About</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Contact</div>
    </div>
  ),
};

export const InCard = {
  render: () => (
    <div className="w-[350px] space-y-4 p-4 border rounded-lg">
      <div>
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Profile</h4>
        <p className="text-sm text-muted-foreground">
          Update your personal information
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Security</h4>
        <p className="text-sm text-muted-foreground">
          Change your password and security settings
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Notifications</h4>
        <p className="text-sm text-muted-foreground">
          Configure notification preferences
        </p>
      </div>
    </div>
  ),
};

export const WithText = {
  render: () => (
    <div className="w-[400px]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  ),
};
