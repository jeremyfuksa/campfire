import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BackgroundGradients } from './BackgroundGradients';
export function PageWithSidebar({ title, description, sidebarGroups, activeSection, onSectionChange, children, gradientColor = 'var(--primary-500)' }) {
    return (_jsxs("div", { className: "flex", children: [_jsxs("aside", { className: "w-64 flex-shrink-0 border-r overflow-y-auto fixed", style: {
                    borderColor: 'var(--border-default)',
                    backgroundColor: 'var(--bg-base)',
                    height: 'calc(100vh - var(--header-height) - var(--nav-height))',
                    top: 'calc(var(--header-height) + var(--nav-height))',
                    left: 0,
                    width: 'var(--sidebar-width)',
                    opacity: 0.95,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                }, children: [_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "mb-1", children: title }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: description })] }), _jsx("nav", { className: "px-3 pb-6", children: sidebarGroups.map((group, groupIndex) => (_jsxs("div", { className: "mb-6", children: [group.title && (_jsx("div", { className: "px-3 mb-2", style: {
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'var(--text-tertiary)',
                                        fontWeight: '600'
                                    }, children: group.title })), _jsx("div", { className: "space-y-1", children: group.items.map((item) => {
                                        const isActive = activeSection === item.id;
                                        return (_jsxs("button", { onClick: () => onSectionChange(item.id), className: "w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-left", style: {
                                                backgroundColor: isActive ? 'var(--bg-muted)' : 'transparent',
                                                color: isActive ? 'var(--interactive-default)' : 'var(--text-secondary)',
                                                fontWeight: isActive ? '600' : '500',
                                                fontSize: '14px'
                                            }, children: [item.icon && _jsx("i", { className: item.icon, style: { fontSize: '14px', width: '16px' } }), _jsx("span", { children: item.label })] }, item.id));
                                    }) })] }, groupIndex))) })] }), _jsxs("main", { className: "flex-1", style: {
                    marginLeft: 'var(--sidebar-width)',
                    minHeight: 'calc(100vh - var(--header-height) - var(--nav-height))'
                }, children: [_jsxs("div", { className: "relative", style: { minHeight: 'inherit' }, children: [_jsx(BackgroundGradients, { layout: "sidebar", primaryColor: gradientColor }), _jsx("div", { className: "relative max-w-5xl mx-auto p-8 pb-8", children: children })] }), _jsx("footer", { className: "py-8", style: { borderTop: '1px solid var(--border-default)' }, children: _jsx("div", { className: "max-w-5xl mx-auto px-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "\u00A9 2025 Campfire Design System. All rights reserved." }), _jsxs("div", { className: "flex gap-6", children: [_jsx("a", { href: "/", style: { fontSize: '14px', color: 'var(--text-secondary)' }, children: "Documentation" }), _jsx("a", { href: "https://github.com/jeremyfuksa/campfire", target: "_blank", rel: "noreferrer", style: { fontSize: '14px', color: 'var(--text-secondary)' }, children: "GitHub" }), _jsx("a", { href: "https://github.com/jeremyfuksa/campfire/issues", target: "_blank", rel: "noreferrer", style: { fontSize: '14px', color: 'var(--text-secondary)' }, children: "Support" })] })] }) }) })] })] }));
}
