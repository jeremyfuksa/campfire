import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from './utils';
export function KeyboardKey({ children, className }) {
    return (_jsx("kbd", { className: cn('inline-flex items-center justify-center px-2 py-1 rounded border shadow-sm min-w-[1.75rem]', className), style: {
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            backgroundColor: 'var(--bg-base)',
            borderColor: 'var(--border-default)',
            color: 'var(--text-secondary)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }, children: children }));
}
export function KeyboardShortcut({ keys, separator = '+', className }) {
    return (_jsx("span", { className: cn('inline-flex items-center gap-1', className), children: keys.map((key, index) => (_jsxs(React.Fragment, { children: [_jsx(KeyboardKey, { children: key }), index < keys.length - 1 && (_jsx("span", { style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: separator }))] }, index))) }));
}
