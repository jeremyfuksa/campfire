"use client";

import * as React from "react";
import clsx from "clsx";

type HoverCardProps = {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type HoverCardContextValue = {
  open: boolean;
  show: () => void;
  hide: () => void;
};

type HoverCardTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
  children: React.ReactNode;
};

type HoverCardContentProps = React.HTMLAttributes<HTMLDivElement>;

const HoverCardContext = React.createContext<HoverCardContextValue | null>(null);

const useHoverCard = () => {
  const ctx = React.useContext(HoverCardContext);
  if (!ctx) throw new Error("HoverCard components must be used within HoverCard");
  return ctx;
};

const compose =
  <E extends React.SyntheticEvent>(user?: (event: E) => void, ours?: (event: E) => void) =>
  (event: E) => {
    user?.(event);
    if (!event.defaultPrevented) {
      ours?.(event);
    }
  };

export function HoverCard({ children, open: controlledOpen, defaultOpen, onOpenChange }: HoverCardProps) {
  const isControlled = controlledOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const show = React.useCallback(() => setOpen(true), [setOpen]);
  const hide = React.useCallback(() => setOpen(false), [setOpen]);

  const value = React.useMemo(() => ({ open, show, hide }), [open, show, hide]);

  return (
    <HoverCardContext.Provider value={value}>
      <div data-slot="hover-card">{children}</div>
    </HoverCardContext.Provider>
  );
}

export function HoverCardTrigger({
  asChild,
  children,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...props
}: HoverCardTriggerProps) {
  const { show, hide } = useHoverCard();
  const triggerProps = {
    "data-slot": "hover-card-trigger",
    onMouseEnter: compose(onMouseEnter, () => show()),
    onMouseLeave: compose(onMouseLeave, () => hide()),
    onFocus: compose(onFocus, () => show()),
    onBlur: compose(onBlur, () => hide()),
    ...props,
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, triggerProps);
  }

  return (
    <button type="button" {...triggerProps}>
      {children}
    </button>
  );
}

export function HoverCardContent({ className, children, ...props }: HoverCardContentProps) {
  const { open, hide } = useHoverCard();
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Hover card"
      aria-live="polite"
      data-slot="hover-card-content"
      className={clsx(
        "rounded-md border bg-background p-4 shadow-md focus-visible:outline-none",
        className,
      )}
      onMouseLeave={hide}
      {...props}
    >
      {children}
    </div>
  );
}
