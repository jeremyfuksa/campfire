import React, { useState } from "react";
import { DesignTokensPage } from "./components/DesignTokensPage";
import { FoundationComponentsPage } from "./components/FoundationComponentsPage_new";
import { CompleteReferencePage } from "./components/CompleteReferencePage";
import { GridsLayoutsPage } from "./components/GridsLayoutsPage";
import { TestingExamplesPage } from "./components/TestingExamplesPage";
import { GettingStartedPage } from "./components/GettingStartedPage";

export default function App() {
  const [activePage, setActivePage] = useState("getting-started");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Apply theme to document
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigation = [
    {
      id: "getting-started",
      label: "Getting Started",
      icon: "fa-solid fa-compass",
    },
    {
      id: "design-tokens",
      label: "Design Tokens",
      icon: "fa-solid fa-palette",
    },
    {
      id: "components",
      label: "Components",
      icon: "fa-solid fa-cubes",
    },
    {
      id: "grids-layouts",
      label: "Grids & Layouts",
      icon: "fa-solid fa-table-cells",
    },
    {
      id: "testing-examples",
      label: "Testing & Examples",
      icon: "fa-solid fa-flask",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 relative overflow-hidden"
        style={{
          backgroundColor: "var(--bg-base)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between relative">
          <a
            href="https://github.com/jeremyfuksa/campfire"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%)",
              }}
            >
              <i
                className="fa-solid fa-fire"
                style={{ fontSize: "18px", color: "white" }}
              ></i>
            </div>
            <div>
              <h1
                className="mb-0"
                style={{
                  fontSize: "20px",
                  background:
                    "linear-gradient(135deg, var(--primary-600), var(--secondary-600))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Campfire Design System
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-tertiary)",
                  marginTop: "2px",
                }}
              >
                Foundation v1.0 — Warm & Natural
              </p>
            </div>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--bg-muted)",
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
            }}
          >
            <i
              className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}
              style={{ fontSize: "14px" }}
            ></i>
            <span style={{ fontSize: "14px" }}>
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className="sticky top-20 z-40"
        style={{
          backgroundColor: "var(--bg-base)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-1 -mb-px">
            {navigation.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className="flex items-center gap-2 px-6 py-4 transition-colors relative"
                  style={{
                    color: isActive
                      ? "var(--interactive-default)"
                      : "var(--text-secondary)",
                    backgroundColor: isActive
                      ? "transparent"
                      : "transparent",
                    borderBottom: isActive
                      ? "2px solid var(--interactive-default)"
                      : "2px solid transparent",
                  }}
                >
                  <i
                    className={item.icon}
                    style={{ fontSize: "14px" }}
                  ></i>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? "600" : "500",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activePage === "getting-started" && (
          <GettingStartedPage onOpenReference={() => setActivePage("complete-reference")} />
        )}
        {activePage === "design-tokens" && <DesignTokensPage />}
        {activePage === "components" && <FoundationComponentsPage />}
        {activePage === "grids-layouts" && <GridsLayoutsPage />}
        {activePage === "testing-examples" && (
          <TestingExamplesPage />
        )}
        {activePage === "complete-reference" && <CompleteReferencePage />}
      </main>

      {/* Footer - only for pages without sidebars */}
      {activePage === "testing-examples" && (
        <footer
          className="py-8"
          style={{
            borderTop: "1px solid var(--border-default)",
          }}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--text-tertiary)",
                }}
              >
                © 2025 Campfire Design System. All rights
                reserved.
              </div>
              <div className="flex gap-6">
                <a
                  href="/"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/jeremyfuksa/campfire"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  GitHub
                </a>
                <a
                  href="https://github.com/jeremyfuksa/campfire/issues"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
