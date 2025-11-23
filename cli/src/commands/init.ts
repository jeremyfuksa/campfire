import chalk from 'chalk';
import ora from 'ora';
import { exec } from 'child_process';
import { promisify } from 'util';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const execAsync = promisify(exec);

export async function initCommand() {
  console.log(chalk.bold('\n🔥 Initializing Campfire Design System\n'));

  const spinner = ora('Installing dependencies...').start();

  try {
    // Install the package
    await execAsync('npm install @jeremyfuksa/campfire');
    spinner.succeed('Dependencies installed');

    // Create components directory
    const componentsDir = join(process.cwd(), 'src/components/ui');
    if (!existsSync(componentsDir)) {
      mkdirSync(componentsDir, { recursive: true });
      spinner.succeed(`Created directory: ${componentsDir}`);
    }

    // Create utils file
    const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

    writeFileSync(join(componentsDir, 'utils.ts'), utilsContent);
    spinner.succeed('Created utils.ts');

    console.log(chalk.green('\n✅ Campfire initialized successfully!\n'));
    console.log(chalk.dim('Next steps:'));
    console.log(chalk.dim('  1. Add components: campfire add button input'));
    console.log(chalk.dim('  2. Import in your app: import { Button } from "@jeremyfuksa/campfire"'));
    console.log(chalk.dim('  3. Include styles: import "@jeremyfuksa/campfire/styles.css"\n'));
  } catch (error) {
    spinner.fail('Installation failed');
    console.error(chalk.red(error));
    process.exit(1);
  }
}
