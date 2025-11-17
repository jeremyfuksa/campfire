import React, { useState } from 'react';
import { Button } from './button';

interface CopyButtonProps {
  text: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showText?: boolean;
  className?: string;
}

export function CopyButton({ 
  text, 
  variant = 'ghost', 
  size = 'sm',
  showText = true,
  className 
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={className}
    >
      <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
      {showText && <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>}
    </Button>
  );
}
