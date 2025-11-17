# Campfire Design System: Easiest Path to Figma

## The Fastest Approach (Recommended)

**Timeline: 2-3 days of focused work**

This combines automated token import + visual reference capture + component building.

---

## Phase 1: Prepare Your Design Tokens (30 minutes)

### Step 1: Convert CSS Variables to JSON

Create a script to extract your tokens from `globals.css`:

**File: `scripts/export-tokens.js`**

```javascript
const fs = require('fs');

// Read your globals.css
const css = fs.readFileSync('./styles/globals.css', 'utf8');

// Extract CSS variables
const colorRegex = /--([\w-]+):\s*(#[\w]+|rgb[^;]+);/g;
const spacingRegex = /--(spacing-\d+):\s*([^;]+);/g;

const tokens = {
  colors: {},
  spacing: {},
  radius: {},
  shadows: {}
};

// Parse colors
let match;
while ((match = colorRegex.exec(css)) !== null) {
  const [, name, value] = match;
  
  // Organize by category
  if (name.includes('primary-')) {
    if (!tokens.colors.primary) tokens.colors.primary = {};
    const shade = name.split('-')[1];
    tokens.colors.primary[shade] = { value, type: 'color' };
  }
  else if (name.includes('secondary-')) {
    if (!tokens.colors.secondary) tokens.colors.secondary = {};
    const shade = name.split('-')[1];
    tokens.colors.secondary[shade] = { value, type: 'color' };
  }
  // ... continue for other color groups
}

// Parse spacing
while ((match = spacingRegex.exec(css)) !== null) {
  const [, name, value] = match;
  const number = name.split('-')[1];
  tokens.spacing[number] = { value, type: 'spacing' };
}

// Output for Tokens Studio
fs.writeFileSync(
  './figma-tokens.json',
  JSON.stringify(tokens, null, 2)
);

console.log('✅ Tokens exported to figma-tokens.json');
```

**Run it:**
```bash
node scripts/export-tokens.js
```

### Step 2: Install Tokens Studio in Figma

1. Open Figma
2. Go to **Plugins → Find More Plugins**
3. Search for **"Tokens Studio for Figma"** (by Jan Six)
4. Install it

### Step 3: Import Your Tokens

1. In Figma, run **Plugins → Tokens Studio**
2. Click **Load from file**
3. Import your `figma-tokens.json`
4. Click **Create Variables** (this will create Figma variables from your tokens)

**Result:** All your colors, spacing, etc. are now Figma variables! 🎉

---

## Phase 2: Capture Visual Reference (1 hour)

You need visual references of your components to rebuild them accurately.

### Method A: Use html.to.design Plugin (EASIEST)

**This plugin converts live HTML/CSS directly to Figma layers.**

1. **Install the plugin:**
   - In Figma: Plugins → Find More Plugins
   - Search "html.to.design"
   - Install it

2. **Run your app locally:**
   ```bash
   npm run dev
   ```

3. **For each page, use the plugin:**
   - Navigate to each component documentation page
   - In Figma, run the plugin
   - Enter your localhost URL (e.g., `http://localhost:5173`)
   - The plugin will capture the rendered HTML as Figma layers

4. **What you'll get:**
   - Every component rendered as Figma elements
   - Somewhat editable (but may need cleanup)
   - Perfect visual reference for rebuilding

**Limitations:**
- May not be perfectly structured
- Won't have proper variants set up
- Good as reference, not final library

### Method B: Screenshot + Manual (FAST ALTERNATIVE)

If html.to.design doesn't work perfectly:

1. **Take screenshots of each component page:**
   - Use your browser's screenshot tool
   - Capture at 2x resolution (Retina)
   - Or use Figma's built-in screenshot import

2. **Import to Figma:**
   - Drag screenshots into Figma
   - Use them as reference while building

3. **Use browser DevTools:**
   - Right-click → Inspect any component
   - Copy computed styles
   - Reference exact spacing, colors, etc.

---

## Phase 3: Create Figma Component Library (2-3 days)

Now you'll rebuild components properly in Figma using your imported tokens and visual references.

### Page Structure

Create these pages in your Figma file:

```
📄 🎨 Cover & Introduction
📄 📚 Design Tokens (documentation)
📄 🔥 Foundation Components (working library)
📄 🛠️ Extended Components (working library)  
📄 ⚡ Utility Components (working library)
📄 🧩 Composite Components (working library)
📄 📐 Grids & Layouts
📄 🎭 Showcase Examples
📄 🗂️ Archive (imported references)
```

### Component Building Strategy

**For each component, follow this pattern:**

#### Example: Button Component

1. **Create base button:**
   - Rectangle with auto-layout (horizontal)
   - Padding: Use your spacing variables (e.g., spacing-4)
   - Background: Use your color variables (e.g., primary-600)
   - Corner radius: Use your radius variables (e.g., radius-base)

2. **Add text:**
   - Text layer inside auto-layout
   - Apply your Button text style
   - Color: semantic variable (e.g., text-on-primary)

3. **Add icon slot (optional):**
   - Use instance swap property
   - FontAwesome icon component

4. **Create component:**
   - Select all → Create Component
   - Name it: `Button`

5. **Add variants:**
   - Right-click component → Add variant
   - Create property: `Variant` (Default, Outline, Ghost, Link, Destructive, Secondary)
   - Create property: `Size` (Default, SM, LG, Icon)
   - Create property: `State` (Default, Hover, Active, Disabled)
   - Create property: `Icon Position` (None, Left, Right, Only)

6. **Style each variant:**
   - Update colors, borders, backgrounds per variant
   - Use your design token variables
   - Match your React component exactly

7. **Add documentation:**
   - Add description to component
   - Link to your live documentation

### Quick Reference Table

Here's how React props map to Figma:

| React Component | Figma Component | Properties |
|----------------|-----------------|------------|
| `Button` | Button Component | variant, size, state, iconPosition |
| `Badge` | Badge Component | variant, size |
| `Input` | Input Component | state, hasIcon, type |
| `Card` | Card Component | hasHeader, hasFooter |
| `Alert` | Alert Component | variant, hasDismiss |
| `Switch` | Switch Component | checked, disabled |
| `Checkbox` | Checkbox Component | checked, indeterminate, disabled |

---

## Phase 4: Build Component Variants Efficiently

### Use Batch Operations

Don't build 40 components one by one. Use patterns:

#### 1. Component Templates

Build these "template" components first:
- **Base Button** (all variants create derivatives)
- **Base Input** (all form elements use similar structure)
- **Base Card** (containers follow same pattern)

#### 2. Duplicate & Modify

Once you have a base component:
1. Duplicate it
2. Modify specific properties
3. Rename

Example:
- Button → Duplicate → Modify for IconButton
- Button → Duplicate → Modify for LinkButton

#### 3. Component Sets

Group related variants:
- All button variants in one component set
- All badge variants in one component set

---

## Phase 5: Add Atmospheric Backgrounds

### Create Gradient Sphere Component

1. **Draw an ellipse** (750x750px)

2. **Add radial gradient:**
   - Center: `primary-500` at 100% opacity
   - Edge: transparent
   
3. **Apply layer blur:** 80-100px

4. **Set layer opacity:** 14-18%

5. **Create component:** `Background/Gradient Sphere`

6. **Add variants:**
   - Property: `Color` (Primary, Secondary, Tertiary)
   - Swap gradient colors accordingly

7. **Lock the layer** (prevents accidental selection)

### Create Background Template

1. **Create a frame** (1440x1024px or your page size)

2. **Add 6-7 gradient sphere instances:**
   - Distribute across the frame
   - Use different positions (top-right, center-left, bottom-right)
   - Vary opacity slightly (13-20%)

3. **Lock all sphere layers**

4. **Save as page template:**
   - Duplicate for each documentation page
   - Designers can add content on top

---

## Automation Tools

### Option 1: Figma REST API (Advanced)

If you're comfortable with coding, you can automate component creation:

```javascript
// Example: Create button variants programmatically
const figma = require('figma-api');

async function createButton() {
  // Create component
  // Add variants
  // Apply styles
  // Position elements
}
```

**Figma API Docs:** https://www.figma.com/developers/api

### Option 2: Figmagic (Design Tokens Automation)

**Figmagic** can sync between Figma and code:

```bash
npm install figmagic
```

It can:
- Export tokens from Figma to CSS
- Import tokens from CSS to Figma
- Keep both in sync

**Docs:** https://github.com/mikaelvesavuori/figmagic

---

## Time-Saving Tips

### 1. Use Figma Community Resources

Search Figma Community for:
- FontAwesome icon libraries (import directly)
- Radix UI design kits (reference for structure)
- ShadCN Figma kits (similar component base)

Don't reinvent the wheel—customize existing components.

### 2. Build in Stages

**Week 1: Foundation**
- Design tokens
- 5 core components (Button, Input, Card, Badge, Switch)
- Test workflow

**Week 2: Core Library**
- Remaining Foundation components (12 total)
- Documentation pages

**Week 3: Extended**
- Extended components (20 total)
- Composite patterns

**Week 4: Polish**
- Utility components (8 total)
- Showcase pages
- Publish library

### 3. Use Plugins

Essential plugins to speed up:
- **Tokens Studio** - Design tokens
- **html.to.design** - Import from web
- **Iconify** - Icon library (includes FontAwesome)
- **Content Reel** - Populate with real data
- **Master** - Component organization
- **Similayer** - Select similar layers quickly
- **Instance Finder** - Find all instances

### 4. Keyboard Shortcuts

Master these:
- `Cmd+K` - Quick search (find components)
- `Opt+Cmd+K` - Create component
- `Opt+Cmd+B` - Add auto-layout
- `Opt+Cmd+G` - Frame selection
- `Cmd+/` - Search for actions

---

## Quality Checklist

Before publishing your library:

### Components
- [ ] All variants match React component props
- [ ] All components use design token variables (no hard-coded values)
- [ ] Auto-layout applied where appropriate
- [ ] Proper constraints set for responsive behavior
- [ ] All text uses text styles
- [ ] All colors use color variables
- [ ] Component descriptions added
- [ ] Props documented

### Organization
- [ ] Clear page structure
- [ ] Consistent naming convention
- [ ] Components grouped logically
- [ ] Cover page created
- [ ] Documentation pages complete
- [ ] Examples showcase real use cases

### Technical
- [ ] All variables properly scoped
- [ ] Modes set up (Light/Dark)
- [ ] Text styles configured
- [ ] Effect styles (shadows) configured
- [ ] Grid styles defined
- [ ] Breakpoints documented

---

## The Absolute Fastest Path

If you need this **TODAY**:

1. **Skip token import** (come back to it later)
2. **Use html.to.design plugin** to import your live documentation pages
3. **Clean up the imported layers** slightly
4. **Publish as library** (version 0.1 - Visual Reference)
5. **Iterate** to proper component structure over time

This gives your team immediate access to visual references and allows you to refine the library incrementally.

---

## Publishing Your Library

### Final Steps

1. **File → Publish Library**
2. **Name:** Campfire Design System v1.0
3. **Description:** Personal design system with earthy, grounded aesthetic
4. **Add cover image:** Screenshot of your showcase page
5. **Set permissions** (Private or Team)
6. **Publish**

### Versioning Strategy

Follow semantic versioning:
- `v1.0.0` - Initial foundation (12 components)
- `v1.1.0` - Extended components added (20 more)
- `v1.2.0` - Utility components added (8 more)
- `v1.3.0` - Composite patterns added
- `v2.0.0` - Breaking changes (if needed)

### Maintenance

Weekly sync:
- Review code changes
- Update Figma components to match
- Re-export tokens if changed
- Update documentation

---

## Recommended Workflow Summary

**Day 1: Setup & Tokens**
- ✅ Export tokens from CSS
- ✅ Import to Tokens Studio
- ✅ Create Figma variables
- ✅ Set up file structure

**Day 2: Import Visual References**
- ✅ Use html.to.design to import rendered components
- ✅ Organize imports in Archive page
- ✅ Take screenshots as backup

**Day 3: Build Foundation Components**
- ✅ Build 5 core components (Button, Input, Card, Badge, Alert)
- ✅ Set up proper variants
- ✅ Apply design tokens

**Day 4: Build Extended Components**
- ✅ Build 10 more components
- ✅ Create composite patterns
- ✅ Add documentation pages

**Day 5: Polish & Publish**
- ✅ Build remaining components
- ✅ Add gradient backgrounds
- ✅ Create showcase pages
- ✅ Publish library v1.0

---

## Support Resources

### Figma Learning
- **Figma YouTube Channel** - Best practices
- **Config 2024 Videos** - Advanced techniques
- **Figma Community** - Ask questions

### Design Tokens
- **Tokens Studio Documentation** - Token formats
- **Style Dictionary** - Token transformation
- **Design Tokens Community Group** - W3C standards

### Helpful Articles
- "Building a Design System in Figma" (Figma blog)
- "From Code to Design" (ShadCN + Figma)
- "Design Token Best Practices" (Brad Frost)

---

## Next Steps

Start with **Phase 1** (tokens export). This is the foundation that makes everything else easier.

Once your tokens are in Figma, building components becomes much faster because you're using variables instead of hard-coding values.

**Remember:** Perfect is the enemy of done. Get v1.0 out quickly, then iterate based on actual usage.

Your React implementation is already excellent—the Figma library is just a visual mirror of it. Don't overthink it!

---

## Questions to Consider

Before you start:

1. **Who will use this library?**
   - Just you? → Keep it simple
   - A team? → Add more documentation
   - Public? → Polish everything

2. **How will you maintain sync?**
   - Manual updates when code changes?
   - Automated pipeline?
   - Code as source of truth or Figma?

3. **What's the priority?**
   - Speed (get something out fast)
   - Accuracy (perfectly matches code)
   - Polish (beautiful documentation)

Choose your path based on your answers!
