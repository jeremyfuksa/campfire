"use client";

import * as React from "react";

import { cn } from "./utils";

type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "role" | "onChange"
> & {
  onCheckedChange?: (checked: boolean) => void;
};

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      disabled,
      checked,
      defaultChecked,
      required,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false,
    );
    const currentChecked = checked ?? internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const next = event.target.checked;
      if (checked === undefined) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        data-slot="switch"
        data-state={currentChecked ? "checked" : "unchecked"}
        className={cn(
          "peer inline-flex h-[1.15rem] w-8 shrink-0 cursor-pointer appearance-none items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
          currentChecked ? "bg-primary" : "bg-[var(--switch-background)]",
          className,
        )}
        aria-checked={currentChecked}
        aria-required={required ? "true" : undefined}
        required={required}
        checked={currentChecked}
        disabled={disabled}
        onChange={handleChange}
        value={props.value ?? "on"}
        {...props}
      />
    );
  },
);
Switch.displayName = "Switch";

export { Switch };
