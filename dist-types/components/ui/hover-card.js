"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import clsx from "clsx";
const HoverCardContext = React.createContext(null);
const useHoverCard = () => {
    const ctx = React.useContext(HoverCardContext);
    if (!ctx)
        throw new Error("HoverCard components must be used within HoverCard");
    return ctx;
};
const compose = (user, ours) => (event) => {
    user?.(event);
    if (!event.defaultPrevented) {
        ours?.(event);
    }
};
export function HoverCard({ children, open: controlledOpen, defaultOpen, onOpenChange }) {
    const isControlled = controlledOpen !== undefined;
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const setOpen = React.useCallback((next) => {
        if (!isControlled) {
            setUncontrolledOpen(next);
        }
        onOpenChange?.(next);
    }, [isControlled, onOpenChange]);
    const show = React.useCallback(() => setOpen(true), [setOpen]);
    const hide = React.useCallback(() => setOpen(false), [setOpen]);
    const value = React.useMemo(() => ({ open, show, hide }), [open, show, hide]);
    return (_jsx(HoverCardContext.Provider, { value: value, children: _jsx("div", { "data-slot": "hover-card", children: children }) }));
}
export function HoverCardTrigger({ asChild, children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }) {
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
    return (_jsx("button", { type: "button", ...triggerProps, children: children }));
}
export function HoverCardContent({ className, children, ...props }) {
    const { open, hide } = useHoverCard();
    if (!open)
        return null;
    return (_jsx("div", { role: "dialog", "aria-label": "Hover card", "aria-live": "polite", "data-slot": "hover-card-content", className: clsx("rounded-md border bg-background p-4 shadow-md focus-visible:outline-none", className), onMouseLeave: hide, ...props, children: children }));
}
