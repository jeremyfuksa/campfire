import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const headingVariants = cva("text-(--text-primary)", {
  variants: {
    level: {
      1: "text-(length:--heading-h1-size) font-(--heading-h1-weight) leading-(--heading-h1-line-height) tracking-(--heading-h1-letter-spacing)",
      2: "text-(length:--heading-h2-size) font-(--heading-h2-weight) leading-(--heading-h2-line-height) tracking-(--heading-h2-letter-spacing)",
      3: "text-(length:--heading-h3-size) font-(--heading-h3-weight) leading-(--heading-h3-line-height) tracking-(--heading-h3-letter-spacing)",
      4: "text-(length:--heading-h4-size) font-(--heading-h4-weight) leading-(--heading-h4-line-height) tracking-(--heading-h4-letter-spacing)",
      5: "text-(length:--heading-h5-size) font-(--heading-h5-weight) leading-(--heading-h5-line-height) tracking-(--heading-h5-letter-spacing)",
      6: "text-(length:--heading-h6-size) font-(--heading-h6-weight) leading-(--heading-h6-line-height) tracking-(--heading-h6-letter-spacing)",
    },
  },
  defaultVariants: {
    level: 2,
  },
});

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: HeadingLevel;
  as?: `h${HeadingLevel}`;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, as, ...props }, ref) => {
    const Tag = as ?? (`h${level}` as `h${HeadingLevel}`);
    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
