import React from 'react';
import { cn } from './utils';

export type StatusValue =
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'active'
  | 'away'
  | 'offline';

interface StatusDotProps {
  status?: StatusValue;
  variant?: StatusValue;
  label?: string;
  pulse?: boolean;
  className?: string;
}

export function StatusDot({ status, variant, label, pulse = false, className }: StatusDotProps) {
  const activeStatus = status || variant || 'neutral';
  const statusColors: Record<StatusValue, string> = {
    success: 'var(--success-600)',
    warning: 'var(--warning-600)',
    danger: 'var(--danger-600)',
    info: 'var(--info-600)',
    neutral: 'var(--neutral-500)',
    active: 'var(--success-500)',
    away: 'var(--warning-500)',
    offline: 'var(--neutral-400)',
  };
  const getStatusColor = () => statusColors[activeStatus] || 'var(--neutral-500)';

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <div className="relative">
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: getStatusColor() }}
        />
        {pulse && (
          <div 
            className="absolute inset-0 w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: getStatusColor(), opacity: 0.75 }}
          />
        )}
      </div>
      {label && (
        <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
          {label}
        </span>
      )}
    </div>
  );
}
