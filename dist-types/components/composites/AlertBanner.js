import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertDescription } from '../ui/alert';
export function AlertBanner({ variant = 'default', icon = 'fa-circle-info', message, className }) {
    return (_jsxs(Alert, { variant: variant, className: `flex items-center gap-3 ${className || ''}`, children: [_jsx("i", { className: `fa-solid ${icon} flex-shrink-0`, style: { fontSize: '16px' } }), _jsx(AlertDescription, { className: "flex-1", children: message })] }));
}
// Preset variants for common use cases
export function SuccessAlert({ message, className }) {
    return (_jsx(AlertBanner, { variant: "default", icon: "fa-circle-check", message: message, className: className }));
}
export function ErrorAlert({ message, className }) {
    return (_jsx(AlertBanner, { variant: "destructive", icon: "fa-circle-exclamation", message: message, className: className }));
}
export function WarningAlert({ message, className }) {
    return (_jsx(AlertBanner, { variant: "default", icon: "fa-triangle-exclamation", message: message, className: className }));
}
export function InfoAlert({ message, className }) {
    return (_jsx(AlertBanner, { variant: "default", icon: "fa-circle-info", message: message, className: className }));
}
