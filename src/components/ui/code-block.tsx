import React, { useState } from 'react';
import { cn } from './utils';
import { Button } from './button';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = 'javascript',
  showLineNumbers = false,
  className 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div 
      className={cn('relative rounded-lg overflow-hidden', className)}
      style={{ backgroundColor: 'var(--neutral-900)' }}
    >
      <div 
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: 'var(--neutral-800)' }}
      >
        <span style={{ fontSize: '12px', color: 'var(--neutral-400)', fontFamily: 'JetBrains Mono, monospace' }}>
          {language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          style={{ color: 'var(--neutral-400)' }}
        >
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
          <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-4" style={{ margin: 0 }}>
          <code style={{ 
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'var(--neutral-100)'
          }}>
            {showLineNumbers ? (
              lines.map((line, index) => (
                <div key={index} className="flex">
                  <span 
                    className="select-none mr-4 text-right"
                    style={{ 
                      width: '2em',
                      color: 'var(--neutral-600)'
                    }}
                  >
                    {index + 1}
                  </span>
                  <span>{line}</span>
                </div>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
