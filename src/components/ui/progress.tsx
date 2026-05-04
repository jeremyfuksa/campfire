"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

type ProgressVariant = "default" | "success" | "warning" | "danger" | "info";

const trackColors: Record<ProgressVariant, string> = {
  default: "bg-primary/20",
  success: "bg-(--success-100)",
  warning: "bg-(--warning-100)",
  danger: "bg-(--danger-100)",
  info: "bg-(--info-100)",
};

const indicatorColors: Record<ProgressVariant, string> = {
  default: "bg-primary",
  success: "bg-(--success-600)",
  warning: "bg-(--warning-600)",
  danger: "bg-(--danger-600)",
  info: "bg-(--info-600)",
};

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  variant?: ProgressVariant;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, variant = "default", ...props }, ref) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        data-slot="progress"
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full",
          trackColors[variant],
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            "h-full w-full flex-1 transition-all duration-slow ease-out",
            indicatorColors[variant],
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  },
);
Progress.displayName = "Progress";

export { Progress };
