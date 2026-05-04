import type { Meta } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuShortcut,
} from "./context-menu";
import { useState } from "react";
import { Copy, Download, FolderOpen, Pencil, Share2, Trash2 } from "lucide-react";

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;

export const Default = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Download</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithIcons = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <FolderOpen size={14} className="mr-2" />
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          <Download size={14} className="mr-2" />
          Download
        </ContextMenuItem>
        <ContextMenuItem>
          <Share2 size={14} className="mr-2" />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Trash2 size={14} className="mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithShortcuts = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Select All
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckboxes = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showHistory, setShowHistory] = useState(false);

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showHistory}
            onCheckedChange={setShowHistory}
          >
            Show History
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const WithRadio = {
  render: () => {
    const [theme, setTheme] = useState("light");

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const OnCard = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="w-[300px] p-4 border rounded-lg space-y-2">
          <h3 className="font-semibold">Project Card</h3>
          <p className="text-sm text-muted-foreground">
            Right-click this card for actions
          </p>
          <div className="flex gap-2 pt-2">
            <span className="text-xs px-2 py-1 bg-muted rounded-sm">React</span>
            <span className="text-xs px-2 py-1 bg-muted rounded-sm">TypeScript</span>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Pencil size={14} className="mr-2" />
          Edit
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy size={14} className="mr-2" />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          <Share2 size={14} className="mr-2" />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">
          <Trash2 size={14} className="mr-2" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
