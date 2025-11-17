import React from 'react';
import { cn } from './utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'subtle' | 'bold' | 'muted';
  underline?: 'always' | 'hover' | 'none';
  external?: boolean;
}

export function Link({ 
  children, 
  variant = 'default',
  underline = 'hover',
  external = false,
  className,
  style,
  ...props 
}: LinkProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'subtle':
        return 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]';
      case 'bold':
        return 'text-[var(--interactive-default)] hover:text-[var(--interactive-hover)]';
      case 'muted':
        return 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]';
      default:
        return 'text-[var(--interactive-default)] hover:text-[var(--interactive-hover)]';
    }
  };

  const getFontWeightClass = () => {
    return variant === 'bold' ? 'font-medium' : '';
  };

  const getUnderlineClass = () => {
    switch (underline) {
      case 'always':
        return 'underline';
      case 'hover':
        return 'hover:underline';
      case 'none':
        return '';
    }
  };

  return (
    <a
      className={cn(
        'transition-colors cursor-pointer',
        getVariantClasses(),
        getFontWeightClass(),
        getUnderlineClass(),
        className
      )}
      style={style}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
      {external && (
        <i 
          className="fa-solid fa-arrow-up-right-from-square ml-1" 
          style={{ fontSize: '0.75em' }}
        ></i>
      )}
    </a>
  );
}
