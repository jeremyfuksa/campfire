import React, { useState } from 'react';
import { PageWithSidebar } from './PageWithSidebar';
import { ComponentDocumentation } from './ComponentDocumentation';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { Textarea } from './ui/textarea';
import { Skeleton } from './ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Loader2, ChevronDown } from 'lucide-react';

export function ExtendedComponentsPage() {
  const [activeSection, setActiveSection] = useState('dialog');

  const sidebarGroups = [
    {
      title: 'Overlays',
      items: [
        { id: 'dialog', label: 'Dialog', icon: 'fa-solid fa-window-restore' },
        { id: 'sheet', label: 'Sheet', icon: 'fa-solid fa-bars' },
        { id: 'drawer', label: 'Drawer', icon: 'fa-solid fa-up-down-left-right' },
        { id: 'popover', label: 'Popover', icon: 'fa-solid fa-message' },
      ]
    },
    {
      title: 'Navigation',
      items: [
        { id: 'tabs', label: 'Tabs', icon: 'fa-solid fa-folder-tree' },
        { id: 'accordion', label: 'Accordion', icon: 'fa-solid fa-list' },
        { id: 'dropdown', label: 'Dropdown Menu', icon: 'fa-solid fa-ellipsis-vertical' },
        { id: 'command', label: 'Command', icon: 'fa-solid fa-terminal' },
      ]
    },
    {
      title: 'Data Display',
      items: [
        { id: 'table', label: 'Table', icon: 'fa-solid fa-table' },
        { id: 'avatar', label: 'Avatar', icon: 'fa-solid fa-user-circle' },
        { id: 'skeleton', label: 'Skeleton', icon: 'fa-solid fa-spinner' },
      ]
    },
    {
      title: 'Form Controls',
      items: [
        { id: 'progress', label: 'Progress', icon: 'fa-solid fa-bars-progress' },
        { id: 'slider', label: 'Slider', icon: 'fa-solid fa-sliders' },
        { id: 'textarea', label: 'Textarea', icon: 'fa-solid fa-align-justify' },
      ]
    },
    {
      title: 'Examples',
      items: [
        { id: 'loading', label: 'Loading Spinner', icon: 'fa-solid fa-circle-notch' },
        { id: 'navbar', label: 'Nav Bar', icon: 'fa-solid fa-bars' },
      ]
    }
  ];

  return (
    <PageWithSidebar
      title="Extended"
      description="Phase 2 — 20 components"
      sidebarGroups={sidebarGroups}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      gradientColor="var(--secondary-500)"
    >
      {/* Overlays */}
      {activeSection === 'dialog' && <DialogSection />}
      {activeSection === 'sheet' && <SheetSection />}
      {activeSection === 'drawer' && <DrawerSection />}
      {activeSection === 'popover' && <PopoverSection />}

      {/* Navigation */}
      {activeSection === 'tabs' && <TabsSection />}
      {activeSection === 'accordion' && <AccordionSection />}
      {activeSection === 'dropdown' && <DropdownSection />}
      {activeSection === 'command' && <CommandSection />}

      {/* Data Display */}
      {activeSection === 'table' && <TableSection />}
      {activeSection === 'avatar' && <AvatarSection />}
      {activeSection === 'skeleton' && <SkeletonSection />}

      {/* Form Controls */}
      {activeSection === 'progress' && <ProgressSection />}
      {activeSection === 'slider' && <SliderSection />}
      {activeSection === 'textarea' && <TextareaSection />}

      {/* Examples */}
      {activeSection === 'loading' && <LoadingSection />}
      {activeSection === 'navbar' && <NavBarSection />}
    </PageWithSidebar>
  );
}

// OVERLAYS

function DialogSection() {
  return (
    <ComponentDocumentation
      title="Dialog"
      description="Modal window that overlays the main content"
      rationale="Dialogs interrupt the user's workflow to capture attention for important decisions or information. They create focus by dimming background content and forcing interaction before returning to the main interface."
      whenToUse={[
        'For critical confirmations (delete, logout, etc.)',
        'To collect information in multi-step forms',
        'For displaying important alerts that require acknowledgment',
        'When user input is needed before proceeding',
      ]}
      whenNotToUse={[
        'For non-critical information (use alerts or tooltips)',
        'For complex workflows (consider full pages instead)',
        'On mobile where sheets or drawers are more appropriate',
        'For frequent actions that would interrupt flow',
      ]}
      bestPractices={[
        'Keep dialog content focused and concise',
        'Provide clear action buttons (OK/Cancel, Save/Discard)',
        'Make it easy to dismiss (X button, ESC key, click outside)',
        'Use appropriate sizes (sm for confirmations, lg for forms)',
        'Avoid nesting dialogs within dialogs',
      ]}
      accessibility={[
        'Focus is trapped within the dialog when open',
        'ESC key closes the dialog',
        'Focus returns to trigger element when closed',
        'Use appropriate ARIA attributes (role="dialog")',
      ]}
    >
      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Small Modal</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed with this action?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Large Modal</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Large Modal Example</DialogTitle>
              <DialogDescription>
                This is a larger modal with more content space.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6">
              <p style={{ color: 'var(--text-secondary)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ComponentDocumentation>
  );
}

function SheetSection() {
  return (
    <ComponentDocumentation
      title="Sheet"
      description="Slide-in panel from the edge of the screen"
      rationale="Sheets provide contextual panels that slide in from the screen edge, offering more space than popovers while being less disruptive than full modals. They're ideal for supplementary content or actions that complement the main view."
      whenToUse={[
        'For detailed forms or settings panels',
        'To show additional information without leaving context',
        'For mobile navigation menus',
        'When you need more space than a popover but less than a modal',
      ]}
      whenNotToUse={[
        'For critical confirmations (use Dialog instead)',
        'When full-page navigation would be clearer',
        'For very large amounts of content',
      ]}
      bestPractices={[
        'Use appropriate sides (right for forms, left for navigation)',
        'Keep sheet width reasonable (not full screen)',
        'Provide clear close affordances',
        'Consider overlay darkness for importance',
        'Make sheets dismissable by clicking outside',
      ]}
      accessibility={[
        'Focus is trapped within the sheet',
        'ESC key closes the sheet',
        'Announce sheet opening to screen readers',
        'Ensure close button is keyboard accessible',
      ]}
    >
      <div className="flex gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Right Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-4 px-[16px] py-[24px]">
              <div className="space-y-2">
                <Label>Name</Label>
                <input className="w-full px-3 py-2 rounded-md" style={{ border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-base)' }} placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <input className="w-full px-3 py-2 rounded-md" style={{ border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-base)' }} placeholder="Enter email" />
              </div>
            </div>
            <div className="flex justify-end gap-2 px-[16px] py-[0px]">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Left Sheet</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Quick navigation menu
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-2 px-[16px] py-[24px] px-[8px] py-[16px]">
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]">Dashboard</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]">Projects</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]">Team</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]">Settings</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </ComponentDocumentation>
  );
}

function DrawerSection() {
  return (
    <ComponentDocumentation
      title="Drawer"
      description="Bottom drawer for mobile-friendly interactions"
      rationale="Drawers slide up from the bottom of the screen, providing a mobile-optimized pattern for presenting content or actions. They feel natural on touch devices and work well for quick actions or confirmations without taking over the full screen."
      whenToUse={[
        'On mobile devices for menus and options',
        'For quick actions or confirmations on touch devices',
        'When a sheet would be awkward on smaller screens',
        'For bottom navigation or action sheets',
      ]}
      whenNotToUse={[
        'On desktop where sheets or dialogs work better',
        'For content that needs significant vertical space',
        'When keyboard input is the primary interaction',
      ]}
      bestPractices={[
        'Include a drag handle for intuitive closing',
        'Keep drawer content concise',
        'Make it easy to dismiss (swipe down, tap outside)',
        'Consider snap points for different content heights',
        'Test on actual mobile devices',
      ]}
      accessibility={[
        'Announce drawer opening to screen readers',
        'Provide keyboard shortcuts for closing',
        'Ensure focus is managed appropriately',
        'Test with mobile screen readers (VoiceOver, TalkBack)',
      ]}
    >
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <p style={{ color: 'var(--text-secondary)' }}>
              This will permanently delete your account and remove your data from our servers.
            </p>
          </div>
          <DrawerFooter>
            <Button>Confirm</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ComponentDocumentation>
  );
}

function PopoverSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ComponentDocumentation
      title="Popover"
      description="Floating content container that appears on click"
      rationale="Popovers provide contextual content in a floating container near the trigger element. They're perfect for supplementary information, pickers, or small forms that relate directly to a specific UI element."
      whenToUse={[
        'For date pickers, color pickers, or other input tools',
        'To show additional context without leaving the page',
        'For small forms or settings related to a specific element',
        'When tooltip content would be too complex',
      ]}
      whenNotToUse={[
        'For critical information (use Dialog)',
        'For long-form content (use Sheet or Dialog)',
        'On mobile where sheets might be better',
        'For simple text hints (use Tooltip)',
      ]}
      bestPractices={[
        'Position popovers to avoid covering related content',
        'Keep popover content focused and concise',
        'Make popovers dismissable by clicking outside',
        'Use appropriate sizing for the content',
        'Consider arrow indicators pointing to the trigger',
      ]}
      accessibility={[
        'Popovers should be keyboard accessible',
        'ESC key should close popovers',
        'Focus should move to popover when opened',
        'Use appropriate ARIA attributes',
      ]}
    >
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h3>Popover Content</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                This is a popover with custom content.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Date Picker</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </ComponentDocumentation>
  );
}

// NAVIGATION

function TabsSection() {
  return (
    <ComponentDocumentation
      title="Tabs"
      description="Organizes content into separate views with navigation"
      rationale="Tabs organize related content into distinct sections that users can switch between, reducing cognitive load by presenting only one view at a time. They're ideal for grouping related information without requiring page navigation."
      whenToUse={[
        'To organize related content into distinct categories',
        'When users don\'t need to see all content simultaneously',
        'For settings or configuration panels with multiple sections',
        'To reduce page scrolling by organizing content horizontally',
      ]}
      whenNotToUse={[
        'For sequential steps (use Stepper instead)',
        'When users need to compare content across tabs',
        'For unrelated content that should be separate pages',
        'With more than 5-7 tabs (becomes hard to scan)',
      ]}
      bestPractices={[
        'Keep tab labels short and descriptive',
        'Highlight the active tab clearly',
        'Maintain state when switching tabs when appropriate',
        'Limit to 5-7 tabs for scannability',
        'Consider responsive behavior on mobile',
      ]}
      accessibility={[
        'Tabs are keyboard navigable with arrow keys',
        'Active tab should have clear visual and semantic indication',
        'Use proper ARIA attributes (role="tablist", etc.)',
        'Tab panels should have appropriate ARIA labels',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Default</h3>
        <Tabs defaultValue="overview" className="max-w-2xl">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Content</h3>
        <Tabs defaultValue="tab1" className="max-w-2xl">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <p style={{ color: 'var(--text-secondary)' }}>Content for Tab 3</p>
          </TabsContent>
        </Tabs>
      </div>
    </ComponentDocumentation>
  );
}

function AccordionSection() {
  return (
    <ComponentDocumentation
      title="Accordion"
      description="Expandable content sections"
      rationale="Accordions progressively disclose content, allowing users to focus on one section at a time while maintaining context of other available sections. They're excellent for FAQs, settings, and any content where users need selective access."
      whenToUse={[
        'For FAQs or help content',
        'To organize long-form content into scannable sections',
        'When showing all content at once would overwhelm users',
        'For progressive disclosure in forms or settings',
      ]}
      whenNotToUse={[
        'When users need to see multiple sections simultaneously',
        'For short content that doesn\'t need collapsing',
        'For primary navigation (use tabs or menus)',
        'When content relationships aren\'t hierarchical',
      ]}
      bestPractices={[
        'Use clear, descriptive section headers',
        'Consider allowing multiple sections open simultaneously',
        'Provide visual indicators (chevrons) for expand/collapse state',
        'Keep section content focused and scannable',
        'Maintain consistent section ordering logic',
      ]}
      accessibility={[
        'Accordion headers are keyboard navigable',
        'Enter/Space keys toggle sections',
        'Expanded/collapsed state is announced to screen readers',
        'Use proper ARIA attributes (aria-expanded, etc.)',
      ]}
    >
      <Accordion type="single" collapsible className="max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the Campfire Design System?</AccordionTrigger>
          <AccordionContent>
            Campfire is a comprehensive design system built on shadcn/ui components with an earthy, grounded aesthetic. 
            It includes design tokens, component libraries, and layout patterns.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I use the components?</AccordionTrigger>
          <AccordionContent>
            Each component is built with React and Tailwind CSS. Simply import the component you need and 
            use it in your application with the appropriate props.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I customize the design tokens?</AccordionTrigger>
          <AccordionContent>
            Yes! All design tokens are defined in the globals.css file and can be customized to match 
            your brand while maintaining the system's consistency.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ComponentDocumentation>
  );
}

function DropdownSection() {
  return (
    <ComponentDocumentation
      title="Dropdown Menu"
      description="Contextual menu with actions and options"
      rationale="Dropdown menus provide contextual actions and options in a compact, organized format. They save screen space by hiding options until needed and are instantly recognizable to users as a standard interaction pattern."
      whenToUse={[
        'For contextual actions related to a specific element',
        'To organize multiple related actions compactly',
        'In toolbars or navigation for secondary options',
        'For user account menus and settings',
      ]}
      whenNotToUse={[
        'For primary navigation (use nav menus)',
        'When there are only 1-2 options (use buttons)',
        'For form selections (use Select component)',
      ]}
      bestPractices={[
        'Group related items with separators',
        'Use icons to make items more scannable',
        'Keep menu items short and action-oriented',
        'Place destructive actions at the bottom with separation',
        'Limit menu depth (avoid submenus when possible)',
      ]}
      accessibility={[
        'Dropdowns are keyboard navigable with arrow keys',
        'Enter/Space activates menu items',
        'ESC closes the menu',
        'Proper ARIA attributes for menu role',
      ]}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Open Menu
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ComponentDocumentation>
  );
}

function CommandSection() {
  return (
    <ComponentDocumentation
      title="Command"
      description="Command palette for quick actions"
      rationale="Command palettes provide keyboard-driven access to actions and navigation, allowing power users to work efficiently without lifting their hands from the keyboard. They're becoming essential in modern applications for quick access to features."
      whenToUse={[
        'For keyboard-first navigation and actions',
        'To provide quick access to app features',
        'In complex applications with many actions',
        'For search functionality across different content types',
      ]}
      whenNotToUse={[
        'In simple applications with few actions',
        'As the primary navigation method for all users',
        'When mouse/touch interaction is more appropriate',
      ]}
      bestPractices={[
        'Make it accessible with a keyboard shortcut (Cmd+K, Ctrl+K)',
        'Group commands into logical categories',
        'Show keyboard shortcuts for commands',
        'Include fuzzy search for better matching',
        'Provide visual icons for better scannability',
      ]}
      accessibility={[
        'Fully keyboard navigable',
        'Clear visual focus indicators',
        'Announce results to screen readers',
        'Provide escape mechanisms',
      ]}
    >
      <Command className="rounded-lg" style={{ border: '1px solid var(--border-default)' }}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <i className="fa-solid fa-calendar mr-2"></i>
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <i className="fa-solid fa-face-smile mr-2"></i>
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <i className="fa-solid fa-calculator mr-2"></i>
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem>
              <i className="fa-solid fa-user mr-2"></i>
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <i className="fa-solid fa-gear mr-2"></i>
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </ComponentDocumentation>
  );
}

// DATA DISPLAY

function TableSection() {
  return (
    <ComponentDocumentation
      title="Table"
      description="Displays data in rows and columns"
      rationale="Tables organize complex data into scannable rows and columns, making it easy to compare information and identify patterns. They're essential for displaying structured data like user lists, transactions, or analytics."
      whenToUse={[
        'For displaying structured, tabular data',
        'When users need to scan and compare information',
        'For data that needs sorting or filtering',
        'To show relationships between data points',
      ]}
      whenNotToUse={[
        'For small amounts of data (use lists or cards)',
        'On mobile devices with limited width',
        'For unstructured content',
        'When visual charts would communicate better',
      ]}
      bestPractices={[
        'Make headers clear and descriptive',
        'Enable sorting on relevant columns',
        'Provide filters for large datasets',
        'Use appropriate column widths',
        'Consider pagination for long tables',
        'Make tables responsive on mobile (consider cards instead)',
      ]}
      accessibility={[
        'Use semantic table markup (thead, tbody, th, td)',
        'Provide clear header associations',
        'Ensure sufficient color contrast',
        'Make interactive elements keyboard accessible',
      ]}
    >
      <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell><Badge style={{ backgroundColor: 'var(--success-600)', color: 'white' }}>Active</Badge></TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell><Badge style={{ backgroundColor: 'var(--success-600)', color: 'white' }}>Active</Badge></TableCell>
              <TableCell>Developer</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
              <TableCell>Designer</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </ComponentDocumentation>
  );
}

function AvatarSection() {
  return (
    <ComponentDocumentation
      title="Avatar"
      description="User profile image with fallback initials"
      rationale="Avatars provide visual identification of users, making interfaces more personal and helping users quickly recognize people. Fallback initials ensure a consistent experience even when profile images aren't available."
      whenToUse={[
        'To represent users in profiles and comments',
        'In user lists or team rosters',
        'For account menus and settings',
        'In messaging interfaces',
      ]}
      whenNotToUse={[
        'For non-user entities (use icons instead)',
        'When names alone would be clearer',
      ]}
      bestPractices={[
        'Provide alt text for images',
        'Use initials as fallback when images fail',
        'Make avatars circular for users, square for groups/entities',
        'Use appropriate sizes for context',
        'Consider status indicators (online, busy, etc.)',
      ]}
      accessibility={[
        'Provide meaningful alt text',
        'Ensure sufficient contrast for initials',
        'Don\'t rely solely on color for status',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Fallback</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback style={{ backgroundColor: 'var(--primary-600)', color: 'white' }}>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback style={{ backgroundColor: 'var(--secondary-600)', color: 'white' }}>CD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function SkeletonSection() {
  return (
    <ComponentDocumentation
      title="Skeleton"
      description="Loading placeholder animation"
      rationale="Skeleton screens improve perceived performance by showing content structure while data loads, reducing user anxiety and creating a smoother experience. They set expectations about content layout and make loading feel faster."
      whenToUse={[
        'During initial page or component load',
        'When fetching data that takes time',
        'To show content structure before real data arrives',
        'In cards, lists, or complex layouts',
      ]}
      whenNotToUse={[
        'For very fast loading (< 300ms)',
        'For small UI elements',
        'When a simple spinner would be clearer',
      ]}
      bestPractices={[
        'Match skeleton shape to actual content',
        'Use appropriate widths to suggest content',
        'Animate subtly to show progress',
        'Show skeleton for all content that will load',
        'Replace skeletons with actual content smoothly',
      ]}
      accessibility={[
        'Announce loading state to screen readers',
        'Update announcements when content loads',
        'Ensure animations respect prefers-reduced-motion',
      ]}
    >
      <div className="space-y-6 max-w-lg">
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-12 w-1/2" />
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3 mt-2" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </div>
    </ComponentDocumentation>
  );
}

// FORM CONTROLS

function ProgressSection() {
  const [progress] = useState(65);

  return (
    <ComponentDocumentation
      title="Progress"
      description="Shows completion progress of a task"
      rationale="Progress indicators provide visual feedback about task completion, reducing uncertainty and keeping users informed during longer operations. They set expectations and make wait times feel shorter."
      whenToUse={[
        'For file uploads or downloads',
        'During multi-step processes',
        'For tasks with known duration or percentage',
        'To show profile completion or onboarding progress',
      ]}
      whenNotToUse={[
        'For indefinite loading (use spinner instead)',
        'When the task completes very quickly',
        'For tasks where progress can\'t be measured',
      ]}
      bestPractices={[
        'Show percentage or step count when possible',
        'Update progress smoothly, not in jumps',
        'Include descriptive text about what\'s happening',
        'Consider showing time remaining for long tasks',
        'Make progress accessible to screen readers',
      ]}
      accessibility={[
        'Use role="progressbar" with aria-valuenow',
        'Announce progress updates to screen readers',
        'Provide text alternatives for visual progress',
      ]}
    >
      <div className="space-y-6 max-w-lg">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Upload Progress</Label>
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="space-y-2">
          <Label>Loading...</Label>
          <Progress value={33} />
        </div>

        <div className="space-y-2">
          <Label>Complete</Label>
          <Progress value={100} />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function SliderSection() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <ComponentDocumentation
      title="Slider"
      description="Allows users to select a value from a range"
      rationale="Sliders provide an intuitive way to select values from a continuous range, offering immediate visual feedback and making it easy to adjust settings. They're especially useful for values where precision isn't critical."
      whenToUse={[
        'For volume, brightness, or other continuous adjustments',
        'When showing the range of values is helpful',
        'For settings where approximate values are acceptable',
        'In filters with numeric ranges (price, size, etc.)',
      ]}
      whenNotToUse={[
        'For precise numeric input (use number input)',
        'When there are only a few discrete options (use radio buttons)',
        'For critical values where precision matters',
      ]}
      bestPractices={[
        'Show the current value clearly',
        'Provide appropriate min, max, and step values',
        'Use labels to indicate what the slider controls',
        'Consider showing tick marks for key values',
        'Make the slider large enough for easy interaction',
      ]}
      accessibility={[
        'Sliders are keyboard accessible (arrow keys)',
        'Current value is announced to screen readers',
        'Provide clear labels for the slider purpose',
        'Consider alternative inputs for precise control',
      ]}
    >
      <div className="space-y-6 max-w-lg">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Volume</Label>
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{sliderValue[0]}%</span>
          </div>
          <Slider 
            value={sliderValue} 
            onValueChange={setSliderValue}
            max={100}
            step={1}
          />
        </div>

        <div className="space-y-4">
          <Label>Brightness</Label>
          <Slider defaultValue={[75]} max={100} step={1} />
        </div>

        <div className="space-y-4">
          <Label>Disabled</Label>
          <Slider defaultValue={[50]} max={100} step={1} disabled />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function TextareaSection() {
  return (
    <ComponentDocumentation
      title="Textarea"
      description="Multi-line text input field"
      rationale="Textareas provide space for longer, multi-line text input, making them ideal for comments, descriptions, or any content that needs more than a single line. They automatically expand vertically to accommodate content."
      whenToUse={[
        'For comments, descriptions, or messages',
        'When users need to enter multiple lines of text',
        'For feedback forms or support requests',
        'For any content longer than a sentence',
      ]}
      whenNotToUse={[
        'For single-line input (use Input instead)',
        'For rich text editing (use a rich text editor)',
        'For code input (consider a code editor component)',
      ]}
      bestPractices={[
        'Set appropriate rows height for expected content',
        'Provide character count for limited inputs',
        'Make textareas resizable when appropriate',
        'Use placeholder text to guide users',
        'Consider auto-expanding height for better UX',
      ]}
      accessibility={[
        'Associate labels with textareas',
        'Provide clear error messages',
        'Use appropriate autocomplete attributes',
        'Ensure sufficient contrast',
      ]}
    >
      <div className="space-y-6 max-w-lg">
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." rows={4} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter a description..." rows={6} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="disabled-textarea">Disabled</Label>
          <Textarea id="disabled-textarea" placeholder="This is disabled" disabled rows={3} />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

// EXAMPLES

function LoadingSection() {
  return (
    <ComponentDocumentation
      title="Loading Spinner"
      description="Indicates loading state"
      rationale="Loading spinners provide immediate feedback that the application is working on a request, preventing user confusion and reducing abandonment. They're essential for maintaining perceived responsiveness during operations."
      whenToUse={[
        'For indefinite loading states',
        'During API calls or data fetching',
        'In buttons during form submission',
        'For operations without measurable progress',
      ]}
      whenNotToUse={[
        'For operations with known progress (use Progress)',
        'For very fast operations (< 300ms)',
        'For initial page loads (use Skeleton instead)',
      ]}
      bestPractices={[
        'Size spinners appropriately for context',
        'Use inline spinners in buttons during actions',
        'Add descriptive text when the wait might be long',
        'Consider animation preferences (prefers-reduced-motion)',
        'Don\'t overuse - too many spinners cause anxiety',
      ]}
      accessibility={[
        'Announce loading state to screen readers',
        'Use role="status" or aria-live',
        'Announce completion to screen readers',
        'Respect prefers-reduced-motion settings',
      ]}
    >
      <div className="flex items-center gap-8">
        <div className="space-y-2">
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Small</div>
          <Loader2 className="h-4 w-4 animate-spin" style={{ color: 'var(--interactive-default)' }} />
        </div>
        <div className="space-y-2">
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Medium</div>
          <Loader2 className="h-6 w-6 animate-spin" style={{ color: 'var(--interactive-default)' }} />
        </div>
        <div className="space-y-2">
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Large</div>
          <Loader2 className="h-8 w-8 animate-spin" style={{ color: 'var(--interactive-default)' }} />
        </div>
      </div>

      <div>
        <div className="mb-2" style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Linear Progress</div>
        <div className="w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-muted)' }}>
          <div className="h-full rounded-full animate-pulse" style={{ width: '60%', backgroundColor: 'var(--interactive-default)' }} />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function NavBarSection() {
  return (
    <ComponentDocumentation
      title="Navigation Bar"
      description="Example navigation bar pattern"
      rationale="Navigation bars provide consistent, always-accessible navigation throughout your application. They establish hierarchy, help users understand where they are, and provide quick access to key features."
      whenToUse={[
        'For primary navigation in your application',
        'To provide persistent access to key features',
        'For branding and user account access',
        'In multi-page applications',
      ]}
      whenNotToUse={[
        'For contextual actions (use toolbars)',
        'In single-page simple apps',
        'When vertical navigation (sidebar) is more appropriate',
      ]}
      bestPractices={[
        'Keep navigation consistent across pages',
        'Highlight the current page/section',
        'Place the logo/brand on the left',
        'Put user account items on the right',
        'Make it responsive (hamburger menu on mobile)',
        'Limit top-level items to 5-7',
      ]}
      accessibility={[
        'Use semantic nav element',
        'Ensure keyboard navigation works',
        'Provide skip links for screen readers',
        'Indicate current page to assistive tech',
      ]}
    >
      <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
        <nav className="h-16 px-6 flex items-center justify-between" style={{ backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-default)' }}>
          <div className="flex items-center gap-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-600)' }}>
              <i className="fa-solid fa-house" style={{ color: 'white', fontSize: '18px' }}></i>
            </div>
            <div className="flex gap-6">
              <a href="#" style={{ color: 'var(--interactive-default)', borderBottom: '2px solid var(--interactive-default)', paddingBottom: '4px' }}>Dashboard</a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}>Projects</a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}>Team</a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}>Settings</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <i className="fa-solid fa-bell"></i>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--danger-500)' }} />
            </Button>
            <Button variant="ghost" size="sm">
              <i className="fa-solid fa-user"></i>
            </Button>
          </div>
        </nav>
      </div>
    </ComponentDocumentation>
  );
}
