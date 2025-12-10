import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from './utils';
export function Stepper({ steps, currentStep, className }) {
    return (_jsx("div", { className: cn('flex items-center', className), children: steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isLast = index === steps.length - 1;
            return (_jsxs(React.Fragment, { children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: cn('w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all', isCompleted && 'bg-primary border-primary', isCurrent && 'border-primary', !isCompleted && !isCurrent && 'border-border-default'), style: {
                                    backgroundColor: isCompleted ? 'var(--interactive-default)' : isCurrent ? 'transparent' : 'var(--bg-base)',
                                    borderColor: isCompleted || isCurrent ? 'var(--interactive-default)' : 'var(--border-default)'
                                }, children: isCompleted ? (_jsx("i", { className: "fa-solid fa-check", style: { fontSize: '14px', color: 'white' } })) : (_jsx("span", { style: {
                                        fontSize: '14px',
                                        fontWeight: isCurrent ? '600' : '400',
                                        color: isCurrent ? 'var(--interactive-default)' : 'var(--text-tertiary)'
                                    }, children: index + 1 })) }), _jsxs("div", { className: "mt-2 text-center", children: [_jsx("p", { style: {
                                            fontSize: '14px',
                                            fontWeight: isCurrent ? '600' : '400',
                                            color: isCurrent || isCompleted ? 'var(--text-primary)' : 'var(--text-secondary)'
                                        }, children: step.label }), step.description && (_jsx("p", { style: { fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }, children: step.description }))] })] }), !isLast && (_jsx("div", { className: "flex-1 h-0.5 mx-4 -mt-12", style: {
                            backgroundColor: isCompleted ? 'var(--interactive-default)' : 'var(--border-default)'
                        } }))] }, index));
        }) }));
}
