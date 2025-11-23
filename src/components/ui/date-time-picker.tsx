"use client";

import * as React from "react";
import { Calendar } from "./calendar";
import { TimePicker } from "./time-picker";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "./utils";
import { format } from "date-fns";

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  use24Hour?: boolean;
  minuteStep?: number;
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = "Pick a date and time",
  disabled = false,
  className,
  minDate,
  maxDate,
  use24Hour = false,
  minuteStep = 1,
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    if (value) {
      setDate(value);
      setTime(format(value, "HH:mm"));
    }
  }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) {
      setDate(undefined);
      onChange?.(undefined);
      return;
    }

    const newDate = new Date(selectedDate);

    // Preserve time if it was set
    if (time) {
      const [hours, minutes] = time.split(":").map(Number);
      newDate.setHours(hours, minutes, 0, 0);
    }

    setDate(newDate);
    onChange?.(newDate);
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);

    if (!date) return;

    const [hours, minutes] = newTime.split(":").map(Number);
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, 0, 0);

    setDate(newDate);
    onChange?.(newDate);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  const displayText = React.useMemo(() => {
    if (!date) return placeholder;

    const dateStr = format(date, "MMM d, yyyy");
    const timeStr = time || format(date, use24Hour ? "HH:mm" : "hh:mm a");

    return `${dateStr} ${timeStr}`;
  }, [date, time, placeholder, use24Hour]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <i className="fa-regular fa-calendar-clock mr-2"></i>
          {displayText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex flex-col">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            disabled={(day) => {
              if (minDate && day < minDate) return true;
              if (maxDate && day > maxDate) return true;
              return false;
            }}
            initialFocus
          />
          <div className="border-t p-3">
            <div className="mb-2 text-sm font-medium">Time</div>
            <TimePicker
              value={time}
              onChange={handleTimeChange}
              use24Hour={use24Hour}
              minuteStep={minuteStep}
              disabled={!date}
            />
          </div>
          <div className="border-t p-3">
            <Button
              onClick={handleConfirm}
              className="w-full"
              disabled={!date}
            >
              Confirm
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
