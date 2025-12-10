import type { Meta } from "@storybook/react";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Email = {
  args: {
    type: "email",
    placeholder: "name@example.com",
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Number = {
  args: {
    type: "number",
    placeholder: "Enter number",
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithValue = {
  args: {
    defaultValue: "Hello world",
  },
};

export const Search = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};
