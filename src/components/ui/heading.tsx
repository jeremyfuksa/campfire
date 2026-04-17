import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const headingVariants = cva("text-[color:var(--text-primary)]", {
  variants: {
    level: {
      1: "text-[length:var(--heading-h1-size)] font-[number:var(--heading-h1-weight)] leading-[var(--heading-h1-line-height)] tracking-[var(--heading-h1-letter-spacing)]",
      2: "text-[length:var(--heading-h2-size)] font-[number:var(--heading-h2-weight)] leading-[var(--heading-h2-line-height)] tracking-[var(--heading-h2-letter-spacing)]",
      3: "text-[length:var(--heading-h3-size)] font-[number:var(--heading-h3-weight)] leading-[var(--heading-h3-line-height)] tracking-[var(--heading-h3-letter-spacing)]",
      4: "text-[length:var(--heading-h4-size)] font-[number:var(--heading-h4-weight)] leading-[var(--heading-h4-line-height)] tracking-[var(--heading-h4-letter-spacing)]",
      5: "text-[length:var(--heading-h5-size)] font-[number:var(--heading-h5-weight)] leading-[var(--heading-h5-line-height)] tracking-[var(--heading-h5-letter-spacing)]",
      6: "text-[length:var(--heading-h6-size)] font-[number:var(--heading-h6-weight)] leading-[var(--heading-h6-line-height)] tracking-[var(--heading-h6-letter-spacing)]",
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
