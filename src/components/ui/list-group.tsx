import React from 'react';
import { cn } from './utils';

interface ListGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ListGroup({ children, className }: ListGroupProps) {
  return (
    <ul 
      className={cn(
        'rounded-lg overflow-hidden border',
        className
      )}
      style={{ borderColor: 'var(--border-default)' }}
    >
      {children}
    </ul>
  );
}

interface ListGroupItemProps {
  children: React.ReactNode;
  icon?: string;
  action?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ListGroupItem({
  children,
  icon,
  action,
  onClick,
  active = false,
  disabled = false,
  className,
}: ListGroupItemProps) {
  const isClickable = !!onClick && !disabled;
  const clickHandler = disabled ? undefined : onClick;
  
  return (
    <li
      className={cn(
        'flex items-center justify-between px-4 py-3 border-b last:border-b-0 transition-colors',
        isClickable && 'cursor-pointer hover:bg-bg-subtle',
        disabled && 'opacity-60 cursor-not-allowed',
        active && 'bg-bg-subtle',
        className
      )}
      style={{ 
        borderColor: 'var(--border-default)',
        backgroundColor: active ? 'var(--bg-subtle)' : 'transparent'
      }}
      aria-disabled={disabled || undefined}
      onClick={clickHandler}
    >
      <div className="flex items-center gap-3 flex-1">
        {icon && (
          <i 
            className={`fa-solid ${icon}`}
            style={{ fontSize: '16px', color: 'var(--text-secondary)' }}
          ></i>
        )}
        <span style={{ color: 'var(--text-primary)' }}>{children}</span>
      </div>
      {action && <div>{action}</div>}
    </li>
  );
}
