import type { Meta, StoryObj } from "@storybook/react";
import { DateTimePicker } from "./date-time-picker";
import { useState } from "react";
import { Label } from "./label";

const meta = {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Date>();
    return <DateTimePicker value={dateTime} onChange={setDateTime} />;
  },
};

export const WithValue: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Date>(new Date(2025, 0, 15, 14, 30));
    return <DateTimePicker value={dateTime} onChange={setDateTime} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Date>();
    return (
      <div className="space-y-2">
        <Label>Select Date and Time</Label>
        <DateTimePicker value={dateTime} onChange={setDateTime} />
        {dateTime && (
          <p className="text-sm text-muted-foreground">
            {dateTime.toLocaleString()}
          </p>
        )}
      </div>
    );
  },
};

export const EventScheduling: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Date>(new Date(2025, 0, 20, 15, 0));
    return (
      <div className="space-y-2 w-[300px]">
        <Label>Event Start Time</Label>
        <DateTimePicker value={dateTime} onChange={setDateTime} />
        {dateTime && (
          <div className="text-sm space-y-1">
            <p className="text-muted-foreground">
              Date: {dateTime.toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">
              Time: {dateTime.toLocaleTimeString()}
            </p>
          </div>
        )}
      </div>
    );
  },
};
