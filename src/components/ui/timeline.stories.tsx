import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineItem } from "./timeline";

const events: TimelineItem[] = [
  {
    id: "1",
    title: "Project Kickoff",
    description: "Initial planning and requirements gathering completed",
    date: "Jan 15, 2025",
    status: "success",
  },
  {
    id: "2",
    title: "Design Phase",
    description: "UI/UX design mockups created and approved",
    date: "Jan 22, 2025",
    status: "success",
  },
  {
    id: "3",
    title: "Development Sprint 1",
    description: "Core features implementation in progress",
    date: "Feb 1, 2025",
    status: "warning",
  },
  {
    id: "4",
    title: "Testing & QA",
    description: "Comprehensive testing planned",
    date: "Feb 15, 2025",
    status: "default",
  },
  {
    id: "5",
    title: "Production Deploy",
    description: "Launch to production environment",
    date: "Mar 1, 2025",
    status: "default",
  },
];

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: events,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Code Committed",
        description: "Feature branch merged to main",
        date: "2h ago",
        icon: <i className="fa-solid fa-code text-xs"></i>,
        status: "success",
      },
      {
        id: "2",
        title: "Build Started",
        description: "CI/CD pipeline initiated",
        date: "1h ago",
        icon: <i className="fa-solid fa-hammer text-xs"></i>,
        status: "warning",
      },
      {
        id: "3",
        title: "Tests Failed",
        description: "3 unit tests failing",
        date: "45m ago",
        icon: <i className="fa-solid fa-xmark text-xs"></i>,
        status: "error",
      },
      {
        id: "4",
        title: "Deploy Pending",
        description: "Waiting for approval",
        date: "30m ago",
        icon: <i className="fa-solid fa-clock text-xs"></i>,
        status: "default",
      },
    ],
  },
};

export const Simple: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Order Placed",
        date: "Mar 1, 2025",
      },
      {
        id: "2",
        title: "Payment Confirmed",
        date: "Mar 1, 2025",
      },
      {
        id: "3",
        title: "Shipped",
        date: "Mar 2, 2025",
      },
    ],
  },
};
