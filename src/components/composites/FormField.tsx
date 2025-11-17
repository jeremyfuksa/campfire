import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

interface InputFieldProps extends BaseFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: string;
}

export function FormInputField({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  error, 
  helperText,
  required,
  value,
  onChange,
  icon
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span style={{ color: 'var(--danger-600)' }}> *</span>}
      </Label>
      <div className="relative">
        {icon && (
          <i 
            className={`fa-solid ${icon} absolute left-3 top-1/2 -translate-y-1/2`} 
            style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}
          ></i>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={!!error}
          className={icon ? 'pl-10' : ''}
        />
      </div>
      {error && (
        <p style={{ fontSize: '14px', color: 'var(--danger-600)' }}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
          {helperText}
        </p>
      )}
    </div>
  );
}

interface TextareaFieldProps extends BaseFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
}

export function FormTextareaField({
  id,
  label,
  placeholder,
  error,
  helperText,
  required,
  value,
  onChange,
  rows = 4
}: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span style={{ color: 'var(--danger-600)' }}> *</span>}
      </Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-invalid={!!error}
        rows={rows}
      />
      {error && (
        <p style={{ fontSize: '14px', color: 'var(--danger-600)' }}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
          {helperText}
        </p>
      )}
    </div>
  );
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends BaseFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
}

export function FormSelectField({
  id,
  label,
  placeholder,
  error,
  helperText,
  required,
  value,
  onChange,
  options
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span style={{ color: 'var(--danger-600)' }}> *</span>}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} aria-invalid={!!error}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p style={{ fontSize: '14px', color: 'var(--danger-600)' }}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
          {helperText}
        </p>
      )}
    </div>
  );
}
