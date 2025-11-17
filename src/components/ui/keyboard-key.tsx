import React from 'react';
import { cn } from './utils';

interface KeyboardKeyProps {
  children: React.ReactNode;
  className?: string;
}

export function KeyboardKey({ children, className }: KeyboardKeyProps) {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center px-2 py-1 rounded border shadow-sm min-w-[1.75rem]',
        className
      )}
      style={{
        fontSize: '12px',
        fontFamily: 'JetBrains Mono, monospace',
        backgroundColor: 'var(--bg-base)',
        borderColor: 'var(--border-default)',
        color: 'var(--text-secondary)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      }}
    >
      {children}
    </kbd>
  );
}

interface KeyboardShortcutProps {
  keys: string[];
  separator?: string;
  className?: string;
}

export function KeyboardShortcut({ keys, separator = '+', className }: KeyboardShortcutProps) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          <KeyboardKey>{key}</KeyboardKey>
          {index < keys.length - 1 && (
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}
