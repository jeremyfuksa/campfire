#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { addCommand } from './commands/add.js';
import { initCommand } from './commands/init.js';
import { listCommand } from './commands/list.js';

const program = new Command();

program
  .name('campfire')
  .description('CLI tool for Campfire Design System')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize Campfire in your project')
  .action(initCommand);

program
  .command('add <components...>')
  .description('Add components to your project')
  .option('-p, --path <path>', 'Destination path', 'src/components/ui')
  .action(addCommand);

program
  .command('list')
  .description('List all available components')
  .action(listCommand);

program.parse();
