/**
/**
 * Export Campfire Design Tokens to Figma-compatible JSON
 *
 * Run: node scripts/export-tokens.js
 * Output: figma-tokens.json (importable by Tokens Studio plugin)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read globals.css
const cssPath = path.join(__dirname, "../src/styles/globals.css");
const css = fs.readFileSync(cssPath, "utf8");

// Initialize token structure
const tokens = {
  colors: {
    primary: {},
    secondary: {},
    neutral: {},
    success: {},
    warning: {},
    danger: {},
    info: {},
    semantic: {}
  },
  spacing: {},
  radius: {},
  shadow: {},
  fontSize: {},
  fontWeight: {},
  lineHeight: {},
  letterSpacing: {}
};

// Parse CSS custom properties
const lines = css.split("\n");
let inRootBlock = false;

for (const line of lines) {
  const trimmed = line.trim();
  
  // Check if we're in :root block
  if (trimmed === ':root {') {
    inRootBlock = true;
    continue;
  }
  if (trimmed === '}' && inRootBlock) {
    inRootBlock = false;
    continue;
  }
  
  if (!inRootBlock) continue;
  
  // Parse CSS variable
  const match = trimmed.match(/--([^:]+):\s*([^;]+);/);
  if (!match) continue;
  
  const [, name, value] = match;
  const cleanValue = value.trim();
  
  // Categorize by prefix
  if (name.startsWith('primary-')) {
    const shade = name.replace('primary-', '');
    tokens.colors.primary[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  else if (name.startsWith('secondary-')) {
    const shade = name.replace('secondary-', '');
    tokens.colors.secondary[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  else if (name.startsWith('neutral-')) {
    const shade = name.replace('neutral-', '');
    tokens.colors.neutral[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  else if (name.startsWith('success-')) {
    const shade = name.replace('success-', '');
    tokens.colors.success[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  else if (name.startsWith('warning-')) {
    const shade = name.replace('warning-', '');
    tokens.colors.warning[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  else if (name.startsWith('danger-')) {
    const shade = name.replace('danger-', '');
    tokens.colors.danger[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  else if (name.startsWith('info-')) {
    const shade = name.replace('info-', '');
    tokens.colors.info[shade] = {
      value: cleanValue,
      type: 'color'
    };
  }
  // Semantic colors
  else if (name.startsWith('bg-') || name.startsWith('text-') || name.startsWith('border-') || name.startsWith('interactive-')) {
    tokens.colors.semantic[name] = {
      value: cleanValue,
      type: 'color'
    };
  }
  // Spacing
  else if (name.startsWith('spacing-')) {
    const number = name.replace('spacing-', '');
    tokens.spacing[number] = {
      value: cleanValue,
      type: 'spacing'
    };
  }
  // Border radius
  else if (name.startsWith('radius-')) {
    const size = name.replace('radius-', '');
    tokens.radius[size] = {
      value: cleanValue,
      type: 'borderRadius'
    };
  }
  // Shadows
  else if (name.startsWith('shadow-')) {
    const type = name.replace('shadow-', '');
    tokens.shadow[type] = {
      value: cleanValue,
      type: 'boxShadow'
    };
  }
  // Font sizes
  else if (name.startsWith('font-size-')) {
    const size = name.replace('font-size-', '');
    tokens.fontSize[size] = {
      value: cleanValue,
      type: 'fontSizes'
    };
  }
  // Font weights
  else if (name.startsWith('font-weight-')) {
    const weight = name.replace('font-weight-', '');
    tokens.fontWeight[weight] = {
      value: cleanValue,
      type: 'fontWeights'
    };
  }
  // Line heights
  else if (name.startsWith('line-height-')) {
    const height = name.replace('line-height-', '');
    tokens.lineHeight[height] = {
      value: cleanValue,
      type: 'lineHeights'
    };
  }
  // Letter spacing
  else if (name.startsWith('letter-spacing-')) {
    const spacing = name.replace('letter-spacing-', '');
    tokens.letterSpacing[spacing] = {
      value: cleanValue,
      type: 'letterSpacing'
    };
  }
}

// Add metadata
const output = {
  $metadata: {
    name: 'Campfire Design System',
    description: 'Design tokens for the Campfire Design System Foundation v1.0',
    version: '1.0.0',
    author: 'Campfire',
    exportedAt: new Date().toISOString()
  },
  ...tokens
};

// Write to file
const outputPath = path.join(__dirname, '../figma-tokens.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

// Print summary
console.log('✅ Tokens exported successfully!\n');
console.log('📊 Summary:');
console.log(`   • Colors: ${Object.keys(tokens.colors.primary).length} primary, ${Object.keys(tokens.colors.secondary).length} secondary, ${Object.keys(tokens.colors.neutral).length} neutral`);
console.log(`   • Spacing: ${Object.keys(tokens.spacing).length} tokens`);
console.log(`   • Radius: ${Object.keys(tokens.radius).length} tokens`);
console.log(`   • Shadows: ${Object.keys(tokens.shadow).length} tokens`);
console.log(`   • Typography: ${Object.keys(tokens.fontSize).length} sizes, ${Object.keys(tokens.fontWeight).length} weights`);
console.log(`\n📁 Output: ${outputPath}`);
console.log('\n📖 Next steps:');
console.log('   1. Open Figma');
console.log('   2. Install "Tokens Studio for Figma" plugin');
console.log('   3. Run the plugin: Plugins → Tokens Studio');
console.log('   4. Click "Load from file" and select figma-tokens.json');
console.log('   5. Click "Create Variables" to generate Figma variables');
console.log('\n🔥 Your Campfire tokens are ready for Figma!');
