"use client";

import * as React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { cn } from "./utils";

export interface NumericInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: number;
  onChange?: (value: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  showControls?: boolean;
}

export function NumericInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  precision = 0,
  showControls = true,
  className,
  disabled,
  ...props
}: NumericInputProps) {
  const [inputValue, setInputValue] = React.useState(
    value !== undefined ? value.toFixed(precision) : ""
  );

  React.useEffect(() => {
    setInputValue(value !== undefined ? value.toFixed(precision) : "");
  }, [value, precision]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDecrement();
    }
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <Input
        type="text"
        inputMode="decimal"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={showControls ? "pr-16" : ""}
        {...props}
      />
      {showControls && (
        <div className="absolute right-1 flex flex-col gap-0.5">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleIncrement}
            disabled={disabled || (max !== undefined && value !== undefined && value >= max)}
            className="h-4 w-6 p-0"
            aria-label="Increment"
          >
            <i className="fa-solid fa-chevron-up text-xs"></i>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleDecrement}
            disabled={disabled || (min !== undefined && value !== undefined && value <= min)}
            className="h-4 w-6 p-0"
            aria-label="Decrement"
          >
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </Button>
        </div>
      )}
    </div>
  );
}

function clampValue(value: number, min?: number, max?: number): number {
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
}
