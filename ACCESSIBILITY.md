# Accessibility Guide

Campfire Design System is built with accessibility as a core principle. All components follow WCAG 2.1 Level AA standards and include proper ARIA attributes, keyboard navigation, and screen reader support.

## Core Principles

### 1. **Semantic HTML**
All components use semantic HTML elements where possible:
- `<button>` for clickable actions
- `<nav>` for navigation
- `<main>`, `<aside>`, `<header>`, `<footer>` for layout
- Proper heading hierarchy (`<h1>` through `<h6>`)

### 2. **ARIA Labels**
Every interactive element has proper ARIA labeling:
```tsx
<Button aria-label="Close dialog">
  <i className="fa-solid fa-xmark"></i>
</Button>
```

### 3. **Keyboard Navigation**
All interactive components support keyboard navigation:
- `Tab` / `Shift+Tab` - Navigate between elements
- `Enter` / `Space` - Activate buttons and links
- `Escape` - Close modals, popovers, and dropdowns
- `Arrow keys` - Navigate menus, trees, and lists

### 4. **Focus Management**
- Visible focus indicators on all interactive elements
- Focus trap in modals and dialogs
- Proper focus restoration when closing overlays
- Skip links for keyboard users

### 5. **Color Contrast**
- All text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- UI components meet 3:1 contrast against background
- Don't rely on color alone to convey information

## Component-Specific Guidelines

### Buttons
```tsx
// ✅ Good - has accessible text
<Button>Save</Button>

// ✅ Good - icon with aria-label
<Button aria-label="Delete item">
  <i className="fa-solid fa-trash"></i>
</Button>

// ❌ Bad - icon without label
<Button>
  <i className="fa-solid fa-trash"></i>
</Button>
```

### Forms
```tsx
// ✅ Good - associated label
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />

// ✅ Good - with helper text
<Label htmlFor="password">Password</Label>
<Input id="password" type="password" aria-describedby="password-help" />
<HelperText id="password-help">Must be at least 8 characters</HelperText>

// ✅ Good - error state
<Input
  id="username"
  aria-invalid={hasError}
  aria-describedby="username-error"
/>
{hasError && (
  <span id="username-error" role="alert">
    Username is required
  </span>
)}
```

### DataTable
```tsx
// Tables have proper structure and headers
<DataTable
  data={users}
  columns={[
    {
      id: "name",
      header: "Full Name",  // Screen readers announce this
      accessor: (row) => row.name,
    }
  ]}
/>
```

### Dialogs & Modals
```tsx
// Dialogs trap focus and have proper labels
<Dialog>
  <DialogHeader>
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogDescription>
      This action cannot be undone.
    </DialogDescription>
  </DialogHeader>
  <DialogContent>
    {/* content */}
  </DialogContent>
</Dialog>
```

### Navigation
```tsx
// Navigation landmarks
<NavigationMenu>
  <nav aria-label="Main navigation">
    {/* menu items */}
  </nav>
</NavigationMenu>

// Breadcrumbs
<Breadcrumb aria-label="Breadcrumb navigation">
  <BreadcrumbList>
    {/* items */}
  </BreadcrumbList>
</Breadcrumb>
```

## Keyboard Shortcuts

### Global
| Key | Action |
|-----|--------|
| `Tab` | Move to next focusable element |
| `Shift + Tab` | Move to previous focusable element |
| `Escape` | Close modal/popover/dropdown |
| `Enter` | Activate button/link |
| `Space` | Toggle checkbox/switch, activate button |

### DataTable
| Key | Action |
|-----|--------|
| `Arrow Up/Down` | Navigate through rows (when focused) |
| `Space` | Select/deselect row |
| `Enter` | Activate row action |

### TreeView
| Key | Action |
|-----|--------|
| `Arrow Up/Down` | Navigate nodes |
| `Arrow Right` | Expand node |
| `Arrow Left` | Collapse node |
| `Enter/Space` | Select node |

### Menus & Dropdowns
| Key | Action |
|-----|--------|
| `Arrow Up/Down` | Navigate menu items |
| `Home` | First item |
| `End` | Last item |
| `Enter/Space` | Select item |
| `Escape` | Close menu |

### Tabs
| Key | Action |
|-----|--------|
| `Arrow Left/Right` | Navigate tabs |
| `Home` | First tab |
| `End` | Last tab |

### Slider
| Key | Action |
|-----|--------|
| `Arrow Up/Right` | Increase value |
| `Arrow Down/Left` | Decrease value |
| `Home` | Minimum value |
| `End` | Maximum value |
| `Page Up` | Increase by 10% |
| `Page Down` | Decrease by 10% |

## Screen Reader Support

All components are tested with:
- **NVDA** (Windows)
- **JAWS** (Windows)
- **VoiceOver** (macOS/iOS)
- **TalkBack** (Android)

### Live Regions
For dynamic updates, use ARIA live regions:
```tsx
// Status messages
<div role="status" aria-live="polite">
  Item added to cart
</div>

// Urgent messages
<div role="alert" aria-live="assertive">
  Error: Failed to save
</div>
```

### Loading States
```tsx
<Spinner role="status" aria-label="Loading content" />

// Or with live region
<div role="status" aria-live="polite">
  {loading && "Loading..."}
</div>
```

## Focus Management Patterns

### Modal Dialog
```tsx
// Focus trap - user can't tab outside modal
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    {/* Focus automatically moves to first focusable element */}
    <DialogTitle>Title</DialogTitle>
    {/* When closed, focus returns to trigger button */}
  </DialogContent>
</Dialog>
```

### Skip Links
```tsx
// Allow keyboard users to skip navigation
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main-content">
  {/* content */}
</main>
```

## Testing Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] ARIA labels present on icon-only buttons
- [ ] Form fields have associated labels
- [ ] Error messages are announced to screen readers
- [ ] Modals trap focus
- [ ] Color contrast meets WCAG AA
- [ ] Text can be resized to 200% without loss of content
- [ ] No keyboard traps (except modals)
- [ ] Landmarks (`main`, `nav`, etc.) are used correctly
- [ ] Headings follow logical hierarchy

## Tools

### Automated Testing
```bash
# Run accessibility tests
npm test

# Components use jest-axe for automated a11y testing
import { axe, toHaveNoViolations } from 'jest-axe';

test('should have no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Browser Extensions
- **axe DevTools** - Automated accessibility testing
- **WAVE** - Web accessibility evaluation tool
- **Accessibility Insights** - Microsoft's accessibility checker

### Manual Testing
1. **Keyboard only** - Unplug your mouse and navigate
2. **Screen reader** - Use VoiceOver/NVDA to navigate
3. **Zoom** - Test at 200% zoom
4. **High contrast** - Test in Windows high contrast mode

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)

## Support

If you find accessibility issues, please:
1. Open an issue on GitHub
2. Include steps to reproduce
3. Specify assistive technology used (if applicable)
4. Include WCAG criterion if known
