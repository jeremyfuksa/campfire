import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
export function NotificationSwitch({ id, label, description, checked, onCheckedChange }) {
    return (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: id, children: label }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: description })] }), _jsx(Switch, { id: id, checked: checked, onCheckedChange: (state) => onCheckedChange(state) })] }));
}
