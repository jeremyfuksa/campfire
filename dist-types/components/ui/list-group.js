import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './utils';
export function ListGroup({ children, className }) {
    return (_jsx("ul", { className: cn('rounded-lg overflow-hidden border', className), style: { borderColor: 'var(--border-default)' }, children: children }));
}
export function ListGroupItem({ children, icon, action, onClick, active = false, disabled = false, className, }) {
    const isClickable = !!onClick && !disabled;
    const clickHandler = disabled ? undefined : onClick;
    return (_jsxs("li", { className: cn('flex items-center justify-between px-4 py-3 border-b last:border-b-0 transition-colors', isClickable && 'cursor-pointer hover:bg-bg-subtle', disabled && 'opacity-60 cursor-not-allowed', active && 'bg-bg-subtle', className), style: {
            borderColor: 'var(--border-default)',
            backgroundColor: active ? 'var(--bg-subtle)' : 'transparent'
        }, "aria-disabled": disabled || undefined, onClick: clickHandler, children: [_jsxs("div", { className: "flex items-center gap-3 flex-1", children: [icon && (_jsx("i", { className: `fa-solid ${icon}`, style: { fontSize: '16px', color: 'var(--text-secondary)' } })), _jsx("span", { style: { color: 'var(--text-primary)' }, children: children })] }), action && _jsx("div", { children: action })] }));
}
