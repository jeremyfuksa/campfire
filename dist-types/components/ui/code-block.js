import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { cn } from './utils';
import { Button } from './button';
export function CodeBlock({ code, language = 'javascript', showLineNumbers = false, className }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        const clipboard = navigator.clipboard ??
            globalThis.__clipboardMock;
        clipboard?.writeText?.(code);
        const fallbackClipboard = globalThis.__clipboardMock;
        if (fallbackClipboard && fallbackClipboard !== clipboard) {
            fallbackClipboard.writeText?.(code);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const lines = code.split('\n');
    return (_jsxs("div", { className: cn('relative rounded-lg overflow-hidden', className), style: { backgroundColor: 'var(--neutral-900)' }, children: [_jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b", style: { borderColor: 'var(--neutral-800)' }, children: [_jsx("span", { style: { fontSize: '12px', color: 'var(--neutral-400)', fontFamily: 'JetBrains Mono, monospace' }, children: language }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: handleCopy, style: { color: 'var(--neutral-400)' }, children: [_jsx("i", { className: `fa-solid ${copied ? 'fa-check' : 'fa-copy'}` }), _jsx("span", { className: "ml-2", children: copied ? 'Copied!' : 'Copy' })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsx("pre", { className: "p-4", style: { margin: 0 }, children: _jsx("code", { style: {
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: 'var(--neutral-100)'
                        }, children: showLineNumbers ? (lines.map((line, index) => (_jsxs("div", { className: "flex", children: [_jsx("span", { className: "select-none mr-4 text-right", style: {
                                        width: '2em',
                                        color: 'var(--neutral-600)'
                                    }, children: index + 1 }), _jsx("span", { children: line })] }, index)))) : (code) }) }) })] }));
}
