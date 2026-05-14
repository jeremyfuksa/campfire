import * as React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "./utils";

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
      case "subtle":
        return "text-muted-foreground hover:text-foreground";
      case "bold":
        return "text-primary hover:text-primary/90";
      case "muted":
        return "text-(--text-tertiary) hover:text-muted-foreground";
      default:
        return "text-primary hover:text-primary/90";
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
      data-slot="link"
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
      {external && (
        <ExternalLink
          size={12}
          className="inline-block ml-1 align-[-0.15em]"
          data-testid="link-external-icon"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
