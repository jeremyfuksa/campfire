import React from 'react';
import { Info, CheckCircle2, AlertCircle, AlertTriangle, type LucideIcon } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface AlertBannerProps {
  variant?: 'default' | 'destructive';
  icon?: LucideIcon;
  message: string;
  className?: string;
}

export function AlertBanner({
  variant = 'default',
  icon: Icon = Info,
  message,
  className
}: AlertBannerProps) {
  return (
    <Alert variant={variant} className={`flex items-center gap-3 ${className || ''}`}>
      <Icon size={16} className="flex-shrink-0" />
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
      icon={CheckCircle2}
      message={message}
      className={className}
    />
  );
}

export function ErrorAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner
      variant="destructive"
      icon={AlertCircle}
      message={message}
      className={className}
    />
  );
}

export function WarningAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner
      variant="default"
      icon={AlertTriangle}
      message={message}
      className={className}
    />
  );
}

export function InfoAlert({ message, className }: { message: string; className?: string }) {
  return (
    <AlertBanner
      variant="default"
      icon={Info}
      message={message}
      className={className}
    />
  );
}
