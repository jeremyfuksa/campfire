"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "./utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const handleClick: React.MouseEventHandler<HTMLLabelElement> = (event) => {
    props.onClick?.(event);
    const htmlFor = (props as { htmlFor?: string }).htmlFor;
    if (htmlFor) {
      const target = document.getElementById(htmlFor) as
        | HTMLElement
        | null;
      target?.focus();
    }
  };

  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      onClick={handleClick}
      {...props}
    />
  );
}

export { Label };
