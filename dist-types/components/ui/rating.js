"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils";
const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
};
export function Rating({ value = 0, onChange, max = 5, size = "md", readOnly = false, disabled = false, className, allowHalf = false, icon = "star", }) {
    const [hoverValue, setHoverValue] = React.useState(null);
    const handleClick = (rating) => {
        if (readOnly || disabled)
            return;
        onChange?.(rating);
    };
    const handleMouseEnter = (rating) => {
        if (readOnly || disabled)
            return;
        setHoverValue(rating);
    };
    const handleMouseLeave = () => {
        setHoverValue(null);
    };
    const getIconClass = (index) => {
        const currentValue = hoverValue ?? value;
        const baseIcon = icon === "star" ? "fa-star" : "fa-heart";
        if (allowHalf) {
            if (currentValue >= index + 1) {
                return `fa-solid ${baseIcon}`;
            }
            else if (currentValue >= index + 0.5) {
                return `fa-solid fa-star-half-stroke`;
            }
            return `fa-regular ${baseIcon}`;
        }
        return currentValue >= index + 1 ? `fa-solid ${baseIcon}` : `fa-regular ${baseIcon}`;
    };
    const getColor = (index) => {
        const currentValue = hoverValue ?? value;
        if (currentValue >= index + (allowHalf ? 0.5 : 1)) {
            return "var(--warning)";
        }
        return "var(--neutral-400)";
    };
    return (_jsx("div", { className: cn("inline-flex items-center gap-1", sizeClasses[size], (readOnly || disabled) && "pointer-events-none", disabled && "opacity-50", className), role: "radiogroup", "aria-label": "Rating", children: Array.from({ length: max }).map((_, index) => (_jsx("button", { type: "button", onClick: () => handleClick(index + 1), onMouseEnter: () => handleMouseEnter(index + 1), onMouseLeave: handleMouseLeave, disabled: disabled || readOnly, className: cn("cursor-pointer transition-colors", !readOnly && !disabled && "hover:scale-110"), "aria-label": `Rate ${index + 1} out of ${max}`, children: _jsx("i", { className: getIconClass(index), style: { color: getColor(index) } }) }, index))) }));
}
