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
  success: "border-(--success-200) border-t-(--success-600)",
  warning: "border-(--warning-200) border-t-(--warning-600)",
  danger: "border-(--danger-200) border-t-(--danger-600)",
  info: "border-(--info-200) border-t-(--info-600)",
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
