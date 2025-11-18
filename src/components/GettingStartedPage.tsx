import React from "react";
interface GettingStartedPageProps {
  onOpenReference: () => void;
}

export function GettingStartedPage({ onOpenReference }: GettingStartedPageProps) {
  return (
    <section
      className="min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top, rgba(248, 227, 204, 0.4), transparent 60%), var(--bg-base)",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-24 grid gap-12 lg:grid-cols-[3fr,2fr] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em]" style={{ color: "var(--text-tertiary)" }}>
            Campfire Design System
          </p>
          <h1 className="text-5xl lg:text-6xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            Earthy, friendly, open source UI
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "40ch", lineHeight: 1.8 }}>
            Campfire is the warm, grounded design system for teams that want a cozy feel without sacrificing clarity.
            Built with nature-inspired gradients, tactile elevations, and Tailwind-friendly utilities, it ships as a
            fully open-source theme you can drop into any React project.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <PrimaryCTA label="Install via npm" />
            <button
              className="px-5 py-3 rounded-lg font-medium"
              style={{
                color: "var(--interactive-default)",
                border: "1px solid var(--interactive-default)",
                backgroundColor: "transparent",
              }}
              onClick={onOpenReference}
            >
              View complete reference
            </button>
          </div>
        </div>
        <div
          className="rounded-3xl p-8 space-y-4"
          style={{
            border: "1px solid var(--border-default)",
            backgroundColor: "var(--bg-base)",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--text-tertiary)" }}>
            Install instructions
          </p>
          <div className="space-y-3">
            <code className="block rounded-2xl px-4 py-3" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
              {"npm install @jeremyfuksa/campfire"}
            </code>
            <code className="block rounded-2xl px-4 py-3" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
              {"yarn add @jeremyfuksa/campfire"}
            </code>
            <p style={{ color: "var(--text-secondary)" }}>
              Import the stylesheet once and pull in the components you need.
            </p>
            <code className="block rounded-2xl px-4 py-3" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
              {"import '@jeremyfuksa/campfire/styles.css';"}
            </code>
            <code className="block rounded-2xl px-4 py-3" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
              {"import { Button } from '@jeremyfuksa/campfire';"}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimaryCTA({ label }: { label: string }) {
  return (
    <button
      className="px-5 py-3 rounded-lg font-medium text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-600), var(--secondary-600))",
      }}
      onClick={() => window.open("https://www.npmjs.com/package/@jeremyfuksa/campfire", "_blank")}
    >
      {label}
    </button>
  );
}
