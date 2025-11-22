/**
 * Campfire Theme for Hyper
 *
 * Installation:
 * 1. Open your Hyper config file (~/.hyper.js or %USERPROFILE%\.hyper.js)
 * 2. Copy the desired theme configuration below
 * 3. Paste it into the `config` section of your .hyper.js file
 */

// ============================================
// Campfire Light Theme
// ============================================
module.exports.campfireLight = {
  // Terminal colors
  colors: {
    black: '#2b303b',
    red: '#dc3a38',
    green: '#739038',
    yellow: '#ef991f',
    blue: '#4c627d',
    magenta: '#a8654f',
    cyan: '#8899b3',
    white: '#edeef1',
    lightBlack: '#5e6371',
    lightRed: '#e75351',
    lightGreen: '#8fb14b',
    lightYellow: '#f9c574',
    lightBlue: '#8098b0',
    lightMagenta: '#b87b6a',
    lightCyan: '#a3b2c9',
    lightWhite: '#f7f8f9',
  },

  // Background and foreground
  backgroundColor: '#f7f8f9',
  foregroundColor: '#2b303b',

  // Cursor
  cursorColor: '#4c627d',
  cursorAccentColor: '#f7f8f9',

  // Selection
  selectionColor: 'rgba(210, 218, 227, 0.5)',

  // Border
  borderColor: '#d8dbe0',

  // CSS styles (optional - customize further)
  css: `
    .tab_tab {
      color: #5e6371;
      background-color: #edeef1;
    }
    .tab_tab.tab_active {
      color: #2b303b;
      background-color: #f7f8f9;
      border-bottom-color: #4c627d;
    }
    .tab_tab:hover {
      color: #2b303b;
    }
  `,
};

// ============================================
// Campfire Dark Theme
// ============================================
module.exports.campfireDark = {
  // Terminal colors
  colors: {
    black: '#2b303b',
    red: '#dc3a38',
    green: '#739038',
    yellow: '#ef991f',
    blue: '#8098b0',
    magenta: '#c9998a',
    cyan: '#a3b2c9',
    white: '#edeef1',
    lightBlack: '#5e6371',
    lightRed: '#e75351',
    lightGreen: '#8fb14b',
    lightYellow: '#f9c574',
    lightBlue: '#acbbcc',
    lightMagenta: '#dbbdb3',
    lightCyan: '#b8c5d9',
    lightWhite: '#f7f8f9',
  },

  // Background and foreground
  backgroundColor: '#1c1f26',
  foregroundColor: '#f7f8f9',

  // Cursor
  cursorColor: '#acbbcc',
  cursorAccentColor: '#1c1f26',

  // Selection
  selectionColor: 'rgba(76, 98, 125, 0.5)',

  // Border
  borderColor: '#42454e',

  // CSS styles (optional - customize further)
  css: `
    .tab_tab {
      color: #9299a5;
      background-color: #2b303b;
    }
    .tab_tab.tab_active {
      color: #f7f8f9;
      background-color: #1c1f26;
      border-bottom-color: #8098b0;
    }
    .tab_tab:hover {
      color: #f7f8f9;
    }
  `,
};

// ============================================
// Usage Instructions
// ============================================
/*

To use Campfire Light theme, add this to your ~/.hyper.js config:

module.exports = {
  config: {
    // ... your other config

    // Campfire Light
    colors: {
      black: '#2b303b',
      red: '#dc3a38',
      green: '#739038',
      yellow: '#ef991f',
      blue: '#4c627d',
      magenta: '#a8654f',
      cyan: '#8899b3',
      white: '#edeef1',
      lightBlack: '#5e6371',
      lightRed: '#e75351',
      lightGreen: '#8fb14b',
      lightYellow: '#f9c574',
      lightBlue: '#8098b0',
      lightMagenta: '#b87b6a',
      lightCyan: '#a3b2c9',
      lightWhite: '#f7f8f9',
    },
    backgroundColor: '#f7f8f9',
    foregroundColor: '#2b303b',
    cursorColor: '#4c627d',
    cursorAccentColor: '#f7f8f9',
    selectionColor: 'rgba(210, 218, 227, 0.5)',
    borderColor: '#d8dbe0',
  }
};

---

To use Campfire Dark theme, add this to your ~/.hyper.js config:

module.exports = {
  config: {
    // ... your other config

    // Campfire Dark
    colors: {
      black: '#2b303b',
      red: '#dc3a38',
      green: '#739038',
      yellow: '#ef991f',
      blue: '#8098b0',
      magenta: '#c9998a',
      cyan: '#a3b2c9',
      white: '#edeef1',
      lightBlack: '#5e6371',
      lightRed: '#e75351',
      lightGreen: '#8fb14b',
      lightYellow: '#f9c574',
      lightBlue: '#acbbcc',
      lightMagenta: '#dbbdb3',
      lightCyan: '#b8c5d9',
      lightWhite: '#f7f8f9',
    },
    backgroundColor: '#1c1f26',
    foregroundColor: '#f7f8f9',
    cursorColor: '#acbbcc',
    cursorAccentColor: '#1c1f26',
    selectionColor: 'rgba(76, 98, 125, 0.5)',
    borderColor: '#42454e',
  }
};

*/
