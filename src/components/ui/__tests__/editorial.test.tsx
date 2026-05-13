import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  EditorialTheme,
  EditorialEyebrow,
  EditorialPullquote,
  EditorialDropCap,
} from "../editorial";

expect.extend(toHaveNoViolations);

describe("EditorialTheme", () => {
  it("renders children inside a wrapper", () => {
    render(
      <EditorialTheme>
        <span>hello</span>
      </EditorialTheme>,
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("defaults to the warm tone", () => {
    const { container } = render(
      <EditorialTheme>
        <span>x</span>
      </EditorialTheme>,
    );
    const wrapper = container.querySelector("[data-editorial-theme]");
    expect(wrapper).toHaveAttribute("data-editorial-theme", "warm");
  });

  it.each(["warm", "cool", "deep"] as const)(
    "applies the %s tone attribute",
    (tone) => {
      const { container } = render(
        <EditorialTheme tone={tone}>
          <span>x</span>
        </EditorialTheme>,
      );
      expect(
        container.querySelector(`[data-editorial-theme="${tone}"]`),
      ).toBeInTheDocument();
    },
  );

  it("renders with a custom tag via as prop", () => {
    const { container } = render(
      <EditorialTheme as="section">
        <span>x</span>
      </EditorialTheme>,
    );
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});

describe("EditorialEyebrow", () => {
  it("renders children with the accent class", () => {
    render(<EditorialEyebrow>Field Notes</EditorialEyebrow>);
    const eyebrow = screen.getByText("Field Notes");
    expect(eyebrow).toHaveClass("text-editorial-accent");
  });
});

describe("EditorialPullquote", () => {
  it("renders the quote text", () => {
    render(<EditorialPullquote>Quoted line.</EditorialPullquote>);
    expect(screen.getByText("Quoted line.")).toBeInTheDocument();
  });

  it("applies the ruled variant by default", () => {
    const { container } = render(
      <EditorialPullquote>Quoted line.</EditorialPullquote>,
    );
    const figure = container.querySelector("figure");
    expect(figure).toHaveClass("border-l-4", "border-editorial-accent");
  });

  it("applies the tinted variant when requested", () => {
    const { container } = render(
      <EditorialPullquote variant="tinted">Quoted line.</EditorialPullquote>,
    );
    const figure = container.querySelector("figure");
    expect(figure).toHaveClass("bg-editorial-accent-subtle");
  });

  it("renders a citation when provided", () => {
    render(
      <EditorialPullquote cite="Field Notes, p. 12">
        Quoted line.
      </EditorialPullquote>,
    );
    expect(screen.getByText(/Field Notes, p\. 12/)).toBeInTheDocument();
  });
});

describe("EditorialDropCap", () => {
  it("renders the letter with the accent class", () => {
    render(<EditorialDropCap>A</EditorialDropCap>);
    const cap = screen.getByText("A");
    expect(cap).toHaveClass("text-editorial-accent");
  });
});

describe("Accessibility", () => {
  it("has no axe violations for a composed editorial section", async () => {
    const { container } = render(
      <EditorialTheme tone="cool">
        <article>
          <EditorialEyebrow>Section</EditorialEyebrow>
          <h2>Title</h2>
          <p>
            <EditorialDropCap>T</EditorialDropCap>
            ext goes here.
          </p>
          <EditorialPullquote cite="Source">Quoted.</EditorialPullquote>
        </article>
      </EditorialTheme>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
