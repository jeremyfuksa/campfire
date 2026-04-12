import type { Meta } from "@storybook/react";
import {
  Calculator,
  Calendar,
  ClipboardPaste,
  Copy,
  CreditCard,
  File as FileIcon,
  FolderOpen,
  Save,
  Scissors,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

const meta = {
  title: "Components/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;

export const Default = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar size={14} className="mr-2" />
            Calendar
          </CommandItem>
          <CommandItem>
            <Smile size={14} className="mr-2" />
            Search Emoji
          </CommandItem>
          <CommandItem>
            <Calculator size={14} className="mr-2" />
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User size={14} className="mr-2" />
            Profile
          </CommandItem>
          <CommandItem>
            <CreditCard size={14} className="mr-2" />
            Billing
          </CommandItem>
          <CommandItem>
            <Settings size={14} className="mr-2" />
            Settings
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithShortcuts = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="File">
          <CommandItem>
            <FileIcon size={14} className="mr-2" />
            New File
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FolderOpen size={14} className="mr-2" />
            Open File
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Save size={14} className="mr-2" />
            Save
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>
            <Copy size={14} className="mr-2" />
            Copy
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Scissors size={14} className="mr-2" />
            Cut
            <CommandShortcut>⌘X</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ClipboardPaste size={14} className="mr-2" />
            Paste
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Simple = {
  render: () => (
    <Command className="rounded-lg border w-[350px]">
      <CommandInput placeholder="Search fruits..." />
      <CommandList>
        <CommandEmpty>No fruits found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
          <CommandItem>Orange</CommandItem>
          <CommandItem>Grape</CommandItem>
          <CommandItem>Strawberry</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const MultipleGroups = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>Home</CommandItem>
          <CommandItem>About</CommandItem>
          <CommandItem>Contact</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>Create New</CommandItem>
          <CommandItem>Import</CommandItem>
          <CommandItem>Export</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Preferences</CommandItem>
          <CommandItem>Sign Out</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
