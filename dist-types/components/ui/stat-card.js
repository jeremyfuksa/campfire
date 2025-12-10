import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from './card';
export function StatCard({ label, value, icon, iconColor = 'var(--interactive-default)', iconBgColor = 'var(--bg-muted)', trend, className = '' }) {
    return (_jsx(Card, { className: className, children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { style: { fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }, children: label }), _jsx("p", { className: "text-3xl font-semibold", style: { color: 'var(--text-primary)' }, children: value }), trend && (_jsxs("div", { className: "flex items-center gap-1 mt-2", children: [_jsx("i", { className: `fa-solid ${trend.isPositive ? 'fa-arrow-up' : 'fa-arrow-down'}`, style: {
                                            fontSize: '12px',
                                            color: trend.isPositive ? 'var(--success-600)' : 'var(--danger-600)'
                                        } }), _jsxs("span", { style: {
                                            fontSize: '14px',
                                            color: trend.isPositive ? 'var(--success-600)' : 'var(--danger-600)'
                                        }, children: [Math.abs(trend.value), "%"] })] }))] }), icon && (_jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-lg", style: { backgroundColor: iconBgColor }, children: _jsx("i", { className: `fa-solid ${icon}`, style: { fontSize: '20px', color: iconColor } }) }))] }) }) }));
}
