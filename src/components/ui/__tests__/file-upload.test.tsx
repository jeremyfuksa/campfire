import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FileUpload } from "../file-upload";

describe("FileUpload", () => {
  it("renders correctly", () => {
    render(<FileUpload onFileSelect={() => {}} />);
    expect(screen.getByText(/drag.*drop/i)).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<FileUpload onFileSelect={() => {}} label="Upload your file" />);
    expect(screen.getByText("Upload your file")).toBeInTheDocument();
  });
});
