import type { Meta } from "@storybook/react";
import type { DateRange } from "./date-range-picker";
import { DateRangePicker } from "./date-range-picker";
import { useState } from "react";
import { Label } from "./label";

const meta = {
  title: "Components/DateRangePicker",
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateRangePicker>;

export default meta;

export const Default = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(2025, 0, 1),
      to: new Date(2025, 0, 7),
    });
    return <DateRangePicker value={dateRange} onChange={setDateRange} />;
  },
};

export const NoSelection = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return <DateRangePicker value={dateRange} onChange={setDateRange} />;
  },
};

export const WithLabel = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return (
      <div className="space-y-2">
        <Label>Select Date Range</Label>
        <DateRangePicker value={dateRange} onChange={setDateRange} />
        {dateRange?.from && dateRange?.to && (
          <p className="text-sm text-muted-foreground">
            {dateRange.from.toLocaleDateString()} -{" "}
            {dateRange.to.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};

export const Preset = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(2025, 0, 1),
      to: new Date(2025, 0, 31),
    });
    return (
      <div className="space-y-2">
        <Label>January 2025</Label>
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </div>
    );
  },
};
