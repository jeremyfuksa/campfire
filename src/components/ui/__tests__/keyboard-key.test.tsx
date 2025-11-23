import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { KeyboardKey, KeyboardShortcut } from "../keyboard-key";

expect.extend(toHaveNoViolations);

describe("KeyboardKey", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<KeyboardKey>Ctrl</KeyboardKey>);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
    });

    it("renders single key", () => {
      render(<KeyboardKey>A</KeyboardKey>);
      expect(screen.getByText("A")).toBeInTheDocument();
    });

    it("renders special key names", () => {
      render(<KeyboardKey>Enter</KeyboardKey>);
      expect(screen.getByText("Enter")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      render(<KeyboardKey className="custom-key">K</KeyboardKey>);
      const key = screen.getByText("K");
      expect(key).toHaveClass("custom-key");
    });

    it("renders as kbd element", () => {
      render(<KeyboardKey>Esc</KeyboardKey>);
      const key = screen.getByText("Esc");
      expect(key.tagName).toBe("KBD");
    });
  });

  describe("Styling", () => {
    it("has monospace font family", () => {
      render(<KeyboardKey>Tab</KeyboardKey>);
      const key = screen.getByText("Tab");
      expect(key).toHaveStyle({ fontFamily: "JetBrains Mono, monospace" });
    });

    it("has border and shadow", () => {
      render(<KeyboardKey>Space</KeyboardKey>);
      const key = screen.getByText("Space");
      expect(key).toHaveClass("border", "shadow-sm");
    });

    it("has padding and rounding", () => {
      render(<KeyboardKey>F1</KeyboardKey>);
      const key = screen.getByText("F1");
      expect(key).toHaveClass("px-2", "py-1", "rounded");
    });
  });

  describe("Common Keys", () => {
    it("renders modifier keys", () => {
      render(
        <>
          <KeyboardKey>Ctrl</KeyboardKey>
          <KeyboardKey>Shift</KeyboardKey>
          <KeyboardKey>Alt</KeyboardKey>
          <KeyboardKey>Cmd</KeyboardKey>
        </>
      );

      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("Shift")).toBeInTheDocument();
      expect(screen.getByText("Alt")).toBeInTheDocument();
      expect(screen.getByText("Cmd")).toBeInTheDocument();
    });

    it("renders function keys", () => {
      render(<KeyboardKey>F12</KeyboardKey>);
      expect(screen.getByText("F12")).toBeInTheDocument();
    });

    it("renders arrow keys", () => {
      render(<KeyboardKey>↑</KeyboardKey>);
      expect(screen.getByText("↑")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<KeyboardKey>Enter</KeyboardKey>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});

describe("KeyboardShortcut", () => {
  describe("Rendering", () => {
    it("renders shortcut with multiple keys", () => {
      render(<KeyboardShortcut keys={["Ctrl", "K"]} />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("K")).toBeInTheDocument();
    });

    it("renders separator between keys", () => {
      const { container } = render(<KeyboardShortcut keys={["Ctrl", "Shift", "P"]} />);
      const separators = container.querySelectorAll("span > span");
      expect(separators.length).toBeGreaterThan(0);
    });

    it("uses default plus separator", () => {
      render(<KeyboardShortcut keys={["Ctrl", "C"]} />);
      expect(screen.getByText("+")).toBeInTheDocument();
    });

    it("accepts custom separator", () => {
      render(<KeyboardShortcut keys={["Cmd", "K"]} separator="-" />);
      expect(screen.getByText("-")).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <KeyboardShortcut keys={["Alt", "F4"]} className="custom-shortcut" />
      );
      const shortcut = container.querySelector(".custom-shortcut");
      expect(shortcut).toBeInTheDocument();
    });
  });

  describe("Common Shortcuts", () => {
    it("renders copy shortcut", () => {
      render(<KeyboardShortcut keys={["Ctrl", "C"]} />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("C")).toBeInTheDocument();
    });

    it("renders paste shortcut", () => {
      render(<KeyboardShortcut keys={["Ctrl", "V"]} />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("V")).toBeInTheDocument();
    });

    it("renders command palette shortcut", () => {
      render(<KeyboardShortcut keys={["Ctrl", "K"]} />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("K")).toBeInTheDocument();
    });

    it("renders three-key combination", () => {
      render(<KeyboardShortcut keys={["Ctrl", "Shift", "P"]} />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("Shift")).toBeInTheDocument();
      expect(screen.getByText("P")).toBeInTheDocument();
    });
  });

  describe("Key Count", () => {
    it("renders single key", () => {
      render(<KeyboardShortcut keys={["Esc"]} />);
      expect(screen.getByText("Esc")).toBeInTheDocument();
    });

    it("renders two keys", () => {
      render(<KeyboardShortcut keys={["Alt", "Tab"]} />);
      expect(screen.getByText("Alt")).toBeInTheDocument();
      expect(screen.getByText("Tab")).toBeInTheDocument();
    });

    it("renders four keys", () => {
      render(<KeyboardShortcut keys={["Ctrl", "Alt", "Shift", "Delete"]} />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("Alt")).toBeInTheDocument();
      expect(screen.getByText("Shift")).toBeInTheDocument();
      expect(screen.getByText("Delete")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(<KeyboardShortcut keys={["Ctrl", "K"]} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with custom separator", async () => {
      const { container } = render(
        <KeyboardShortcut keys={["Cmd", "Shift", "P"]} separator=" then " />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
