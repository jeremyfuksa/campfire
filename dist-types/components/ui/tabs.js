"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils";
const TabsContext = React.createContext(null);
const useTabs = () => {
    const ctx = React.useContext(TabsContext);
    if (!ctx)
        throw new Error("Tabs components must be used within Tabs");
    return ctx;
};
const compose = (user, ours) => (event) => {
    user?.(event);
    if (!event.defaultPrevented) {
        ours?.(event);
    }
};
export function Tabs({ children, value: controlledValue, defaultValue, onValueChange, className }) {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const value = isControlled ? controlledValue : internalValue;
    const [contentIds, setContentIds] = React.useState({});
    const [triggerIds, setTriggerIds] = React.useState({});
    const triggers = React.useRef([]);
    const setValue = React.useCallback((next) => {
        if (!isControlled) {
            setInternalValue(next);
        }
        onValueChange?.(next);
    }, [isControlled, onValueChange]);
    const registerTrigger = React.useCallback((triggerValue, ref, id) => {
        if (!triggers.current.find((entry) => entry.value === triggerValue)) {
            triggers.current.push({ value: triggerValue, ref });
        }
        setTriggerIds((prev) => ({ ...prev, [triggerValue]: id }));
        if (!value && !isControlled) {
            setInternalValue(triggerValue);
        }
    }, [isControlled, value]);
    const registerContent = React.useCallback((contentValue, id) => {
        setContentIds((prev) => ({ ...prev, [contentValue]: id }));
    }, []);
    const focusRelative = React.useCallback((currentValue, delta) => {
        const index = triggers.current.findIndex((entry) => entry.value === currentValue);
        if (index === -1 || triggers.current.length === 0)
            return;
        const next = triggers.current[(index + delta + triggers.current.length) % triggers.current.length];
        next.ref.current?.focus();
    }, []);
    const contextValue = React.useMemo(() => ({
        value,
        setValue,
        registerTrigger,
        registerContent,
        contentIds,
        triggerIds,
    }), [value, setValue, registerTrigger, registerContent, contentIds, triggerIds]);
    return (_jsx(TabsContext.Provider, { value: contextValue, children: _jsx("div", { "data-slot": "tabs", className: cn("flex flex-col gap-2", className), children: React.Children.map(children, (child) => {
                if (!React.isValidElement(child))
                    return child;
                if (child.type === TabsList) {
                    return React.cloneElement(child, { focusRelative });
                }
                return child;
            }) }) }));
}
export function TabsList({ className, focusRelative, ...props }) {
    return (_jsx("div", { "data-slot": "tabs-list", className: cn("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex", className), ...props, role: "tablist", onKeyDown: (event) => {
            if (event.key === "ArrowRight") {
                const target = event.target;
                const value = target?.dataset?.value;
                if (value)
                    focusRelative?.(value, 1);
            }
            if (event.key === "ArrowLeft") {
                const target = event.target;
                const value = target?.dataset?.value;
                if (value)
                    focusRelative?.(value, -1);
            }
        } }));
}
export function TabsTrigger({ className, value, disabled, onClick, ...props }) {
    const { value: activeValue, setValue, registerTrigger, contentIds } = useTabs();
    const ref = React.useRef(null);
    const isActive = activeValue === value;
    const controls = contentIds[value];
    const triggerId = React.useId();
    React.useEffect(() => {
        registerTrigger(value, ref, triggerId);
    }, [registerTrigger, value, triggerId]);
    return (_jsx("button", { type: "button", ref: ref, role: "tab", id: triggerId, "data-value": value, "aria-selected": isActive, "aria-controls": controls, disabled: disabled, "data-slot": "tabs-trigger", "data-state": isActive ? "active" : "inactive", className: cn("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), onClick: compose(onClick, () => setValue(value)), ...props }));
}
export function TabsContent({ className, value, children, ...props }) {
    const { value: activeValue, registerContent, triggerIds } = useTabs();
    const id = React.useId();
    const hidden = value !== activeValue;
    const labelledBy = triggerIds[value];
    React.useEffect(() => {
        registerContent(value, id);
    }, [registerContent, value, id]);
    return (_jsx("div", { role: "tabpanel", id: id, "aria-labelledby": labelledBy, "data-slot": "tabs-content", "data-state": hidden ? "inactive" : "active", className: cn("flex-1 outline-none", className), hidden: hidden, ...props, children: children }));
}
