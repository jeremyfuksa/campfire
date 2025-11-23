import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { AspectRatio } from "../aspect-ratio";

expect.extend(toHaveNoViolations);

describe("AspectRatio", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <img src="test.jpg" alt="Test" />
        </AspectRatio>
      );
      const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
      expect(aspectRatio).toBeInTheDocument();
    });

    it("renders children", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <div data-testid="child-content">Content</div>
        </AspectRatio>
      );
      expect(container.querySelector('[data-testid="child-content"]')).toBeInTheDocument();
    });
  });

  describe("Aspect Ratios", () => {
    it("renders with 16:9 ratio", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <div>16:9 content</div>
        </AspectRatio>
      );
      const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
      expect(aspectRatio).toBeInTheDocument();
    });

    it("renders with 4:3 ratio", () => {
      const { container } = render(
        <AspectRatio ratio={4 / 3}>
          <div>4:3 content</div>
        </AspectRatio>
      );
      const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
      expect(aspectRatio).toBeInTheDocument();
    });

    it("renders with 1:1 ratio (square)", () => {
      const { container } = render(
        <AspectRatio ratio={1}>
          <div>Square content</div>
        </AspectRatio>
      );
      const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
      expect(aspectRatio).toBeInTheDocument();
    });

    it("renders with 21:9 ratio (ultrawide)", () => {
      const { container } = render(
        <AspectRatio ratio={21 / 9}>
          <div>Ultrawide content</div>
        </AspectRatio>
      );
      const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
      expect(aspectRatio).toBeInTheDocument();
    });
  });

  describe("Common Use Cases", () => {
    it("wraps an image", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://example.com/image.jpg"
            alt="Landscape"
            style={{ objectFit: "cover" }}
          />
        </AspectRatio>
      );
      const image = container.querySelector("img");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt", "Landscape");
    });

    it("wraps a video", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <video src="video.mp4" data-testid="video-element" />
        </AspectRatio>
      );
      expect(container.querySelector('[data-testid="video-element"]')).toBeInTheDocument();
    });

    it("wraps an iframe", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://example.com/embed"
            title="Embedded content"
            data-testid="iframe-element"
          />
        </AspectRatio>
      );
      expect(container.querySelector('[data-testid="iframe-element"]')).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations with image", async () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <img src="test.jpg" alt="Test image" />
        </AspectRatio>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with decorative content", async () => {
      const { container } = render(
        <AspectRatio ratio={1}>
          <div aria-hidden="true">Decorative</div>
        </AspectRatio>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute", () => {
      const { container } = render(
        <AspectRatio ratio={16 / 9}>
          <div>Content</div>
        </AspectRatio>
      );
      const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
      expect(aspectRatio).toHaveAttribute("data-slot", "aspect-ratio");
    });
  });
});
