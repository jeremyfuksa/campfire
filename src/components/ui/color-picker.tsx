"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";
import { Button } from "./button";
import { cn } from "./utils";

export interface ColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  showInput?: boolean;
  presets?: string[];
}

export function ColorPicker({
  value = "#000000",
  onChange,
  disabled = false,
  className,
  showInput = true,
  presets = [
    "#000000", "#ffffff", "#ef4444", "#f97316", "#f59e0b", "#eab308",
    "#84cc16", "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
    "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef", "#ec4899",
  ],
}: ColorPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(value);
  const [inputValue, setInputValue] = React.useState(value);

  React.useEffect(() => {
    setColor(value);
    setInputValue(value);
  }, [value]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setInputValue(newColor);
    onChange?.(newColor);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    // Validate hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      setColor(val);
      onChange?.(val);
    }
  };

  const handleHSLChange = (h: number, s: number, l: number) => {
    const hex = hslToHex(h, s, l);
    handleColorChange(hex);
  };

  const { h, s, l } = hexToHSL(color);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("justify-start gap-2", className)}
          disabled={disabled}
        >
          <div
            className="h-5 w-5 rounded border"
            style={{ backgroundColor: color }}
          />
          <span className="flex-1 text-left font-mono text-sm">{color}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <div className="space-y-3">
          {/* Color Preview */}
          <div
            className="h-24 w-full rounded-lg border"
            style={{ backgroundColor: color }}
          />

          {/* HSL Sliders */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Hue</label>
            <input
              type="range"
              min="0"
              max="360"
              value={h}
              onChange={(e) => handleHSLChange(Number(e.target.value), s, l)}
              className="w-full"
              disabled={disabled}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Saturation</label>
            <input
              type="range"
              min="0"
              max="100"
              value={s}
              onChange={(e) => handleHSLChange(h, Number(e.target.value), l)}
              className="w-full"
              disabled={disabled}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Lightness</label>
            <input
              type="range"
              min="0"
              max="100"
              value={l}
              onChange={(e) => handleHSLChange(h, s, Number(e.target.value))}
              className="w-full"
              disabled={disabled}
            />
          </div>

          {/* Hex Input */}
          {showInput && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Hex</label>
              <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="#000000"
                disabled={disabled}
                className="font-mono"
              />
            </div>
          )}

          {/* Presets */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Presets</label>
            <div className="grid grid-cols-9 gap-1">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleColorChange(preset)}
                  disabled={disabled}
                  className={cn(
                    "h-8 w-8 rounded border transition-all",
                    "hover:scale-110",
                    color === preset && "ring-2 ring-primary ring-offset-2"
                  )}
                  style={{ backgroundColor: preset }}
                  aria-label={`Select color ${preset}`}
                />
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// Utility functions for color conversion
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return { h: 0, s: 0, l: 0 };

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToHex(h: number, s: number, l: number): string {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
