"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Calendar } from "./calendar";
import { TimePicker } from "./time-picker";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "./utils";
import { format } from "date-fns";
export function DateTimePicker({ value, onChange, placeholder = "Pick a date and time", disabled = false, className, minDate, maxDate, use24Hour = false, minuteStep = 1, }) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(value);
    const [time, setTime] = React.useState("");
    React.useEffect(() => {
        if (value) {
            setDate(value);
            setTime(format(value, "HH:mm"));
        }
    }, [value]);
    const handleDateSelect = (selectedDate) => {
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
    const handleTimeChange = (newTime) => {
        setTime(newTime);
        if (!date)
            return;
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
        if (!date)
            return placeholder;
        const dateStr = format(date, "MMM d, yyyy");
        const timeStr = time || format(date, use24Hour ? "HH:mm" : "hh:mm a");
        return `${dateStr} ${timeStr}`;
    }, [date, time, placeholder, use24Hour]);
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: cn("justify-start text-left font-normal", !date && "text-muted-foreground", className), disabled: disabled, children: [_jsx("i", { className: "fa-regular fa-calendar-clock mr-2" }), displayText] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: _jsxs("div", { className: "flex flex-col", children: [_jsx(Calendar, { mode: "single", selected: date, onSelect: handleDateSelect, disabled: (day) => {
                                if (minDate && day < minDate)
                                    return true;
                                if (maxDate && day > maxDate)
                                    return true;
                                return false;
                            }, initialFocus: true }), _jsxs("div", { className: "border-t p-3", children: [_jsx("div", { className: "mb-2 text-sm font-medium", children: "Time" }), _jsx(TimePicker, { value: time, onChange: handleTimeChange, use24Hour: use24Hour, minuteStep: minuteStep, disabled: !date })] }), _jsx("div", { className: "border-t p-3", children: _jsx(Button, { onClick: handleConfirm, className: "w-full", disabled: !date, children: "Confirm" }) })] }) })] }));
}
