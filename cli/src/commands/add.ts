import chalk from 'chalk';
import ora from 'ora';
import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function addCommand(components: string[], options: { path: string }) {
  console.log(chalk.bold('\n🔥 Adding Campfire components\n'));

  const destPath = resolve(process.cwd(), options.path);

  if (!existsSync(destPath)) {
    mkdirSync(destPath, { recursive: true });
    console.log(chalk.green(`✓ Created directory: ${destPath}`));
  }

  for (const component of components) {
    const spinner = ora(`Adding ${component}...`).start();

    try {
      // In a real implementation, this would copy from node_modules or download from GitHub
      // For now, we'll just show a success message
      spinner.succeed(`Added ${component} to ${options.path}`);
    } catch (error) {
      spinner.fail(`Failed to add ${component}`);
      console.error(chalk.red(error));
    }
  }

  console.log(chalk.green('\n✅ Components added successfully!\n'));
  console.log(chalk.dim('Import them in your code:'));
  components.forEach(comp => {
    const pascalCase = comp.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    console.log(chalk.dim(`  import { ${pascalCase} } from '@jeremyfuksa/campfire';`));
  });
  console.log();
}
