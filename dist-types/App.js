import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { DesignTokensPage } from "./components/DesignTokensPage";
import { FoundationComponentsPage } from "./components/FoundationComponentsPage_new";
import { CompleteReferencePage } from "./components/CompleteReferencePage";
import { GridsLayoutsPage } from "./components/GridsLayoutsPage";
import { TestingExamplesPage } from "./components/TestingExamplesPage";
import { GettingStartedPage } from "./components/GettingStartedPage";
export default function App() {
    const [activePage, setActivePage] = useState("getting-started");
    const [theme, setTheme] = useState("light");
    // Apply theme to document
    React.useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const navigation = [
        {
            id: "getting-started",
            label: "Getting Started",
            icon: "fa-solid fa-compass",
        },
        {
            id: "design-tokens",
            label: "Design Tokens",
            icon: "fa-solid fa-palette",
        },
        {
            id: "components",
            label: "Components",
            icon: "fa-solid fa-cubes",
        },
        {
            id: "grids-layouts",
            label: "Grids & Layouts",
            icon: "fa-solid fa-table-cells",
        },
        {
            id: "testing-examples",
            label: "Testing & Examples",
            icon: "fa-solid fa-flask",
        },
    ];
    return (_jsxs("div", { className: "min-h-screen", style: { backgroundColor: "var(--bg-base)" }, children: [_jsxs("header", { className: "sticky top-0 z-50 relative overflow-hidden", style: {
                    backgroundColor: "var(--bg-base)",
                    borderBottom: "1px solid var(--border-default)",
                }, children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none", style: {
                            background: "linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)",
                        } }), _jsxs("div", { className: "max-w-7xl mx-auto px-8 h-20 flex items-center justify-between relative", children: [_jsxs("a", { href: "https://github.com/jeremyfuksa/campfire", target: "_blank", rel: "noreferrer", className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-lg flex items-center justify-center relative overflow-hidden", style: {
                                            background: "linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%)",
                                        }, children: _jsx("i", { className: "fa-solid fa-fire", style: { fontSize: "18px", color: "white" } }) }), _jsxs("div", { children: [_jsx("h1", { className: "mb-0", style: {
                                                    fontSize: "20px",
                                                    background: "linear-gradient(135deg, var(--primary-600), var(--secondary-600))",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text",
                                                }, children: "Campfire Design System" }), _jsx("p", { style: {
                                                    fontSize: "12px",
                                                    color: "var(--text-tertiary)",
                                                    marginTop: "2px",
                                                }, children: "Foundation v1.0 \u2014 Warm & Natural" })] })] }), _jsxs("button", { onClick: () => setTheme(theme === "light" ? "dark" : "light"), className: "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors", style: {
                                    backgroundColor: "var(--bg-muted)",
                                    border: "1px solid var(--border-default)",
                                    color: "var(--text-primary)",
                                }, children: [_jsx("i", { className: `fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`, style: { fontSize: "14px" } }), _jsx("span", { style: { fontSize: "14px" }, children: theme === "light" ? "Dark" : "Light" })] })] })] }), _jsx("nav", { className: "sticky top-20 z-40", style: {
                    backgroundColor: "var(--bg-base)",
                    borderBottom: "1px solid var(--border-default)",
                }, children: _jsx("div", { className: "max-w-7xl mx-auto px-8", children: _jsx("div", { className: "flex gap-1 -mb-px", children: navigation.map((item) => {
                            const isActive = activePage === item.id;
                            return (_jsxs("button", { onClick: () => setActivePage(item.id), className: "flex items-center gap-2 px-6 py-4 transition-colors relative", style: {
                                    color: isActive
                                        ? "var(--interactive-default)"
                                        : "var(--text-secondary)",
                                    backgroundColor: isActive
                                        ? "transparent"
                                        : "transparent",
                                    borderBottom: isActive
                                        ? "2px solid var(--interactive-default)"
                                        : "2px solid transparent",
                                }, children: [_jsx("i", { className: item.icon, style: { fontSize: "14px" } }), _jsx("span", { style: {
                                            fontSize: "14px",
                                            fontWeight: isActive ? "600" : "500",
                                        }, children: item.label })] }, item.id));
                        }) }) }) }), _jsxs("main", { children: [activePage === "getting-started" && (_jsx(GettingStartedPage, { onOpenReference: () => setActivePage("complete-reference") })), activePage === "design-tokens" && _jsx(DesignTokensPage, {}), activePage === "components" && _jsx(FoundationComponentsPage, {}), activePage === "grids-layouts" && _jsx(GridsLayoutsPage, {}), activePage === "testing-examples" && (_jsx(TestingExamplesPage, {})), activePage === "complete-reference" && _jsx(CompleteReferencePage, {})] }), activePage === "testing-examples" && (_jsx("footer", { className: "py-8", style: {
                    borderTop: "1px solid var(--border-default)",
                }, children: _jsx("div", { className: "max-w-7xl mx-auto px-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { style: {
                                    fontSize: "14px",
                                    color: "var(--text-tertiary)",
                                }, children: "\u00A9 2025 Campfire Design System. All rights reserved." }), _jsxs("div", { className: "flex gap-6", children: [_jsx("a", { href: "/", style: {
                                            fontSize: "14px",
                                            color: "var(--text-secondary)",
                                        }, children: "Documentation" }), _jsx("a", { href: "https://github.com/jeremyfuksa/campfire", target: "_blank", rel: "noreferrer", style: {
                                            fontSize: "14px",
                                            color: "var(--text-secondary)",
                                        }, children: "GitHub" }), _jsx("a", { href: "https://github.com/jeremyfuksa/campfire/issues", target: "_blank", rel: "noreferrer", style: {
                                            fontSize: "14px",
                                            color: "var(--text-secondary)",
                                        }, children: "Support" })] })] }) }) }))] }));
}
