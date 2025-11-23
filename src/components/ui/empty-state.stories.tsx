import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./empty-state";
import { Button } from "./button";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "No data found",
    description: "Get started by creating your first item",
  },
};

export const WithIcon: Story = {
  args: {
    title: "No messages",
    description: "You don't have any messages yet",
    icon: <i className="fa-solid fa-inbox text-4xl"></i>,
  },
};

export const WithAction: Story = {
  args: {
    title: "No projects",
    description: "Create your first project to get started",
    icon: <i className="fa-solid fa-folder text-4xl"></i>,
    children: <Button>Create Project</Button>,
  },
};

export const NoResults: Story = {
  args: {
    title: "No results found",
    description: "Try adjusting your search or filter to find what you're looking for",
    icon: <i className="fa-solid fa-magnifying-glass text-4xl"></i>,
    children: <Button variant="outline">Clear Filters</Button>,
  },
};

export const EmptyInbox: Story = {
  args: {
    title: "Inbox Zero!",
    description: "All caught up! You have no unread messages.",
    icon: <i className="fa-solid fa-check-circle text-4xl text-green-500"></i>,
  },
};

export const NoFiles: Story = {
  args: {
    title: "No files uploaded",
    description: "Upload your first file to get started",
    icon: <i className="fa-solid fa-cloud-arrow-up text-4xl"></i>,
    children: (
      <div className="flex gap-2">
        <Button>Upload File</Button>
        <Button variant="outline">Browse Examples</Button>
      </div>
    ),
  },
};

export const NoConnections: Story = {
  args: {
    title: "No connections",
    description: "Connect your accounts to get started with integrations",
    icon: <i className="fa-solid fa-link-slash text-4xl"></i>,
    children: <Button>Add Connection</Button>,
  },
};

export const ErrorState: Story = {
  args: {
    title: "Something went wrong",
    description: "We encountered an error loading your data. Please try again.",
    icon: <i className="fa-solid fa-triangle-exclamation text-4xl text-destructive"></i>,
    children: <Button variant="outline">Retry</Button>,
  },
};
