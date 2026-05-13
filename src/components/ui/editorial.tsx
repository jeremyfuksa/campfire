import React from "react";
import { cn } from "./utils";

export type EditorialTone = "warm" | "cool" | "deep";

interface EditorialThemeProps {
  tone?: EditorialTone;
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function EditorialTheme({
  tone = "warm",
  children,
  className,
  as: Tag = "div",
}: EditorialThemeProps) {
  return (
    <Tag data-editorial-theme={tone} className={cn(className)}>
      {children}
    </Tag>
  );
}

interface EditorialEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function EditorialEyebrow({ children, className }: EditorialEyebrowProps) {
  return (
    <span
      className={cn(
        "text-editorial-accent inline-block text-xs font-semibold uppercase tracking-[0.12em]",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface EditorialPullquoteProps {
  children: React.ReactNode;
  cite?: React.ReactNode;
  variant?: "ruled" | "tinted";
  className?: string;
}

export function EditorialPullquote({
  children,
  cite,
  variant = "ruled",
  className,
}: EditorialPullquoteProps) {
  return (
    <figure
      className={cn(
        "my-8 rounded-md",
        variant === "tinted" && "bg-editorial-accent-subtle px-6 py-5",
        variant === "ruled" && "border-l-4 border-editorial-accent pl-6",
        className,
      )}
    >
      <blockquote
        style={{
          fontFamily: "var(--font-heading-editorial)",
          fontSize: "var(--text-editorial-pullquote)",
          lineHeight: "var(--leading-editorial-pullquote)",
          fontWeight: "var(--font-weight-editorial-pullquote)",
          color: "var(--text-heading)",
          fontVariationSettings: "var(--editorial-font-variation)",
        }}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-3 text-sm text-editorial-accent">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
}

interface EditorialDropCapProps {
  children: React.ReactNode;
  className?: string;
}

export function EditorialDropCap({ children, className }: EditorialDropCapProps) {
  return (
    <span
      aria-hidden="false"
      className={cn(
        "text-editorial-accent float-left mr-2 mt-1 leading-none",
        className,
      )}
      style={{
        fontFamily: "var(--font-heading-editorial)",
        fontSize: "4.5rem",
        fontWeight: 425,
        fontVariationSettings: "var(--editorial-font-variation)",
      }}
    >
      {children}
    </span>
  );
}
