"use client";

import * as React from "react";
import { Input } from "./input";
import { cn } from "./utils";

export interface TimePickerProps {
  value?: string; // HH:mm format
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  use24Hour?: boolean;
  minuteStep?: number;
}

export function TimePicker({
  value = "",
  onChange,
  placeholder = "Select time",
  disabled = false,
  className,
  use24Hour = false,
  minuteStep = 1,
}: TimePickerProps) {
  const [internalValue, setInternalValue] = React.useState(value);
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  // Parse initial value
  React.useEffect(() => {
    if (value) {
      const [h, m] = value.split(":");
      const hour = parseInt(h, 10);
      const minute = parseInt(m, 10);

      if (use24Hour) {
        setHours(h.padStart(2, "0"));
      } else {
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        setHours(String(hour12).padStart(2, "0"));
        setPeriod(hour >= 12 ? "PM" : "AM");
      }
      setMinutes(m.padStart(2, "0"));
      setInternalValue(value);
    }
  }, [value, use24Hour]);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setHours("");
      return;
    }

    const num = parseInt(val, 10);
    const max = use24Hour ? 23 : 12;
    const min = use24Hour ? 0 : 1;

    if (num >= min && num <= max) {
      setHours(val.padStart(2, "0"));
      updateTime(val.padStart(2, "0"), minutes, period);
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setMinutes("");
      return;
    }

    const num = parseInt(val, 10);
    if (num >= 0 && num <= 59) {
      const roundedMinute = Math.round(num / minuteStep) * minuteStep;
      const finalMinute = Math.min(roundedMinute, 59);
      setMinutes(String(finalMinute).padStart(2, "0"));
      updateTime(hours, String(finalMinute).padStart(2, "0"), period);
    }
  };

  const handlePeriodToggle = () => {
    const newPeriod = period === "AM" ? "PM" : "AM";
    setPeriod(newPeriod);
    updateTime(hours, minutes, newPeriod);
  };

  const updateTime = (h: string, m: string, p: "AM" | "PM") => {
    if (!h || !m) return;

    let hour24 = parseInt(h, 10);

    if (!use24Hour) {
      if (p === "PM" && hour24 !== 12) {
        hour24 += 12;
      } else if (p === "AM" && hour24 === 12) {
        hour24 = 0;
      }
    }

    const timeString = `${String(hour24).padStart(2, "0")}:${m}`;
    setInternalValue(timeString);
    onChange?.(timeString);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: "hours" | "minutes") => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (type === "hours") {
        const current = parseInt(hours || "0", 10);
        const max = use24Hour ? 23 : 12;
        const min = use24Hour ? 0 : 1;
        const next = current >= max ? min : current + 1;
        setHours(String(next).padStart(2, "0"));
        updateTime(String(next).padStart(2, "0"), minutes, period);
      } else {
        const current = parseInt(minutes || "0", 10);
        const next = current >= 59 ? 0 : current + minuteStep;
        setMinutes(String(next).padStart(2, "0"));
        updateTime(hours, String(next).padStart(2, "0"), period);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (type === "hours") {
        const current = parseInt(hours || "0", 10);
        const max = use24Hour ? 23 : 12;
        const min = use24Hour ? 0 : 1;
        const prev = current <= min ? max : current - 1;
        setHours(String(prev).padStart(2, "0"));
        updateTime(String(prev).padStart(2, "0"), minutes, period);
      } else {
        const current = parseInt(minutes || "0", 10);
        const prev = current <= 0 ? 59 : current - minuteStep;
        setMinutes(String(prev).padStart(2, "0"));
        updateTime(hours, String(prev).padStart(2, "0"), period);
      }
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-1">
        <Input
          type="text"
          value={hours}
          onChange={handleHoursChange}
          onKeyDown={(e) => handleKeyDown(e, "hours")}
          placeholder="HH"
          disabled={disabled}
          className="w-16 text-center"
          maxLength={2}
        />
        <span className="text-muted-foreground">:</span>
        <Input
          type="text"
          value={minutes}
          onChange={handleMinutesChange}
          onKeyDown={(e) => handleKeyDown(e, "minutes")}
          placeholder="MM"
          disabled={disabled}
          className="w-16 text-center"
          maxLength={2}
        />
      </div>

      {!use24Hour && (
        <button
          type="button"
          onClick={handlePeriodToggle}
          disabled={disabled}
          className={cn(
            "border-input hover:bg-accent hover:text-accent-foreground",
            "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          {period}
        </button>
      )}
    </div>
  );
}
