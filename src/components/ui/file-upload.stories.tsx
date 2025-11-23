import type { Meta, StoryObj } from "@storybook/react";
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onUpload: (files) => console.log("Files uploaded:", files),
  },
};

export const ImagesOnly: Story = {
  args: {
    onUpload: (files) => console.log("Images uploaded:", files),
    accept: "image/*",
  },
};

export const Multiple: Story = {
  args: {
    onUpload: (files) => console.log("Multiple files:", files),
    multiple: true,
  },
};

export const WithMaxSize: Story = {
  args: {
    onUpload: (files) => console.log("Files uploaded:", files),
    maxSize: 5 * 1024 * 1024, // 5MB
  },
};

export const PDFOnly: Story = {
  args: {
    onUpload: (files) => console.log("PDF uploaded:", files),
    accept: "application/pdf",
  },
};

export const Disabled: Story = {
  args: {
    onUpload: (files) => console.log("Files:", files),
    disabled: true,
  },
};
