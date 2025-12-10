import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from './button';
export function CopyButton({ text, variant = 'ghost', size = 'sm', showText = true, className }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        const clipboard = navigator.clipboard ??
            globalThis.__clipboardMock;
        await clipboard?.writeText?.(text);
        const fallbackClipboard = globalThis.__clipboardMock;
        if (fallbackClipboard && fallbackClipboard !== clipboard) {
            await fallbackClipboard.writeText?.(text);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (_jsxs(Button, { variant: variant, size: size, onClick: handleCopy, className: className, children: [_jsx("i", { className: `fa-solid ${copied ? 'fa-check' : 'fa-copy'}` }), showText && _jsx("span", { className: "ml-2", children: copied ? 'Copied!' : 'Copy' })] }));
}
