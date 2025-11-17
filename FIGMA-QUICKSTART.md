# 🔥 Campfire → Figma Quickstart

**Get your design system into Figma in under 2 hours.**

---

## Step 1: Export Your Design Tokens (5 minutes)

```bash
# Run the token export script
node scripts/export-tokens.js
```

This creates `figma-tokens.json` with all your colors, spacing, typography, etc.

---

## Step 2: Import Tokens to Figma (10 minutes)

1. **Open Figma** and create a new file: "Campfire Design System"

2. **Install Tokens Studio plugin:**
   - Plugins → Find More Plugins
   - Search: "Tokens Studio for Figma"
   - Install it

3. **Import your tokens:**
   - Run: Plugins → Tokens Studio
   - Click: "Load from file"
   - Select: `figma-tokens.json`
   - Click: "Create Variables"

4. **Set up Light/Dark modes:**
   - In Variables panel, create two modes: "Light" and "Dark"
   - Map semantic colors to different values per mode

**Result:** ✅ All your CSS variables are now Figma variables!

---

## Step 3: Import Visual References (30 minutes)

### Option A: Use html.to.design Plugin (Recommended)

1. **Install the plugin:**
   - Plugins → Find More Plugins
   - Search: "html.to.design"
   - Install it

2. **Run your documentation site:**
   ```bash
   npm run dev
   ```

3. **Capture each page:**
   - Navigate to Foundation Components page
   - In Figma, run: Plugins → html.to.design
   - Enter: `http://localhost:5173` (or your local URL)
   - Select the component area
   - Import

4. **Repeat for:**
   - Extended Components
   - Utility Components
   - Design Tokens page

### Option B: Take Screenshots (Faster but less detailed)

1. Take 2x screenshots of each documentation page
2. Import to Figma
3. Use as visual reference while building

---

## Step 4: Build Your First Component (45 minutes)

Let's build the **Button** component as a template for all others.

### Create Base Button

1. **Draw a rectangle**
   - Press `R` for rectangle
   - Add auto-layout: `Shift+A`
   - Direction: Horizontal
   - Padding: `12px 24px` (use your spacing variables)
   - Corner radius: `8px` (use your radius variable)

2. **Add background:**
   - Fill: `primary-600` (use variable, not hard-coded)

3. **Add text layer:**
   - Press `T` for text
   - Type: "Button"
   - Font: Manrope Medium
   - Size: 16px
   - Color: `white` (or use `text-on-primary` variable)

4. **Align:**
   - Center text in auto-layout
   - Set constraints

### Create Component

1. Select everything
2. Press: `Cmd+Opt+K` (Mac) or `Ctrl+Alt+K` (Windows)
3. Name: "Button"

### Add Variants

1. **Right-click component** → "Add variant"

2. **Create properties:**
   - **Variant:** Default, Outline, Ghost, Link, Destructive, Secondary
   - **Size:** Default, SM, LG, Icon
   - **State:** Default, Hover, Active, Disabled

3. **Style each variant:**
   - **Default:** Primary background, white text
   - **Outline:** Transparent bg, primary border, primary text
   - **Ghost:** Transparent bg, primary text on hover
   - **Link:** No background, underline on hover
   - **Destructive:** Danger background, white text
   - **Secondary:** Secondary background, white text

4. **Size variants:**
   - **SM:** Padding `8px 16px`, 14px text
   - **Default:** Padding `12px 24px`, 16px text
   - **LG:** Padding `16px 32px`, 18px text
   - **Icon:** Square, icon only

### Add Documentation

1. **Select your button component**
2. **Right panel → Add description**
3. Write: "Primary action button. Matches React Button component."
4. **Add link:** Link to your live documentation

**Result:** ✅ You now have a fully functional Button component with all variants!

---

## Step 5: Batch Build Remaining Components (4-6 hours)

Now that you have the pattern, build the rest:

### Foundation Components (Priority 1)
- [ ] Badge
- [ ] Input
- [ ] Label
- [ ] Card
- [ ] Alert
- [ ] Checkbox
- [ ] Switch
- [ ] Select
- [ ] Textarea
- [ ] Avatar
- [ ] Skeleton

**Tip:** Build 3-5 components per session. Don't burn out!

### Extended Components (Priority 2)
Build these once Foundation is stable:
- [ ] Tabs, Accordion, Dialog, etc.

### Utility Components (Priority 3)
Quick wins:
- [ ] StatusDot, Chip, Separator, etc.

---

## Step 6: Add Gradient Backgrounds (20 minutes)

### Create Gradient Sphere Component

1. **Draw ellipse:** 750x750px
2. **Add radial gradient:**
   - Center: `primary-500` at 100%
   - Edge: transparent
3. **Apply blur:** Layer Blur 80-100px
4. **Set opacity:** 16%
5. **Create component:** Name it "Background/Gradient Sphere"

### Create Background Template

1. **Create frame:** 1440x900px
2. **Add 6 gradient sphere instances**
3. **Position randomly** across frame
4. **Lock all sphere layers**
5. **Name:** "Template/Page Background"

Use this template for all documentation pages.

---

## Step 7: Organize & Publish (30 minutes)

### File Structure

Create these pages:
```
📄 🎨 Cover
📄 📚 Design Tokens
📄 🔥 Foundation Library (main components)
📄 🛠️ Extended Library
📄 ⚡ Utility Library
📄 📐 Layouts
📄 🎭 Showcase
📄 🗂️ Archive (imported references)
```

### Publish Library

1. **File → Publish Library**
2. **Name:** Campfire Design System v1.0
3. **Description:** Personal design system with earthy aesthetic
4. **Add cover:** Use screenshot from Showcase page
5. **Click Publish**

**Result:** ✅ Your library is now available to use in other Figma files!

---

## Time Estimates

| Phase | Time | Priority |
|-------|------|----------|
| Export & import tokens | 15 min | Required |
| Import visual references | 30 min | Helpful |
| Build 5 core components | 2 hours | Required |
| Build 12 Foundation components | 4 hours | High |
| Build 20 Extended components | 6 hours | Medium |
| Build 8 Utility components | 2 hours | Low |
| Add backgrounds & polish | 1 hour | Nice to have |
| **Total** | **15-16 hours** | - |

**MVP (Minimum Viable):** Tokens + 5 core components = **2.5 hours**

---

## Pro Tips

### Speed Up Component Building

1. **Use duplicates:** Build Button once, duplicate for all button-like components
2. **Copy styles:** Use "Copy/Paste Properties" (`Cmd+Opt+C` / `Cmd+Opt+V`)
3. **Component swap:** Reuse patterns across components
4. **Keyboard shortcuts:** Learn them, save hours

### Avoid Common Mistakes

❌ **Don't hard-code colors** → Use variables  
❌ **Don't skip auto-layout** → Essential for responsive  
❌ **Don't forget constraints** → Components break without them  
❌ **Don't over-engineer v1** → Ship fast, iterate later

### Maintain Sync

Set a weekly review:
1. Check for code changes in Git
2. Update Figma components to match
3. Re-export tokens if CSS changed
4. Communicate updates to team

---

## You're Done! 🎉

Your Campfire Design System is now in Figma as a proper component library.

**Next:**
- Share with your team
- Use in actual design projects
- Iterate based on real usage
- Keep code and design in sync

---

## Need Help?

See the detailed guide: `/guidelines/FigmaLibraryGuide.md`  
Or the workflow guide: `/guidelines/FigmaImportWorkflow.md`

**Questions?** Check Figma Community forums or Tokens Studio docs.

---

**Remember:** Your React implementation is already excellent. The Figma library is just a mirror of what you've built. Keep it simple, ship v1.0, then iterate! 🔥
