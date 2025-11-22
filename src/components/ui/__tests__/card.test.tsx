import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../card";

expect.extend(toHaveNoViolations);

describe("Card", () => {
  describe("Card Component", () => {
    it("renders correctly", () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId("card");
      expect(card).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<Card>Card content text</Card>);
      expect(screen.getByText("Card content text")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<Card className="custom-card" data-testid="card" />);
      const card = screen.getByTestId("card");
      expect(card).toHaveClass("custom-card");
    });

    it("has data-slot attribute", () => {
      render(<Card data-testid="card" />);
      const card = screen.getByTestId("card");
      expect(card).toHaveAttribute("data-slot", "card");
    });

    it("renders as div element", () => {
      render(<Card data-testid="card" />);
      const card = screen.getByTestId("card");
      expect(card.tagName).toBe("DIV");
    });

    it("accepts HTML div attributes", () => {
      render(<Card data-testid="card" role="region" aria-label="Card region" />);
      const card = screen.getByTestId("card");
      expect(card).toHaveAttribute("role", "region");
      expect(card).toHaveAttribute("aria-label", "Card region");
    });
  });

  describe("CardHeader Component", () => {
    it("renders correctly", () => {
      render(<CardHeader data-testid="header">Header</CardHeader>);
      const header = screen.getByTestId("header");
      expect(header).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<CardHeader>Header content</CardHeader>);
      expect(screen.getByText("Header content")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<CardHeader className="custom-header" data-testid="header" />);
      const header = screen.getByTestId("header");
      expect(header).toHaveClass("custom-header");
    });

    it("has data-slot attribute", () => {
      render(<CardHeader data-testid="header" />);
      const header = screen.getByTestId("header");
      expect(header).toHaveAttribute("data-slot", "card-header");
    });
  });

  describe("CardTitle Component", () => {
    it("renders correctly", () => {
      render(<CardTitle>Card Title</CardTitle>);
      expect(screen.getByText("Card Title")).toBeInTheDocument();
    });

    it("renders as h4 element", () => {
      render(<CardTitle data-testid="title">Title</CardTitle>);
      const title = screen.getByTestId("title");
      expect(title.tagName).toBe("H4");
    });

    it("applies custom className", () => {
      render(<CardTitle className="custom-title" data-testid="title">Title</CardTitle>);
      const title = screen.getByTestId("title");
      expect(title).toHaveClass("custom-title");
    });

    it("has data-slot attribute", () => {
      render(<CardTitle data-testid="title">Title</CardTitle>);
      const title = screen.getByTestId("title");
      expect(title).toHaveAttribute("data-slot", "card-title");
    });
  });

  describe("CardDescription Component", () => {
    it("renders correctly", () => {
      render(<CardDescription>This is a description</CardDescription>);
      expect(screen.getByText("This is a description")).toBeInTheDocument();
    });

    it("renders as p element", () => {
      render(<CardDescription data-testid="desc">Description</CardDescription>);
      const desc = screen.getByTestId("desc");
      expect(desc.tagName).toBe("P");
    });

    it("applies custom className", () => {
      render(
        <CardDescription className="custom-desc" data-testid="desc">
          Description
        </CardDescription>
      );
      const desc = screen.getByTestId("desc");
      expect(desc).toHaveClass("custom-desc");
    });

    it("has data-slot attribute", () => {
      render(<CardDescription data-testid="desc">Description</CardDescription>);
      const desc = screen.getByTestId("desc");
      expect(desc).toHaveAttribute("data-slot", "card-description");
    });
  });

  describe("CardAction Component", () => {
    it("renders correctly", () => {
      render(<CardAction data-testid="action">Action</CardAction>);
      const action = screen.getByTestId("action");
      expect(action).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<CardAction><button>Edit</button></CardAction>);
      expect(screen.getByText("Edit")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<CardAction className="custom-action" data-testid="action" />);
      const action = screen.getByTestId("action");
      expect(action).toHaveClass("custom-action");
    });

    it("has data-slot attribute", () => {
      render(<CardAction data-testid="action" />);
      const action = screen.getByTestId("action");
      expect(action).toHaveAttribute("data-slot", "card-action");
    });

    it("renders as div element", () => {
      render(<CardAction data-testid="action" />);
      const action = screen.getByTestId("action");
      expect(action.tagName).toBe("DIV");
    });
  });

  describe("CardContent Component", () => {
    it("renders correctly", () => {
      render(<CardContent>Content text</CardContent>);
      expect(screen.getByText("Content text")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<CardContent className="custom-content" data-testid="content" />);
      const content = screen.getByTestId("content");
      expect(content).toHaveClass("custom-content");
    });

    it("has data-slot attribute", () => {
      render(<CardContent data-testid="content" />);
      const content = screen.getByTestId("content");
      expect(content).toHaveAttribute("data-slot", "card-content");
    });

    it("renders as div element", () => {
      render(<CardContent data-testid="content" />);
      const content = screen.getByTestId("content");
      expect(content.tagName).toBe("DIV");
    });
  });

  describe("CardFooter Component", () => {
    it("renders correctly", () => {
      render(<CardFooter>Footer text</CardFooter>);
      expect(screen.getByText("Footer text")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<CardFooter className="custom-footer" data-testid="footer" />);
      const footer = screen.getByTestId("footer");
      expect(footer).toHaveClass("custom-footer");
    });

    it("has data-slot attribute", () => {
      render(<CardFooter data-testid="footer" />);
      const footer = screen.getByTestId("footer");
      expect(footer).toHaveAttribute("data-slot", "card-footer");
    });

    it("renders as div element", () => {
      render(<CardFooter data-testid="footer" />);
      const footer = screen.getByTestId("footer");
      expect(footer.tagName).toBe("DIV");
    });
  });

  describe("Card Composition", () => {
    it("renders complete card structure", () => {
      render(
        <Card data-testid="full-card">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
            <CardAction>
              <button>Edit</button>
            </CardAction>
          </CardHeader>
          <CardContent>Main content</CardContent>
          <CardFooter>Footer content</CardFooter>
        </Card>
      );

      expect(screen.getByTestId("full-card")).toBeInTheDocument();
      expect(screen.getByText("Card Title")).toBeInTheDocument();
      expect(screen.getByText("Card description")).toBeInTheDocument();
      expect(screen.getByText("Edit")).toBeInTheDocument();
      expect(screen.getByText("Main content")).toBeInTheDocument();
      expect(screen.getByText("Footer content")).toBeInTheDocument();
    });

    it("renders card with only header and content", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Simple Card</CardTitle>
          </CardHeader>
          <CardContent>Content only</CardContent>
        </Card>
      );

      expect(screen.getByText("Simple Card")).toBeInTheDocument();
      expect(screen.getByText("Content only")).toBeInTheDocument();
    });

    it("renders card with content only", () => {
      render(
        <Card>
          <CardContent>Just content</CardContent>
        </Card>
      );

      expect(screen.getByText("Just content")).toBeInTheDocument();
    });

    it("renders multiple cards", () => {
      render(
        <div>
          <Card data-testid="card-1">
            <CardTitle>First Card</CardTitle>
          </Card>
          <Card data-testid="card-2">
            <CardTitle>Second Card</CardTitle>
          </Card>
        </div>
      );

      expect(screen.getByTestId("card-1")).toBeInTheDocument();
      expect(screen.getByTestId("card-2")).toBeInTheDocument();
      expect(screen.getByText("First Card")).toBeInTheDocument();
      expect(screen.getByText("Second Card")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Accessible Card</CardTitle>
            <CardDescription>This is an accessible card</CardDescription>
          </CardHeader>
          <CardContent>Card content goes here</CardContent>
        </Card>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with complete structure", async () => {
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Product Card</CardTitle>
            <CardDescription>Product description</CardDescription>
            <CardAction>
              <button>View</button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Product details and information</p>
          </CardContent>
          <CardFooter>
            <button>Add to cart</button>
          </CardFooter>
        </Card>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("supports aria-labelledby for card title", () => {
      render(
        <Card aria-labelledby="card-title" data-testid="card">
          <CardTitle id="card-title">Labeled Card</CardTitle>
          <CardContent>Content</CardContent>
        </Card>
      );

      const card = screen.getByTestId("card");
      expect(card).toHaveAttribute("aria-labelledby", "card-title");
    });

    it("supports aria-describedby for card description", () => {
      render(
        <Card aria-describedby="card-desc" data-testid="card">
          <CardDescription id="card-desc">Description text</CardDescription>
          <CardContent>Content</CardContent>
        </Card>
      );

      const card = screen.getByTestId("card");
      expect(card).toHaveAttribute("aria-describedby", "card-desc");
    });
  });

  describe("Semantic Structure", () => {
    it("maintains proper heading hierarchy", () => {
      const { container } = render(
        <main>
          <h2>Main Heading</h2>
          <Card>
            <CardHeader>
              <CardTitle>Card Heading (h4)</CardTitle>
            </CardHeader>
          </Card>
        </main>
      );

      const h2 = container.querySelector("h2");
      const h4 = container.querySelector("h4");

      expect(h2).toBeInTheDocument();
      expect(h4).toBeInTheDocument();
    });
  });

  describe("Custom Attributes", () => {
    it("accepts custom data attributes on Card", () => {
      render(<Card data-testid="card" data-custom="value" />);
      const card = screen.getByTestId("card");
      expect(card).toHaveAttribute("data-custom", "value");
    });

    it("accepts id attribute on Card", () => {
      render(<Card id="my-card" data-testid="card" />);
      const card = screen.getByTestId("card");
      expect(card).toHaveAttribute("id", "my-card");
    });

    it("accepts custom styles", () => {
      render(<Card style={{ padding: "20px" }} data-testid="card" />);
      const card = screen.getByTestId("card");
      expect(card).toHaveStyle({ padding: "20px" });
    });
  });
});
