import React, { useState } from 'react';
import { PageWithSidebar } from './PageWithSidebar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

// Clipboard helper with navigator support + fallback
const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.error('Failed navigator copy:', err);
  }

  try {
    if (typeof document === 'undefined') return false;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (err) {
    console.error('Failed fallback copy:', err);
    return false;
  }
};

export function DesignTokensPage() {
  const [activeSection, setActiveSection] = useState('colors');

  const sidebarGroups = [
    {
      items: [
        { id: 'colors', label: 'Colors', icon: 'fa-solid fa-palette' },
        { id: 'typography', label: 'Typography', icon: 'fa-solid fa-font' },
        { id: 'spacing', label: 'Spacing & Sizing', icon: 'fa-solid fa-ruler' },
        { id: 'shadows', label: 'Shadows & Effects', icon: 'fa-solid fa-cube' },
        { id: 'borders', label: 'Borders & Radii', icon: 'fa-solid fa-square' },
        { id: 'transitions', label: 'Transitions', icon: 'fa-solid fa-wand-magic-sparkles' },
      ]
    }
  ];

  return (
    <PageWithSidebar
      title="Design Tokens"
      description="Foundation primitives"
      sidebarGroups={sidebarGroups}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      gradientColor="var(--primary-500)"
    >
      {activeSection === 'colors' && <ColorsSection />}
      {activeSection === 'typography' && <TypographySection />}
      {activeSection === 'spacing' && <SpacingSection />}
      {activeSection === 'shadows' && <ShadowsSection />}
      {activeSection === 'borders' && <BordersSection />}
      {activeSection === 'transitions' && <TransitionsSection />}
    </PageWithSidebar>
  );
}

function ColorsSection() {
  const [flavor, setFlavor] = useState<'ember' | 'ash'>('ember');
  
  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      toast.success(`Copied ${text} to clipboard!`);
    } else {
      toast.error('Failed to copy to clipboard.');
    }
  };

  // Signature colors for both flavors
  const signatureColors = {
    ember: [
      { name: 'Clay', color: '#e5beb0', description: 'Dusty Rose' },
      { name: 'Flamingo', color: '#f08080', description: 'Earthy Red' },
      { name: 'Terracotta', color: '#db9073', description: 'Warm Clay' },
      { name: 'Ember', color: '#f5a855', description: 'Deep Orange' },
      { name: 'Golden Amber', color: '#ffc05c', description: 'Warm Gold' },
      { name: 'Hay', color: '#f2d88f', description: 'Muted Yellow' },
      { name: 'Sage', color: '#a8c76f', description: 'Natural Green' },
      { name: 'Moss', color: '#88a055', description: 'Deep Green' },
      { name: 'Pine', color: '#75acaf', description: 'Earthy Teal' },
      { name: 'Cello', color: '#7da0c0', description: 'Slate Blue' },
      { name: 'Blue Calx', color: '#bccfe5', description: 'Muted Blue' },
      { name: 'Dusk', color: '#b8a0cc', description: 'Earthy Lavender' },
      { name: 'Mauve Earth', color: '#c898ad', description: 'Dusty Mauve' },
      { name: 'Stone', color: '#a0a8b5', description: 'Warm Gray' },
    ],
    ash: [
      { name: 'Clay', color: '#c89c8d', description: 'Dusty Rose' },
      { name: 'Flamingo', color: '#dc3a38', description: 'Earthy Red' },
      { name: 'Terracotta', color: '#a8654f', description: 'Warm Clay' },
      { name: 'Ember', color: '#d97706', description: 'Deep Orange' },
      { name: 'Golden Amber', color: '#ef991f', description: 'Warm Gold' },
      { name: 'Hay', color: '#d4b86a', description: 'Muted Yellow' },
      { name: 'Sage', color: '#739038', description: 'Natural Green' },
      { name: 'Moss', color: '#5a6f2d', description: 'Deep Green' },
      { name: 'Pine', color: '#4a7c7e', description: 'Earthy Teal' },
      { name: 'Cello', color: '#4c627d', description: 'Slate Blue' },
      { name: 'Blue Calx', color: '#a3b2c9', description: 'Muted Blue' },
      { name: 'Dusk', color: '#8b7a9f', description: 'Earthy Lavender' },
      { name: 'Mauve Earth', color: '#9b6b7f', description: 'Dusty Mauve' },
      { name: 'Stone', color: '#747b8a', description: 'Warm Gray' },
    ]
  };

  const allColors = [
    {
      category: 'Cello',
      description: 'Slate Blue-Gray • Primary',
      icon: 'fa-solid fa-water',
      colors: [
        { name: 'primary-50', value: '#f5f7f9', var: '--primary-50' },
        { name: 'primary-100', value: '#ebeef2', var: '--primary-100' },
        { name: 'primary-200', value: '#d2dae3', var: '--primary-200' },
        { name: 'primary-300', value: '#acbbcc', var: '--primary-300' },
        { name: 'primary-400', value: '#8098b0', var: '--primary-400' },
        { name: 'primary-500', value: '#607a97', var: '--primary-500' },
        { name: 'primary-600', value: '#4c627d', var: '--primary-600', main: true },
        { name: 'primary-700', value: '#3e4f66', var: '--primary-700' },
        { name: 'primary-800', value: '#364456', var: '--primary-800' },
        { name: 'primary-900', value: '#303a49', var: '--primary-900' },
        { name: 'primary-950', value: '#1f2530', var: '--primary-950' },
      ]
    },
    {
      category: 'Terracotta',
      description: 'Earthy Red-Brown • Secondary',
      icon: 'fa-solid fa-fire-flame-curved',
      colors: [
        { name: 'secondary-50', value: '#faf6f5', var: '--secondary-50' },
        { name: 'secondary-100', value: '#f5ebe8', var: '--secondary-100' },
        { name: 'secondary-200', value: '#ead8d2', var: '--secondary-200' },
        { name: 'secondary-300', value: '#dbbdb3', var: '--secondary-300' },
        { name: 'secondary-400', value: '#c9998a', var: '--secondary-400' },
        { name: 'secondary-500', value: '#b87b6a', var: '--secondary-500' },
        { name: 'secondary-600', value: '#a8654f', var: '--secondary-600', main: true },
        { name: 'secondary-700', value: '#8d5443', var: '--secondary-700' },
        { name: 'secondary-800', value: '#75473a', var: '--secondary-800' },
        { name: 'secondary-900', value: '#623e34', var: '--secondary-900' },
        { name: 'secondary-950', value: '#341f19', var: '--secondary-950' },
      ]
    },
    {
      category: 'Black Rock',
      description: 'Deep Earth Tones • Neutral',
      icon: 'fa-solid fa-mountain',
      colors: [
        { name: 'neutral-50', value: '#f7f8f9', var: '--neutral-50' },
        { name: 'neutral-100', value: '#edeef1', var: '--neutral-100' },
        { name: 'neutral-200', value: '#d8dbe0', var: '--neutral-200' },
        { name: 'neutral-300', value: '#b8bcc5', var: '--neutral-300' },
        { name: 'neutral-400', value: '#9299a5', var: '--neutral-400' },
        { name: 'neutral-500', value: '#747b8a', var: '--neutral-500' },
        { name: 'neutral-600', value: '#5e6371', var: '--neutral-600' },
        { name: 'neutral-700', value: '#4d515c', var: '--neutral-700' },
        { name: 'neutral-800', value: '#42454e', var: '--neutral-800' },
        { name: 'neutral-900', value: '#2b303b', var: '--neutral-900' },
        { name: 'neutral-950', value: '#1c1f26', var: '--neutral-950' },
      ]
    }
  ];

  const semanticColors = [
    { 
      category: 'Sage', 
      description: 'Natural Green • Success',
      icon: 'fa-solid fa-leaf',
      colors: [
        { name: 'success-500', value: '#8fb14b', var: '--success-500' },
        { name: 'success-600', value: '#739038', var: '--success-600' },
        { name: 'success-700', value: '#5a6f2d', var: '--success-700' },
      ]
    },
    { 
      category: 'Golden Amber', 
      description: 'Warm Glow • Warning',
      icon: 'fa-solid fa-lightbulb',
      colors: [
        { name: 'warning-500', value: '#f9c574', var: '--warning-500' },
        { name: 'warning-600', value: '#ef991f', var: '--warning-600' },
        { name: 'warning-700', value: '#d97706', var: '--warning-700' },
      ]
    },
    { 
      category: 'Flamingo', 
      description: 'Earthy Red • Danger',
      icon: 'fa-solid fa-triangle-exclamation',
      colors: [
        { name: 'danger-500', value: '#e75351', var: '--danger-500' },
        { name: 'danger-600', value: '#dc3a38', var: '--danger-600' },
        { name: 'danger-700', value: '#be2b29', var: '--danger-700' },
      ]
    },
    { 
      category: 'Blue Calx', 
      description: 'Muted Blue • Info',
      icon: 'fa-solid fa-circle-info',
      colors: [
        { name: 'info-500', value: '#b8c5d9', var: '--info-500' },
        { name: 'info-600', value: '#a3b2c9', var: '--info-600' },
        { name: 'info-700', value: '#8899b3', var: '--info-700' },
      ]
    },
  ];

  const exportPalette = async () => {
    const paletteData = [...allColors, ...semanticColors].map(scale => ({
      name: scale.category,
      description: scale.description,
      colors: scale.colors.map(c => ({ name: c.name, hex: c.value, variable: c.var }))
    }));
    const jsonData = JSON.stringify(paletteData, null, 2);
    const success = await copyToClipboard(jsonData);
    if (success) {
      toast.success('Palette data copied to clipboard!');
    } else {
      toast.error('Failed to copy palette data.');
    }
  };

  return (
    <div className="space-y-12">
      {/* Header with Export */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="mb-2">Campfire Color Palettes</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Warm, earthy tones inspired by natural elements — a grounded complement to Catppuccin
          </p>
        </div>
        <Button onClick={exportPalette} variant="outline">
          <i className="fa-solid fa-download mr-2"></i>
          Export JSON
        </Button>
      </div>

      {/* Campfire Signature Colors Swatch */}
      <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--bg-base)', border: '2px solid var(--border-default)' }}>
        <div className="text-center mb-8">
          <h3 className="mb-2">Campfire Signature Colors</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            The defining palette of warm, earthy tones — a grounded rainbow
          </p>
        </div>
        
        {/* Ember and Ash Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ember (Light) */}
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                <i className="fa-solid fa-sun" style={{ color: 'var(--primary-600)' }}></i>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Ember (Light)</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {signatureColors.ember.map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => handleCopy(swatch.color)}
                  className="group flex flex-col items-center gap-2 transition-transform hover:scale-110 active:scale-95"
                >
                  <div 
                    className="w-20 h-20 rounded-xl relative overflow-hidden transition-all"
                    style={{ 
                      backgroundColor: swatch.color,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                    >
                      <i className="fa-solid fa-copy" style={{ fontSize: '16px', color: 'white' }}></i>
                    </div>
                  </div>
                  <div className="text-center">
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{swatch.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{swatch.description}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace', marginTop: '2px' }}>{swatch.color}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Ash (Dark) */}
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                <i className="fa-solid fa-moon" style={{ color: 'var(--primary-600)' }}></i>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Ash (Dark)</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {signatureColors.ash.map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => handleCopy(swatch.color)}
                  className="group flex flex-col items-center gap-2 transition-transform hover:scale-110 active:scale-95"
                >
                  <div 
                    className="w-20 h-20 rounded-xl relative overflow-hidden transition-all"
                    style={{ 
                      backgroundColor: swatch.color,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                    >
                      <i className="fa-solid fa-copy" style={{ fontSize: '16px', color: 'white' }}></i>
                    </div>
                  </div>
                  <div className="text-center">
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{swatch.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{swatch.description}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace', marginTop: '2px' }}>{swatch.color}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Campfire Colors */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
        <div className="flex items-start gap-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--secondary-600)' }}
          >
            <i className="fa-solid fa-fire" style={{ fontSize: '18px', color: 'white' }}></i>
          </div>
          <div>
            <h3 className="mb-2" style={{ fontSize: '18px' }}>Click any color to copy its hex code</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Campfire is designed to live in harmony with Catppuccin. While Catppuccin offers soothing pastel tones perfect for 
              cozy, modern interfaces, Campfire provides warm earthy alternatives inspired by natural elements — clay, stone, 
              sage, and fire. Use them together in different projects, or mix them to create unique combinations that balance 
              comfort with groundedness.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="secondary">
                <i className="fa-solid fa-palette mr-2"></i>
                7 Color Scales
              </Badge>
              <Badge variant="secondary">
                <i className="fa-solid fa-swatchbook mr-2"></i>
                37 Total Shades
              </Badge>
              <Badge variant="secondary">
                <i className="fa-solid fa-fire mr-2"></i>
                Warm & Earthy
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Color Scales */}
      {allColors.map((scale) => (
        <section key={scale.category}>
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--bg-muted)',
                color: 'var(--text-secondary)'
              }}
            >
              <i className={scale.icon} style={{ fontSize: '16px' }}></i>
            </div>
            <div>
              <h3 className="mb-0" style={{ fontSize: '20px' }}>{scale.category}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                {scale.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-11 gap-2">
            {scale.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleCopy(color.value)}
                className="group space-y-2 text-left cursor-pointer transition-transform hover:scale-105 active:scale-95"
              >
                <div 
                  className="h-20 rounded-lg relative overflow-hidden transition-all"
                  style={{ 
                    backgroundColor: color.value,
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {color.main && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ fontSize: '10px', color: 'white', fontWeight: '600' }}>
                      MAIN
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                  >
                    <i className="fa-solid fa-copy" style={{ fontSize: '14px', color: 'white' }}></i>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{color.name}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {scale.colors.map((color) => (
              <Badge 
                key={color.name}
                variant="outline"
                className="cursor-pointer hover:bg-muted transition-colors font-mono"
                onClick={() => handleCopy(color.value)}
                style={{ fontSize: '11px' }}
              >
                {color.value}
              </Badge>
            ))}
          </div>
        </section>
      ))}

      {/* Semantic Colors */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Semantic Colors</h3>
        <div className="grid grid-cols-2 gap-8">
          {semanticColors.map((scale) => (
            <div key={scale.category}>
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--bg-muted)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <i className={scale.icon} style={{ fontSize: '14px' }}></i>
                </div>
                <div>
                  <h4 className="mb-0" style={{ fontSize: '16px' }}>{scale.category}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                    {scale.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {scale.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleCopy(color.value)}
                    className="group flex-1 space-y-2 text-left cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  >
                    <div 
                      className="h-16 rounded-lg relative overflow-hidden transition-all" 
                      style={{ 
                        backgroundColor: color.value,
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                      >
                        <i className="fa-solid fa-copy" style={{ fontSize: '12px', color: 'white' }}></i>
                      </div>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{color.name}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{color.value}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campfire ❤️ Catppuccin */}
      <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
        <h2 className="mb-6 text-center">Campfire ❤️ Catppuccin</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-600)' }}>
                <i className="fa-solid fa-fire" style={{ fontSize: '16px', color: 'white' }}></i>
              </div>
              <h3 className="mb-0">Campfire</h3>
            </div>
            <ul className="space-y-2" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Warm, earthy, grounded aesthetic</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Natural color inspiration (clay, stone, sage)</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Professional, sophisticated tones</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Perfect for creative, organic brands</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#89b4fa' }}>
                <i className="fa-solid fa-mug-hot" style={{ fontSize: '16px', color: 'white' }}></i>
              </div>
              <h3 className="mb-0">Catppuccin</h3>
            </div>
            <ul className="space-y-2" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Soothing, pastel, cozy aesthetic</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Warm-meets-cool balanced tones</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Soft, comfortable color palette</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check mt-1" style={{ fontSize: '12px', color: 'var(--success-600)' }}></i>
                <span>Ideal for modern, friendly interfaces</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'var(--bg-base)', border: '1px dashed var(--border-default)' }}>
          <i className="fa-solid fa-lightbulb" style={{ fontSize: '20px', color: 'var(--warning-500)' }}></i>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>Pro Tip:</strong> Use Catppuccin for playful, cozy applications and Campfire for more grounded, 
            professional projects. They complement each other beautifully!
          </p>
        </div>
        <div className="mt-4 text-center">
          <Button 
            variant="outline"
            onClick={() => window.open('https://catppuccin.com', '_blank')}
          >
            <i className="fa-solid fa-heart mr-2" style={{ color: 'var(--danger-500)' }}></i>
            Visit Catppuccin
          </Button>
        </div>
      </div>
    </div>
  );
}

function TypographySection() {
  const textSizes = [
    { name: 'xs', size: '0.75rem', lineHeight: '1rem', px: '12px / 16px' },
    { name: 'sm', size: '0.875rem', lineHeight: '1.25rem', px: '14px / 20px' },
    { name: 'base', size: '1rem', lineHeight: '1.5rem', px: '16px / 24px' },
    { name: 'lg', size: '1.125rem', lineHeight: '1.75rem', px: '18px / 28px' },
    { name: 'xl', size: '1.25rem', lineHeight: '1.75rem', px: '20px / 28px' },
    { name: '2xl', size: '1.5rem', lineHeight: '2rem', px: '24px / 32px' },
    { name: '3xl', size: '1.875rem', lineHeight: '2.25rem', px: '30px / 36px' },
    { name: '4xl', size: '2.25rem', lineHeight: '2.5rem', px: '36px / 40px' },
    { name: '5xl', size: '3rem', lineHeight: '3rem', px: '48px / 48px' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Typography</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Font families, sizes, weights, and text tokens
        </p>
      </div>

      {/* Font Families */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Font Families</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>Primary (Body Text)</div>
            <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '24px', color: 'var(--text-primary)' }}>
              Manrope — The quick brown fox jumps over the lazy dog
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', fontFamily: 'monospace' }}>
              font-family: 'Manrope', sans-serif;
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>Monospace (Code)</div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '24px', color: 'var(--text-primary)' }}>
              JetBrains Mono — The quick brown fox jumps over the lazy dog
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '8px', fontFamily: 'monospace' }}>
              font-family: 'JetBrains Mono', monospace;
            </div>
          </div>
        </div>
      </section>

      {/* Text Sizes */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Text Sizes</h3>
        <div className="space-y-4">
          {textSizes.map((size) => (
            <div key={size.name} className="flex items-baseline gap-4 p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
              <div style={{ width: '80px', fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                text-{size.name}
              </div>
              <div style={{ flex: 1, fontSize: size.size, lineHeight: size.lineHeight, color: 'var(--text-primary)' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                {size.px}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Font Weights</h3>
        <div className="space-y-4">
          {[
            { name: 'Regular', weight: '400' },
            { name: 'Medium', weight: '500' },
            { name: 'Semibold', weight: '600' },
            { name: 'Bold', weight: '700' },
          ].map((weight) => (
            <div key={weight.name} className="flex items-center gap-4 p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
              <div style={{ width: '100px', fontSize: '12px', color: 'var(--text-tertiary)' }}>
                {weight.name}
              </div>
              <div style={{ flex: 1, fontWeight: weight.weight, color: 'var(--text-primary)' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                {weight.weight}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SpacingSection() {
  const spacingScale = [
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
    { name: '32', value: '8rem', px: '128px' },
    { name: '40', value: '10rem', px: '160px' },
    { name: '48', value: '12rem', px: '192px' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Spacing & Sizing</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          8px-based spacing scale for consistent layouts
        </p>
      </div>

      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Spacing Scale</h3>
        <div className="space-y-3">
          {spacingScale.map((space) => (
            <div key={space.name} className="flex items-center gap-4">
              <div style={{ width: '60px', fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                {space.name}
              </div>
              <div 
                className="h-8 rounded"
                style={{ 
                  width: space.value, 
                  backgroundColor: 'var(--primary-500)',
                  minWidth: '2px'
                }}
              />
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {space.value}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                {space.px}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ShadowsSection() {
  const shadows = [
    { name: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
    { name: 'base', value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
    { name: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
    { name: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
    { name: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
    { name: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Shadows & Effects</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Elevation and depth through shadow tokens
        </p>
      </div>

      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Box Shadows</h3>
        <div className="grid grid-cols-3 gap-6">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="space-y-3">
              <div 
                className="h-24 rounded-lg flex items-center justify-center"
                style={{ 
                  boxShadow: shadow.value,
                  backgroundColor: 'var(--bg-base)',
                  border: '1px solid var(--border-default)'
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>shadow-{shadow.name}</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                {shadow.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function BordersSection() {
  const borderRadii = [
    { name: 'none', value: '0', px: '0px' },
    { name: 'sm', value: '0.25rem', px: '4px' },
    { name: 'base', value: '0.375rem', px: '6px' },
    { name: 'md', value: '0.5rem', px: '8px' },
    { name: 'lg', value: '0.75rem', px: '12px' },
    { name: 'xl', value: '1rem', px: '16px' },
    { name: '2xl', value: '1.5rem', px: '24px' },
    { name: 'full', value: '9999px', px: '9999px' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Borders & Radii</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Border styles and corner radius tokens
        </p>
      </div>

      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Border Radius</h3>
        <div className="grid grid-cols-4 gap-6">
          {borderRadii.map((radius) => (
            <div key={radius.name} className="space-y-3">
              <div 
                className="h-24 flex items-center justify-center"
                style={{ 
                  borderRadius: radius.value,
                  backgroundColor: 'var(--bg-muted)',
                  border: '2px solid var(--border-default)'
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>rounded-{radius.name}</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                {radius.value} ({radius.px})
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Border Widths</h3>
        <div className="space-y-4">
          {[
            { name: 'default', width: '1px' },
            { name: '2', width: '2px' },
            { name: '4', width: '4px' },
            { name: '8', width: '8px' },
          ].map((border) => (
            <div key={border.name} className="flex items-center gap-4">
              <div style={{ width: '100px', fontSize: '12px', color: 'var(--text-tertiary)' }}>
                border-{border.name}
              </div>
              <div 
                className="flex-1 h-12 rounded-lg"
                style={{ 
                  border: `${border.width} solid var(--primary-500)`,
                  backgroundColor: 'var(--bg-base)'
                }}
              />
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                {border.width}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TransitionsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Transitions</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Animation timing and easing functions
        </p>
      </div>

      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Duration</h3>
        <div className="space-y-4">
          {[
            { name: 'fast', duration: '150ms' },
            { name: 'base', duration: '200ms' },
            { name: 'medium', duration: '300ms' },
            { name: 'slow', duration: '500ms' },
          ].map((transition) => (
            <div key={transition.name} className="flex items-center gap-4">
              <div style={{ width: '100px', fontSize: '12px', color: 'var(--text-tertiary)' }}>
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
      </section>

      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Easing Functions</h3>
        <div className="space-y-4">
          {[
            { name: 'linear', easing: 'linear' },
            { name: 'ease-in', easing: 'ease-in' },
            { name: 'ease-out', easing: 'ease-out' },
            { name: 'ease-in-out', easing: 'ease-in-out' },
          ].map((easing) => (
            <div key={easing.name} className="flex items-center gap-4">
              <div style={{ width: '100px', fontSize: '12px', color: 'var(--text-tertiary)' }}>
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
      </section>
    </div>
  );
}
