"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "./utils";
import { format } from "date-fns";
export function DateRangePicker({ value, onChange, placeholder = "Pick a date range", disabled = false, className, minDate, maxDate, numberOfMonths = 2, }) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(value);
    React.useEffect(() => {
        setDate(value);
    }, [value]);
    const handleSelect = (range) => {
        setDate(range);
        onChange?.(range);
        // Close popover when both dates are selected
        if (range?.from && range?.to) {
            setOpen(false);
        }
    };
    const displayText = React.useMemo(() => {
        if (!date?.from) {
            return placeholder;
        }
        if (date.to) {
            return `${format(date.from, "MMM d, yyyy")} - ${format(date.to, "MMM d, yyyy")}`;
        }
        return format(date.from, "MMM d, yyyy");
    }, [date, placeholder]);
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: cn("justify-start text-left font-normal", !date && "text-muted-foreground", className), disabled: disabled, children: [_jsx("i", { className: "fa-regular fa-calendar mr-2" }), displayText] }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: _jsx(Calendar, { mode: "range", selected: date, onSelect: handleSelect, numberOfMonths: numberOfMonths, disabled: (day) => {
                        if (minDate && day < minDate)
                            return true;
                        if (maxDate && day > maxDate)
                            return true;
                        return false;
                    }, initialFocus: true }) })] }));
}
