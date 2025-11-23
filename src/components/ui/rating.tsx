"use client";

import * as React from "react";
import { cn } from "./utils";

export interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  size?: "sm" | "md" | "lg";
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  allowHalf?: boolean;
  icon?: "star" | "heart";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
};

export function Rating({
  value = 0,
  onChange,
  max = 5,
  size = "md",
  readOnly = false,
  disabled = false,
  className,
  allowHalf = false,
  icon = "star",
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (readOnly || disabled) return;
    onChange?.(rating);
  };

  const handleMouseEnter = (rating: number) => {
    if (readOnly || disabled) return;
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const getIconClass = (index: number) => {
    const currentValue = hoverValue ?? value;
    const baseIcon = icon === "star" ? "fa-star" : "fa-heart";

    if (allowHalf) {
      if (currentValue >= index + 1) {
        return `fa-solid ${baseIcon}`;
      } else if (currentValue >= index + 0.5) {
        return `fa-solid fa-star-half-stroke`;
      }
      return `fa-regular ${baseIcon}`;
    }

    return currentValue >= index + 1 ? `fa-solid ${baseIcon}` : `fa-regular ${baseIcon}`;
  };

  const getColor = (index: number) => {
    const currentValue = hoverValue ?? value;
    if (currentValue >= index + (allowHalf ? 0.5 : 1)) {
      return "var(--warning)";
    }
    return "var(--neutral-400)";
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1",
        sizeClasses[size],
        (readOnly || disabled) && "pointer-events-none",
        disabled && "opacity-50",
        className
      )}
      role="radiogroup"
      aria-label="Rating"
    >
      {Array.from({ length: max }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          disabled={disabled || readOnly}
          className={cn(
            "cursor-pointer transition-colors",
            !readOnly && !disabled && "hover:scale-110"
          )}
          aria-label={`Rate ${index + 1} out of ${max}`}
        >
          <i
            className={getIconClass(index)}
            style={{ color: getColor(index) }}
          />
        </button>
      ))}
    </div>
  );
}
