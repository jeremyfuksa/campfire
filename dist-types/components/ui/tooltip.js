import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import clsx from "clsx";
const DelayContext = React.createContext(0);
const TooltipContext = React.createContext(null);
const useTooltipContext = () => {
    const context = React.useContext(TooltipContext);
    if (!context) {
        throw new Error("Tooltip components must be used within a Tooltip");
    }
    return context;
};
const composeEventHandlers = (handler, ours) => (event) => {
    handler?.(event);
    if (!event.defaultPrevented) {
        ours?.(event);
    }
};
export function TooltipProvider({ children, delayDuration = 0 }) {
    return (_jsx(DelayContext.Provider, { value: delayDuration, children: _jsx("div", { "data-slot": "tooltip-provider", children: children }) }));
}
export function Tooltip({ children, open: controlledOpen, defaultOpen, onOpenChange, delayDuration, }) {
    const inheritedDelay = React.useContext(DelayContext) ?? 0;
    const finalDelay = delayDuration ?? inheritedDelay;
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const openTimer = React.useRef();
    const closeTimer = React.useRef();
    const setOpen = React.useCallback((next) => {
        if (!isControlled) {
            setUncontrolledOpen(next);
        }
        onOpenChange?.(next);
    }, [isControlled, onOpenChange]);
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
        const handleEscape = (event) => {
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
    const contextValue = React.useMemo(() => ({
        open,
        show,
        hide,
        triggerId,
        contentId,
    }), [open, show, hide, triggerId, contentId]);
    return (_jsx(DelayContext.Provider, { value: finalDelay, children: _jsx("div", { "data-slot": "tooltip-provider", style: { display: "contents" }, children: _jsx(TooltipContext.Provider, { value: contextValue, children: _jsx("div", { "data-slot": "tooltip", children: children }) }) }) }));
}
export function TooltipTrigger({ asChild, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onKeyDown, ...props }) {
    const { show, hide, triggerId, contentId, open } = useTooltipContext();
    const eventProps = {
        id: triggerId,
        "data-slot": "tooltip-trigger",
        "aria-describedby": open ? contentId : undefined,
        onMouseEnter: composeEventHandlers(onMouseEnter, () => show()),
        onMouseLeave: composeEventHandlers(onMouseLeave, () => hide()),
        onFocus: composeEventHandlers(onFocus, () => show()),
        onBlur: composeEventHandlers(onBlur, () => hide()),
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
            if (event.key === "Escape") {
                hide();
            }
        }),
        ...props,
    };
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, eventProps);
    }
    return (_jsx("button", { type: "button", ...eventProps, children: children }));
}
export function TooltipContent({ className, children, onMouseEnter, onMouseLeave, side, align, sideOffset, ...props }) {
    const { open, hide, show, contentId, triggerId } = useTooltipContext();
    if (!open)
        return null;
    void sideOffset;
    return (_jsx("div", { role: "tooltip", id: contentId, "data-slot": "tooltip-content", "data-side": side, "data-align": align, "aria-labelledby": triggerId, className: clsx(className), onMouseEnter: composeEventHandlers(onMouseEnter, () => show()), onMouseLeave: composeEventHandlers(onMouseLeave, () => hide()), ...props, children: children }));
}
