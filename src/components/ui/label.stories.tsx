import type { Meta } from "@storybook/react";
import { Label } from "./label";
import { Input } from "./input";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

export const Default = {
  args: {
    children: "Label",
    htmlFor: "input",
  },
};

export const WithInput = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="cursor-pointer">
        I accept the terms and conditions
      </Label>
    </div>
  ),
};

export const Required = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="name">
        Full name <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="John Doe" />
    </div>
  ),
};

export const WithDescription = {
  render: () => (
    <div className="space-y-2 w-[350px]">
      <Label htmlFor="bio">
        Bio
        <span className="ml-1 text-sm font-normal text-muted-foreground">
          (optional)
        </span>
      </Label>
      <Input id="bio" placeholder="Tell us about yourself" />
      <p className="text-sm text-muted-foreground">
        Brief description for your profile
      </p>
    </div>
  ),
};

export const Multiple = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="@username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </div>
  ),
};
