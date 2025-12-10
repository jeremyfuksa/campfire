import * as React from "react";
import clsx from "clsx";

type TooltipContextValue = {
  open: boolean;
  show: () => void;
  hide: () => void;
  triggerId: string;
  contentId: string;
};

type TooltipProps = {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
};

type TooltipProviderProps = {
  children: React.ReactNode;
  delayDuration?: number;
};

type TooltipTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
  children: React.ReactNode;
};

type TooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

const DelayContext = React.createContext<number>(0);
const TooltipContext = React.createContext<TooltipContextValue | null>(null);

const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("Tooltip components must be used within a Tooltip");
  }
  return context;
};

const composeEventHandlers =
  <E extends React.SyntheticEvent>(handler?: (event: E) => void, ours?: (event: E) => void) =>
  (event: E) => {
    handler?.(event);
    if (!event.defaultPrevented) {
      ours?.(event);
    }
  };

export function TooltipProvider({ children, delayDuration = 0 }: TooltipProviderProps) {
  return (
    <DelayContext.Provider value={delayDuration}>
      <div data-slot="tooltip-provider">{children}</div>
    </DelayContext.Provider>
  );
}

export function Tooltip({
  children,
  open: controlledOpen,
  defaultOpen,
  onOpenChange,
  delayDuration,
}: TooltipProps) {
  const inheritedDelay = React.useContext(DelayContext) ?? 0;
  const finalDelay = delayDuration ?? inheritedDelay;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const openTimer = React.useRef<number>();
  const closeTimer = React.useRef<number>();

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const show = React.useCallback(() => {
    window.clearTimeout(closeTimer.current);
    if (finalDelay > 0) {
      openTimer.current = window.setTimeout(() => setOpen(true), finalDelay);
      return;
    }
    setOpen(true);
  }, [finalDelay, setOpen]);

  const hide = React.useCallback(() => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    setOpen(false);
  }, [setOpen]);

  React.useEffect(() => {
    return () => {
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hide();
      }
    };
    if (open) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [hide, open]);

  const triggerId = React.useId();
  const contentId = `${triggerId}-content`;

  const contextValue: TooltipContextValue = React.useMemo(
    () => ({
      open,
      show,
      hide,
      triggerId,
      contentId,
    }),
    [open, show, hide, triggerId, contentId]
  );

  return (
    <DelayContext.Provider value={finalDelay}>
      <div data-slot="tooltip-provider" style={{ display: "contents" }}>
        <TooltipContext.Provider value={contextValue}>
          <div data-slot="tooltip">{children}</div>
        </TooltipContext.Provider>
      </div>
    </DelayContext.Provider>
  );
}

export function TooltipTrigger({ asChild, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onKeyDown, ...props }: TooltipTriggerProps) {
  const { show, hide, triggerId, contentId, open } = useTooltipContext();

  const eventProps = {
    id: triggerId,
    "data-slot": "tooltip-trigger",
    "aria-describedby": open ? contentId : undefined,
    onMouseEnter: composeEventHandlers(onMouseEnter, () => show()),
    onMouseLeave: composeEventHandlers(onMouseLeave, () => hide()),
    onFocus: composeEventHandlers(onFocus, () => show()),
    onBlur: composeEventHandlers(onBlur, () => hide()),
    onKeyDown: composeEventHandlers(
      onKeyDown,
      (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === "Escape") {
          hide();
        }
      }
    ),
    ...props,
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, eventProps);
  }

  return (
    <button type="button" {...eventProps}>
      {children}
    </button>
  );
}

export function TooltipContent({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  side,
  align,
  sideOffset,
  ...props
}: TooltipContentProps) {
  const { open, hide, show, contentId, triggerId } = useTooltipContext();
  if (!open) return null;
  void sideOffset;

  return (
    <div
      role="tooltip"
      id={contentId}
      data-slot="tooltip-content"
      data-side={side}
      data-align={align}
      aria-labelledby={triggerId}
      className={clsx(className)}
      onMouseEnter={composeEventHandlers(onMouseEnter, () => show())}
      onMouseLeave={composeEventHandlers(onMouseLeave, () => hide())}
      {...props}
    >
      {children}
    </div>
  );
}
