import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './utils';
export function Chip({ label, children, variant = 'default', onRemove, onClose, icon, className }) {
    const handleRemove = onClose || onRemove;
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: 'var(--primary-100)',
                    color: 'var(--primary-700)',
                    borderColor: 'var(--primary-200)'
                };
            case 'success':
                return {
                    backgroundColor: 'var(--success-500)',
                    color: 'white',
                    borderColor: 'var(--success-600)'
                };
            case 'warning':
                return {
                    backgroundColor: 'var(--warning-500)',
                    color: 'var(--neutral-900)',
                    borderColor: 'var(--warning-600)'
                };
            case 'danger':
                return {
                    backgroundColor: 'var(--danger-500)',
                    color: 'white',
                    borderColor: 'var(--danger-600)'
                };
            default:
                return {
                    backgroundColor: 'var(--bg-muted)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-default)'
                };
        }
    };
    const styles = getVariantStyles();
    return (_jsxs("div", { className: cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-sm', className), style: styles, children: [icon && (_jsx("i", { className: `fa-solid ${icon}`, style: { fontSize: '12px' } })), _jsx("span", { children: children || label }), handleRemove && (_jsx("button", { type: "button", onClick: handleRemove, "aria-label": "Remove chip", className: "hover:opacity-70 transition-opacity", children: _jsx("i", { className: "fa-solid fa-xmark", style: { fontSize: '12px' } }) }))] }));
}
