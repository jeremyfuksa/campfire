import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Label } from "./label";
import { TimePicker } from "./time-picker";

const meta = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>;

export default meta;

export const Default = {
  render: () => {
    const [time, setTime] = useState("08:00");
    return <TimePicker value={time} onChange={setTime} />;
  },
};

export const With24Hour = {
  render: () => {
    const [time, setTime] = useState("14:30");
    return <TimePicker value={time} onChange={setTime} use24Hour />;
  },
};

export const WithMinuteStep = {
  render: () => {
    const [time, setTime] = useState("09:45");
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        minuteStep={15}
        className="w-[220px]"
      />
    );
  },
};

export const WithLabel = {
  render: () => {
    const [time, setTime] = useState("09:00");
    return (
      <div className="space-y-2 w-[200px]">
        <Label>Select Time</Label>
        <TimePicker value={time} onChange={setTime} />
        {time && (
          <p className="text-sm text-muted-foreground">Selected: {time}</p>
        )}
      </div>
    );
  },
};
