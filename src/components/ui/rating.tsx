"use client";

import * as React from "react";
import { Heart, Star, StarHalf } from "lucide-react";
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

const sizePx = {
  sm: 14,
  md: 20,
  lg: 28,
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

  const getColor = (index: number) => {
    const currentValue = hoverValue ?? value;
    if (currentValue >= index + (allowHalf ? 0.5 : 1)) {
      return "var(--warning-500)";
    }
    return "var(--neutral-400)";
  };

  const renderIcon = (index: number) => {
    const currentValue = hoverValue ?? value;
    const filled = currentValue >= index + 1;
    const half = allowHalf && !filled && currentValue >= index + 0.5;
    const color = getColor(index);
    const iconSize = sizePx[size];
    const strokeWidth = 2;

    if (icon === "heart") {
      return (
        <Heart
          size={iconSize}
          strokeWidth={strokeWidth}
          color={color}
          fill={filled ? color : "none"}
          aria-hidden="true"
        />
      );
    }

    if (half) {
      return (
        <StarHalf
          size={iconSize}
          strokeWidth={strokeWidth}
          color={color}
          fill={color}
          aria-hidden="true"
        />
      );
    }

    return (
      <Star
        size={iconSize}
        strokeWidth={strokeWidth}
        color={color}
        fill={filled ? color : "none"}
        aria-hidden="true"
      />
    );
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1",
        (readOnly || disabled) && "pointer-events-none",
        disabled && "opacity-50",
        className,
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
            !readOnly && !disabled && "hover:scale-110",
          )}
          aria-label={`Rate ${index + 1} out of ${max}`}
        >
          {renderIcon(index)}
        </button>
      ))}
    </div>
  );
}
