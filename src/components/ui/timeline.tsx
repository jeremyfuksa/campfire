import * as React from "react";
import { cn } from "./utils";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
  status?: "default" | "success" | "error" | "warning";
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const statusColors = {
  default: "var(--neutral-400)",
  success: "var(--success)",
  error: "var(--destructive)",
  warning: "var(--warning)",
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-4">
          {/* Timeline line */}
          {index !== items.length - 1 && (
            <div
              className="absolute left-4 top-8 h-full w-0.5"
              style={{ backgroundColor: "var(--neutral-800)" }}
            />
          )}

          {/* Icon/dot */}
          <div className="relative z-10 flex-shrink-0">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full border-2"
              style={{
                borderColor: statusColors[item.status || "default"],
                backgroundColor: "var(--background)",
              }}
            >
              {item.icon || (
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: statusColors[item.status || "default"],
                  }}
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold">{item.title}</h3>
              {item.date && (
                <time
                  className="text-sm"
                  style={{ color: "var(--neutral-500)" }}
                >
                  {item.date}
                </time>
              )}
            </div>
            {item.description && (
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--neutral-400)" }}
              >
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
