"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "./utils";
function Label({ className, ...props }) {
    const handleClick = (event) => {
        props.onClick?.(event);
        const htmlFor = props.htmlFor;
        if (htmlFor) {
            const target = document.getElementById(htmlFor);
            target?.focus();
        }
    };
    return (_jsx(LabelPrimitive.Root, { "data-slot": "label", className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className), onClick: handleClick, ...props }));
}
export { Label };
