import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function GettingStartedPage({ onOpenReference }) {
    return (_jsx("section", { className: "min-h-screen flex items-center overflow-hidden", style: {
            background: "radial-gradient(circle at top, rgba(248, 227, 204, 0.4), transparent 60%), var(--bg-base)",
        }, children: _jsxs("div", { className: "max-w-6xl mx-auto px-8 py-24 grid gap-12 lg:grid-cols-[3fr,2fr] items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs uppercase tracking-[0.35em]", style: { color: "var(--text-tertiary)" }, children: "Campfire Design System" }), _jsx("h1", { className: "text-5xl lg:text-6xl font-semibold mb-6", style: { color: "var(--text-primary)" }, children: "Earthy, friendly, open source UI" }), _jsx("p", { style: { fontSize: "18px", color: "var(--text-secondary)", maxWidth: "40ch", lineHeight: 1.8 }, children: "Campfire is the warm, grounded design system for teams that want a cozy feel without sacrificing clarity. Built with nature-inspired gradients, tactile elevations, and Tailwind-friendly utilities, it ships as a fully open-source theme you can drop into any React project." }), _jsxs("div", { className: "flex flex-wrap gap-4 mt-8", children: [_jsx(PrimaryCTA, { label: "Install via npm" }), _jsx("button", { className: "px-5 py-3 rounded-lg font-medium", style: {
                                        color: "var(--interactive-default)",
                                        border: "1px solid var(--interactive-default)",
                                        backgroundColor: "transparent",
                                    }, onClick: onOpenReference, children: "View complete reference" })] })] }), _jsxs("div", { className: "rounded-3xl p-8 space-y-4", style: {
                        border: "1px solid var(--border-default)",
                        backgroundColor: "var(--bg-base)",
                        boxShadow: "var(--shadow-xl)",
                    }, children: [_jsx("p", { className: "text-xs uppercase tracking-[0.2em]", style: { color: "var(--text-tertiary)" }, children: "Install instructions" }), _jsxs("div", { className: "space-y-3", children: [_jsx("code", { className: "block rounded-2xl px-4 py-3", style: { backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }, children: "npm install @jeremyfuksa/campfire" }), _jsx("code", { className: "block rounded-2xl px-4 py-3", style: { backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }, children: "yarn add @jeremyfuksa/campfire" }), _jsx("p", { style: { color: "var(--text-secondary)" }, children: "Import the stylesheet once and pull in the components you need." }), _jsx("code", { className: "block rounded-2xl px-4 py-3", style: { backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }, children: "import '@jeremyfuksa/campfire/styles.css';" }), _jsx("code", { className: "block rounded-2xl px-4 py-3", style: { backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }, children: "import { Button } from '@jeremyfuksa/campfire';" })] })] })] }) }));
}
function PrimaryCTA({ label }) {
    return (_jsx("button", { className: "px-5 py-3 rounded-lg font-medium text-white", style: {
            background: "linear-gradient(135deg, var(--primary-600), var(--secondary-600))",
        }, onClick: () => window.open("https://www.npmjs.com/package/@jeremyfuksa/campfire", "_blank"), children: label }));
}
