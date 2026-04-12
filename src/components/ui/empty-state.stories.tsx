import type { Meta } from "@storybook/react";
import {
  AlertTriangle,
  CheckCircle2,
  CloudUpload,
  Folder,
  Inbox,
  LinkIcon,
  Search,
} from "lucide-react";
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

export const Default = {
  args: {
    title: "No data found",
    description: "Get started by creating your first item",
  },
};

export const WithIcon = {
  args: {
    title: "No messages",
    description: "You don't have any messages yet",
    icon: <Inbox size={40} />,
  },
};

export const WithAction = {
  args: {
    title: "No projects",
    description: "Create your first project to get started",
    icon: <Folder size={40} />,
    children: <Button>Create Project</Button>,
  },
};

export const NoResults = {
  args: {
    title: "No results found",
    description: "Try adjusting your search or filter to find what you're looking for",
    icon: <Search size={40} />,
    children: <Button variant="outline">Clear Filters</Button>,
  },
};

export const EmptyInbox = {
  args: {
    title: "Inbox Zero!",
    description: "All caught up! You have no unread messages.",
    icon: <CheckCircle2 size={40} className="text-green-500" />,
  },
};

export const NoFiles = {
  args: {
    title: "No files uploaded",
    description: "Upload your first file to get started",
    icon: <CloudUpload size={40} />,
    children: (
      <div className="flex gap-2">
        <Button>Upload File</Button>
        <Button variant="outline">Browse Examples</Button>
      </div>
    ),
  },
};

export const NoConnections = {
  args: {
    title: "No connections",
    description: "Connect your accounts to get started with integrations",
    icon: <LinkIcon size={40} />,
    children: <Button>Add Connection</Button>,
  },
};

export const ErrorState = {
  args: {
    title: "Something went wrong",
    description: "We encountered an error loading your data. Please try again.",
    icon: <AlertTriangle size={40} className="text-destructive" />,
    children: <Button variant="outline">Retry</Button>,
  },
};
