import React from 'react';
import { Button } from './button';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({ 
  icon = 'fa-inbox', 
  title, 
  description, 
  action,
  className = ''
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div 
        className="mb-4 flex items-center justify-center w-16 h-16 rounded-full"
        style={{ backgroundColor: 'var(--bg-muted)' }}
      >
        <i 
          className={`fa-solid ${icon}`} 
          style={{ fontSize: '24px', color: 'var(--text-tertiary)' }}
        ></i>
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
