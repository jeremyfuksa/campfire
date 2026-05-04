import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-(length:--body-base-size) font-(--body-base-weight) leading-(--body-base-line-height) text-(--text-primary)",
      "body-lg":
        "text-(length:--body-large-size) font-(--body-large-weight) leading-[1.7] text-(--text-primary)",
      "body-sm":
        "text-(length:--body-small-size) font-(--body-small-weight) leading-normal text-(--text-primary)",
      label:
        "text-(length:--label-base-size) font-(--label-base-weight) leading-(--label-base-line-height) text-(--text-primary)",
      "label-lg":
        "text-(length:--label-large-size) font-(--label-large-weight) leading-(--label-large-line-height) text-(--text-primary)",
      "label-sm":
        "text-(length:--label-small-size) font-(--label-small-weight) leading-(--label-small-line-height) text-(--text-primary)",
      muted:
        "text-(length:--body-base-size) font-(--body-base-weight) leading-(--body-base-line-height) text-(--text-secondary)",
      subtle:
        "text-(length:--body-small-size) font-(--body-small-weight) leading-normal text-(--text-tertiary)",
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
