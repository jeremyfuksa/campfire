import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
export function FormInputField({ id, label, type = 'text', placeholder, error, helperText, required, value, onChange, icon }) {
    return (_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: id, children: [label, required && _jsx("span", { style: { color: 'var(--danger-600)' }, children: " *" })] }), _jsxs("div", { className: "relative", children: [icon && (_jsx("i", { className: `fa-solid ${icon} absolute left-3 top-1/2 -translate-y-1/2`, style: { color: 'var(--text-tertiary)', fontSize: '14px' } })), _jsx(Input, { id: id, type: type, placeholder: placeholder, value: value, onChange: (e) => onChange?.(e.target.value), "aria-invalid": !!error, className: icon ? 'pl-10' : '' })] }), error && (_jsx("p", { style: { fontSize: '14px', color: 'var(--danger-600)' }, children: error })), !error && helperText && (_jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: helperText }))] }));
}
export function FormTextareaField({ id, label, placeholder, error, helperText, required, value, onChange, rows = 4 }) {
    return (_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: id, children: [label, required && _jsx("span", { style: { color: 'var(--danger-600)' }, children: " *" })] }), _jsx(Textarea, { id: id, placeholder: placeholder, value: value, onChange: (e) => onChange?.(e.target.value), "aria-invalid": !!error, rows: rows }), error && (_jsx("p", { style: { fontSize: '14px', color: 'var(--danger-600)' }, children: error })), !error && helperText && (_jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: helperText }))] }));
}
export function FormSelectField({ id, label, placeholder, error, helperText, required, value, onChange, options }) {
    return (_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: id, children: [label, required && _jsx("span", { style: { color: 'var(--danger-600)' }, children: " *" })] }), _jsxs(Select, { value: value, onValueChange: onChange, children: [_jsx(SelectTrigger, { id: id, "aria-invalid": !!error, children: _jsx(SelectValue, { placeholder: placeholder }) }), _jsx(SelectContent, { children: options.map((option) => (_jsx(SelectItem, { value: option.value, children: option.label }, option.value))) })] }), error && (_jsx("p", { style: { fontSize: '14px', color: 'var(--danger-600)' }, children: error })), !error && helperText && (_jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: helperText }))] }));
}
