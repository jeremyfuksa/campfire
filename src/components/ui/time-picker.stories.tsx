import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "./time-picker";
import { useState } from "react";
import { Label } from "./label";

const meta = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [time, setTime] = useState("");
    return <TimePicker value={time} onChange={setTime} />;
  },
};

export const With12Hour: Story = {
  render: () => {
    const [time, setTime] = useState("02:30 PM");
    return <TimePicker value={time} onChange={setTime} format="12h" />;
  },
};

export const With24Hour: Story = {
  render: () => {
    const [time, setTime] = useState("14:30");
    return <TimePicker value={time} onChange={setTime} format="24h" />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const [time, setTime] = useState("09:00 AM");
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Select Time</Label>
        <TimePicker value={time} onChange={setTime} format="12h" />
        {time && (
          <p className="text-sm text-muted-foreground">Selected: {time}</p>
        )}
      </div>
    );
  },
};

export const MeetingTime: Story = {
  render: () => {
    const [time, setTime] = useState("10:00 AM");
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Meeting Time</Label>
        <TimePicker value={time} onChange={setTime} format="12h" />
      </div>
    );
  },
};
