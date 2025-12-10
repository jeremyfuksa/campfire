"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster as Sonner } from "sonner";
const Toaster = ({ theme = "system", ...props }) => (_jsxs(_Fragment, { children: [_jsx("div", { "data-slot": "toaster", className: "hidden" }), _jsx(Sonner, { theme: theme, className: "toaster group", style: {
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
            }, ...props })] }));
export { Toaster };
