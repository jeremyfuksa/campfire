import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar";

expect.extend(toHaveNoViolations);

describe("Avatar", () => {
  describe("Avatar Component", () => {
    it("renders correctly", () => {
      const { container } = render(<Avatar />);
      const avatar = container.querySelector('[data-slot="avatar"]');
      expect(avatar).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(<Avatar className="custom-avatar" />);
      const avatar = container.querySelector('[data-slot="avatar"]');
      expect(avatar).toHaveClass("custom-avatar");
    });

    it("has rounded-full class", () => {
      const { container } = render(<Avatar />);
      const avatar = container.querySelector('[data-slot="avatar"]');
      expect(avatar).toHaveClass("rounded-full");
    });
  });

  describe("AvatarImage Component", () => {
    it("renders image with src", () => {
      render(
        <Avatar>
          <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
        </Avatar>
      );
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "https://example.com/avatar.jpg");
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src="https://example.com/avatar.jpg" alt="Avatar" />
        </Avatar>
      );
      const image = container.querySelector('[data-slot="avatar-image"]');
      expect(image).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src="test.jpg" alt="Test" className="custom-image" />
        </Avatar>
      );
      const image = container.querySelector('[data-slot="avatar-image"]');
      expect(image).toHaveClass("custom-image");
    });
  });

  describe("AvatarFallback Component", () => {
    it("renders fallback content", () => {
      render(
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      );
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      );
      const fallback = container.querySelector('[data-slot="avatar-fallback"]');
      expect(fallback).toBeInTheDocument();
    });

    it("renders with custom className", () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback className="custom-fallback">XY</AvatarFallback>
        </Avatar>
      );
      const fallback = container.querySelector('[data-slot="avatar-fallback"]');
      expect(fallback).toHaveClass("custom-fallback");
    });

    it("has rounded-full class", () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>ZZ</AvatarFallback>
        </Avatar>
      );
      const fallback = container.querySelector('[data-slot="avatar-fallback"]');
      expect(fallback).toHaveClass("rounded-full");
    });
  });

  describe("Avatar Composition", () => {
    it("renders complete avatar with image and fallback", () => {
      render(
        <Avatar>
          <AvatarImage src="https://example.com/avatar.jpg" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      );

      // Image should be present
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });

    it("shows fallback when image fails to load", async () => {
      render(
        <Avatar>
          <AvatarImage src="https://example.com/invalid.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      );

      // Fallback should eventually be visible (Radix handles image loading)
      await waitFor(() => {
        expect(screen.getByText("UN")).toBeInTheDocument();
      });
    });
  });

  describe("Common Use Cases", () => {
    it("renders user initials in fallback", () => {
      render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      );
      expect(screen.getByText("AB")).toBeInTheDocument();
    });

    it("renders icon in fallback", () => {
      render(
        <Avatar>
          <AvatarFallback>
            <svg data-testid="user-icon" />
          </AvatarFallback>
        </Avatar>
      );
      expect(screen.getByTestId("user-icon")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations with image", async () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
        </Avatar>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with fallback", async () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("image has alt text", () => {
      render(
        <Avatar>
          <AvatarImage src="test.jpg" alt="Profile picture" />
        </Avatar>
      );
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("alt", "Profile picture");
    });
  });

  describe("Data Attributes", () => {
    it("avatar has data-slot attribute", () => {
      const { container } = render(<Avatar />);
      const avatar = container.querySelector('[data-slot="avatar"]');
      expect(avatar).toHaveAttribute("data-slot", "avatar");
    });

    it("image has data-slot attribute", () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src="test.jpg" alt="Test" />
        </Avatar>
      );
      const image = container.querySelector('[data-slot="avatar-image"]');
      expect(image).toHaveAttribute("data-slot", "avatar-image");
    });

    it("fallback has data-slot attribute", () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>
      );
      const fallback = container.querySelector('[data-slot="avatar-fallback"]');
      expect(fallback).toHaveAttribute("data-slot", "avatar-fallback");
    });
  });
});
