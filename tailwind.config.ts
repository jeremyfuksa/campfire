import type { Config } from "tailwindcss";

const scale = (name: string) =>
  Object.fromEntries(
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => [
      step,
      `var(--${name}-${step})`,
    ]),
  );

const statusScale = (name: string) =>
  Object.fromEntries(
    [500, 600, 700].map((step) => [step, `var(--${name}-${step})`]),
  );

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        // Full Campfire palette, exposed as Tailwind utilities so consumers
        // can write bg-primary-700, text-neutral-500, etc.
        primary: {
          ...scale("primary"),
          DEFAULT: "var(--interactive-default)",
          foreground: "var(--text-inverse)",
        },
        secondary: {
          ...scale("secondary"),
          DEFAULT: "var(--bg-subtle)",
          foreground: "var(--text-primary)",
        },
        neutral: scale("neutral"),
        success: statusScale("success"),
        warning: statusScale("warning"),
        danger: statusScale("danger"),
        info: statusScale("info"),

        // shadcn bridge tokens — keep existing names so existing components
        // keep working.
        background: "var(--bg-base)",
        foreground: "var(--text-primary)",
        card: "var(--bg-base)",
        "card-foreground": "var(--text-primary)",
        popover: "var(--bg-base)",
        "popover-foreground": "var(--text-primary)",
        muted: {
          DEFAULT: "var(--bg-muted)",
          foreground: "var(--text-secondary)",
        },
        accent: {
          DEFAULT: "var(--bg-subtle)",
          foreground: "var(--text-primary)",
        },
        destructive: {
          DEFAULT: "var(--danger-600)",
          foreground: "var(--text-inverse)",
        },
        border: "var(--border-default)",
        input: "var(--border-default)",
        ring: "var(--interactive-default)",
        "input-background": "var(--input-background)",
      },
      transitionTimingFunction: {
        campfire: "var(--ease-campfire)",
      },
    },
  },
  plugins: [],
};

export default config;
