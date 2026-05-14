"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ theme = "system", ...props }: ToasterProps) => (
  <>
    <div data-slot="toaster" className="hidden" />
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--bg-base)",
          "--normal-text": "var(--text-primary)",
          "--normal-border": "var(--border-default)",
        } as React.CSSProperties
      }
      {...props}
    />
  </>
);

export { Toaster };
