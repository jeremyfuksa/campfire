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
- **56 component stories** with comprehensive variants and examples
- Introduction page
- Auto-docs enabled
- Coverage: Button, Input, Card, Alert, Dialog, Tabs, Select, Checkbox, RadioGroup, Switch, Textarea, Slider, Badge, Progress, Skeleton, Tooltip, Popover, Dropdown Menu, Sheet, Table, Breadcrumb, Pagination, Accordion, Avatar, Separator, Label, Spinner, Calendar, Alert Dialog, Hover Card, Context Menu, Collapsible, Command, Stepper, Chip, Status Dot, Empty State, Search Input, Toggle, Toggle Group, Scroll Area, Drawer, Numeric Input, Date Range Picker, Time Picker, Date Time Picker, Tree View, Stat Card, Menubar, Navigation Menu, File Upload, DataTable, Autocomplete, Rating, ColorPicker, Timeline

#### 4. Accessibility Documentation
- ACCESSIBILITY.md guide
- WCAG 2.1 AA compliance
- Keyboard shortcuts reference
- Screen reader testing guide

#### 5. Developer Experience Enhancements
- **VSCode Snippets** - 50+ code snippets for all components (.vscode/campfire.code-snippets)
  - Tab completion for common patterns (cf-button, cf-card, cf-datatable, etc.)
  - Variant options with dropdown selection
  - Common prop patterns and examples
  - Instant productivity boost for developers

### Changed
- Removed color customization from README
- Updated component count: 59 → 69
- Enhanced documentation

## Statistics
- **Total Components**: 69
- **Storybook Stories**: 56 (81% coverage)
- **VSCode Snippets**: 50+
- **Test Coverage**: 40/40 tests passing
- **Accessibility**: WCAG 2.1 AA
- **TypeScript**: Full type safety
