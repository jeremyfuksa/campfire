import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './utils';
export function StatusDot({ status, variant, label, pulse = false, className }) {
    const activeStatus = status || variant || 'neutral';
    const statusColors = {
        success: 'var(--success-600)',
        warning: 'var(--warning-600)',
        danger: 'var(--danger-600)',
        info: 'var(--info-600)',
        neutral: 'var(--neutral-500)',
        active: 'var(--success-500)',
        away: 'var(--warning-500)',
        offline: 'var(--neutral-400)',
    };
    const getStatusColor = () => statusColors[activeStatus] || 'var(--neutral-500)';
    return (_jsxs("div", { className: cn('inline-flex items-center gap-2', className), children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: getStatusColor() } }), pulse && (_jsx("div", { className: "absolute inset-0 w-2 h-2 rounded-full animate-ping", style: { backgroundColor: getStatusColor(), opacity: 0.75 } }))] }), label && (_jsx("span", { style: { fontSize: '14px', color: 'var(--text-primary)' }, children: label }))] }));
}
