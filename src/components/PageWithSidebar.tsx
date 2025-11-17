import React from 'react';
import { BackgroundGradients } from './BackgroundGradients';

interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
}

interface SidebarGroup {
  title?: string;
  items: SidebarItem[];
}

interface PageWithSidebarProps {
  title: string;
  description: string;
  sidebarGroups: SidebarGroup[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  children: React.ReactNode;
  gradientColor?: string;
}

export function PageWithSidebar({
  title,
  description,
  sidebarGroups,
  activeSection,
  onSectionChange,
  children,
  gradientColor = 'var(--primary-500)'
}: PageWithSidebarProps) {
  return (
    <div className="flex">
      {/* Sidebar - Fixed position, scrollable independently */}
      <aside 
        className="w-64 flex-shrink-0 border-r overflow-y-auto fixed"
        style={{ 
          borderColor: 'var(--border-default)',
          backgroundColor: 'var(--bg-base)',
          height: 'calc(100vh - var(--header-height) - var(--nav-height))',
          top: 'calc(var(--header-height) + var(--nav-height))',
          left: 0,
          width: 'var(--sidebar-width)',
          opacity: 0.95,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      >
        <div className="p-6">
          <h2 className="mb-1">{title}</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
            {description}
          </p>
        </div>

        <nav className="px-3 pb-6">
          {sidebarGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              {group.title && (
                <div 
                  className="px-3 mb-2"
                  style={{ 
                    fontSize: '11px', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    fontWeight: '600'
                  }}
                >
                  {group.title}
                </div>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSectionChange(item.id)}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-left"
                      style={{
                        backgroundColor: isActive ? 'var(--bg-muted)' : 'transparent',
                        color: isActive ? 'var(--interactive-default)' : 'var(--text-secondary)',
                        fontWeight: isActive ? '600' : '500',
                        fontSize: '14px'
                      }}
                    >
                      {item.icon && <i className={item.icon} style={{ fontSize: '14px', width: '16px' }}></i>}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content - Offset by sidebar width, natural height */}
      <main 
        className="flex-1"
        style={{ 
          marginLeft: 'var(--sidebar-width)',
          minHeight: 'calc(100vh - var(--header-height) - var(--nav-height))'
        }}
      >
        {/* Background Gradients - Fills entire main area */}
        <div className="relative" style={{ minHeight: 'inherit' }}>
          <BackgroundGradients layout="sidebar" primaryColor={gradientColor} />
          
          {/* Content wrapper */}
          <div className="relative max-w-5xl mx-auto p-8 pb-8">
            {children}
          </div>
        </div>

        {/* Footer - Part of main content flow */}
        <footer className="py-8" style={{ borderTop: '1px solid var(--border-default)' }}>
          <div className="max-w-5xl mx-auto px-8">
            <div className="flex items-center justify-between">
              <div style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                © 2025 Campfire Design System. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Documentation</a>
                <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>GitHub</a>
                <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
