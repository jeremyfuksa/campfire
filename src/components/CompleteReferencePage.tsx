import React, { useState } from 'react';
import type { CheckedState as CheckboxCheckedState } from '@radix-ui/react-checkbox';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { Separator } from './ui/separator';
import { Slider } from './ui/slider';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export function CompleteReferencePage() {
  const [checked, setChecked] = useState(false);
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [radioValue, setRadioValue] = useState('option-1');
  const [sliderValue, setSliderValue] = useState([50]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Apply theme to document
  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      {/* Hero Header */}
      <div className="p-12 text-center relative" style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-default)' }}>
        {/* Theme Toggle - Absolute positioned */}
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          style={{
            backgroundColor: 'var(--bg-muted)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-primary)',
          }}
        >
          <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} style={{ fontSize: '14px' }}></i>
          <span style={{ fontSize: '14px' }}>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%)' }}
          >
            <i className="fa-solid fa-fire" style={{ fontSize: '36px', color: 'white' }}></i>
          </div>
        </div>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Campfire Design System</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Foundation v1.0 — Complete Reference Guide
        </p>
        <div className="flex justify-center gap-3">
          <Badge variant="secondary">React + Tailwind CSS v4</Badge>
          <Badge variant="secondary">shadcn/ui + Radix</Badge>
          <Badge variant="secondary">8px Grid System</Badge>
          <Badge variant="secondary">Manrope + JetBrains Mono</Badge>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 space-y-24">
        {/* ========== DESIGN TOKENS ========== */}
        <section id="design-tokens">
          <div className="mb-12">
            <h2 className="mb-2" style={{ fontSize: '40px', borderBottom: '3px solid var(--primary-500)', paddingBottom: '12px', display: 'inline-block' }}>
              Design Tokens
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              The foundational values that power the entire design system
            </p>
          </div>

          {/* Color Palettes - Ember Flavor */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Signature Colors: Ember (Light Mode)</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Brighter, warmer tones optimized for light mode interfaces
            </p>
            <div className="grid grid-cols-7 gap-4">
              {[
                { name: 'Clay', color: '#e5beb0', desc: 'Dusty Rose' },
                { name: 'Flamingo', color: '#f08080', desc: 'Earthy Red' },
                { name: 'Terracotta', color: '#db9073', desc: 'Warm Clay' },
                { name: 'Ember', color: '#f5a855', desc: 'Deep Orange' },
                { name: 'Golden Amber', color: '#ffc05c', desc: 'Warm Gold' },
                { name: 'Hay', color: '#f2d88f', desc: 'Muted Yellow' },
                { name: 'Sage', color: '#a8c76f', desc: 'Natural Green' },
                { name: 'Moss', color: '#88a055', desc: 'Deep Green' },
                { name: 'Pine', color: '#75acaf', desc: 'Earthy Teal' },
                { name: 'Cello', color: '#7da0c0', desc: 'Slate Blue' },
                { name: 'Blue Calx', color: '#bccfe5', desc: 'Muted Blue' },
                { name: 'Dusk', color: '#b8a0cc', desc: 'Earthy Lavender' },
                { name: 'Mauve Earth', color: '#c898ad', desc: 'Dusty Mauve' },
                { name: 'Stone', color: '#a0a8b5', desc: 'Warm Gray' },
              ].map((swatch) => (
                <div key={swatch.name} className="flex flex-col">
                  <div className="w-full aspect-square rounded-lg mb-3 border" style={{ backgroundColor: swatch.color, borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div style={{ fontSize: '14px', marginBottom: '2px' }}>{swatch.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>{swatch.desc}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{swatch.color}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palettes - Ash Flavor */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Signature Colors: Ash (Dark Mode)</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Deeper, muted tones optimized for dark mode interfaces
            </p>
            <div className="grid grid-cols-7 gap-4">
              {[
                { name: 'Clay', color: '#c89c8d', desc: 'Dusty Rose' },
                { name: 'Flamingo', color: '#dc3a38', desc: 'Earthy Red' },
                { name: 'Terracotta', color: '#a8654f', desc: 'Warm Clay' },
                { name: 'Ember', color: '#d97706', desc: 'Deep Orange' },
                { name: 'Golden Amber', color: '#ef991f', desc: 'Warm Gold' },
                { name: 'Hay', color: '#d4b86a', desc: 'Muted Yellow' },
                { name: 'Sage', color: '#739038', desc: 'Natural Green' },
                { name: 'Moss', color: '#5a6f2d', desc: 'Deep Green' },
                { name: 'Pine', color: '#4a7c7e', desc: 'Earthy Teal' },
                { name: 'Cello', color: '#4c627d', desc: 'Slate Blue' },
                { name: 'Blue Calx', color: '#a3b2c9', desc: 'Muted Blue' },
                { name: 'Dusk', color: '#8b7a9f', desc: 'Earthy Lavender' },
                { name: 'Mauve Earth', color: '#9b6b7f', desc: 'Dusty Mauve' },
                { name: 'Stone', color: '#747b8a', desc: 'Warm Gray' },
              ].map((swatch) => (
                <div key={swatch.name} className="flex flex-col">
                  <div className="w-full aspect-square rounded-lg mb-3 border" style={{ backgroundColor: swatch.color, borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div style={{ fontSize: '14px', marginBottom: '2px' }}>{swatch.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>{swatch.desc}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{swatch.color}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Color Scale */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Primary Scale: Cello</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Slate Blue-Gray — 11-step scale for primary interface elements
            </p>
            <div className="grid grid-cols-11 gap-3">
              {[
                { name: '50', value: '#f5f7f9' },
                { name: '100', value: '#ebeef2' },
                { name: '200', value: '#d2dae3' },
                { name: '300', value: '#acbbcc' },
                { name: '400', value: '#8098b0' },
                { name: '500', value: '#607a97' },
                { name: '600', value: '#4c627d' },
                { name: '700', value: '#3e4f66' },
                { name: '800', value: '#364456' },
                { name: '900', value: '#303a49' },
                { name: '950', value: '#1f2530' },
              ].map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className="h-24 rounded-lg border" style={{ backgroundColor: color.value, borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div style={{ fontSize: '12px' }}>primary-{color.name}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Color Scale */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Secondary Scale: Terracotta</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Earthy Red-Brown — 11-step scale for secondary interface elements
            </p>
            <div className="grid grid-cols-11 gap-3">
              {[
                { name: '50', value: '#faf6f5' },
                { name: '100', value: '#f5ebe8' },
                { name: '200', value: '#ead8d2' },
                { name: '300', value: '#dbbdb3' },
                { name: '400', value: '#c9998a' },
                { name: '500', value: '#b87b6a' },
                { name: '600', value: '#a8654f' },
                { name: '700', value: '#8d5443' },
                { name: '800', value: '#75473a' },
                { name: '900', value: '#623e34' },
                { name: '950', value: '#341f19' },
              ].map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className="h-24 rounded-lg border" style={{ backgroundColor: color.value, borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div style={{ fontSize: '12px' }}>secondary-{color.name}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Color Scale */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Neutral Scale: Black Rock</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Deep Earth Tones — 11-step scale for neutral backgrounds and text
            </p>
            <div className="grid grid-cols-11 gap-3">
              {[
                { name: '50', value: '#f7f8f9' },
                { name: '100', value: '#edeef1' },
                { name: '200', value: '#d8dbe0' },
                { name: '300', value: '#b8bcc5' },
                { name: '400', value: '#9299a5' },
                { name: '500', value: '#747b8a' },
                { name: '600', value: '#5e6371' },
                { name: '700', value: '#4d515c' },
                { name: '800', value: '#42454e' },
                { name: '900', value: '#2b303b' },
                { name: '950', value: '#1c1f26' },
              ].map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className="h-24 rounded-lg border" style={{ backgroundColor: color.value, borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div style={{ fontSize: '12px' }}>neutral-{color.name}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Semantic Colors</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Colors with specific meanings for feedback and status
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px' }}>Success (Sage)</h4>
                <div className="flex gap-3">
                  {[
                    { name: '500', value: '#8fb14b' },
                    { name: '600', value: '#739038' },
                    { name: '700', value: '#5a6f2d' },
                  ].map((color) => (
                    <div key={color.name} className="flex-1 space-y-2">
                      <div className="h-20 rounded-lg" style={{ backgroundColor: color.value }} />
                      <div style={{ fontSize: '12px' }}>success-{color.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px' }}>Warning (Golden Amber)</h4>
                <div className="flex gap-3">
                  {[
                    { name: '500', value: '#f9c574' },
                    { name: '600', value: '#ef991f' },
                    { name: '700', value: '#d97706' },
                  ].map((color) => (
                    <div key={color.name} className="flex-1 space-y-2">
                      <div className="h-20 rounded-lg" style={{ backgroundColor: color.value }} />
                      <div style={{ fontSize: '12px' }}>warning-{color.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px' }}>Danger (Flamingo)</h4>
                <div className="flex gap-3">
                  {[
                    { name: '500', value: '#e75351' },
                    { name: '600', value: '#dc3a38' },
                    { name: '700', value: '#be2b29' },
                  ].map((color) => (
                    <div key={color.name} className="flex-1 space-y-2">
                      <div className="h-20 rounded-lg" style={{ backgroundColor: color.value }} />
                      <div style={{ fontSize: '12px' }}>danger-{color.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px' }}>Info (Blue Calx)</h4>
                <div className="flex gap-3">
                  {[
                    { name: '500', value: '#b8c5d9' },
                    { name: '600', value: '#a3b2c9' },
                    { name: '700', value: '#8899b3' },
                  ].map((color) => (
                    <div key={color.name} className="flex-1 space-y-2">
                      <div className="h-20 rounded-lg" style={{ backgroundColor: color.value }} />
                      <div style={{ fontSize: '12px' }}>info-{color.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Typography</h3>
            
            <div className="mb-12">
              <h4 className="mb-4" style={{ fontSize: '20px' }}>Font Families</h4>
              <div className="space-y-4">
                <div className="p-6 rounded-lg" style={{ border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-subtle)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>Primary (Manrope)</div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '28px' }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                  </div>
                </div>
                <div className="p-6 rounded-lg" style={{ border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-subtle)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>Monospace (JetBrains Mono)</div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '28px' }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '16px', marginTop: '8px', color: 'var(--text-secondary)' }}>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="mb-4" style={{ fontSize: '20px' }}>Text Scale</h4>
              <div className="space-y-4">
                {[
                  { name: 'xs', size: '0.75rem', px: '12px' },
                  { name: 'sm', size: '0.875rem', px: '14px' },
                  { name: 'base', size: '1rem', px: '16px' },
                  { name: 'lg', size: '1.125rem', px: '18px' },
                  { name: 'xl', size: '1.25rem', px: '20px' },
                  { name: '2xl', size: '1.5rem', px: '24px' },
                  { name: '3xl', size: '1.875rem', px: '30px' },
                  { name: '4xl', size: '2.25rem', px: '36px' },
                  { name: '5xl', size: '3rem', px: '48px' },
                ].map((size) => (
                  <div key={size.name} className="flex items-baseline gap-6">
                    <div style={{ width: '120px', fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                      text-{size.name} ({size.px})
                    </div>
                    <div style={{ fontSize: size.size }}>
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spacing Scale */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Spacing Scale (8px Grid)</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              All spacing follows an 8px base grid for visual consistency
            </p>
            <div className="space-y-3">
              {[
                { name: '0', value: '0', px: '0px' },
                { name: '1', value: '0.25rem', px: '4px' },
                { name: '2', value: '0.5rem', px: '8px' },
                { name: '3', value: '0.75rem', px: '12px' },
                { name: '4', value: '1rem', px: '16px' },
                { name: '5', value: '1.25rem', px: '20px' },
                { name: '6', value: '1.5rem', px: '24px' },
                { name: '8', value: '2rem', px: '32px' },
                { name: '10', value: '2.5rem', px: '40px' },
                { name: '12', value: '3rem', px: '48px' },
                { name: '16', value: '4rem', px: '64px' },
                { name: '20', value: '5rem', px: '80px' },
                { name: '24', value: '6rem', px: '96px' },
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-4">
                  <div style={{ width: '80px', fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                    {space.name}
                  </div>
                  <div 
                    className="h-10 rounded"
                    style={{ 
                      width: space.value, 
                      backgroundColor: 'var(--primary-500)',
                      minWidth: '2px'
                    }}
                  />
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {space.px}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadows */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Box Shadows</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
                { name: 'base', value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
                { name: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
                { name: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
                { name: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
                { name: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
              ].map((shadow) => (
                <div key={shadow.name} className="space-y-3">
                  <div 
                    className="h-32 rounded-lg flex items-center justify-center"
                    style={{ 
                      boxShadow: shadow.value,
                      backgroundColor: 'var(--bg-base)',
                      border: '1px solid var(--border-default)'
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>shadow-{shadow.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Border Radius</h3>
            <div className="grid grid-cols-4 gap-6">
              {[
                { name: 'none', value: '0' },
                { name: 'sm', value: '0.25rem' },
                { name: 'base', value: '0.375rem' },
                { name: 'md', value: '0.5rem' },
                { name: 'lg', value: '0.75rem' },
                { name: 'xl', value: '1rem' },
                { name: '2xl', value: '1.5rem' },
                { name: 'full', value: '9999px' },
              ].map((radius) => (
                <div key={radius.name} className="space-y-3">
                  <div 
                    className="h-28 flex items-center justify-center"
                    style={{ 
                      borderRadius: radius.value,
                      backgroundColor: 'var(--bg-muted)',
                      border: '2px solid var(--border-default)'
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>rounded-{radius.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transitions */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Transitions</h3>
            
            <div className="space-y-8">
              {/* Duration */}
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Duration</h4>
                <div className="space-y-4">
                  {[
                    { name: 'fast', duration: '150ms' },
                    { name: 'base', duration: '200ms' },
                    { name: 'medium', duration: '300ms' },
                    { name: 'slow', duration: '500ms' },
                  ].map((transition) => (
                    <div key={transition.name} className="flex items-center gap-4">
                      <div style={{ width: '100px', fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                        {transition.name}
                      </div>
                      <button 
                        className="px-4 py-2 rounded-lg transition-all hover:scale-105"
                        style={{ 
                          backgroundColor: 'var(--primary-600)',
                          color: 'white',
                          transitionDuration: transition.duration
                        }}
                      >
                        Hover me ({transition.duration})
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easing Functions */}
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Easing Functions</h4>
                <div className="space-y-4">
                  {[
                    { name: 'linear', easing: 'linear' },
                    { name: 'ease-in', easing: 'ease-in' },
                    { name: 'ease-out', easing: 'ease-out' },
                    { name: 'ease-in-out', easing: 'ease-in-out' },
                  ].map((easing) => (
                    <div key={easing.name} className="flex items-center gap-4">
                      <div style={{ width: '100px', fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                        {easing.name}
                      </div>
                      <button 
                        className="px-4 py-2 rounded-lg transition-all hover:translate-x-4"
                        style={{ 
                          backgroundColor: 'var(--secondary-600)',
                          color: 'white',
                          transitionTimingFunction: easing.easing,
                          transitionDuration: '300ms'
                        }}
                      >
                        Hover me
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== COMPONENTS ========== */}
        <section id="components">
          <div className="mb-12">
            <h2 className="mb-2" style={{ fontSize: '40px', borderBottom: '3px solid var(--secondary-500)', paddingBottom: '12px', display: 'inline-block' }}>
              Components
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              Foundation phase — 25 components organized by category
            </p>
          </div>

          {/* Button */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Button</h3>
            <div className="space-y-8">
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Variants</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Sizes</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>States</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Loading
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>With Icons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>
                    Search
                  </Button>
                  <Button variant="outline">
                    Download
                    <i className="fa-solid fa-download ml-2"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Input</h3>
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="input-default">Default Input</Label>
                <Input id="input-default" placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-disabled">Disabled</Label>
                <Input id="input-disabled" placeholder="Disabled" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="input-icon">With Icon</Label>
                <div className="relative">
                  <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)' }}></i>
                  <Input id="input-icon" placeholder="Search..." className="pl-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2">Basic Card</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Simple card with default styling.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h4>Card with Header</h4>
                </CardHeader>
                <CardContent>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Card with distinct header section.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h4>Complete Card</h4>
                </CardHeader>
                <CardContent>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Card with header, content, and footer.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Action</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Badge</h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge>Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Semantic Colors</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge style={{ backgroundColor: 'var(--success-600)', color: 'white' }}>Success</Badge>
                  <Badge style={{ backgroundColor: 'var(--warning-600)', color: 'white' }}>Warning</Badge>
                  <Badge style={{ backgroundColor: 'var(--danger-600)', color: 'white' }}>Danger</Badge>
                  <Badge style={{ backgroundColor: 'var(--info-600)', color: 'white' }}>Info</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Checkbox</h3>
            <div className="space-y-3 max-w-md">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="check-1"
                  checked={checked}
                  onCheckedChange={(state: CheckboxCheckedState) => setChecked(state === true)}
                />
                <Label htmlFor="check-1">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="check-2" />
                <Label htmlFor="check-2">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="check-3" disabled />
                <Label htmlFor="check-3">Disabled checkbox</Label>
              </div>
            </div>
          </div>

          {/* Radio */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Radio Group</h3>
            <RadioGroup value={radioValue} onValueChange={setRadioValue} className="max-w-md">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="radio-1" />
                <Label htmlFor="radio-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="radio-2" />
                <Label htmlFor="radio-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="radio-3" />
                <Label htmlFor="radio-3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Switch */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Switch</h3>
            <div className="space-y-6 max-w-md">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="switch-1">Notifications</Label>
                  <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                    Receive push notifications
                  </p>
                </div>
                <Switch
                  id="switch-1"
                  checked={switchEnabled}
                  onCheckedChange={(state: boolean) => setSwitchEnabled(state)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="switch-2">Airplane Mode</Label>
                  <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                    Disable all connections
                  </p>
                </div>
                <Switch id="switch-2" />
              </div>
              <div className="flex items-center justify-between opacity-50">
                <div>
                  <Label htmlFor="switch-3">Disabled</Label>
                  <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                    This switch is disabled
                  </p>
                </div>
                <Switch id="switch-3" disabled />
              </div>
            </div>
          </div>

          {/* Alert */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Alert</h3>
            <div className="space-y-4 max-w-2xl">
              <Alert style={{ backgroundColor: 'var(--primary-700)', borderColor: 'var(--primary-800)', color: 'white' }} className="flex items-center gap-3">
                <i className="fa-solid fa-circle-info flex-shrink-0" style={{ fontSize: '16px' }}></i>
                <AlertDescription className="flex-1" style={{ color: 'white' }}>
                  This is an informational message.
                </AlertDescription>
              </Alert>
              <Alert style={{ backgroundColor: 'var(--success-700)', borderColor: 'var(--success-700)', color: 'white' }} className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check flex-shrink-0" style={{ fontSize: '16px' }}></i>
                <AlertDescription className="flex-1" style={{ color: 'white' }}>
                  Your changes have been saved successfully!
                </AlertDescription>
              </Alert>
              <Alert style={{ backgroundColor: 'var(--warning-700)', borderColor: 'var(--warning-700)', color: 'white' }} className="flex items-center gap-3">
                <i className="fa-solid fa-triangle-exclamation flex-shrink-0" style={{ fontSize: '16px' }}></i>
                <AlertDescription className="flex-1" style={{ color: 'white' }}>
                  Warning: This action may have unintended consequences.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive" className="flex items-center gap-3">
                <i className="fa-solid fa-circle-exclamation flex-shrink-0" style={{ fontSize: '16px' }}></i>
                <AlertDescription className="flex-1">
                  Error: Unable to complete the request.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Select */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Select</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label>Choose an option</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Breadcrumb</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Tooltip */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Tooltip</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Label */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Label</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="label-example">Email address</Label>
                <Input id="label-example" type="email" placeholder="you@example.com" />
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Separator</h3>
            <div className="space-y-6 max-w-md">
              <div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Content above</p>
                <Separator className="my-4" />
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Content below</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Progress</h3>
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label>25% Complete</Label>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <Label>50% Complete</Label>
                <Progress value={50} />
              </div>
              <div className="space-y-2">
                <Label>75% Complete</Label>
                <Progress value={75} />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Slider</h3>
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label>Value: {sliderValue[0]}</Label>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Textarea</h3>
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="textarea-default">Default Textarea</Label>
                <Textarea id="textarea-default" placeholder="Enter your message..." rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="textarea-disabled">Disabled</Label>
                <Textarea id="textarea-disabled" placeholder="This is disabled" disabled rows={4} />
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Avatar</h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Sizes</h4>
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>XL</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>With Fallback</h4>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Tabs</h3>
            <Tabs defaultValue="tab1" className="max-w-2xl">
              <TabsList>
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Settings</TabsTrigger>
                <TabsTrigger value="tab3">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Manage your account settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab2" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Configure your application preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Enable notifications</Label>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <Label>Dark mode</Label>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab3" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      Configure your notification preferences here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Table */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Table</h3>
            <div className="rounded-lg border" style={{ borderColor: 'var(--border-default)' }}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Badge style={{ backgroundColor: 'var(--success-600)', color: 'white' }}>Active</Badge>
                    </TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>
                      <Badge style={{ backgroundColor: 'var(--success-600)', color: 'white' }}>Active</Badge>
                    </TableCell>
                    <TableCell>Editor</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mike Johnson</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Inactive</Badge>
                    </TableCell>
                    <TableCell>Viewer</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Accordion */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Accordion</h3>
            <Accordion type="single" collapsible className="max-w-2xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Campfire Design System?</AccordionTrigger>
                <AccordionContent>
                  Campfire is a warm, earthy design system built with React, Tailwind CSS v4, shadcn/ui, and Radix UI. It provides a comprehensive set of design tokens, components, and patterns for building modern web applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  Start by exploring the Design Tokens section to understand the color palettes, typography, and spacing. Then browse the Components section to see all available UI elements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes! All components are built on top of Radix UI primitives, which provide excellent accessibility support out of the box, including keyboard navigation, focus management, and ARIA attributes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Dialog */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Dialog</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to proceed? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Please review your selection before continuing.
                  </p>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Sheet */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Sheet</h3>
            <div className="flex gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="sheet-name">Name</Label>
                      <Input id="sheet-name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sheet-email">Email</Label>
                      <Input id="sheet-email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">Cancel</Button>
                    <Button className="flex-1">Save Changes</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Popover */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Popover</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Quick Settings</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      Adjust your preferences quickly from here.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Notifications</Label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Auto-save</Label>
                      <Switch />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Dropdown Menu */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Dropdown Menu</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Open Menu
                  <i className="fa-solid fa-chevron-down ml-2" style={{ fontSize: '12px' }}></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <i className="fa-solid fa-user mr-2" style={{ fontSize: '14px' }}></i>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="fa-solid fa-gear mr-2" style={{ fontSize: '14px' }}></i>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="fa-solid fa-keyboard mr-2" style={{ fontSize: '14px' }}></i>
                  Keyboard Shortcuts
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <i className="fa-solid fa-right-from-bracket mr-2" style={{ fontSize: '14px' }}></i>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Hover Card */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Hover Card</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@campfire</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>CF</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4>Campfire Design System</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      A warm, earthy design system built for modern web applications.
                    </p>
                    <div className="flex gap-2 pt-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Tailwind</Badge>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* ========== GRIDS & LAYOUTS ========== */}
        <section id="grids-layouts">
          <div className="mb-12">
            <h2 className="mb-2" style={{ fontSize: '40px', borderBottom: '3px solid var(--primary-500)', paddingBottom: '12px', display: 'inline-block' }}>
              Grids & Layouts
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              Flexible grid systems and layout patterns
            </p>
          </div>

          {/* 12-Column Grid */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>12-Column Grid</h3>
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="col-span-1 h-16 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--primary-500)', color: 'white' }}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Responsive Grid</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h4 className="mb-2">Item {i + 1}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      Responsive grid item
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Flexbox Layouts */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Flexbox Layouts</h3>
            <div className="space-y-8">
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Horizontal Stack</h4>
                <div className="flex gap-4">
                  <div className="flex-1 h-24 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--primary-200)' }}>
                    Flex 1
                  </div>
                  <div className="flex-1 h-24 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--primary-300)' }}>
                    Flex 1
                  </div>
                  <div className="flex-1 h-24 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--primary-400)' }}>
                    Flex 1
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Vertical Stack</h4>
                <div className="flex flex-col gap-4 max-w-md">
                  <div className="h-16 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-200)' }}>
                    Item 1
                  </div>
                  <div className="h-16 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-300)' }}>
                    Item 2
                  </div>
                  <div className="h-16 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-400)' }}>
                    Item 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container Widths */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Container Widths</h3>
            <div className="space-y-4">
              <div className="max-w-sm mx-auto p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
                max-w-sm (384px)
              </div>
              <div className="max-w-md mx-auto p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
                max-w-md (448px)
              </div>
              <div className="max-w-lg mx-auto p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
                max-w-lg (512px)
              </div>
              <div className="max-w-xl mx-auto p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
                max-w-xl (576px)
              </div>
              <div className="max-w-2xl mx-auto p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
                max-w-2xl (672px)
              </div>
              <div className="max-w-4xl mx-auto p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
                max-w-4xl (896px)
              </div>
            </div>
          </div>
        </section>

        {/* ========== PATTERNS & EXAMPLES ========== */}
        <section id="patterns">
          <div className="mb-12">
            <h2 className="mb-2" style={{ fontSize: '40px', borderBottom: '3px solid var(--secondary-500)', paddingBottom: '12px', display: 'inline-block' }}>
              Patterns & Examples
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              Common UI patterns built with Campfire components
            </p>
          </div>

          {/* Form Example */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Form Pattern</h3>
            <Card className="max-w-md">
              <CardHeader>
                <h4>Sign Up</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Create your account
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="signup-terms" />
                  <Label htmlFor="signup-terms" style={{ fontSize: '14px' }}>
                    I agree to the terms and conditions
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" className="flex-1">Cancel</Button>
                <Button className="flex-1">Sign Up</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Settings Panel</h3>
            <Card className="max-w-md">
              <CardHeader>
                <h4>Preferences</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Manage your account settings
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                      Receive email updates
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                      Use dark theme
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Changes</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Dashboard Card Grid */}
          <div className="mb-16">
            <h3 className="mb-6" style={{ fontSize: '28px' }}>Dashboard Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Users', value: '12,345', icon: 'fa-users', change: '+12%' },
                { label: 'Revenue', value: '$45,678', icon: 'fa-dollar-sign', change: '+8%' },
                { label: 'Active Sessions', value: '234', icon: 'fa-chart-line', change: '+23%' },
                { label: 'Conversion Rate', value: '3.2%', icon: 'fa-percentage', change: '-2%' },
              ].map((metric, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                        <i className={`fa-solid ${metric.icon}`} style={{ color: 'var(--primary-600)' }}></i>
                      </div>
                      <Badge variant={metric.change.startsWith('+') ? 'secondary' : 'destructive'}>
                        {metric.change}
                      </Badge>
                    </div>
                    <div style={{ fontSize: '28px', marginBottom: '4px' }}>{metric.value}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-16" style={{ borderTop: '2px solid var(--border-default)' }}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%)' }}>
              <i className="fa-solid fa-fire" style={{ fontSize: '24px', color: 'white' }}></i>
            </div>
          </div>
          <h3 className="mb-2">Campfire Design System</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', marginBottom: '16px' }}>
            Foundation v1.0 — Built with React, Tailwind CSS v4, shadcn/ui, and Radix UI
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
            A warm, earthy design system — the grounded complement to Catppuccin
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <Badge variant="outline">Manrope</Badge>
            <Badge variant="outline">JetBrains Mono</Badge>
            <Badge variant="outline">8px Grid</Badge>
            <Badge variant="outline">14 Signature Colors</Badge>
          </div>
        </section>
      </div>
    </div>
  );
}
