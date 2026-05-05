import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ScrollArea, ScrollBar } from "../scroll-area";

expect.extend(toHaveNoViolations);

describe("ScrollArea", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ScrollArea>
        <div>Scrollable content</div>
      </ScrollArea>
    );
    expect(container.querySelector('[data-slot="scroll-area"]')).toBeInTheDocument();
  });

  it("renders content", () => {
    const { getByText } = render(
      <ScrollArea>
        <p>This is scrollable content</p>
      </ScrollArea>
    );
    expect(getByText("This is scrollable content")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <ScrollArea className="custom-scroll">
        <div>Content</div>
      </ScrollArea>
    );
    const scrollArea = container.querySelector(".custom-scroll");
    expect(scrollArea).toBeInTheDocument();
  });

  // Radix's ScrollAreaScrollbar is wrapped in Presence and only mounts when
  // overflow is detected — which never happens in jsdom because there's no
  // layout engine. We verify the viewport renders instead; the scrollbar
  // mounting itself is exercised by Radix's own tests + visual review.
  it("renders viewport for tall content", () => {
    const { container } = render(
      <ScrollArea>
        <div style={{ height: "1000px" }}>Tall content</div>
      </ScrollArea>
    );
    const viewport = container.querySelector('[data-slot="scroll-area-viewport"]');
    expect(viewport).toBeInTheDocument();
  });

  it("renders viewport for wide content with explicit horizontal ScrollBar", () => {
    const { container } = render(
      <ScrollArea>
        <ScrollBar orientation="horizontal" />
        <div style={{ width: "1000px" }}>Wide content</div>
      </ScrollArea>
    );
    const viewport = container.querySelector('[data-slot="scroll-area-viewport"]');
    expect(viewport).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <ScrollArea>
        <div>Accessible scrollable content</div>
      </ScrollArea>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
