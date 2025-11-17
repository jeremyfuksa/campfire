import React from 'react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

interface NotificationSwitchProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function NotificationSwitch({
  id,
  label,
  description,
  checked,
  onCheckedChange
}: NotificationSwitchProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Label htmlFor={id}>{label}</Label>
        <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
          {description}
        </p>
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={(state: boolean) => onCheckedChange(state)}
      />
    </div>
  );
}
