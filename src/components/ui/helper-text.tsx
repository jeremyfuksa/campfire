import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from './utils';

type HelperTextVariant = 'default' | 'error' | 'success' | 'warning';

interface HelperTextProps {
  children: React.ReactNode;
  variant?: HelperTextVariant;
  icon?: React.ReactNode;
  className?: string;
}

const DEFAULT_VARIANT_ICON: Record<HelperTextVariant, React.ReactNode> = {
  default: null,
  error: <AlertCircle size={12} aria-hidden="true" />,
  success: <CheckCircle2 size={12} aria-hidden="true" />,
  warning: <AlertTriangle size={12} aria-hidden="true" />,
};

export function HelperText({
  children,
  variant = 'default',
  icon,
  className,
}: HelperTextProps) {
  const getVariantColor = () => {
    switch (variant) {
      case 'error':
        return 'var(--danger-600)';
      case 'success':
        return 'var(--success-600)';
      case 'warning':
        return 'var(--warning-700)';
      default:
        return 'var(--text-tertiary)';
    }
  };

  const displayIcon = icon ?? DEFAULT_VARIANT_ICON[variant];

  return (
    <p
      className={cn('flex items-start gap-1.5', className)}
      style={{ fontSize: '14px', color: getVariantColor() }}
    >
      {displayIcon && (
        <span
          className="shrink-0 mt-0.5 inline-flex items-center"
          data-testid={`helper-text-icon-${variant}`}
          aria-hidden="true"
        >
          {displayIcon}
        </span>
      )}
      <span>{children}</span>
    </p>
  );
}
