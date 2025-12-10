import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './utils';
export function HelperText({ children, variant = 'default', icon, className }) {
    const getVariantColor = () => {
        switch (variant) {
            case 'error':
                return 'var(--danger-600)';
            case 'success':
                return 'var(--success-600)';
            case 'warning':
                return 'var(--warning-700)';
            default:
                return 'var(--text-tertiary)';
        }
    };
    const getDefaultIcon = () => {
        switch (variant) {
            case 'error':
                return 'fa-circle-exclamation';
            case 'success':
                return 'fa-circle-check';
            case 'warning':
                return 'fa-triangle-exclamation';
            default:
                return '';
        }
    };
    const displayIcon = icon || getDefaultIcon();
    return (_jsxs("p", { className: cn('flex items-start gap-1.5', className), style: { fontSize: '14px', color: getVariantColor() }, children: [displayIcon && (_jsx("i", { className: `fa-solid ${displayIcon} flex-shrink-0 mt-0.5`, style: { fontSize: '12px' } })), _jsx("span", { children: children })] }));
}
