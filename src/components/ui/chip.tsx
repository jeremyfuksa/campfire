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
          "bg-[var(--primary-100)] text-[var(--primary-700)] border-[var(--primary-200)]",
        success:
          "bg-[var(--success-100)] text-[var(--success-800)] border-[var(--success-200)]",
        warning:
          "bg-[var(--warning-100)] text-[var(--warning-900)] border-[var(--warning-300)]",
        danger:
          "bg-[var(--danger-100)] text-[var(--danger-800)] border-[var(--danger-200)]",
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
