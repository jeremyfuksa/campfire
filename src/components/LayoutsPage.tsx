import React, { useState } from 'react';
import { PageWithSidebar } from './PageWithSidebar';
import { Card, CardContent } from './ui/card';

export function LayoutsPage() {
  const [activeSection, setActiveSection] = useState('grid');

  const sidebarGroups = [
    {
      items: [
        { id: 'grid', label: 'Grid System', icon: 'fa-solid fa-border-all' },
        { id: 'flex', label: 'Flexbox Patterns', icon: 'fa-solid fa-align-left' },
        { id: 'responsive', label: 'Responsive Layouts', icon: 'fa-solid fa-mobile-screen' },
        { id: 'container', label: 'Container Patterns', icon: 'fa-solid fa-window-maximize' },
      ]
    }
  ];

  return (
    <PageWithSidebar
      title="Grids & Layouts"
      description="Layout patterns"
      sidebarGroups={sidebarGroups}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      gradientColor="var(--secondary-500)"
    >
      {activeSection === 'grid' && <GridSystemSection />}
      {activeSection === 'flex' && <FlexboxSection />}
      {activeSection === 'responsive' && <ResponsiveSection />}
      {activeSection === 'container' && <ContainerSection />}
    </PageWithSidebar>
  );
}

function GridSystemSection() {
  const spacingExamples = [
    { name: 'Tight', spacing: '8px', description: 'For compact lists and dense information' },
    { name: 'Comfortable', spacing: '16px', description: 'Default spacing for most components' },
    { name: 'Loose', spacing: '24px', description: 'For breathing room and emphasis' },
    { name: 'Sections', spacing: '48px', description: 'Between major page sections' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Grid System</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          8px-based grid system for consistent spacing and alignment
        </p>
      </div>

      {/* 8px Grid */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>8px Base Grid</h3>
        <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
          <div className="relative h-64" style={{ 
            backgroundImage: `
              linear-gradient(to right, var(--border-default) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-default) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>All spacing uses multiples of 8px</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                  4px, 8px, 16px, 24px, 32px, 48px, 64px...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Scale */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Common Spacing Patterns</h3>
        <div className="space-y-4">
          {spacingExamples.map((example) => (
            <div key={example.name} className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
              <div className="flex items-start gap-4">
                <div style={{ width: '120px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '4px' }}>{example.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{example.spacing}</div>
                </div>
                <div style={{ flex: 1, fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {example.description}
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--primary-600)', marginTop: example.spacing }} />
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--primary-600)', marginTop: example.spacing }} />
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--primary-600)', marginTop: example.spacing }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSS Grid */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>CSS Grid Examples</h3>
        
        <div className="space-y-8">
          {/* 12 Column Grid */}
          <div>
            <h4 className="mb-3" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>12 Column Grid</h4>
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="col-span-1 h-12 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--primary-200)', color: 'var(--primary-700)', fontSize: '12px' }}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Grid */}
          <div>
            <h4 className="mb-3" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Responsive Card Grid</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h4 className="mb-2">Card {i + 1}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      Responsive grid that adapts to screen size
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FlexboxSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Flexbox Patterns</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Common flexbox layouts for component composition
        </p>
      </div>

      {/* Horizontal Stack */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Horizontal Stack</h3>
        <div className="p-6 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--primary-200)', color: 'var(--primary-700)' }}>Item 1</div>
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--primary-200)', color: 'var(--primary-700)' }}>Item 2</div>
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--primary-200)', color: 'var(--primary-700)' }}>Item 3</div>
          </div>
        </div>
      </section>

      {/* Space Between */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Space Between</h3>
        <div className="p-6 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
          <div className="flex justify-between items-center">
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--secondary-200)', color: 'var(--secondary-700)' }}>Left</div>
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--secondary-200)', color: 'var(--secondary-700)' }}>Right</div>
          </div>
        </div>
      </section>

      {/* Center */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Centered Content</h3>
        <div className="p-12 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
          <div className="flex items-center justify-center">
            <div className="px-6 py-3 rounded" style={{ backgroundColor: 'var(--primary-600)', color: 'white' }}>Centered Item</div>
          </div>
        </div>
      </section>

      {/* Vertical Stack */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Vertical Stack</h3>
        <div className="p-6 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
          <div className="flex flex-col gap-4">
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--success-200)', color: 'var(--success-700)' }}>Item 1</div>
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--success-200)', color: 'var(--success-700)' }}>Item 2</div>
            <div className="px-4 py-2 rounded" style={{ backgroundColor: 'var(--success-200)', color: 'var(--success-700)' }}>Item 3</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResponsiveSection() {
  const breakpoints = [
    { name: 'Mobile', range: '0-640px', cols: '1 column', description: 'Single column, stacked layout' },
    { name: 'Tablet', range: '641-1024px', cols: '2 columns', description: 'Two column grid, some stacking' },
    { name: 'Desktop', range: '1025-1440px', cols: '3-4 columns', description: 'Full multi-column layouts' },
    { name: 'Wide', range: '1441px+', cols: '4+ columns', description: 'Maximum width, extra columns' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Responsive Layouts</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Breakpoints and adaptive design patterns
        </p>
      </div>

      {/* Breakpoints */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Breakpoints</h3>
        <div className="space-y-4">
          {breakpoints.map((bp) => (
            <div key={bp.name} className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
              <div className="flex items-start gap-4">
                <div style={{ width: '100px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '4px' }}>{bp.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{bp.range}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{bp.cols}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>{bp.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive Example */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Adaptive Grid Example</h3>
        <div className="p-6 rounded-lg" style={{ border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-subtle)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 rounded text-center" style={{ backgroundColor: 'var(--bg-base)', border: '1px solid var(--border-default)' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Responsive Item {i + 1}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center" style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            Resize window to see layout adapt
          </div>
        </div>
      </section>
    </div>
  );
}

function ContainerSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-2">Container Patterns</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Content container patterns and max-widths
        </p>
      </div>

      {/* Max Widths */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Container Sizes</h3>
        <div className="space-y-6">
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>max-w-md (448px)</div>
            <div className="max-w-md p-4 rounded-lg mx-auto" style={{ backgroundColor: 'var(--primary-100)', border: '1px solid var(--primary-300)' }}>
              <div style={{ fontSize: '13px', color: 'var(--primary-900)' }}>Narrow container for forms and focused content</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>max-w-2xl (672px)</div>
            <div className="max-w-2xl p-4 rounded-lg mx-auto" style={{ backgroundColor: 'var(--secondary-100)', border: '1px solid var(--secondary-300)' }}>
              <div style={{ fontSize: '13px', color: 'var(--secondary-900)' }}>Medium container for articles and reading content</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>max-w-5xl (1024px)</div>
            <div className="max-w-5xl p-4 rounded-lg mx-auto" style={{ backgroundColor: 'var(--success-100)', border: '1px solid var(--success-300)' }}>
              <div style={{ fontSize: '13px', color: 'var(--success-900)' }}>Wide container for dashboards and multi-column layouts</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>max-w-7xl (1280px)</div>
            <div className="max-w-7xl p-4 rounded-lg mx-auto" style={{ backgroundColor: 'var(--info-100)', border: '1px solid var(--info-300)' }}>
              <div style={{ fontSize: '13px', color: 'var(--info-900)' }}>Maximum container width for full-width content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Padding Patterns */}
      <section>
        <h3 className="mb-6" style={{ color: 'var(--text-secondary)' }}>Padding Patterns</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
            <div className="p-4 rounded" style={{ backgroundColor: 'var(--bg-muted)' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>p-4 (16px) - Standard padding</div>
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
            <div className="p-6 rounded" style={{ backgroundColor: 'var(--bg-muted)' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>p-6 (24px) - Comfortable padding</div>
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
            <div className="p-8 rounded" style={{ backgroundColor: 'var(--bg-muted)' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>p-8 (32px) - Spacious padding</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
