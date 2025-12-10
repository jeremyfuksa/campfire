import type { DateRange } from "react-day-picker";
import type { Meta } from "@storybook/react";
import { Calendar } from "./calendar";
import { useState } from "react";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const NoSelection = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const Range = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    return (
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        className="rounded-md border"
      />
    );
  },
};

export const Multiple = {
  render: () => {
    const [dates, setDates] = useState<Date[]>([]);
    const handleSelect = (selected: Date[] | undefined) => {
      setDates(selected ?? []);
    };
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={handleSelect}
        className="rounded-md border"
        required={false}
      />
    );
  },
};

export const WithValue = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2025, 0, 15));
    return (
      <div className="space-y-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        {date && (
          <p className="text-sm text-muted-foreground text-center">
            Selected: {date.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};
