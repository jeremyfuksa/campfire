import React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-sm transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-muted text-foreground border-border",
        primary:
          "bg-(--primary-100) text-(--primary-700) border-(--primary-200)",
        success:
          "bg-(--success-100) text-(--success-800) border-(--success-200)",
        warning:
          "bg-(--warning-100) text-(--warning-900) border-(--warning-300)",
        danger:
          "bg-(--danger-100) text-(--danger-800) border-(--danger-200)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ChipProps extends VariantProps<typeof chipVariants> {
  label?: string;
  children?: React.ReactNode;
  /** @deprecated Use `onClose` instead. */
  onRemove?: () => void;
  onClose?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ label, children, variant, onRemove, onClose, icon, className }, ref) => {
    const handleRemove = onClose || onRemove;

    return (
      <div
        ref={ref}
        className={cn(chipVariants({ variant, className }))}
      >
        {icon && (
          <span
            className="inline-flex items-center"
            data-testid="chip-icon"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <span>{children || label}</span>
        {handleRemove && (
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Remove chip"
            className="hover:opacity-70 transition-opacity"
            data-testid="chip-remove"
          >
            <X size={12} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
