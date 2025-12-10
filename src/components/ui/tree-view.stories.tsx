import type { Meta } from "@storybook/react";
import { TreeView, type TreeNode } from "./tree-view";

const meta = {
  title: "Components/TreeView",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TreeView>;

export default meta;

const fileSystemData = [
  {
    id: "1",
    label: "src",
    children: [
      {
        id: "1-1",
        label: "components",
        children: [
          { id: "1-1-1", label: "Button.tsx" },
          { id: "1-1-2", label: "Input.tsx" },
          { id: "1-1-3", label: "Card.tsx" },
        ],
      },
      {
        id: "1-2",
        label: "utils",
        children: [
          { id: "1-2-1", label: "helpers.ts" },
          { id: "1-2-2", label: "constants.ts" },
        ],
      },
      { id: "1-3", label: "App.tsx" },
      { id: "1-4", label: "index.tsx" },
    ],
  },
  {
    id: "2",
    label: "public",
    children: [
      { id: "2-1", label: "index.html" },
      { id: "2-2", label: "favicon.ico" },
    ],
  },
  { id: "3", label: "package.json" },
  { id: "4", label: "README.md" },
];

const organizationData = [
  {
    id: "1",
    label: "Engineering",
    children: [
      {
        id: "1-1",
        label: "Frontend",
        children: [
          { id: "1-1-1", label: "React Team" },
          { id: "1-1-2", label: "Vue Team" },
        ],
      },
      {
        id: "1-2",
        label: "Backend",
        children: [
          { id: "1-2-1", label: "Node.js Team" },
          { id: "1-2-2", label: "Python Team" },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Design",
    children: [
      { id: "2-1", label: "UX Team" },
      { id: "2-2", label: "UI Team" },
    ],
  },
  {
    id: "3",
    label: "Marketing",
    children: [
      { id: "3-1", label: "Content" },
      { id: "3-2", label: "Social Media" },
    ],
  },
];

export const Default = {
  args: {
    data: fileSystemData,
  },
};

export const FileSystem = {
  args: {
    data: fileSystemData,
    onSelect: (node: TreeNode) => console.log("Selected:", node),
  },
};

export const Organization = {
  args: {
    data: organizationData,
  },
};

export const SimpleTree = {
  args: {
    data: [
      {
        id: "1",
        label: "Parent 1",
        children: [
          { id: "1-1", label: "Child 1-1" },
          { id: "1-2", label: "Child 1-2" },
        ],
      },
      {
        id: "2",
        label: "Parent 2",
        children: [
          { id: "2-1", label: "Child 2-1" },
          { id: "2-2", label: "Child 2-2" },
        ],
      },
    ],
  },
};

export const DeepNesting = {
  args: {
    data: [
      {
        id: "1",
        label: "Level 1",
        children: [
          {
            id: "1-1",
            label: "Level 2",
            children: [
              {
                id: "1-1-1",
                label: "Level 3",
                children: [
                  {
                    id: "1-1-1-1",
                    label: "Level 4",
                    children: [{ id: "1-1-1-1-1", label: "Level 5" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
