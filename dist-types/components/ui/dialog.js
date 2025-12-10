"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils";
const DialogContext = React.createContext(null);
const useDialogContext = () => {
    const ctx = React.useContext(DialogContext);
    if (!ctx)
        throw new Error("Dialog components must be used within Dialog");
    return ctx;
};
const compose = (user, ours) => (event) => {
    user?.(event);
    if (!event.defaultPrevented) {
        ours?.(event);
    }
};
export function Dialog({ children, open: controlledOpen, defaultOpen, onOpenChange }) {
    const isControlled = controlledOpen !== undefined;
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
    const open = isControlled ? controlledOpen : internalOpen;
    const [titleId, setTitleId] = React.useState();
    const [descriptionId, setDescriptionId] = React.useState();
    const setOpen = React.useCallback((next) => {
        if (!isControlled)
            setInternalOpen(next);
        onOpenChange?.(next);
    }, [isControlled, onOpenChange]);
    const value = React.useMemo(() => ({
        open,
        openDialog: () => setOpen(true),
        closeDialog: () => setOpen(false),
        setTitleId,
        setDescriptionId,
        titleId,
        descriptionId,
    }), [open, setOpen, titleId, descriptionId]);
    return (_jsx(DialogContext.Provider, { value: value, children: _jsx("div", { "data-slot": "dialog", children: children }) }));
}
export function DialogTrigger({ asChild, children, onClick, ...props }) {
    const { openDialog } = useDialogContext();
    const triggerProps = {
        "data-slot": "dialog-trigger",
        onClick: compose(onClick, () => openDialog()),
        ...props,
    };
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, triggerProps);
    }
    return (_jsx("button", { type: "button", ...triggerProps, children: children }));
}
export function DialogContent({ className, children, ...props }) {
    const { open, closeDialog, titleId, descriptionId } = useDialogContext();
    const fallbackTitleId = React.useId();
    const fallbackDescriptionId = React.useId();
    const labelledBy = titleId ?? fallbackTitleId;
    const describedBy = descriptionId ?? fallbackDescriptionId;
    if (!open)
        return null;
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            event.stopPropagation();
            closeDialog();
        }
    };
    return (_jsxs("div", { "data-slot": "dialog-portal", style: { position: "fixed", inset: 0, zIndex: 50 }, children: [_jsx("div", { "data-slot": "dialog-overlay", "aria-hidden": "true", className: "fixed inset-0 bg-black/50", onClick: closeDialog }), _jsxs("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": labelledBy, "aria-describedby": describedBy, "data-slot": "dialog-content", className: cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg focus-visible:outline-none", className), onKeyDown: handleKeyDown, ...props, children: [!titleId && (_jsx("h2", { id: fallbackTitleId, className: "sr-only", children: "Dialog" })), !descriptionId && (_jsx("p", { id: fallbackDescriptionId, className: "sr-only", children: "Dialog content" })), children, _jsx(DialogClose, { className: "absolute right-4 top-4 rounded-xs border px-2 py-1 text-sm", children: "Close" })] })] }));
}
export function DialogHeader({ className, ...props }) {
    return (_jsx("div", { "data-slot": "dialog-header", className: cn("flex flex-col gap-2 text-center sm:text-left", className), ...props }));
}
export function DialogFooter({ className, ...props }) {
    return (_jsx("div", { "data-slot": "dialog-footer", className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className), ...props }));
}
export function DialogTitle({ className, ...props }) {
    const { setTitleId } = useDialogContext();
    const id = React.useId();
    React.useEffect(() => {
        setTitleId(id);
        return () => setTitleId(undefined);
    }, [id, setTitleId]);
    return (_jsx("h2", { id: id, "data-slot": "dialog-title", className: cn("text-lg font-semibold leading-none", className), ...props }));
}
export function DialogDescription({ className, ...props }) {
    const { setDescriptionId } = useDialogContext();
    const id = React.useId();
    React.useEffect(() => {
        setDescriptionId(id);
        return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);
    return (_jsx("p", { id: id, "data-slot": "dialog-description", className: cn("text-sm text-muted-foreground", className), ...props }));
}
export function DialogClose({ className, children, onClick, ...props }) {
    const { closeDialog } = useDialogContext();
    return (_jsx("button", { type: "button", "data-slot": "dialog-close", className: cn("inline-flex items-center gap-1", className), onClick: compose(onClick, () => closeDialog()), ...props, children: children ?? "Close" }));
}
export function DialogOverlay(props) {
    return _jsx("div", { "data-slot": "dialog-overlay", ...props });
}
export function DialogPortal(props) {
    return _jsx("div", { "data-slot": "dialog-portal", ...props });
}
