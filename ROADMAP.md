# Campfire Design System Roadmap

This document outlines the planned enhancements and future development for the Campfire Design System.

## Overview

The roadmap is organized into phases, prioritizing features that will provide the most value to developers using the design system.

---

## Phase 1: Advanced Components (High Priority)

### Data Table Component
**Status:** Planned
**Priority:** High

Add a comprehensive DataTable component with advanced features:

- **Features:**
  - Column sorting (ascending/descending)
  - Client-side and server-side pagination
  - Row selection (single and multi-select)
  - Column filtering and search
  - Column resizing and reordering
  - Customizable cell renderers
  - Export functionality (CSV, JSON)
  - Responsive design with mobile-friendly view
  - Virtual scrolling for large datasets

- **API Design:**
  ```tsx
  <DataTable
    data={users}
    columns={columns}
    sorting={true}
    pagination={{ pageSize: 10 }}
    onRowSelect={(rows) => console.log(rows)}
  />
  ```

### Autocomplete/ComboBox
**Status:** Planned
**Priority:** High

Enhanced autocomplete component building on the existing Command component:

- **Features:**
  - Fuzzy search with highlighting
  - Async data loading
  - Multi-select support
  - Custom item rendering
  - Keyboard navigation (arrow keys, enter, escape)
  - Accessibility compliant (ARIA attributes)
  - Loading and empty states

- **API Design:**
  ```tsx
  <Autocomplete
    options={users}
    onSelect={(value) => setSelected(value)}
    async={(query) => fetchUsers(query)}
    multiple
  />
  ```

### Date & Time Pickers
**Status:** Planned
**Priority:** High

Extend the existing Calendar component:

- **DateRangePicker:** Select start and end dates
- **TimePicker:** Select hours and minutes with AM/PM
- **DateTimePicker:** Combined date and time selection
- **Features:**
  - Timezone support
  - Custom date formats
  - Min/max date constraints
  - Disabled dates support
  - Preset ranges (Today, Last 7 days, etc.)

### Color Picker
**Status:** Planned
**Priority:** Medium

Add a color selection component:

- **Features:**
  - HEX, RGB, HSL input formats
  - Visual color picker with hue slider
  - Opacity/alpha channel support
  - Preset color swatches
  - Recent colors history
  - Accessibility support

### Additional Components
**Status:** Planned
**Priority:** Medium

- **Spinner/Loader:** Loading indicators with multiple styles
- **TreeView:** Hierarchical data display with expand/collapse
- **NumericInput:** Number input with increment/decrement controls
- **Transfer List:** Dual-list selector for moving items between lists
- **Rating:** Star rating component with half-star support
- **Timeline:** Vertical/horizontal timeline for events

---

## Phase 2: Documentation & Developer Experience (Medium Priority)

### Enhanced Documentation Site
**Status:** Planned
**Priority:** Medium

Improve the existing Vite-based documentation:

- **Interactive Code Playground:**
  - In-browser code editing with live preview
  - Copy code snippets with one click
  - Share playground links
  - Mobile responsive preview

- **Auto-generated Props Tables:**
  - Automatically generate component prop documentation from TypeScript
  - Include default values, types, and descriptions
  - Link to related components

- **Enhanced Examples:**
  - More real-world usage examples per component
  - Common patterns and recipes
  - Do's and don'ts for each component
  - Performance tips

- **Accessibility Compliance Badges:**
  - WCAG 2.1 AA/AAA compliance indicators
  - Screen reader support documentation
  - Keyboard navigation guides

### Storybook Integration
**Status:** Under Consideration
**Priority:** Medium

Evaluate adding Storybook alongside the existing Vite demo site:

- **Benefits:**
  - Industry-standard tooling
  - Rich addon ecosystem (a11y, viewport, controls)
  - Better component isolation for development
  - Automatic documentation generation
  - Visual regression testing support

- **Considerations:**
  - Maintain existing Vite site or migrate fully
  - Learning curve for contributors
  - Build time and performance impact

---

## Phase 3: Accessibility & Testing (High Priority)

### Enhanced Accessibility Features
**Status:** Planned
**Priority:** High

Build on the existing Radix UI foundation:

- **Keyboard Shortcut Documentation:**
  - Document all keyboard shortcuts per component
  - Add visual keyboard shortcut indicators in docs
  - Support customizable keyboard shortcuts

- **ARIA Live Regions:**
  - Add examples for screen reader announcements
  - Toast notifications with proper ARIA
  - Form validation with live feedback

- **Screen Reader Testing Guidelines:**
  - Provide testing scripts for common screen readers
  - Document expected screen reader behavior
  - Add screen reader testing to CI/CD

- **Focus Management Patterns:**
  - Modal dialog focus trapping examples
  - Focus restoration after popover close
  - Skip navigation links

### Expanded Testing Coverage
**Status:** In Progress
**Priority:** High

Build on the initial Vitest setup:

- **Component Test Coverage:**
  - Achieve 80%+ test coverage for all UI components
  - Test all variants, sizes, and states
  - Test user interactions comprehensively

- **Visual Regression Testing:**
  - Integrate Chromatic or Percy
  - Prevent unintended visual changes
  - Test dark mode and responsive layouts

- **Performance Testing:**
  - Lighthouse CI for bundle size
  - React Performance profiling
  - Render performance benchmarks

---

## Phase 4: Advanced Form Features (Medium Priority)

### Multi-Step Form Wizard
**Status:** Planned
**Priority:** Medium

Enhanced version of the existing Stepper component:

- **Features:**
  - Step validation before proceeding
  - Form state persistence
  - Progress saving and resuming
  - Conditional steps based on previous answers
  - Review step before submission
  - Back/Next navigation with data preservation

### Field Array Helpers
**Status:** Planned
**Priority:** Medium

Dynamic form field management:

- **Features:**
  - Add/remove form fields dynamically
  - Drag-to-reorder fields
  - Nested field arrays
  - Integration with react-hook-form

### Masked Input
**Status:** Planned
**Priority:** Low

Specialized input formatting:

- **Supported Formats:**
  - Phone numbers (international)
  - Credit card numbers
  - Social Security Numbers
  - Date formats
  - Currency
  - Custom patterns

### Rich Text Editor Integration
**Status:** Under Consideration
**Priority:** Low

Integrate or build a rich text editing component:

- **Options to Evaluate:**
  - Tiptap integration
  - Slate.js integration
  - Custom lightweight editor
  - Markdown support

---

## Phase 5: Developer Tools & Ecosystem (Low Priority)

### CLI Tool
**Status:** Planned
**Priority:** Medium

Create a CLI for easier component integration:

- **Features:**
  ```bash
  npx campfire add button
  npx campfire add form input label
  npx campfire init
  npx campfire customize theme
  ```

- **Benefits:**
  - Faster component setup
  - Automatic dependency installation
  - Customization scaffolding
  - Migration helpers

### Figma Plugin
**Status:** Planned
**Priority:** Low

Sync design tokens between Figma and code:

- **Features:**
  - Export tokens from Figma to JSON
  - Import tokens into codebase
  - Keep colors, spacing, typography in sync
  - Component preview in Figma

### VSCode Snippets
**Status:** Planned
**Priority:** Low

Provide code snippets for faster development:

- **Examples:**
  - `cf-button` → Button component boilerplate
  - `cf-form` → Form with validation setup
  - `cf-dialog` → Dialog pattern

### Codemods
**Status:** Planned
**Priority:** Low

Automated code transformations for version migrations:

- **Use Cases:**
  - Breaking API changes between versions
  - Component renames
  - Prop changes
  - Import path updates

---

## Completed Improvements

### ✅ Testing Infrastructure (v0.2.0)
- Set up Vitest with React Testing Library
- Added jest-axe for accessibility testing
- Created example test suite for Button component
- Added test coverage reporting

### ✅ Build Optimization (v0.2.0)
- Enabled code splitting in tsup
- Improved tree-shaking support
- Better bundle size optimization

### ✅ Peer Dependencies (v0.2.0)
- Moved React/ReactDOM to peerDependencies
- Prevents duplicate React bundles
- Better version compatibility

### ✅ Theme Customization API (v0.2.0)
- Added ThemeProvider component
- Created useTheme hook
- Added useResolvedTheme for computed theme
- Added useThemeToggle for dark mode toggle
- Supports "light", "dark", and "system" themes

---

## Contributing

We welcome contributions! If you'd like to help with any roadmap items:

1. Check the [Issues](https://github.com/jeremyfuksa/campfire/issues) for open tasks
2. Comment on the issue you'd like to work on
3. Submit a PR with your implementation

For major features, please open a discussion issue first to align on the approach.

---

## Version Planning

- **v0.2.0:** Testing, Build Optimization, Theme API (Current)
- **v0.3.0:** Advanced Components (DataTable, Autocomplete, DateRangePicker)
- **v0.4.0:** Enhanced Documentation & DX Improvements
- **v0.5.0:** Accessibility Enhancements & Testing Expansion
- **v1.0.0:** Production-ready with comprehensive component library

---

## Feedback

Have suggestions for the roadmap? Please [open an issue](https://github.com/jeremyfuksa/campfire/issues/new) with the `roadmap` label.
