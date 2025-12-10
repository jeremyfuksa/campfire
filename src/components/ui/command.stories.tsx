import type { Meta } from "@storybook/react";
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
            <i className="fa-solid fa-calendar mr-2"></i>
            Calendar
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-face-smile mr-2"></i>
            Search Emoji
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-calculator mr-2"></i>
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <i className="fa-solid fa-user mr-2"></i>
            Profile
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-credit-card mr-2"></i>
            Billing
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-gear mr-2"></i>
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
            <i className="fa-solid fa-file mr-2"></i>
            New File
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-folder-open mr-2"></i>
            Open File
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-floppy-disk mr-2"></i>
            Save
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>
            <i className="fa-solid fa-copy mr-2"></i>
            Copy
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-scissors mr-2"></i>
            Cut
            <CommandShortcut>⌘X</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <i className="fa-solid fa-paste mr-2"></i>
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
