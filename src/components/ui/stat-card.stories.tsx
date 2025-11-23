import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./stat-card";

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    trend: 20.1,
  },
};

export const WithIcon: Story = {
  args: {
    title: "Total Users",
    value: "12,234",
    trend: 15.3,
    icon: <i className="fa-solid fa-users"></i>,
  },
};

export const NegativeTrend: Story = {
  args: {
    title: "Bounce Rate",
    value: "32.4%",
    trend: -5.2,
    icon: <i className="fa-solid fa-chart-line"></i>,
  },
};

export const NoTrend: Story = {
  args: {
    title: "Active Projects",
    value: "24",
    icon: <i className="fa-solid fa-folder"></i>,
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        trend={20.1}
        icon={<i className="fa-solid fa-dollar-sign"></i>}
      />
      <StatCard
        title="Subscriptions"
        value="+2,350"
        trend={15.3}
        icon={<i className="fa-solid fa-users"></i>}
      />
      <StatCard
        title="Sales"
        value="+12,234"
        trend={19.2}
        icon={<i className="fa-solid fa-credit-card"></i>}
      />
      <StatCard
        title="Active Now"
        value="+573"
        trend={8.1}
        icon={<i className="fa-solid fa-activity"></i>}
      />
    </div>
  ),
};

export const MetricsGrid: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Page Views"
        value="125,432"
        trend={12.5}
        icon={<i className="fa-solid fa-eye"></i>}
      />
      <StatCard
        title="Unique Visitors"
        value="45,231"
        trend={8.3}
        icon={<i className="fa-solid fa-user"></i>}
      />
      <StatCard
        title="Avg. Session"
        value="2m 34s"
        trend={-3.2}
        icon={<i className="fa-solid fa-clock"></i>}
      />
    </div>
  ),
};

export const LargeValue: Story = {
  args: {
    title: "Total Downloads",
    value: "1,234,567",
    trend: 45.2,
    icon: <i className="fa-solid fa-download"></i>,
  },
};

export const SmallTrend: Story = {
  args: {
    title: "Conversion Rate",
    value: "3.2%",
    trend: 0.8,
    icon: <i className="fa-solid fa-percentage"></i>,
  },
};
