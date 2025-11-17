import React from 'react';
import { Alert, AlertDescription } from '../ui/alert';

interface AlertBannerProps {
  variant?: 'default' | 'destructive';
  icon?: string;
  message: string;
  className?: string;
}

export function AlertBanner({ 
  variant = 'default', 
  icon = 'fa-circle-info', 
  message,
  className 
}: AlertBannerProps) {
  return (
    <Alert variant={variant} className={`flex items-center gap-3 ${className || ''}`}>
      <i className={`fa-solid ${icon} flex-shrink-0`} style={{ fontSize: '16px' }}></i>
      <AlertDescription className="flex-1">
        {message}
      </AlertDescription>
    </Alert>
  );
}

// Preset variants for common use cases
export function SuccessAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner 
      variant="default" 
      icon="fa-circle-check" 
      message={message}
      className={className}
    />
  );
}

export function ErrorAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner 
      variant="destructive" 
      icon="fa-circle-exclamation" 
      message={message}
      className={className}
    />
  );
}

export function WarningAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner 
      variant="default" 
      icon="fa-triangle-exclamation" 
      message={message}
      className={className}
    />
  );
}

export function InfoAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner 
      variant="default" 
      icon="fa-circle-info" 
      message={message}
      className={className}
    />
  );
}
