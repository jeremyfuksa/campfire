import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Alert, AlertTitle, AlertDescription } from "../alert";

expect.extend(toHaveNoViolations);

describe("Alert", () => {
  describe("Alert Component", () => {
    it("renders correctly", () => {
      render(<Alert>Alert content</Alert>);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("has role alert", () => {
      render(<Alert data-testid="alert">Content</Alert>);
      const alert = screen.getByTestId("alert");
      expect(alert).toHaveAttribute("role", "alert");
    });

    it("renders with custom className", () => {
      render(<Alert className="custom-alert" data-testid="alert" />);
      const alert = screen.getByTestId("alert");
      expect(alert).toHaveClass("custom-alert");
    });
  });

  describe("Variants", () => {
    it("renders default variant", () => {
      render(<Alert variant="default" data-testid="alert">Default</Alert>);
      const alert = screen.getByTestId("alert");
      expect(alert).toHaveClass("bg-card");
    });

    it("renders destructive variant", () => {
      render(<Alert variant="destructive" data-testid="alert">Error</Alert>);
      const alert = screen.getByTestId("alert");
      expect(alert).toHaveClass("text-destructive");
    });
  });

  describe("AlertTitle Component", () => {
    it("renders correctly", () => {
      render(<AlertTitle>Alert Title</AlertTitle>);
      expect(screen.getByText("Alert Title")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      render(<AlertTitle data-testid="title">Title</AlertTitle>);
      const title = screen.getByTestId("title");
      expect(title).toHaveAttribute("data-slot", "alert-title");
    });
  });

  describe("AlertDescription Component", () => {
    it("renders correctly", () => {
      render(<AlertDescription>Description text</AlertDescription>);
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("has data-slot attribute", () => {
      render(<AlertDescription data-testid="desc">Description</AlertDescription>);
      const desc = screen.getByTestId("desc");
      expect(desc).toHaveAttribute("data-slot", "alert-description");
    });
  });

  describe("Alert Composition", () => {
    it("renders complete alert", () => {
      render(
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app.</AlertDescription>
        </Alert>
      );

      expect(screen.getByText("Heads up!")).toBeInTheDocument();
      expect(screen.getByText("You can add components to your app.")).toBeInTheDocument();
    });

    it("renders with icon", () => {
      render(
        <Alert>
          <svg data-testid="alert-icon" />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      );

      expect(screen.getByTestId("alert-icon")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should not have accessibility violations", async () => {
      const { container } = render(
        <Alert>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational alert.</AlertDescription>
        </Alert>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("should not have violations with destructive variant", async () => {
      const { container } = render(
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>An error occurred.</AlertDescription>
        </Alert>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Data Attributes", () => {
    it("has data-slot attribute on Alert", () => {
      render(<Alert data-testid="alert">Content</Alert>);
      const alert = screen.getByTestId("alert");
      expect(alert).toHaveAttribute("data-slot", "alert");
    });
  });
});
