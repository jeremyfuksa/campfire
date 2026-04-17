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
  success: "bg-[var(--success-600)]",
  warning: "bg-[var(--warning-600)]",
  danger: "bg-[var(--danger-600)]",
  error: "bg-[var(--danger-600)]",
  info: "bg-[var(--info-600)]",
  neutral: "bg-[var(--neutral-500)]",
  default: "bg-[var(--neutral-500)]",
  active: "bg-[var(--success-500)]",
  away: "bg-[var(--warning-500)]",
  offline: "bg-[var(--neutral-400)]",
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
          <span className="text-sm text-[color:var(--text-primary)]">
            {label}
          </span>
        )}
      </div>
    );
  },
);
StatusDot.displayName = "StatusDot";

export { StatusDot };
