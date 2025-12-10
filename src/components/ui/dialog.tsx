"use client";

import * as React from "react";
import { cn } from "./utils";

type DialogContextValue = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  setTitleId: (id?: string) => void;
  setDescriptionId: (id?: string) => void;
  titleId?: string;
  descriptionId?: string;
};

type DialogProps = {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type DialogTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

type DialogContentProps = React.HTMLAttributes<HTMLDivElement>;

const DialogContext = React.createContext<DialogContextValue | null>(null);

const useDialogContext = () => {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error("Dialog components must be used within Dialog");
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

export function Dialog({ children, open: controlledOpen, defaultOpen, onOpenChange }: DialogProps) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const open = isControlled ? controlledOpen : internalOpen;
  const [titleId, setTitleId] = React.useState<string>();
  const [descriptionId, setDescriptionId] = React.useState<string>();

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const value = React.useMemo<DialogContextValue>(
    () => ({
      open,
      openDialog: () => setOpen(true),
      closeDialog: () => setOpen(false),
      setTitleId,
      setDescriptionId,
      titleId,
      descriptionId,
    }),
    [open, setOpen, titleId, descriptionId]
  );

  return (
    <DialogContext.Provider value={value}>
      <div data-slot="dialog">{children}</div>
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children, onClick, ...props }: DialogTriggerProps) {
  const { openDialog } = useDialogContext();
  const triggerProps = {
    "data-slot": "dialog-trigger",
    onClick: compose(onClick, () => openDialog()),
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

export function DialogContent({ className, children, ...props }: DialogContentProps) {
  const { open, closeDialog, titleId, descriptionId } = useDialogContext();
  const fallbackTitleId = React.useId();
  const fallbackDescriptionId = React.useId();
  const labelledBy = titleId ?? fallbackTitleId;
  const describedBy = descriptionId ?? fallbackDescriptionId;

  if (!open) return null;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeDialog();
    }
  };

  return (
    <div data-slot="dialog-portal" style={{ position: "fixed", inset: 0, zIndex: 50 }}>
      <div
        data-slot="dialog-overlay"
        aria-hidden="true"
        className="fixed inset-0 bg-black/50"
        onClick={closeDialog}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        data-slot="dialog-content"
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg focus-visible:outline-none",
          className,
        )}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {!titleId && (
          <h2 id={fallbackTitleId} className="sr-only">
            Dialog
          </h2>
        )}
        {!descriptionId && (
          <p id={fallbackDescriptionId} className="sr-only">
            Dialog content
          </p>
        )}
        {children}
        <DialogClose className="absolute right-4 top-4 rounded-xs border px-2 py-1 text-sm">
          Close
        </DialogClose>
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

export function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}

export function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const { setTitleId } = useDialogContext();
  const id = React.useId();

  React.useEffect(() => {
    setTitleId(id);
    return () => setTitleId(undefined);
  }, [id, setTitleId]);

  return (
    <h2
      id={id}
      data-slot="dialog-title"
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  );
}

export function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const { setDescriptionId } = useDialogContext();
  const id = React.useId();

  React.useEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return (
    <p
      id={id}
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DialogClose({ className, children, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { closeDialog } = useDialogContext();
  return (
    <button
      type="button"
      data-slot="dialog-close"
      className={cn("inline-flex items-center gap-1", className)}
      onClick={compose(onClick, () => closeDialog())}
      {...props}
    >
      {children ?? "Close"}
    </button>
  );
}

export function DialogOverlay(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="dialog-overlay" {...props} />;
}

export function DialogPortal(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="dialog-portal" {...props} />;
}
