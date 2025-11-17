import React from 'react';
import { Card, CardContent } from './card';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: string;
  iconColor?: string;
  iconBgColor?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ 
  label, 
  value, 
  icon, 
  iconColor = 'var(--interactive-default)',
  iconBgColor = 'var(--bg-muted)',
  trend, 
  className = '' 
}: StatCardProps) {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              {label}
            </p>
            <p className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {value}
            </p>
            {trend && (
              <div className="flex items-center gap-1 mt-2">
                <i 
                  className={`fa-solid ${trend.isPositive ? 'fa-arrow-up' : 'fa-arrow-down'}`}
                  style={{ 
                    fontSize: '12px',
                    color: trend.isPositive ? 'var(--success-600)' : 'var(--danger-600)' 
                  }}
                ></i>
                <span 
                  style={{ 
                    fontSize: '14px',
                    color: trend.isPositive ? 'var(--success-600)' : 'var(--danger-600)'
                  }}
                >
                  {Math.abs(trend.value)}%
                </span>
              </div>
            )}
          </div>
          {icon && (
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-lg"
              style={{ backgroundColor: iconBgColor }}
            >
              <i 
                className={`fa-solid ${icon}`}
                style={{ fontSize: '20px', color: iconColor }}
              ></i>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
