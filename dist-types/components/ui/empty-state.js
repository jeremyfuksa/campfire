import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './button';
export function EmptyState({ icon = 'fa-inbox', title, description, action, className = '' }) {
    return (_jsxs("div", { className: `flex flex-col items-center justify-center py-16 px-4 text-center ${className}`, children: [_jsx("div", { className: "mb-4 flex items-center justify-center w-16 h-16 rounded-full", style: { backgroundColor: 'var(--bg-muted)' }, children: _jsx("i", { className: `fa-solid ${icon}`, style: { fontSize: '24px', color: 'var(--text-tertiary)' } }) }), _jsx("h3", { className: "mb-2", children: title }), description && (_jsx("p", { style: { color: 'var(--text-secondary)', maxWidth: '400px' }, children: description })), action && (_jsx(Button, { onClick: action.onClick, className: "mt-4", children: action.label }))] }));
}
