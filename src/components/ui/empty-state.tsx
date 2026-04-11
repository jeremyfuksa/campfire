import React from 'react';
import { Inbox } from 'lucide-react';
import { Button } from './button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  const renderedIcon = icon ?? <Inbox size={24} aria-hidden="true" />;
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div
        className="mb-4 flex items-center justify-center w-16 h-16 rounded-full"
        data-testid="empty-state-icon"
        style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text-tertiary)' }}
      >
        {renderedIcon}
      </div>
      <h3 className="mb-2">{title}</h3>
      {description && (
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
          {description}
        </p>
      )}
      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.label}
        </Button>
      )}
    </div>
  );
}
