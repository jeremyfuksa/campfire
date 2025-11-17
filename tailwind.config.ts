import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-base)",
        foreground: "var(--text-primary)",
        card: "var(--bg-base)",
        "card-foreground": "var(--text-primary)",
        popover: "var(--bg-base)",
        "popover-foreground": "var(--text-primary)",
        primary: "var(--interactive-default)",
        "primary-foreground": "var(--text-inverse)",
        secondary: "var(--bg-subtle)",
        "secondary-foreground": "var(--text-primary)",
        muted: "var(--bg-muted)",
        "muted-foreground": "var(--text-secondary)",
        accent: "var(--bg-subtle)",
        "accent-foreground": "var(--text-primary)",
        destructive: "var(--danger-600)",
        "destructive-foreground": "var(--text-inverse)",
        border: "var(--border-default)",
        input: "var(--border-default)",
        ring: "var(--interactive-default)",
        "input-background": "var(--input-background)",
      },
    },
  },
  plugins: [],
};

export default config;
