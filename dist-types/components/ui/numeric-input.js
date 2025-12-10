"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { cn } from "./utils";
export function NumericInput({ value, onChange, min, max, step = 1, precision = 0, showControls = true, className, disabled, ...props }) {
    const [inputValue, setInputValue] = React.useState(value !== undefined ? value.toFixed(precision) : "");
    React.useEffect(() => {
        setInputValue(value !== undefined ? value.toFixed(precision) : "");
    }, [value, precision]);
    const handleChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        if (val === "" || val === "-") {
            onChange?.(undefined);
            return;
        }
        const num = parseFloat(val);
        if (!isNaN(num)) {
            const clamped = clampValue(num, min, max);
            onChange?.(clamped);
        }
    };
    const handleIncrement = () => {
        const currentValue = value ?? 0;
        const newValue = currentValue + step;
        const clamped = clampValue(newValue, min, max);
        onChange?.(parseFloat(clamped.toFixed(precision)));
    };
    const handleDecrement = () => {
        const currentValue = value ?? 0;
        const newValue = currentValue - step;
        const clamped = clampValue(newValue, min, max);
        onChange?.(parseFloat(clamped.toFixed(precision)));
    };
    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            handleIncrement();
        }
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            handleDecrement();
        }
    };
    return (_jsxs("div", { className: cn("relative flex items-center", className), children: [_jsx(Input, { type: "text", inputMode: "decimal", value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown, disabled: disabled, className: showControls ? "pr-16" : "", ...props }), showControls && (_jsxs("div", { className: "absolute right-1 flex flex-col gap-0.5", children: [_jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: handleIncrement, disabled: disabled || (max !== undefined && value !== undefined && value >= max), className: "h-4 w-6 p-0", "aria-label": "Increment", children: _jsx("i", { className: "fa-solid fa-chevron-up text-xs" }) }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: handleDecrement, disabled: disabled || (min !== undefined && value !== undefined && value <= min), className: "h-4 w-6 p-0", "aria-label": "Decrement", children: _jsx("i", { className: "fa-solid fa-chevron-down text-xs" }) })] }))] }));
}
function clampValue(value, min, max) {
    if (min !== undefined && value < min)
        return min;
    if (max !== undefined && value > max)
        return max;
    return value;
}
