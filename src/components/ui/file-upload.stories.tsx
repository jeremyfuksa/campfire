import type { Meta } from "@storybook/react";
import { FileUpload } from "./file-upload";

const meta = {
  title: "Components/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

export default meta;

export const Default = {
  args: {
    onFilesSelected: (files: File[]) => console.log("Files uploaded:", files),
  },
};

export const ImagesOnly = {
  args: {
    onFilesSelected: (files: File[]) => console.log("Images uploaded:", files),
    accept: "image/*",
  },
};

export const Multiple = {
  args: {
    onFilesSelected: (files: File[]) => console.log("Multiple files:", files),
    multiple: true,
  },
};

export const WithMaxSize = {
  args: {
    onFilesSelected: (files: File[]) => console.log("Files uploaded:", files),
    maxSize: 5, // MB
  },
};

export const PDFOnly = {
  args: {
    onFilesSelected: (files: File[]) => console.log("PDF uploaded:", files),
    accept: "application/pdf",
  },
};

export const Disabled = {
  args: {
    onFilesSelected: (files: File[]) => console.log("Files:", files),
    disabled: true,
  },
};
