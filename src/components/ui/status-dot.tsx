import React from "react";
import { cn } from "./utils";

export type StatusValue =
  | "success"
  | "warning"
  | "error"
  | "danger"
  | "info"
  | "neutral"
  | "default"
  | "active"
  | "away"
  | "offline";

interface StatusDotProps {
  variant?: StatusValue;
  /** @deprecated Use `variant` instead. */
  status?: StatusValue;
  label?: string;
  pulse?: boolean;
  className?: string;
}

const dotColors: Record<StatusValue, string> = {
  success: "bg-(--success-600)",
  warning: "bg-(--warning-600)",
  danger: "bg-(--danger-600)",
  error: "bg-(--danger-600)",
  info: "bg-(--info-600)",
  neutral: "bg-(--neutral-500)",
  default: "bg-(--neutral-500)",
  active: "bg-(--success-500)",
  away: "bg-(--warning-500)",
  offline: "bg-(--neutral-400)",
};

const StatusDot = React.forwardRef<HTMLDivElement, StatusDotProps>(
  ({ status, variant, label, pulse = false, className }, ref) => {
    const resolved = variant ?? status ?? "neutral";
    const colorClass = dotColors[resolved] ?? dotColors.neutral;

    return (
      <div ref={ref} className={cn("inline-flex items-center gap-2", className)}>
        <div className="relative">
          <div className={cn("w-2 h-2 rounded-full", colorClass)} />
          {pulse && (
            <div
              className={cn(
                "absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-75",
                colorClass,
              )}
            />
          )}
        </div>
        {label && (
          <span className="text-sm text-(--text-primary)">
            {label}
          </span>
        )}
      </div>
    );
  },
);
StatusDot.displayName = "StatusDot";

export { StatusDot };
