import type { Meta } from "@storybook/react";
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

const positive = (value: number) => ({ value, isPositive: true });
const negative = (value: number) => ({ value, isPositive: false });

export const Default = {
  args: {
    label: "Total Revenue",
    value: "$45,231.89",
    trend: positive(20.1),
    icon: "fa-dollar-sign",
  },
};

export const WithIcon = {
  args: {
    label: "Total Users",
    value: "12,234",
    trend: positive(15.3),
    icon: "fa-users",
  },
};

export const NegativeTrend = {
  args: {
    label: "Bounce Rate",
    value: "32.4%",
    trend: negative(5.2),
    icon: "fa-chart-line",
  },
};

export const NoTrend = {
  args: {
    label: "Active Projects",
    value: "24",
    icon: "fa-folder",
  },
};

export const Dashboard = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Revenue"
        value="$45,231.89"
        trend={positive(20.1)}
        icon="fa-dollar-sign"
      />
      <StatCard
        label="Subscriptions"
        value="+2,350"
        trend={positive(15.3)}
        icon="fa-users"
      />
      <StatCard
        label="Sales"
        value="+12,234"
        trend={positive(19.2)}
        icon="fa-credit-card"
      />
      <StatCard
        label="Active Now"
        value="+573"
        trend={positive(8.1)}
        icon="fa-activity"
      />
    </div>
  ),
};

export const MetricsGrid = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        label="Page Views"
        value="125,432"
        trend={positive(12.5)}
        icon="fa-eye"
      />
      <StatCard
        label="Unique Visitors"
        value="45,231"
        trend={positive(8.3)}
        icon="fa-user"
      />
      <StatCard
        label="Avg. Session"
        value="2m 34s"
        trend={negative(3.2)}
        icon="fa-clock"
      />
    </div>
  ),
};

export const LargeValue = {
  args: {
    label: "Total Downloads",
    value: "1,234,567",
    trend: positive(45.2),
    icon: "fa-download",
  },
};

export const SmallTrend = {
  args: {
    label: "Conversion Rate",
    value: "3.2%",
    trend: positive(0.8),
    icon: "fa-percentage",
  },
};
