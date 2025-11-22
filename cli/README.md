# Campfire CLI

Official CLI tool for the Campfire Design System.

## Installation

```bash
npm install -g @jeremyfuksa/campfire-cli
```

## Commands

### Initialize Campfire

```bash
campfire init
```

Installs Campfire and creates the necessary directory structure.

### Add Components

```bash
campfire add button input card
```

Adds specific components to your project. You can specify a custom path:

```bash
campfire add button --path src/ui
```

### List Components

```bash
campfire list
```

Shows all available components in the Campfire Design System.

## Usage Example

```bash
# Initialize in a new project
npx campfire init

# Add components you need
npx campfire add button card dialog

# List all available components
npx campfire list
```

## Development

```bash
# Build the CLI
npm run build

# Watch mode
npm run dev
```
