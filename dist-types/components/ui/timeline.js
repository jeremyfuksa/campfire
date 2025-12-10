import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "./utils";
const statusColors = {
    default: "var(--neutral-400)",
    success: "var(--success)",
    error: "var(--destructive)",
    warning: "var(--warning)",
};
export function Timeline({ items, className }) {
    return (_jsx("div", { className: cn("space-y-8", className), children: items.map((item, index) => (_jsxs("div", { className: "relative flex gap-4", children: [index !== items.length - 1 && (_jsx("div", { className: "absolute left-4 top-8 h-full w-0.5", style: { backgroundColor: "var(--neutral-800)" } })), _jsx("div", { className: "relative z-10 flex-shrink-0", children: _jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full border-2", style: {
                            borderColor: statusColors[item.status || "default"],
                            backgroundColor: "var(--background)",
                        }, children: item.icon || (_jsx("div", { className: "h-2 w-2 rounded-full", style: {
                                backgroundColor: statusColors[item.status || "default"],
                            } })) }) }), _jsxs("div", { className: "flex-1 pb-8", children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsx("h3", { className: "font-semibold", children: item.title }), item.date && (_jsx("time", { className: "text-sm", style: { color: "var(--neutral-500)" }, children: item.date }))] }), item.description && (_jsx("p", { className: "mt-1 text-sm", style: { color: "var(--neutral-400)" }, children: item.description }))] })] }, item.id))) }));
}
