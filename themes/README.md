# Campfire Themes

The Campfire Design System color palette is available as themes for popular code editors and terminal emulators.

## 🎨 Available Themes

- **VS Code** - Full color themes (light & dark)
- **Terminals** - Windows Terminal, iTerm2, Hyper, Alacritty, Kitty
- **Color Exports** - JSON, CSS, SCSS for custom integrations

---

## 📦 VS Code Theme

### Installation

**Option 1: Manual Installation**

1. Copy the `vscode` folder to your VS Code extensions directory:
   - **Windows:** `%USERPROFILE%\.vscode\extensions\campfire-theme`
   - **macOS/Linux:** `~/.vscode/extensions/campfire-theme`

2. Restart VS Code

3. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)

4. Type `Preferences: Color Theme` and select either:
   - **Campfire Light**
   - **Campfire Dark**

**Option 2: From JSON (Custom)**

1. Open Command Palette → `Preferences: Open Settings (JSON)`
2. Add the theme colors from `vscode/campfire-light.json` or `vscode/campfire-dark.json`

### Features

✅ Semantic syntax highlighting
✅ Optimized for React, TypeScript, JavaScript, HTML, CSS
✅ Warm, earthy color palette
✅ Reduced eye strain with muted tones
✅ Git decoration colors
✅ Terminal integration

---

## 🖥️ Terminal Themes

### Windows Terminal

**Installation:**

1. Open Windows Terminal settings (`Ctrl+,`)
2. Click "Open JSON file" at the bottom left
3. Copy the schemes from `terminals/windows-terminal.json` into the `schemes` array
4. Set your profile to use the theme:

```json
{
  "profiles": {
    "defaults": {
      "colorScheme": "Campfire Dark"
    }
  }
}
```

---

### iTerm2 (macOS)

**Installation:**

1. Download `Campfire-Light.itermcolors` or `Campfire-Dark.itermcolors`
2. Double-click the file to import
3. Go to **iTerm2 → Preferences → Profiles → Colors**
4. Select "Campfire Light" or "Campfire Dark" from the dropdown

**Alternative:**

```bash
# Import from command line
open themes/terminals/Campfire-Dark.itermcolors
```

---

### Hyper

**Installation:**

1. Locate your Hyper config file:
   - **Windows:** `%USERPROFILE%\.hyper.js`
   - **macOS/Linux:** `~/.hyper.js`

2. Open `terminals/hyper-campfire.js` and copy the desired theme config

3. Paste into the `config` section of your `.hyper.js`:

```javascript
module.exports = {
  config: {
    // Paste Campfire Light or Dark config here
    colors: {
      black: '#2b303b',
      red: '#dc3a38',
      // ... rest of colors
    },
    backgroundColor: '#1c1f26',
    foregroundColor: '#f7f8f9',
    // ... rest of config
  }
};
```

4. Save and restart Hyper

---

### Alacritty

**Installation:**

1. Locate your Alacritty config:
   - **Windows:** `%APPDATA%\alacritty\alacritty.toml`
   - **macOS/Linux:** `~/.config/alacritty/alacritty.toml`

2. Copy the desired theme section from `terminals/alacritty.toml`

3. Paste into your `alacritty.toml`:

```toml
[colors.primary]
background = "#1c1f26"
foreground = "#f7f8f9"

[colors.cursor]
text = "#1c1f26"
cursor = "#acbbcc"

# ... rest of colors
```

4. Save and restart Alacritty

---

### Kitty

**Installation:**

1. Copy the theme file to your Kitty config directory:
   ```bash
   # Dark theme
   cp terminals/kitty-dark.conf ~/.config/kitty/

   # Light theme
   cp terminals/kitty-light.conf ~/.config/kitty/
   ```

2. Include it in your `kitty.conf`:
   ```bash
   # Dark theme
   include ./kitty-dark.conf

   # Or light theme
   include ./kitty-light.conf
   ```

3. Reload Kitty config: `Ctrl+Shift+F5`

---

## 🎨 Color Exports

### JSON (colors.json)

Use the structured color palette in any application:

```json
{
  "palettes": {
    "primary": {
      "600": "#4c627d"
    }
  }
}
```

**Use cases:**
- Design tools (Figma, Sketch)
- Custom application themes
- Documentation

---

### CSS (colors.css)

Import CSS custom properties:

```css
@import url('path/to/colors.css');

.my-component {
  background: var(--campfire-bg-base);
  color: var(--campfire-text-primary);
  border: 1px solid var(--campfire-border-default);
}
```

**Features:**
- Namespaced variables (`--campfire-*`)
- Light/dark mode support via `.dark` class or `data-theme="dark"`
- System preference support via `prefers-color-scheme`

---

### SCSS Variables

Coming soon! Watch this space for SCSS variable exports.

---

## 🌈 Color Reference

### Primary (Cello - Slate Blue-Gray)
Used for interactive elements, links, primary actions

### Secondary (Terracotta Clay)
Used for accents, highlights

### Neutral (Black Rock)
Used for text, borders, backgrounds

### Semantic Colors
- **Success:** Forest green tones
- **Warning:** Golden amber
- **Danger:** Earthy red
- **Info:** Muted blue

---

## 🔧 Customization

### Modifying Themes

All theme files are plain text (JSON, TOML, CSS). You can:

1. **Fork and modify** - Adjust colors to your preference
2. **Extract specific colors** - Use only what you need
3. **Combine with other themes** - Mix Campfire colors with other palettes

### Creating New Platform Themes

Use `exports/colors.json` as the source of truth. It contains all palette definitions and semantic mappings.

---

## 🤝 Contributing

Found a bug or want to add support for another platform? Contributions welcome!

**Platforms we'd love to support:**
- [ ] JetBrains IDEs (IntelliJ, WebStorm, etc.)
- [ ] Sublime Text
- [ ] Vim/Neovim
- [ ] Emacs
- [ ] Xcode
- [ ] Zed
- [ ] More terminal emulators

---

## 📄 License

MIT License - Same as the Campfire Design System

---

## 🔗 Links

- [Campfire Design System](https://jeremyfuksa.github.io/campfire)
- [GitHub Repository](https://github.com/jeremyfuksa/campfire)
- [Report Issues](https://github.com/jeremyfuksa/campfire/issues)
