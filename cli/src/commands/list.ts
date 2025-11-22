import chalk from 'chalk';

const components = [
  'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar',
  'badge', 'breadcrumb', 'button', 'calendar', 'card', 'carousel',
  'chart', 'checkbox', 'chip', 'code-block', 'collapsible', 'command',
  'context-menu', 'copy-button', 'dialog', 'drawer', 'dropdown-menu',
  'empty-state', 'file-upload', 'form', 'helper-text', 'hover-card',
  'input', 'input-otp', 'keyboard-key', 'label', 'link', 'list-group',
  'menubar', 'navigation-menu', 'pagination', 'popover', 'progress',
  'radio-group', 'resizable', 'scroll-area', 'search-input', 'select',
  'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner',
  'stat-card', 'status-dot', 'stepper', 'switch', 'table', 'tabs',
  'textarea', 'toggle', 'toggle-group', 'tooltip'
];

export function listCommand() {
  console.log(chalk.bold('\n🔥 Available Campfire Components\n'));

  const columns = 3;
  const rows = Math.ceil(components.length / columns);

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const index = i + j * rows;
      if (index < components.length) {
        row.push(components[index].padEnd(20));
      }
    }
    console.log('  ' + row.join(''));
  }

  console.log(chalk.dim(`\n  Total: ${components.length} components\n`));
  console.log(chalk.dim('Usage: campfire add <component-name>\n'));
}
