import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { FileUpload } from "../file-upload";

expect.extend(toHaveNoViolations);

describe("FileUpload", () => {
  it("renders correctly", () => {
    render(<FileUpload onFileSelect={() => {}} />);
    expect(screen.getByText(/drag.*drop/i)).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<FileUpload onFileSelect={() => {}} label="Upload your file" />);
    expect(screen.getByText("Upload your file")).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <FileUpload onFileSelect={() => {}} label="Upload" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
