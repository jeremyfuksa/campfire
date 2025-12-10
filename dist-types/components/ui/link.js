import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './utils';
export function Link({ children, variant = 'default', underline = 'hover', external = false, className, style, ...props }) {
    const getVariantClasses = () => {
        switch (variant) {
            case 'subtle':
                return 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]';
            case 'bold':
                return 'text-[var(--interactive-default)] hover:text-[var(--interactive-hover)]';
            case 'muted':
                return 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]';
            default:
                return 'text-[var(--interactive-default)] hover:text-[var(--interactive-hover)]';
        }
    };
    const getFontWeightClass = () => {
        return variant === 'bold' ? 'font-medium' : '';
    };
    const getUnderlineClass = () => {
        switch (underline) {
            case 'always':
                return 'underline';
            case 'hover':
                return 'hover:underline';
            case 'none':
                return '';
        }
    };
    return (_jsxs("a", { className: cn('transition-colors cursor-pointer', getVariantClasses(), getFontWeightClass(), getUnderlineClass(), className), style: style, "data-slot": "link", ...(external && { target: '_blank', rel: 'noopener noreferrer' }), ...props, children: [children, external && (_jsx("i", { className: "fa-solid fa-arrow-up-right-from-square ml-1", style: { fontSize: '0.75em' } }))] }));
}
