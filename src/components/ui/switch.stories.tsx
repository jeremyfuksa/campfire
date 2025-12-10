import type { Meta } from "@storybook/react";
import { Switch } from "./switch";
import { Label } from "./label";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

export const Default = {
  args: {},
};

export const WithLabel = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Multiple = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="marketing" />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="security" defaultChecked />
        <Label htmlFor="security">Security alerts</Label>
      </div>
    </div>
  ),
};
