import React from 'react';
import { cn } from './utils';

interface Step {
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn('flex items-center', className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div 
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all',
                  isCompleted && 'bg-primary border-primary',
                  isCurrent && 'border-primary',
                  !isCompleted && !isCurrent && 'border-border-default'
                )}
                style={{
                  backgroundColor: isCompleted ? 'var(--interactive-default)' : isCurrent ? 'transparent' : 'var(--bg-base)',
                  borderColor: isCompleted || isCurrent ? 'var(--interactive-default)' : 'var(--border-default)'
                }}
              >
                {isCompleted ? (
                  <i 
                    className="fa-solid fa-check" 
                    style={{ fontSize: '14px', color: 'white' }}
                  ></i>
                ) : (
                  <span 
                    style={{ 
                      fontSize: '14px',
                      fontWeight: isCurrent ? '600' : '400',
                      color: isCurrent ? 'var(--interactive-default)' : 'var(--text-tertiary)'
                    }}
                  >
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="mt-2 text-center">
                <p 
                  style={{ 
                    fontSize: '14px',
                    fontWeight: isCurrent ? '600' : '400',
                    color: isCurrent || isCompleted ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                    {step.description}
                  </p>
                )}
              </div>
            </div>
            {!isLast && (
              <div 
                className="flex-1 h-0.5 mx-4 -mt-12"
                style={{ 
                  backgroundColor: isCompleted ? 'var(--interactive-default)' : 'var(--border-default)'
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
