# Changelog

All notable changes to the Campfire Design System.

## [Unreleased]

### Added - Major Roadmap Items

#### 1. CLI Tool (@jeremyfuksa/campfire-cli)
- Commands: init, add, list
- Built with commander.js, chalk, ora
- ESM output targeting ES2022

#### 2. Advanced Components (10 new)
- **DataTable** - Sorting, filtering, pagination, selection (18 tests ✓)
- **Autocomplete** - Fuzzy search, async, multi-select (22 tests ✓)
- **DateRangePicker** - Dual calendar date range selection
- **TimePicker** - 12/24hr format with keyboard nav
- **DateTimePicker** - Combined date + time
- **ColorPicker** - HSL sliders + hex input
- **Spinner** - Loading indicator (4 sizes)
- **NumericInput** - Number stepper with constraints
- **Rating** - Star/heart rating (half-star support)
- **Timeline** - Vertical event timeline
- **TreeView** - Hierarchical navigation

#### 3. Storybook Integration
- Storybook v8 with Vite
- 6 component stories with variants
- Introduction page
- Auto-docs enabled

#### 4. Accessibility Documentation
- ACCESSIBILITY.md guide
- WCAG 2.1 AA compliance
- Keyboard shortcuts reference
- Screen reader testing guide

### Changed
- Removed color customization from README
- Updated component count: 59 → 69
- Enhanced documentation

## Statistics
- **Total Components**: 69
- **Test Coverage**: 40/40 tests passing
- **Accessibility**: WCAG 2.1 AA
- **TypeScript**: Full type safety
