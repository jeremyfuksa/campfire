import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "./status-dot";

const meta = {
  title: "Components/StatusDot",
  component: StatusDot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["success", "warning", "error", "info", "default"],
    },
  },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: "success",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
  },
};

export const Error: Story = {
  args: {
    status: "error",
  },
};

export const Info: Story = {
  args: {
    status: "info",
  },
};

export const Default: Story = {
  args: {
    status: "default",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <StatusDot status="success" />
        <span className="text-sm">Success</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="warning" />
        <span className="text-sm">Warning</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="error" />
        <span className="text-sm">Error</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="info" />
        <span className="text-sm">Info</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusDot status="default" />
        <span className="text-sm">Default</span>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <div className="flex items-center justify-between p-2 border rounded">
        <span className="text-sm">Server 1</span>
        <div className="flex items-center gap-2">
          <StatusDot status="success" />
          <span className="text-sm text-muted-foreground">Online</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border rounded">
        <span className="text-sm">Server 2</span>
        <div className="flex items-center gap-2">
          <StatusDot status="warning" />
          <span className="text-sm text-muted-foreground">Degraded</span>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border rounded">
        <span className="text-sm">Server 3</span>
        <div className="flex items-center gap-2">
          <StatusDot status="error" />
          <span className="text-sm text-muted-foreground">Offline</span>
        </div>
      </div>
    </div>
  ),
};

export const UserStatus: Story = {
  render: () => (
    <div className="space-y-3 w-[250px]">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          <StatusDot status="success" className="absolute bottom-0 right-0" />
        </div>
        <div>
          <div className="text-sm font-medium">John Doe</div>
          <div className="text-xs text-muted-foreground">Online</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">JS</span>
          </div>
          <StatusDot status="warning" className="absolute bottom-0 right-0" />
        </div>
        <div>
          <div className="text-sm font-medium">Jane Smith</div>
          <div className="text-xs text-muted-foreground">Away</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">BJ</span>
          </div>
          <StatusDot status="default" className="absolute bottom-0 right-0" />
        </div>
        <div>
          <div className="text-sm font-medium">Bob Johnson</div>
          <div className="text-xs text-muted-foreground">Offline</div>
        </div>
      </div>
    </div>
  ),
};
