import React, { useState } from 'react';

export function GridsLayoutsPage() {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 sticky top-40 h-[calc(100vh-10rem)] overflow-y-auto" style={{ borderRight: '1px solid var(--border-default)', backgroundColor: 'var(--bg-base)' }}>
        <nav className="p-6">
          <div className="mb-6">
            <h3 className="mb-3" style={{ fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Grid System</h3>
            <ul className="space-y-1">
              <li><a href="#spacing-scale" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Spacing Scale</a></li>
              <li><a href="#grid-overlay" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Grid Overlay</a></li>
              <li><a href="#containers" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Containers</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="mb-3" style={{ fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Layouts</h3>
            <ul className="space-y-1">
              <li><a href="#single-column" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Single Column</a></li>
              <li><a href="#two-column" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Two Column</a></li>
              <li><a href="#three-column" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Three Column</a></li>
              <li><a href="#sidebar-content" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Sidebar + Content</a></li>
              <li><a href="#responsive-grid" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Responsive Grid</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
              <i className="fa-solid fa-table-cells" style={{ fontSize: '12px', color: 'var(--primary-600)' }}></i>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Layout System</span>
            </div>
            <h1 className="mb-4">Grids & Layouts</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '42rem' }}>
              Campfire uses an 8px spacing grid system with responsive containers and flexible layout patterns.
            </p>
          </div>

          {/* Spacing Scale */}
          <section id="spacing-scale" className="mb-16">
            <h2 className="mb-6">Spacing Scale</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              All spacing in Campfire follows an 8px base unit, creating a harmonious and predictable rhythm.
            </p>
            
            <div className="space-y-4">
              {[
                { name: 'xs', value: '4px', multiplier: '0.5x' },
                { name: 'sm', value: '8px', multiplier: '1x' },
                { name: 'md', value: '16px', multiplier: '2x' },
                { name: 'lg', value: '24px', multiplier: '3x' },
                { name: 'xl', value: '32px', multiplier: '4x' },
                { name: '2xl', value: '48px', multiplier: '6x' },
                { name: '3xl', value: '64px', multiplier: '8x' },
                { name: '4xl', value: '96px', multiplier: '12x' },
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-4">
                  <div className="w-24" style={{ fontSize: '14px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    {space.name}
                  </div>
                  <div className="w-20" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    {space.value}
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <div 
                      className="h-8 rounded" 
                      style={{ 
                        width: space.value, 
                        backgroundColor: 'var(--primary-500)',
                        minWidth: space.value
                      }} 
                    />
                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{space.multiplier}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Grid Overlay */}
          <section id="grid-overlay" className="mb-16">
            <h2 className="mb-6">Grid Overlay</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Toggle the 8px grid overlay to ensure your designs align to the grid system.
            </p>
            
            <button
              onClick={() => setShowGrid(!showGrid)}
              className="px-4 py-2 rounded-lg transition-colors mb-6"
              style={{
                backgroundColor: showGrid ? 'var(--primary-600)' : 'var(--bg-muted)',
                color: showGrid ? 'white' : 'var(--text-primary)',
                border: `1px solid ${showGrid ? 'var(--primary-600)' : 'var(--border-default)'}`,
              }}
            >
              <i className={`fa-solid ${showGrid ? 'fa-eye-slash' : 'fa-eye'} mr-2`} style={{ fontSize: '14px' }}></i>
              {showGrid ? 'Hide Grid' : 'Show Grid'}
            </button>

            <div 
              className="rounded-lg p-8 relative overflow-hidden" 
              style={{ 
                backgroundColor: 'var(--bg-muted)', 
                border: '1px solid var(--border-default)',
                minHeight: '200px'
              }}
            >
              {showGrid && (
                <div 
                  className="absolute inset-0 pointer-events-none" 
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, var(--primary-300) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--primary-300) 1px, transparent 1px)
                    `,
                    backgroundSize: '8px 8px',
                    opacity: 0.3
                  }}
                />
              )}
              <div className="relative z-10">
                <h3 className="mb-2">Grid Example</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  All elements align to the 8px grid for consistent spacing and rhythm.
                </p>
              </div>
            </div>
          </section>

          {/* Containers */}
          <section id="containers" className="mb-16">
            <h2 className="mb-6">Containers</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Standard container widths for different layout contexts.
            </p>
            
            <div className="space-y-4">
              {[
                { name: 'sm', width: '640px', description: 'Small forms, focused content' },
                { name: 'md', width: '768px', description: 'Medium content, articles' },
                { name: 'lg', width: '1024px', description: 'Standard page width' },
                { name: 'xl', width: '1280px', description: 'Wide dashboards' },
                { name: '2xl', width: '1536px', description: 'Extra wide layouts' },
              ].map((container) => (
                <div key={container.name} className="rounded-lg p-4" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                      max-w-{container.name}
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {container.width}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', margin: 0 }}>
                    {container.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Single Column */}
          <section id="single-column" className="mb-16">
            <h2 className="mb-6">Single Column Layout</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Perfect for articles, documentation, and focused content.
            </p>
            
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
              <div className="p-8" style={{ backgroundColor: 'var(--bg-base)' }}>
                <div className="max-w-2xl mx-auto">
                  <h3 className="mb-4">Article Title</h3>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    This is a single column layout with a maximum width of 42rem (672px), ideal for reading long-form content.
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    The constrained width improves readability by keeping line lengths optimal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Two Column */}
          <section id="two-column" className="mb-16">
            <h2 className="mb-6">Two Column Layout</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Split content into two equal or weighted columns.
            </p>
            
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
              <div className="p-8 grid grid-cols-2 gap-6" style={{ backgroundColor: 'var(--bg-base)' }}>
                <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                  <h3 className="mb-2">Column 1</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    First column content with equal width distribution.
                  </p>
                </div>
                <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                  <h3 className="mb-2">Column 2</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Second column content with equal width distribution.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Three Column */}
          <section id="three-column" className="mb-16">
            <h2 className="mb-6">Three Column Layout</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Organize content across three columns for dashboards and feature grids.
            </p>
            
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
              <div className="p-8 grid grid-cols-3 gap-6" style={{ backgroundColor: 'var(--bg-base)' }}>
                {[1, 2, 3].map((col) => (
                  <div key={col} className="rounded-lg p-6" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                    <h3 className="mb-2">Column {col}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      Content for column {col}.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sidebar + Content */}
          <section id="sidebar-content" className="mb-16">
            <h2 className="mb-6">Sidebar + Content Layout</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Classic sidebar navigation with main content area.
            </p>
            
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
              <div className="flex" style={{ backgroundColor: 'var(--bg-base)' }}>
                <div className="w-64 p-6" style={{ backgroundColor: 'var(--bg-muted)', borderRight: '1px solid var(--border-default)' }}>
                  <h3 className="mb-4">Sidebar</h3>
                  <ul className="space-y-2">
                    {['Navigation 1', 'Navigation 2', 'Navigation 3'].map((item) => (
                      <li key={item} className="px-3 py-2 rounded" style={{ backgroundColor: 'var(--bg-base)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 p-8">
                  <h3 className="mb-4">Main Content</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    The main content area expands to fill available space.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Grid */}
          <section id="responsive-grid" className="mb-16">
            <h2 className="mb-6">Responsive Grid</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Grids that adapt from 1 to 4 columns based on viewport width.
            </p>
            
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ backgroundColor: 'var(--bg-base)' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="rounded-lg p-6 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)', minHeight: '120px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Item {item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                <i className="fa-solid fa-info-circle mr-2" style={{ color: 'var(--primary-600)' }}></i>
                Resize your browser to see the grid adapt: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
