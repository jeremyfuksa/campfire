import React from 'react';
import { Info, CheckCircle2, AlertCircle } from 'lucide-react';

interface ComponentDocumentationProps {
  title: string;
  description: string;
  rationale?: string;
  whenToUse?: string[];
  whenNotToUse?: string[];
  bestPractices?: string[];
  accessibility?: string[];
  children: React.ReactNode;
}

export function ComponentDocumentation({
  title,
  description,
  rationale,
  whenToUse,
  whenNotToUse,
  bestPractices,
  accessibility,
  children,
}: ComponentDocumentationProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="mb-2">{title}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>{description}</p>
      </div>

      {/* Component Examples - FIRST */}
      <div>
        {children}
      </div>

      {/* Documentation sections below */}
      <div className="space-y-6 pt-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
        {/* Rationale */}
        {rationale && (
          <div className="space-y-2">
            <h4 style={{ color: 'var(--text-primary)' }}>Why this component?</h4>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{rationale}</p>
          </div>
        )}

        {/* Usage Guidelines */}
        {(whenToUse || whenNotToUse) && (
          <div className="grid md:grid-cols-2 gap-6">
            {whenToUse && (
              <div className="space-y-2">
                <h4 style={{ color: 'var(--text-primary)' }}>When to use</h4>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {whenToUse.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {whenNotToUse && (
              <div className="space-y-2">
                <h4 style={{ color: 'var(--text-primary)' }}>When not to use</h4>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {whenNotToUse.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Best Practices */}
        {bestPractices && (
          <div className="space-y-2">
            <h4 style={{ color: 'var(--text-primary)' }}>Best Practices</h4>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {bestPractices.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Accessibility */}
        {accessibility && (
          <div className="space-y-2">
            <h4 style={{ color: 'var(--text-primary)' }}>Accessibility</h4>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {accessibility.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
