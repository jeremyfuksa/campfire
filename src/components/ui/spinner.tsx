import * as React from "react";
import { cn } from "./utils";

export type SpinnerVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: SpinnerVariant;
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-[3px]",
  xl: "h-16 w-16 border-4",
};

const variantClasses: Record<SpinnerVariant, string> = {
  default: "border-muted-foreground/30 border-t-muted-foreground",
  primary: "border-primary/30 border-t-primary",
  success: "border-[var(--success-200)] border-t-[var(--success-600)]",
  warning: "border-[var(--warning-200)] border-t-[var(--warning-600)]",
  danger: "border-[var(--danger-200)] border-t-[var(--danger-600)]",
  info: "border-[var(--info-200)] border-t-[var(--info-600)]",
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", variant = "default", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          "inline-block animate-spin rounded-full",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);
Spinner.displayName = "Spinner";

export { Spinner };
