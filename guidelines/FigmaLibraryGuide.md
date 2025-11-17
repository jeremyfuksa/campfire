# Campfire Design System: Translating to Figma Library

## Overview
This guide explains how to translate your React/Tailwind CSS-based Campfire Design System into a comprehensive Figma design library.

---

## Phase 1: Setting Up Design Tokens in Figma

### 1.1 Color Variables
Figma now supports variables, which map perfectly to your CSS custom properties.

**Steps:**
1. **Create Variable Collections** in Figma:
   - `Campfire/Colors/Primary` (Cello)
   - `Campfire/Colors/Secondary` (Terracotta Clay)
   - `Campfire/Colors/Neutral` (Black Rock)
   - `Campfire/Colors/Success`, `Warning`, `Danger`, `Info`
   - `Campfire/Colors/Semantic`

2. **Create Color Modes:**
   - Set up two modes: `Light` and `Dark`
   - Map each CSS variable to a Figma variable:
     ```
     CSS: --primary-50 → Figma: Campfire/Primary/50
     CSS: --primary-100 → Figma: Campfire/Primary/100
     ... and so on for all color scales
     ```

3. **Semantic Color Aliases:**
   - Create semantic variables that reference the base colors:
     ```
     bg-base (Light Mode) = neutral-50
     bg-base (Dark Mode) = neutral-950
     ```

### 1.2 Spacing Variables
Map your 8px spacing grid to Figma spacing variables:

```
--spacing-0 → 0px
--spacing-1 → 4px
--spacing-2 → 8px
--spacing-3 → 12px
... continuing through spacing-48
```

**Organization:** Create a collection called `Campfire/Spacing`

### 1.3 Typography Variables

**Font Families:**
- Set Manrope as your primary typeface
- Set JetBrains Mono for code

**Text Styles in Figma:**
Create text styles that match your CSS typography system:

```
Display → 60px/64px, Bold, -0.02em
H1 → 48px/56px, Bold, -0.015em
H2 → 36px/40px, Semibold, -0.01em
H3 → 30px/36px, Semibold, -0.005em
H4 → 24px/32px, Semibold, 0em
H5 → 20px/28px, Medium, 0em
H6 → 18px/28px, Medium, 0em

Body/Large → 18px/1.7, Regular
Body/Base → 16px/1.6, Regular
Body/Small → 14px/1.5, Regular

Label/Large → 16px/24px, Medium
Label/Base → 14px/20px, Medium
Label/Small → 12px/16px, Medium
```

### 1.4 Border Radius Variables
Create number variables for border radius:
```
Campfire/Radius/None → 0px
Campfire/Radius/SM → 6px
Campfire/Radius/Base → 8px
Campfire/Radius/MD → 12px
Campfire/Radius/LG → 16px
Campfire/Radius/XL → 20px
Campfire/Radius/2XL → 28px
Campfire/Radius/Full → 9999px
```

### 1.5 Shadow/Effect Styles
Create effect styles in Figma that match your CSS shadows:

```
Shadow/XS → 0 1px 2px rgba(76, 98, 125, 0.08)
Shadow/SM → Multiple layers matching your CSS
Shadow/Base → ...
Shadow/MD → ...
Shadow/LG → ...
Shadow/XL → ...
Shadow/Glow → ...
Shadow/Focus → ...
```

---

## Phase 2: Building Component Library

### 2.1 Component Organization Structure

Create pages in Figma that mirror your system:
```
📄 🎨 Design Tokens (documentation)
📄 🧱 Foundation Components (12 components)
📄 🔧 Extended Components (20 components)
📄 ⚡ Utility Components (8 components)
📄 📐 Grids & Layouts
📄 📝 Documentation
📄 🧪 Examples & Patterns
```

### 2.2 Component Variants Strategy

For each component, use Figma's variant system to match your React props:

**Example: Button Component**
```
Properties:
- Variant: Default, Outline, Ghost, Link, Destructive, Secondary
- Size: Default, SM, LG, Icon
- State: Default, Hover, Active, Disabled
- Icon: None, Left, Right, Only
```

This maps to your Button's TypeScript interface and allows designers to quickly switch between states.

### 2.3 Auto Layout = Flexbox

Figma's Auto Layout maps directly to CSS Flexbox/Grid:
- Use Auto Layout for all components
- Set spacing values using your spacing variables
- Use "Hug" for intrinsic sizing
- Use "Fill" for flex-grow behavior

### 2.4 Component Properties

Map React props to Figma component properties:
- **Boolean props** → Boolean properties (show/hide layers)
- **String props** → Text properties or Variant properties
- **Variant props** → Variant properties
- **Children** → Slot properties (Figma's instance swap)

---

## Phase 3: Documentation & Annotations

### 3.1 Component Descriptions
Add descriptions to each component in Figma that include:
- Purpose and use cases
- When to use vs. alternatives
- Accessibility notes
- Link to React implementation

### 3.2 Create Cover Sheets
For each page, create a cover frame with:
- Component overview
- Visual examples
- Props table
- Do's and Don'ts
- Code snippet references

---

## Phase 4: Tools & Workflow

### 4.1 Tokens Studio (Recommended Plugin)
**Tokens Studio for Figma** is the industry-standard plugin for design tokens:

1. Export your CSS variables to JSON format
2. Import into Tokens Studio
3. The plugin automatically creates Figma variables
4. Maintains bidirectional sync

**Token JSON Structure Example:**
```json
{
  "colors": {
    "primary": {
      "50": { "value": "#f5f7f9", "type": "color" },
      "100": { "value": "#ebeef2", "type": "color" },
      ...
    }
  },
  "spacing": {
    "1": { "value": "4px", "type": "spacing" },
    "2": { "value": "8px", "type": "spacing" },
    ...
  }
}
```

### 4.2 Figma Variables Exporter
You can write a Node script to convert your CSS variables to Figma-compatible JSON:

```javascript
// Example script structure
const fs = require('fs');

// Parse globals.css
// Extract CSS custom properties
// Convert to Tokens Studio JSON format
// Output tokens.json

// This tokens.json can then be imported to Figma
```

### 4.3 Style Dictionary (Advanced)
For enterprise-level token management:
- Use **Style Dictionary** by Amazon
- Define tokens once in JSON
- Generate CSS, SCSS, JS, and Figma tokens
- Maintain single source of truth

### 4.4 Figma REST API
For programmatic updates:
- Use Figma's REST API to create/update styles
- Automate variable creation from your CSS
- Keep Figma library in sync with codebase

---

## Phase 5: Maintaining Sync Between Code & Design

### 5.1 Single Source of Truth
Choose your source of truth:
- **Code → Design:** Export tokens from CSS to Figma
- **Design → Code:** Export tokens from Figma to CSS
- **Hybrid:** Use Style Dictionary as central source

**Recommendation for Campfire:**
Use your CSS as source of truth since it's already comprehensive. Use Tokens Studio to import and sync.

### 5.2 Version Control
- Publish Figma library versions that match your code releases
- Use semantic versioning (v1.0, v1.1, etc.)
- Document changes in Figma library descriptions

### 5.3 Automated Testing
- Screenshot testing: Compare Figma exports to Storybook screenshots
- Visual regression testing with tools like Percy or Chromatic

---

## Phase 6: Creating Composite Components

### 6.1 Nested Components
Your composite components (AlertBanner, FormField, NotificationSwitch) should be built as Figma components that use your base components:

Example: FormField composite
```
FormField (Component)
├─ Label (Instance from Label component)
├─ Input (Instance from Input component)
└─ HelperText (Instance from HelperText component)
```

### 6.2 Component Sets
Group related variants together:
- All button variants in one component set
- All input states in one component set
- Maintain consistency with your React component API

---

## Phase 7: Gradient Sphere Backgrounds

### 7.1 Creating the Atmosphere Effect in Figma

**Method 1: Vector Shapes with Gradients**
1. Create large ellipses (600-750px)
2. Apply radial gradients with your color variables
3. Set Layer Blur to 80-100px
4. Set opacity to 13-20%
5. Position across your canvas frames

**Method 2: Component for Reusability**
1. Create a "Background/Gradient Sphere" component
2. Add variant properties for color (Primary, Secondary)
3. Make it easy to drop into any frame
4. Lock layer so it doesn't interfere with editing

**Method 3: Page Background Pattern**
- Create a master background frame
- Apply to multiple pages via Figma's background feature
- Designers can toggle on/off as needed

### 7.2 Frame Setup for Documentation Pages
Create frame templates that include:
- Background gradient spheres (locked layer)
- Content area (where components go)
- This matches your PageWithSidebar layout

---

## Recommended Workflow

### Step-by-Step Implementation:

**Week 1: Foundation**
- [ ] Install Tokens Studio plugin
- [ ] Convert CSS variables to token JSON
- [ ] Import tokens and create Figma variables
- [ ] Create text styles and effect styles

**Week 2: Core Components**
- [ ] Build Foundation components (12)
- [ ] Set up variants and properties
- [ ] Add auto-layout to all components
- [ ] Link variables to component properties

**Week 3: Extended Components**
- [ ] Build Extended components (20)
- [ ] Create composite component patterns
- [ ] Test component combinations

**Week 4: Documentation & Polish**
- [ ] Build Utility components (8)
- [ ] Create documentation pages
- [ ] Add gradient sphere backgrounds
- [ ] Create example compositions
- [ ] Publish library

---

## Resources & Tools

### Essential Plugins:
1. **Tokens Studio** (formerly Figma Tokens) - Token management
2. **Content Reel** - Populate components with realistic data
3. **Contrast** - Check color accessibility
4. **A11y - Color Contrast Checker** - WCAG compliance

### Helpful Links:
- Figma Variables Documentation
- Tokens Studio Documentation
- Style Dictionary by Amazon
- Design Tokens Community Group (W3C)

### Export Tools:
- **figma-to-react** - Component code generation
- **Anima** - Design to code
- **Quest** - Figma to React conversion

---

## Key Principles

1. **Use Variables Everywhere:** Never hard-code values
2. **Naming Consistency:** Match your CSS naming exactly
3. **Variant Parity:** Figma variants = React props
4. **Auto Layout = Flexbox:** Think in terms of CSS when building
5. **Document Everything:** Figma is also documentation
6. **Accessibility First:** Include focus states, ARIA notes
7. **Real Content:** Use actual copy, not Lorem Ipsum

---

## Figma Library Structure Preview

```
Campfire Design System v1.0
│
├─ 📚 Libraries
│   ├─ Campfire Foundation
│   ├─ Campfire Extended
│   └─ Campfire Utilities
│
├─ 🎨 Variables
│   ├─ Colors (Primary, Secondary, Neutral, Semantic)
│   ├─ Spacing (0-48)
│   ├─ Radius (None-Full)
│   └─ Typography (Font families, sizes)
│
├─ ✨ Styles
│   ├─ Text Styles (Display, H1-H6, Body, Labels)
│   ├─ Color Styles (Legacy support)
│   └─ Effect Styles (Shadows, Focus)
│
└─ 📖 Documentation
    ├─ Getting Started
    ├─ Design Tokens
    ├─ Component Guidelines
    └─ Examples & Patterns
```

---

## Next Steps

Based on your comprehensive React implementation:

1. **Start with tokens** - This is the foundation
2. **Build 3 test components** - Button, Input, Card
3. **Validate the process** - Ensure tokens work correctly
4. **Scale to full library** - Complete all 40 components
5. **Create documentation frames** - Match your React docs
6. **Add gradient backgrounds** - Replicate the atmosphere
7. **Publish v1.0** - Share with your team/products

The good news: Your React system is already extremely well-structured with clear token definitions, consistent naming, and a logical component hierarchy. This will translate beautifully into Figma!

---

**Remember:** Your code is comprehensive and production-ready. The Figma library is about enabling designers to use the same system visually. The two should feel like mirror images of each other.
