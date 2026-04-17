import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-[length:var(--body-base-size)] font-[number:var(--body-base-weight)] leading-[var(--body-base-line-height)] text-[color:var(--text-primary)]",
      "body-lg":
        "text-[length:var(--body-large-size)] font-[number:var(--body-large-weight)] leading-[1.7] text-[color:var(--text-primary)]",
      "body-sm":
        "text-[length:var(--body-small-size)] font-[number:var(--body-small-weight)] leading-[1.5] text-[color:var(--text-primary)]",
      label:
        "text-[length:var(--label-base-size)] font-[number:var(--label-base-weight)] leading-[var(--label-base-line-height)] text-[color:var(--text-primary)]",
      "label-lg":
        "text-[length:var(--label-large-size)] font-[number:var(--label-large-weight)] leading-[var(--label-large-line-height)] text-[color:var(--text-primary)]",
      "label-sm":
        "text-[length:var(--label-small-size)] font-[number:var(--label-small-weight)] leading-[var(--label-small-line-height)] text-[color:var(--text-primary)]",
      muted:
        "text-[length:var(--body-base-size)] font-[number:var(--body-base-weight)] leading-[var(--body-base-line-height)] text-[color:var(--text-secondary)]",
      subtle:
        "text-[length:var(--body-small-size)] font-[number:var(--body-small-weight)] leading-[1.5] text-[color:var(--text-tertiary)]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

function Text({ className, variant, as: Tag = "p", ...props }: TextProps) {
  return (
    <Tag
      data-slot="text"
      className={cn(textVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Text, textVariants };
