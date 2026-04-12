import React from 'react';
import { X } from 'lucide-react';
import { cn } from './utils';

interface ChipProps {
  label?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  onRemove?: () => void;
  onClose?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function Chip({
  label,
  children,
  variant = 'default',
  onRemove,
  onClose,
  icon,
  className,
}: ChipProps) {
  const handleRemove = onClose || onRemove;
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--primary-100)',
          color: 'var(--primary-700)',
          borderColor: 'var(--primary-200)',
        };
      case 'success':
        return {
          backgroundColor: 'var(--success-500)',
          color: 'white',
          borderColor: 'var(--success-600)',
        };
      case 'warning':
        return {
          backgroundColor: 'var(--warning-500)',
          color: 'var(--neutral-900)',
          borderColor: 'var(--warning-600)',
        };
      case 'danger':
        return {
          backgroundColor: 'var(--danger-500)',
          color: 'white',
          borderColor: 'var(--danger-600)',
        };
      default:
        return {
          backgroundColor: 'var(--bg-muted)',
          color: 'var(--text-primary)',
          borderColor: 'var(--border-default)',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-sm',
        className,
      )}
      style={styles}
    >
      {icon && (
        <span className="inline-flex items-center" data-testid="chip-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children || label}</span>
      {handleRemove && (
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove chip"
          className="hover:opacity-70 transition-opacity"
          data-testid="chip-remove"
        >
          <X size={12} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
