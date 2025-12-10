import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsxs(PageWithSidebar, { title: "Extended", description: "Phase 2 \u2014 20 components", sidebarGroups: sidebarGroups, activeSection: activeSection, onSectionChange: setActiveSection, gradientColor: "var(--secondary-500)", children: [activeSection === 'dialog' && _jsx(DialogSection, {}), activeSection === 'sheet' && _jsx(SheetSection, {}), activeSection === 'drawer' && _jsx(DrawerSection, {}), activeSection === 'popover' && _jsx(PopoverSection, {}), activeSection === 'tabs' && _jsx(TabsSection, {}), activeSection === 'accordion' && _jsx(AccordionSection, {}), activeSection === 'dropdown' && _jsx(DropdownSection, {}), activeSection === 'command' && _jsx(CommandSection, {}), activeSection === 'table' && _jsx(TableSection, {}), activeSection === 'avatar' && _jsx(AvatarSection, {}), activeSection === 'skeleton' && _jsx(SkeletonSection, {}), activeSection === 'progress' && _jsx(ProgressSection, {}), activeSection === 'slider' && _jsx(SliderSection, {}), activeSection === 'textarea' && _jsx(TextareaSection, {}), activeSection === 'loading' && _jsx(LoadingSection, {}), activeSection === 'navbar' && _jsx(NavBarSection, {})] }));
}
// OVERLAYS
function DialogSection() {
    return (_jsx(ComponentDocumentation, { title: "Dialog", description: "Modal window that overlays the main content", rationale: "Dialogs interrupt the user's workflow to capture attention for important decisions or information. They create focus by dimming background content and forcing interaction before returning to the main interface.", whenToUse: [
            'For critical confirmations (delete, logout, etc.)',
            'To collect information in multi-step forms',
            'For displaying important alerts that require acknowledgment',
            'When user input is needed before proceeding',
        ], whenNotToUse: [
            'For non-critical information (use alerts or tooltips)',
            'For complex workflows (consider full pages instead)',
            'On mobile where sheets or drawers are more appropriate',
            'For frequent actions that would interrupt flow',
        ], bestPractices: [
            'Keep dialog content focused and concise',
            'Provide clear action buttons (OK/Cancel, Save/Discard)',
            'Make it easy to dismiss (X button, ESC key, click outside)',
            'Use appropriate sizes (sm for confirmations, lg for forms)',
            'Avoid nesting dialogs within dialogs',
        ], accessibility: [
            'Focus is trapped within the dialog when open',
            'ESC key closes the dialog',
            'Focus returns to trigger element when closed',
            'Use appropriate ARIA attributes (role="dialog")',
        ], children: _jsxs("div", { className: "flex gap-4", children: [_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { children: "Open Small Modal" }) }), _jsxs(DialogContent, { className: "sm:max-w-md", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Confirm Action" }), _jsx(DialogDescription, { children: "Are you sure you want to proceed with this action?" })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Confirm" })] })] })] }), _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Large Modal" }) }), _jsxs(DialogContent, { className: "sm:max-w-2xl", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Large Modal Example" }), _jsx(DialogDescription, { children: "This is a larger modal with more content space." })] }), _jsx("div", { className: "py-6", children: _jsx("p", { style: { color: 'var(--text-secondary)' }, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }) }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Save Changes" })] })] })] })] }) }));
}
function SheetSection() {
    return (_jsx(ComponentDocumentation, { title: "Sheet", description: "Slide-in panel from the edge of the screen", rationale: "Sheets provide contextual panels that slide in from the screen edge, offering more space than popovers while being less disruptive than full modals. They're ideal for supplementary content or actions that complement the main view.", whenToUse: [
            'For detailed forms or settings panels',
            'To show additional information without leaving context',
            'For mobile navigation menus',
            'When you need more space than a popover but less than a modal',
        ], whenNotToUse: [
            'For critical confirmations (use Dialog instead)',
            'When full-page navigation would be clearer',
            'For very large amounts of content',
        ], bestPractices: [
            'Use appropriate sides (right for forms, left for navigation)',
            'Keep sheet width reasonable (not full screen)',
            'Provide clear close affordances',
            'Consider overlay darkness for importance',
            'Make sheets dismissable by clicking outside',
        ], accessibility: [
            'Focus is trapped within the sheet',
            'ESC key closes the sheet',
            'Announce sheet opening to screen readers',
            'Ensure close button is keyboard accessible',
        ], children: _jsxs("div", { className: "flex gap-4", children: [_jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Right Sheet" }) }), _jsxs(SheetContent, { children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Edit Profile" }), _jsx(SheetDescription, { children: "Make changes to your profile here. Click save when you're done." })] }), _jsxs("div", { className: "py-6 space-y-4 px-[16px] py-[24px]", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Name" }), _jsx("input", { className: "w-full px-3 py-2 rounded-md", style: { border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-base)' }, placeholder: "Enter name" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Email" }), _jsx("input", { className: "w-full px-3 py-2 rounded-md", style: { border: '1px solid var(--border-default)', backgroundColor: 'var(--bg-base)' }, placeholder: "Enter email" })] })] }), _jsxs("div", { className: "flex justify-end gap-2 px-[16px] py-[0px]", children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Save" })] })] })] }), _jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Left Sheet" }) }), _jsxs(SheetContent, { side: "left", children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Navigation" }), _jsx(SheetDescription, { children: "Quick navigation menu" })] }), _jsxs("div", { className: "space-y-2 px-[16px] py-[24px] px-[8px] py-[16px]", children: [_jsx("a", { href: "#", className: "block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]", children: "Dashboard" }), _jsx("a", { href: "#", className: "block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]", children: "Projects" }), _jsx("a", { href: "#", className: "block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]", children: "Team" }), _jsx("a", { href: "#", className: "block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 px-[0px] py-[8px]", children: "Settings" })] })] })] })] }) }));
}
function DrawerSection() {
    return (_jsx(ComponentDocumentation, { title: "Drawer", description: "Bottom drawer for mobile-friendly interactions", rationale: "Drawers slide up from the bottom of the screen, providing a mobile-optimized pattern for presenting content or actions. They feel natural on touch devices and work well for quick actions or confirmations without taking over the full screen.", whenToUse: [
            'On mobile devices for menus and options',
            'For quick actions or confirmations on touch devices',
            'When a sheet would be awkward on smaller screens',
            'For bottom navigation or action sheets',
        ], whenNotToUse: [
            'On desktop where sheets or dialogs work better',
            'For content that needs significant vertical space',
            'When keyboard input is the primary interaction',
        ], bestPractices: [
            'Include a drag handle for intuitive closing',
            'Keep drawer content concise',
            'Make it easy to dismiss (swipe down, tap outside)',
            'Consider snap points for different content heights',
            'Test on actual mobile devices',
        ], accessibility: [
            'Announce drawer opening to screen readers',
            'Provide keyboard shortcuts for closing',
            'Ensure focus is managed appropriately',
            'Test with mobile screen readers (VoiceOver, TalkBack)',
        ], children: _jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Drawer" }) }), _jsxs(DrawerContent, { children: [_jsxs(DrawerHeader, { children: [_jsx(DrawerTitle, { children: "Are you absolutely sure?" }), _jsx(DrawerDescription, { children: "This action cannot be undone." })] }), _jsx("div", { className: "px-4 pb-4", children: _jsx("p", { style: { color: 'var(--text-secondary)' }, children: "This will permanently delete your account and remove your data from our servers." }) }), _jsxs(DrawerFooter, { children: [_jsx(Button, { children: "Confirm" }), _jsx(DrawerClose, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Cancel" }) })] })] })] }) }));
}
function PopoverSection() {
    const [date, setDate] = useState(new Date());
    return (_jsx(ComponentDocumentation, { title: "Popover", description: "Floating content container that appears on click", rationale: "Popovers provide contextual content in a floating container near the trigger element. They're perfect for supplementary information, pickers, or small forms that relate directly to a specific UI element.", whenToUse: [
            'For date pickers, color pickers, or other input tools',
            'To show additional context without leaving the page',
            'For small forms or settings related to a specific element',
            'When tooltip content would be too complex',
        ], whenNotToUse: [
            'For critical information (use Dialog)',
            'For long-form content (use Sheet or Dialog)',
            'On mobile where sheets might be better',
            'For simple text hints (use Tooltip)',
        ], bestPractices: [
            'Position popovers to avoid covering related content',
            'Keep popover content focused and concise',
            'Make popovers dismissable by clicking outside',
            'Use appropriate sizing for the content',
            'Consider arrow indicators pointing to the trigger',
        ], accessibility: [
            'Popovers should be keyboard accessible',
            'ESC key should close popovers',
            'Focus should move to popover when opened',
            'Use appropriate ARIA attributes',
        ], children: _jsxs("div", { className: "flex gap-4", children: [_jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Popover" }) }), _jsx(PopoverContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsx("h3", { children: "Popover Content" }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-secondary)' }, children: "This is a popover with custom content." })] }) })] }), _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Date Picker" }) }), _jsx(PopoverContent, { className: "w-auto p-0", children: _jsx(Calendar, { mode: "single", selected: date, onSelect: setDate, initialFocus: true }) })] })] }) }));
}
// NAVIGATION
function TabsSection() {
    return (_jsxs(ComponentDocumentation, { title: "Tabs", description: "Organizes content into separate views with navigation", rationale: "Tabs organize related content into distinct sections that users can switch between, reducing cognitive load by presenting only one view at a time. They're ideal for grouping related information without requiring page navigation.", whenToUse: [
            'To organize related content into distinct categories',
            'When users don\'t need to see all content simultaneously',
            'For settings or configuration panels with multiple sections',
            'To reduce page scrolling by organizing content horizontally',
        ], whenNotToUse: [
            'For sequential steps (use Stepper instead)',
            'When users need to compare content across tabs',
            'For unrelated content that should be separate pages',
            'With more than 5-7 tabs (becomes hard to scan)',
        ], bestPractices: [
            'Keep tab labels short and descriptive',
            'Highlight the active tab clearly',
            'Maintain state when switching tabs when appropriate',
            'Limit to 5-7 tabs for scannability',
            'Consider responsive behavior on mobile',
        ], accessibility: [
            'Tabs are keyboard navigable with arrow keys',
            'Active tab should have clear visual and semantic indication',
            'Use proper ARIA attributes (role="tablist", etc.)',
            'Tab panels should have appropriate ARIA labels',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Default" }), _jsx(Tabs, { defaultValue: "overview", className: "max-w-2xl", children: _jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "overview", children: "Overview" }), _jsx(TabsTrigger, { value: "analytics", children: "Analytics" }), _jsx(TabsTrigger, { value: "reports", children: "Reports" }), _jsx(TabsTrigger, { value: "settings", children: "Settings" })] }) })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Content" }), _jsxs(Tabs, { defaultValue: "tab1", className: "max-w-2xl", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "tab1", children: "Tab 1" }), _jsx(TabsTrigger, { value: "tab2", children: "Tab 2" }), _jsx(TabsTrigger, { value: "tab3", children: "Tab 3" })] }), _jsx(TabsContent, { value: "tab1", className: "mt-4", children: _jsx("p", { style: { color: 'var(--text-secondary)' }, children: "Content for Tab 1" }) }), _jsx(TabsContent, { value: "tab2", className: "mt-4", children: _jsx("p", { style: { color: 'var(--text-secondary)' }, children: "Content for Tab 2" }) }), _jsx(TabsContent, { value: "tab3", className: "mt-4", children: _jsx("p", { style: { color: 'var(--text-secondary)' }, children: "Content for Tab 3" }) })] })] })] }));
}
function AccordionSection() {
    return (_jsx(ComponentDocumentation, { title: "Accordion", description: "Expandable content sections", rationale: "Accordions progressively disclose content, allowing users to focus on one section at a time while maintaining context of other available sections. They're excellent for FAQs, settings, and any content where users need selective access.", whenToUse: [
            'For FAQs or help content',
            'To organize long-form content into scannable sections',
            'When showing all content at once would overwhelm users',
            'For progressive disclosure in forms or settings',
        ], whenNotToUse: [
            'When users need to see multiple sections simultaneously',
            'For short content that doesn\'t need collapsing',
            'For primary navigation (use tabs or menus)',
            'When content relationships aren\'t hierarchical',
        ], bestPractices: [
            'Use clear, descriptive section headers',
            'Consider allowing multiple sections open simultaneously',
            'Provide visual indicators (chevrons) for expand/collapse state',
            'Keep section content focused and scannable',
            'Maintain consistent section ordering logic',
        ], accessibility: [
            'Accordion headers are keyboard navigable',
            'Enter/Space keys toggle sections',
            'Expanded/collapsed state is announced to screen readers',
            'Use proper ARIA attributes (aria-expanded, etc.)',
        ], children: _jsxs(Accordion, { type: "single", collapsible: true, className: "max-w-2xl", children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { children: "What is the Campfire Design System?" }), _jsx(AccordionContent, { children: "Campfire is a comprehensive design system built on shadcn/ui components with an earthy, grounded aesthetic. It includes design tokens, component libraries, and layout patterns." })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { children: "How do I use the components?" }), _jsx(AccordionContent, { children: "Each component is built with React and Tailwind CSS. Simply import the component you need and use it in your application with the appropriate props." })] }), _jsxs(AccordionItem, { value: "item-3", children: [_jsx(AccordionTrigger, { children: "Can I customize the design tokens?" }), _jsx(AccordionContent, { children: "Yes! All design tokens are defined in the globals.css file and can be customized to match your brand while maintaining the system's consistency." })] })] }) }));
}
function DropdownSection() {
    return (_jsx(ComponentDocumentation, { title: "Dropdown Menu", description: "Contextual menu with actions and options", rationale: "Dropdown menus provide contextual actions and options in a compact, organized format. They save screen space by hiding options until needed and are instantly recognizable to users as a standard interaction pattern.", whenToUse: [
            'For contextual actions related to a specific element',
            'To organize multiple related actions compactly',
            'In toolbars or navigation for secondary options',
            'For user account menus and settings',
        ], whenNotToUse: [
            'For primary navigation (use nav menus)',
            'When there are only 1-2 options (use buttons)',
            'For form selections (use Select component)',
        ], bestPractices: [
            'Group related items with separators',
            'Use icons to make items more scannable',
            'Keep menu items short and action-oriented',
            'Place destructive actions at the bottom with separation',
            'Limit menu depth (avoid submenus when possible)',
        ], accessibility: [
            'Dropdowns are keyboard navigable with arrow keys',
            'Enter/Space activates menu items',
            'ESC closes the menu',
            'Proper ARIA attributes for menu role',
        ], children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", children: ["Open Menu", _jsx(ChevronDown, { className: "ml-2 h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Profile" }), _jsx(DropdownMenuItem, { children: "Settings" }), _jsx(DropdownMenuItem, { children: "Team" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Logout" })] })] }) }));
}
function CommandSection() {
    return (_jsx(ComponentDocumentation, { title: "Command", description: "Command palette for quick actions", rationale: "Command palettes provide keyboard-driven access to actions and navigation, allowing power users to work efficiently without lifting their hands from the keyboard. They're becoming essential in modern applications for quick access to features.", whenToUse: [
            'For keyboard-first navigation and actions',
            'To provide quick access to app features',
            'In complex applications with many actions',
            'For search functionality across different content types',
        ], whenNotToUse: [
            'In simple applications with few actions',
            'As the primary navigation method for all users',
            'When mouse/touch interaction is more appropriate',
        ], bestPractices: [
            'Make it accessible with a keyboard shortcut (Cmd+K, Ctrl+K)',
            'Group commands into logical categories',
            'Show keyboard shortcuts for commands',
            'Include fuzzy search for better matching',
            'Provide visual icons for better scannability',
        ], accessibility: [
            'Fully keyboard navigable',
            'Clear visual focus indicators',
            'Announce results to screen readers',
            'Provide escape mechanisms',
        ], children: _jsxs(Command, { className: "rounded-lg", style: { border: '1px solid var(--border-default)' }, children: [_jsx(CommandInput, { placeholder: "Type a command or search..." }), _jsxs(CommandList, { children: [_jsx(CommandEmpty, { children: "No results found." }), _jsxs(CommandGroup, { heading: "Suggestions", children: [_jsxs(CommandItem, { children: [_jsx("i", { className: "fa-solid fa-calendar mr-2" }), _jsx("span", { children: "Calendar" })] }), _jsxs(CommandItem, { children: [_jsx("i", { className: "fa-solid fa-face-smile mr-2" }), _jsx("span", { children: "Search Emoji" })] }), _jsxs(CommandItem, { children: [_jsx("i", { className: "fa-solid fa-calculator mr-2" }), _jsx("span", { children: "Calculator" })] })] }), _jsxs(CommandGroup, { heading: "Settings", children: [_jsxs(CommandItem, { children: [_jsx("i", { className: "fa-solid fa-user mr-2" }), _jsx("span", { children: "Profile" })] }), _jsxs(CommandItem, { children: [_jsx("i", { className: "fa-solid fa-gear mr-2" }), _jsx("span", { children: "Settings" })] })] })] })] }) }));
}
// DATA DISPLAY
function TableSection() {
    return (_jsx(ComponentDocumentation, { title: "Table", description: "Displays data in rows and columns", rationale: "Tables organize complex data into scannable rows and columns, making it easy to compare information and identify patterns. They're essential for displaying structured data like user lists, transactions, or analytics.", whenToUse: [
            'For displaying structured, tabular data',
            'When users need to scan and compare information',
            'For data that needs sorting or filtering',
            'To show relationships between data points',
        ], whenNotToUse: [
            'For small amounts of data (use lists or cards)',
            'On mobile devices with limited width',
            'For unstructured content',
            'When visual charts would communicate better',
        ], bestPractices: [
            'Make headers clear and descriptive',
            'Enable sorting on relevant columns',
            'Provide filters for large datasets',
            'Use appropriate column widths',
            'Consider pagination for long tables',
            'Make tables responsive on mobile (consider cards instead)',
        ], accessibility: [
            'Use semantic table markup (thead, tbody, th, td)',
            'Provide clear header associations',
            'Ensure sufficient color contrast',
            'Make interactive elements keyboard accessible',
        ], children: _jsx("div", { className: "rounded-lg overflow-hidden", style: { border: '1px solid var(--border-default)' }, children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Role" }), _jsx(TableHead, { className: "text-right", children: "Actions" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "John Doe" }), _jsx(TableCell, { children: _jsx(Badge, { style: { backgroundColor: 'var(--success-600)', color: 'white' }, children: "Active" }) }), _jsx(TableCell, { children: "Admin" }), _jsx(TableCell, { className: "text-right", children: _jsx(Button, { variant: "ghost", size: "sm", children: "Edit" }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Jane Smith" }), _jsx(TableCell, { children: _jsx(Badge, { style: { backgroundColor: 'var(--success-600)', color: 'white' }, children: "Active" }) }), _jsx(TableCell, { children: "Developer" }), _jsx(TableCell, { className: "text-right", children: _jsx(Button, { variant: "ghost", size: "sm", children: "Edit" }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Bob Johnson" }), _jsx(TableCell, { children: _jsx(Badge, { variant: "secondary", children: "Inactive" }) }), _jsx(TableCell, { children: "Designer" }), _jsx(TableCell, { className: "text-right", children: _jsx(Button, { variant: "ghost", size: "sm", children: "Edit" }) })] })] })] }) }) }));
}
function AvatarSection() {
    return (_jsxs(ComponentDocumentation, { title: "Avatar", description: "User profile image with fallback initials", rationale: "Avatars provide visual identification of users, making interfaces more personal and helping users quickly recognize people. Fallback initials ensure a consistent experience even when profile images aren't available.", whenToUse: [
            'To represent users in profiles and comments',
            'In user lists or team rosters',
            'For account menus and settings',
            'In messaging interfaces',
        ], whenNotToUse: [
            'For non-user entities (use icons instead)',
            'When names alone would be clearer',
        ], bestPractices: [
            'Provide alt text for images',
            'Use initials as fallback when images fail',
            'Make avatars circular for users, square for groups/entities',
            'Use appropriate sizes for context',
            'Consider status indicators (online, busy, etc.)',
        ], accessibility: [
            'Provide meaningful alt text',
            'Ensure sufficient contrast for initials',
            'Don\'t rely solely on color for status',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Sizes" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { className: "h-8 w-8", children: _jsx(AvatarFallback, { children: "SM" }) }), _jsx(Avatar, { className: "h-10 w-10", children: _jsx(AvatarFallback, { children: "MD" }) }), _jsx(Avatar, { className: "h-12 w-12", children: _jsx(AvatarFallback, { children: "LG" }) }), _jsx(Avatar, { className: "h-16 w-16", children: _jsx(AvatarFallback, { children: "XL" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Fallback" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { children: _jsx(AvatarFallback, { children: "JD" }) }), _jsx(Avatar, { children: _jsx(AvatarFallback, { style: { backgroundColor: 'var(--primary-600)', color: 'white' }, children: "AB" }) }), _jsx(Avatar, { children: _jsx(AvatarFallback, { style: { backgroundColor: 'var(--secondary-600)', color: 'white' }, children: "CD" }) })] })] })] }));
}
function SkeletonSection() {
    return (_jsx(ComponentDocumentation, { title: "Skeleton", description: "Loading placeholder animation", rationale: "Skeleton screens improve perceived performance by showing content structure while data loads, reducing user anxiety and creating a smoother experience. They set expectations about content layout and make loading feel faster.", whenToUse: [
            'During initial page or component load',
            'When fetching data that takes time',
            'To show content structure before real data arrives',
            'In cards, lists, or complex layouts',
        ], whenNotToUse: [
            'For very fast loading (< 300ms)',
            'For small UI elements',
            'When a simple spinner would be clearer',
        ], bestPractices: [
            'Match skeleton shape to actual content',
            'Use appropriate widths to suggest content',
            'Animate subtly to show progress',
            'Show skeleton for all content that will load',
            'Replace skeletons with actual content smoothly',
        ], accessibility: [
            'Announce loading state to screen readers',
            'Update announcements when content loads',
            'Ensure animations respect prefers-reduced-motion',
        ], children: _jsxs("div", { className: "space-y-6 max-w-lg", children: [_jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { className: "h-12 w-full" }), _jsx(Skeleton, { className: "h-12 w-3/4" }), _jsx(Skeleton, { className: "h-12 w-1/2" })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(Skeleton, { className: "h-6 w-1/3" }), _jsx(Skeleton, { className: "h-4 w-2/3 mt-2" })] }), _jsxs(CardContent, { className: "space-y-2", children: [_jsx(Skeleton, { className: "h-4 w-full" }), _jsx(Skeleton, { className: "h-4 w-full" }), _jsx(Skeleton, { className: "h-4 w-3/4" })] })] })] }) }));
}
// FORM CONTROLS
function ProgressSection() {
    const [progress] = useState(65);
    return (_jsx(ComponentDocumentation, { title: "Progress", description: "Shows completion progress of a task", rationale: "Progress indicators provide visual feedback about task completion, reducing uncertainty and keeping users informed during longer operations. They set expectations and make wait times feel shorter.", whenToUse: [
            'For file uploads or downloads',
            'During multi-step processes',
            'For tasks with known duration or percentage',
            'To show profile completion or onboarding progress',
        ], whenNotToUse: [
            'For indefinite loading (use spinner instead)',
            'When the task completes very quickly',
            'For tasks where progress can\'t be measured',
        ], bestPractices: [
            'Show percentage or step count when possible',
            'Update progress smoothly, not in jumps',
            'Include descriptive text about what\'s happening',
            'Consider showing time remaining for long tasks',
            'Make progress accessible to screen readers',
        ], accessibility: [
            'Use role="progressbar" with aria-valuenow',
            'Announce progress updates to screen readers',
            'Provide text alternatives for visual progress',
        ], children: _jsxs("div", { className: "space-y-6 max-w-lg", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Label, { children: "Upload Progress" }), _jsxs("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: [progress, "%"] })] }), _jsx(Progress, { value: progress })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Loading..." }), _jsx(Progress, { value: 33 })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Complete" }), _jsx(Progress, { value: 100 })] })] }) }));
}
function SliderSection() {
    const [sliderValue, setSliderValue] = useState([50]);
    return (_jsx(ComponentDocumentation, { title: "Slider", description: "Allows users to select a value from a range", rationale: "Sliders provide an intuitive way to select values from a continuous range, offering immediate visual feedback and making it easy to adjust settings. They're especially useful for values where precision isn't critical.", whenToUse: [
            'For volume, brightness, or other continuous adjustments',
            'When showing the range of values is helpful',
            'For settings where approximate values are acceptable',
            'In filters with numeric ranges (price, size, etc.)',
        ], whenNotToUse: [
            'For precise numeric input (use number input)',
            'When there are only a few discrete options (use radio buttons)',
            'For critical values where precision matters',
        ], bestPractices: [
            'Show the current value clearly',
            'Provide appropriate min, max, and step values',
            'Use labels to indicate what the slider controls',
            'Consider showing tick marks for key values',
            'Make the slider large enough for easy interaction',
        ], accessibility: [
            'Sliders are keyboard accessible (arrow keys)',
            'Current value is announced to screen readers',
            'Provide clear labels for the slider purpose',
            'Consider alternative inputs for precise control',
        ], children: _jsxs("div", { className: "space-y-6 max-w-lg", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Label, { children: "Volume" }), _jsxs("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: [sliderValue[0], "%"] })] }), _jsx(Slider, { value: sliderValue, onValueChange: setSliderValue, max: 100, step: 1 })] }), _jsxs("div", { className: "space-y-4", children: [_jsx(Label, { children: "Brightness" }), _jsx(Slider, { defaultValue: [75], max: 100, step: 1 })] }), _jsxs("div", { className: "space-y-4", children: [_jsx(Label, { children: "Disabled" }), _jsx(Slider, { defaultValue: [50], max: 100, step: 1, disabled: true })] })] }) }));
}
function TextareaSection() {
    return (_jsx(ComponentDocumentation, { title: "Textarea", description: "Multi-line text input field", rationale: "Textareas provide space for longer, multi-line text input, making them ideal for comments, descriptions, or any content that needs more than a single line. They automatically expand vertically to accommodate content.", whenToUse: [
            'For comments, descriptions, or messages',
            'When users need to enter multiple lines of text',
            'For feedback forms or support requests',
            'For any content longer than a sentence',
        ], whenNotToUse: [
            'For single-line input (use Input instead)',
            'For rich text editing (use a rich text editor)',
            'For code input (consider a code editor component)',
        ], bestPractices: [
            'Set appropriate rows height for expected content',
            'Provide character count for limited inputs',
            'Make textareas resizable when appropriate',
            'Use placeholder text to guide users',
            'Consider auto-expanding height for better UX',
        ], accessibility: [
            'Associate labels with textareas',
            'Provide clear error messages',
            'Use appropriate autocomplete attributes',
            'Ensure sufficient contrast',
        ], children: _jsxs("div", { className: "space-y-6 max-w-lg", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "message", children: "Message" }), _jsx(Textarea, { id: "message", placeholder: "Type your message here...", rows: 4 })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "description", children: "Description" }), _jsx(Textarea, { id: "description", placeholder: "Enter a description...", rows: 6 })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "disabled-textarea", children: "Disabled" }), _jsx(Textarea, { id: "disabled-textarea", placeholder: "This is disabled", disabled: true, rows: 3 })] })] }) }));
}
// EXAMPLES
function LoadingSection() {
    return (_jsxs(ComponentDocumentation, { title: "Loading Spinner", description: "Indicates loading state", rationale: "Loading spinners provide immediate feedback that the application is working on a request, preventing user confusion and reducing abandonment. They're essential for maintaining perceived responsiveness during operations.", whenToUse: [
            'For indefinite loading states',
            'During API calls or data fetching',
            'In buttons during form submission',
            'For operations without measurable progress',
        ], whenNotToUse: [
            'For operations with known progress (use Progress)',
            'For very fast operations (< 300ms)',
            'For initial page loads (use Skeleton instead)',
        ], bestPractices: [
            'Size spinners appropriately for context',
            'Use inline spinners in buttons during actions',
            'Add descriptive text when the wait might be long',
            'Consider animation preferences (prefers-reduced-motion)',
            'Don\'t overuse - too many spinners cause anxiety',
        ], accessibility: [
            'Announce loading state to screen readers',
            'Use role="status" or aria-live',
            'Announce completion to screen readers',
            'Respect prefers-reduced-motion settings',
        ], children: [_jsxs("div", { className: "flex items-center gap-8", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("div", { style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: "Small" }), _jsx(Loader2, { className: "h-4 w-4 animate-spin", style: { color: 'var(--interactive-default)' } })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: "Medium" }), _jsx(Loader2, { className: "h-6 w-6 animate-spin", style: { color: 'var(--interactive-default)' } })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: "Large" }), _jsx(Loader2, { className: "h-8 w-8 animate-spin", style: { color: 'var(--interactive-default)' } })] })] }), _jsxs("div", { children: [_jsx("div", { className: "mb-2", style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: "Linear Progress" }), _jsx("div", { className: "w-full h-1 rounded-full overflow-hidden", style: { backgroundColor: 'var(--bg-muted)' }, children: _jsx("div", { className: "h-full rounded-full animate-pulse", style: { width: '60%', backgroundColor: 'var(--interactive-default)' } }) })] })] }));
}
function NavBarSection() {
    return (_jsx(ComponentDocumentation, { title: "Navigation Bar", description: "Example navigation bar pattern", rationale: "Navigation bars provide consistent, always-accessible navigation throughout your application. They establish hierarchy, help users understand where they are, and provide quick access to key features.", whenToUse: [
            'For primary navigation in your application',
            'To provide persistent access to key features',
            'For branding and user account access',
            'In multi-page applications',
        ], whenNotToUse: [
            'For contextual actions (use toolbars)',
            'In single-page simple apps',
            'When vertical navigation (sidebar) is more appropriate',
        ], bestPractices: [
            'Keep navigation consistent across pages',
            'Highlight the current page/section',
            'Place the logo/brand on the left',
            'Put user account items on the right',
            'Make it responsive (hamburger menu on mobile)',
            'Limit top-level items to 5-7',
        ], accessibility: [
            'Use semantic nav element',
            'Ensure keyboard navigation works',
            'Provide skip links for screen readers',
            'Indicate current page to assistive tech',
        ], children: _jsx("div", { className: "rounded-lg overflow-hidden", style: { border: '1px solid var(--border-default)' }, children: _jsxs("nav", { className: "h-16 px-6 flex items-center justify-between", style: { backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-default)' }, children: [_jsxs("div", { className: "flex items-center gap-8", children: [_jsx("div", { className: "w-10 h-10 rounded-lg flex items-center justify-center", style: { backgroundColor: 'var(--primary-600)' }, children: _jsx("i", { className: "fa-solid fa-house", style: { color: 'white', fontSize: '18px' } }) }), _jsxs("div", { className: "flex gap-6", children: [_jsx("a", { href: "#", style: { color: 'var(--interactive-default)', borderBottom: '2px solid var(--interactive-default)', paddingBottom: '4px' }, children: "Dashboard" }), _jsx("a", { href: "#", style: { color: 'var(--text-secondary)' }, children: "Projects" }), _jsx("a", { href: "#", style: { color: 'var(--text-secondary)' }, children: "Team" }), _jsx("a", { href: "#", style: { color: 'var(--text-secondary)' }, children: "Settings" })] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "sm", children: _jsx("i", { className: "fa-solid fa-magnifying-glass" }) }), _jsxs(Button, { variant: "ghost", size: "sm", className: "relative", children: [_jsx("i", { className: "fa-solid fa-bell" }), _jsx("span", { className: "absolute top-1 right-1 w-2 h-2 rounded-full", style: { backgroundColor: 'var(--danger-500)' } })] }), _jsx(Button, { variant: "ghost", size: "sm", children: _jsx("i", { className: "fa-solid fa-user" }) })] })] }) }) }));
}
