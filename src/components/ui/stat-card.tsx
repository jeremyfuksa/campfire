import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardContent } from './card';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
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
  className = '',
}: StatCardProps) {
  const TrendIcon = trend?.isPositive ? ArrowUp : ArrowDown;
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
                <TrendIcon
                  aria-hidden="true"
                  data-testid={trend.isPositive ? 'stat-card-trend-up' : 'stat-card-trend-down'}
                  size={12}
                  style={{
                    color: trend.isPositive ? 'var(--success-600)' : 'var(--danger-600)',
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: trend.isPositive ? 'var(--success-600)' : 'var(--danger-600)',
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
              data-testid="stat-card-icon"
              style={{ backgroundColor: iconBgColor, color: iconColor }}
            >
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
