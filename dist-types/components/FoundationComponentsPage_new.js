import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { PageWithSidebar } from './PageWithSidebar';
import { ComponentDocumentation } from './ComponentDocumentation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { Separator } from './ui/separator';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
export function FoundationComponentsPage() {
    const [activeSection, setActiveSection] = useState('button');
    const sidebarGroups = [
        {
            title: 'Form Controls',
            items: [
                { id: 'button', label: 'Button', icon: 'fa-solid fa-hand-pointer' },
                { id: 'input', label: 'Input', icon: 'fa-solid fa-keyboard' },
                { id: 'textarea', label: 'Textarea', icon: 'fa-solid fa-align-left' },
                { id: 'checkbox', label: 'Checkbox', icon: 'fa-solid fa-square-check' },
                { id: 'radio', label: 'Radio', icon: 'fa-solid fa-circle-dot' },
                { id: 'switch', label: 'Switch', icon: 'fa-solid fa-toggle-on' },
                { id: 'select', label: 'Select', icon: 'fa-solid fa-caret-down' },
                { id: 'slider', label: 'Slider', icon: 'fa-solid fa-sliders' },
                { id: 'label', label: 'Label', icon: 'fa-solid fa-tag' },
            ]
        },
        {
            title: 'Display',
            items: [
                { id: 'card', label: 'Card', icon: 'fa-solid fa-address-card' },
                { id: 'badge', label: 'Badge', icon: 'fa-solid fa-certificate' },
                { id: 'avatar', label: 'Avatar', icon: 'fa-solid fa-user-circle' },
                { id: 'alert', label: 'Alert', icon: 'fa-solid fa-triangle-exclamation' },
                { id: 'progress', label: 'Progress', icon: 'fa-solid fa-spinner' },
                { id: 'table', label: 'Table', icon: 'fa-solid fa-table' },
                { id: 'separator', label: 'Separator', icon: 'fa-solid fa-minus' },
            ]
        },
        {
            title: 'Navigation',
            items: [
                { id: 'breadcrumb', label: 'Breadcrumb', icon: 'fa-solid fa-chevron-right' },
                { id: 'tabs', label: 'Tabs', icon: 'fa-solid fa-folder' },
            ]
        },
        {
            title: 'Overlays',
            items: [
                { id: 'dialog', label: 'Dialog', icon: 'fa-solid fa-window-maximize' },
                { id: 'sheet', label: 'Sheet', icon: 'fa-solid fa-bars' },
                { id: 'popover', label: 'Popover', icon: 'fa-solid fa-message' },
                { id: 'tooltip', label: 'Tooltip', icon: 'fa-solid fa-comment' },
                { id: 'dropdown', label: 'Dropdown Menu', icon: 'fa-solid fa-ellipsis' },
                { id: 'hover-card', label: 'Hover Card', icon: 'fa-solid fa-square-up-right' },
            ]
        },
        {
            title: 'Layout',
            items: [
                { id: 'accordion', label: 'Accordion', icon: 'fa-solid fa-list' },
            ]
        }
    ];
    return (_jsxs(PageWithSidebar, { title: "Foundation", description: "Phase 1 \u2014 25 components organized by category", sidebarGroups: sidebarGroups, activeSection: activeSection, onSectionChange: setActiveSection, gradientColor: "var(--primary-500)", children: [activeSection === 'button' && _jsx(ButtonSection, {}), activeSection === 'input' && _jsx(InputSection, {}), activeSection === 'textarea' && _jsx(TextareaSection, {}), activeSection === 'card' && _jsx(CardSection, {}), activeSection === 'badge' && _jsx(BadgeSection, {}), activeSection === 'checkbox' && _jsx(CheckboxSection, {}), activeSection === 'radio' && _jsx(RadioSection, {}), activeSection === 'switch' && _jsx(SwitchSection, {}), activeSection === 'alert' && _jsx(AlertSection, {}), activeSection === 'breadcrumb' && _jsx(BreadcrumbSection, {}), activeSection === 'tooltip' && _jsx(TooltipSection, {}), activeSection === 'select' && _jsx(SelectSection, {}), activeSection === 'label' && _jsx(LabelSection, {}), activeSection === 'separator' && _jsx(SeparatorSection, {}), activeSection === 'tabs' && _jsx(TabsSection, {}), activeSection === 'dialog' && _jsx(DialogSection, {}), activeSection === 'avatar' && _jsx(AvatarSection, {}), activeSection === 'progress' && _jsx(ProgressSection, {}), activeSection === 'slider' && _jsx(SliderSection, {}), activeSection === 'table' && _jsx(TableSection, {}), activeSection === 'accordion' && _jsx(AccordionSection, {}), activeSection === 'popover' && _jsx(PopoverSection, {}), activeSection === 'dropdown' && _jsx(DropdownSection, {}), activeSection === 'hover-card' && _jsx(HoverCardSection, {}), activeSection === 'sheet' && _jsx(SheetSection, {})] }));
}
function ButtonSection() {
    return (_jsxs(ComponentDocumentation, { title: "Button", description: "Clickable button component with multiple variants, sizes, and states", rationale: "Buttons are the primary way users trigger actions in your interface. The Campfire button system provides semantic variants that communicate intent, making it clear whether an action is primary, secondary, or potentially destructive.", whenToUse: [
            'To trigger an immediate action (submit form, open dialog, navigate)',
            'For the primary call-to-action on a page or section',
            'When you need clear visual hierarchy between actions',
            'To perform operations like save, delete, or cancel',
        ], whenNotToUse: [
            'For navigation between pages (use Link component instead)',
            'For toggling states (use Switch or Toggle instead)',
            'In data tables where space is limited (consider icon buttons)',
        ], bestPractices: [
            'Use Primary variant sparingly - typically one per page/section',
            'Destructive actions should use the destructive variant',
            'Include loading states for async operations',
            'Pair icons with labels for clarity (icon-only for common actions)',
            'Maintain consistent sizing within the same context',
        ], accessibility: [
            'Buttons automatically have role="button" and keyboard support',
            'Disabled buttons are not focusable and announce their state',
            'Loading buttons should announce their loading state to screen readers',
            'Icon-only buttons should include aria-label for context',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Variants" }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Button, { children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "destructive", children: "Danger" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Sizes" }), _jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "default", children: "Medium" }), _jsx(Button, { size: "lg", children: "Large" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "States" }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Button, { children: "Default" }), _jsx(Button, { disabled: true, children: "Disabled" }), _jsxs(Button, { children: [_jsx("i", { className: "fa-solid fa-spinner fa-spin mr-2" }), "Loading"] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Icons" }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsxs(Button, { children: [_jsx("i", { className: "fa-solid fa-magnifying-glass mr-2" }), "Search"] }), _jsxs(Button, { variant: "outline", children: ["Download", _jsx("i", { className: "fa-solid fa-chevron-right ml-2" })] })] })] })] }));
}
function InputSection() {
    const [email, setEmail] = useState('');
    return (_jsx(ComponentDocumentation, { title: "Input", description: "Text input field for user data entry", rationale: "The Input component is the foundation of form interaction, allowing users to enter data in a structured way. It's designed with clear states and validation patterns to guide users through data entry tasks.", whenToUse: [
            'For collecting short, single-line text data',
            'Email addresses, names, search queries, and similar inputs',
            'When you need structured data entry with validation',
            'For forms that require user input',
        ], whenNotToUse: [
            'For long-form text (use Textarea instead)',
            'For selecting from predefined options (use Select, Radio, or Checkbox)',
            'For numeric inputs with steppers (consider custom number input)',
        ], bestPractices: [
            'Always pair with a Label for accessibility and clarity',
            'Use appropriate input types (email, tel, password, etc.)',
            'Provide clear placeholder text as examples, not instructions',
            'Show validation feedback inline and in real-time when appropriate',
            'Use proper autocomplete attributes for common fields',
        ], accessibility: [
            'Always associate inputs with labels using htmlFor/id',
            'Use appropriate input types for mobile keyboard optimization',
            'Required fields should be marked both visually and semantically',
            'Error messages should be associated with the input via aria-describedby',
        ], children: _jsxs("div", { className: "space-y-6 max-w-md", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "Enter your email", value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "disabled", children: "Disabled" }), _jsx(Input, { id: "disabled", placeholder: "Disabled input", disabled: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "with-icon", children: "With Icon" }), _jsxs("div", { className: "relative", children: [_jsx("i", { className: "fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2", style: { color: 'var(--text-tertiary)', fontSize: '14px' } }), _jsx(Input, { id: "with-icon", placeholder: "Search...", className: "pl-10" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "sizes-sm", children: "Small" }), _jsx(Input, { id: "sizes-sm", placeholder: "Small input", className: "h-8" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "sizes-lg", children: "Large" }), _jsx(Input, { id: "sizes-lg", placeholder: "Large input", className: "h-12" })] })] }) }));
}
function TextareaSection() {
    const [message, setMessage] = useState('');
    return (_jsx(ComponentDocumentation, { title: "Textarea", description: "Multi-line text input for longer content", rationale: "Textarea provides a resizable, multi-line text input for collecting longer-form content like messages, descriptions, or comments. It expands vertically to accommodate more content while maintaining a structured input area.", whenToUse: [
            'For collecting multi-line text input (comments, descriptions, messages)',
            'When users need to enter more than a sentence of text',
            'For feedback forms, reviews, and detailed responses',
            'When content length is unpredictable',
        ], whenNotToUse: [
            'For single-line inputs (use Input instead)',
            'For selecting from options (use Select or Radio)',
            'When formatting is needed (consider a rich text editor)',
        ], bestPractices: [
            'Set an appropriate initial height (rows attribute)',
            'Allow resizing for user preference',
            'Include character count for limited inputs',
            'Pair with Label for clarity and accessibility',
            'Provide placeholder text as an example format',
        ], accessibility: [
            'Associate with labels using htmlFor/id',
            'Announce character limits to screen readers',
            'Use aria-describedby for helper text',
            'Ensure sufficient color contrast',
        ], children: _jsxs("div", { className: "space-y-6 max-w-2xl", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "message", children: "Message" }), _jsx(Textarea, { id: "message", placeholder: "Type your message here...", rows: 4, value: message, onChange: (e) => setMessage(e.target.value) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "bio", children: "Bio (with character count)" }), _jsx(Textarea, { id: "bio", placeholder: "Tell us about yourself...", rows: 5, maxLength: 500 }), _jsx("p", { style: { fontSize: '12px', color: 'var(--text-tertiary)', textAlign: 'right' }, children: "0 / 500 characters" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "disabled-textarea", children: "Disabled" }), _jsx(Textarea, { id: "disabled-textarea", placeholder: "This textarea is disabled", disabled: true, rows: 3 })] })] }) }));
}
function CardSection() {
    return (_jsx(ComponentDocumentation, { title: "Card", description: "Container for grouping related content", rationale: "Cards provide a flexible container that visually groups related information. The distinct boundary helps users scan and parse content, making them ideal for collections of heterogeneous content or dashboard layouts.", whenToUse: [
            'To group related information and actions together',
            'For dashboard widgets and metrics displays',
            'In grid layouts where each item needs clear boundaries',
            'To create clickable content blocks that navigate elsewhere',
        ], whenNotToUse: [
            'For simple lists where vertical rhythm is sufficient',
            'When cards create unnecessary visual hierarchy',
            'In dense data tables where borders add clutter',
        ], bestPractices: [
            'Use consistent spacing within cards across your interface',
            'Combine with CardHeader, CardContent, and CardFooter for structure',
            'For interactive cards, add hover states and cursor: pointer',
            'Avoid nesting cards deeply - keep hierarchy flat',
            'Use elevation (shadows) sparingly to indicate importance',
        ], accessibility: [
            'Interactive cards should be keyboard accessible (use button or link)',
            'Use semantic HTML within cards (headings, paragraphs, etc.)',
            'For clickable cards, the entire card should be the click target',
        ], children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(Card, { children: _jsxs(CardContent, { className: "pt-6", children: [_jsx("h3", { className: "mb-2", children: "Basic Card" }), _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Simple card with default styling and subtle border." })] }) }), _jsxs(Card, { style: { boxShadow: 'var(--shadow-lg)' }, children: [_jsx(CardHeader, { children: _jsx("h3", { children: "Elevated Card" }) }), _jsx(CardContent, { children: _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Card with elevated shadow for emphasis." }) })] }), _jsxs(Card, { className: "hover:shadow-lg transition-shadow cursor-pointer", children: [_jsx(CardHeader, { children: _jsx("h3", { children: "Interactive Card" }) }), _jsx(CardContent, { children: _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Hover to see the interactive effect." }) }), _jsx(CardFooter, { children: _jsx(Button, { variant: "outline", size: "sm", children: "Learn More" }) })] })] }) }));
}
function BadgeSection() {
    return (_jsxs(ComponentDocumentation, { title: "Badge", description: "Small status indicator or label", rationale: "Badges draw attention to specific metadata like status, counts, or categories. Their compact size makes them perfect for labeling items without overwhelming the interface, while their color coding provides quick visual scanning.", whenToUse: [
            'To highlight item status or state (new, featured, beta)',
            'For notification counts and numerical indicators',
            'To categorize or tag items with metadata',
            'To show version numbers or labels',
        ], whenNotToUse: [
            'For primary navigation elements',
            'When the information is critical to understand (use Alert instead)',
            'For long text content (badges should be concise)',
            'As buttons or interactive elements (use Button instead)',
        ], bestPractices: [
            'Keep badge text short (1-2 words or numbers)',
            'Use semantic colors (green for success, red for errors)',
            'Maintain consistency in badge usage across similar contexts',
            'Don\'t use too many badges on a single item (max 2-3)',
            'Ensure sufficient color contrast for accessibility',
        ], accessibility: [
            'Badges should have sufficient color contrast with their background',
            'Don\'t rely on color alone to convey meaning',
            'For icon-only badges, include sr-only text for screen readers',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Colors" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Badge, { children: "Primary" }), _jsx(Badge, { variant: "secondary", children: "Secondary" }), _jsx(Badge, { variant: "outline", children: "Outline" }), _jsx(Badge, { variant: "destructive", children: "Destructive" }), _jsx(Badge, { style: { backgroundColor: 'var(--success-600)', color: 'white' }, children: "Success" }), _jsx(Badge, { style: { backgroundColor: 'var(--warning-600)', color: 'white' }, children: "Warning" }), _jsx(Badge, { style: { backgroundColor: 'var(--info-600)', color: 'white' }, children: "Info" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Sizes" }), _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Badge, { className: "h-5 px-2", style: { fontSize: '11px' }, children: "Small" }), _jsx(Badge, { children: "Medium" }), _jsx(Badge, { className: "h-7 px-3", children: "Large" })] })] })] }));
}
function CheckboxSection() {
    const [checked, setChecked] = useState(false);
    return (_jsx(ComponentDocumentation, { title: "Checkbox", description: "Allows users to select one or more options", rationale: "Checkboxes enable multi-selection scenarios where users need to choose multiple options independently. Unlike radio buttons, checkboxes don't enforce mutual exclusivity, making them ideal for settings, filters, and multi-item selection.", whenToUse: [
            'For multi-select scenarios (select multiple items from a list)',
            'To toggle individual settings on/off',
            'For accepting terms and conditions or agreements',
            'In forms where options are independent of each other',
        ], whenNotToUse: [
            'For mutually exclusive options (use Radio instead)',
            'For binary settings that need immediate action (use Switch instead)',
            'When only one selection is allowed',
        ], bestPractices: [
            'Always pair checkboxes with clear labels',
            'Position labels to the right of the checkbox for consistency',
            'Use indeterminate state for parent items when children are partially selected',
            'Group related checkboxes together logically',
            'Make the label clickable, not just the checkbox itself',
        ], accessibility: [
            'Checkboxes have proper keyboard support (Space to toggle)',
            'Labels are properly associated using htmlFor/id',
            'Disabled state is announced to screen readers',
            'Use fieldset/legend to group related checkboxes',
        ], children: _jsxs("div", { className: "space-y-3 max-w-md", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "check1", checked: checked, onCheckedChange: (state) => setChecked(state === true) }), _jsx(Label, { htmlFor: "check1", children: "Accept terms and conditions" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "check2" }), _jsx(Label, { htmlFor: "check2", children: "Subscribe to newsletter" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "check3", disabled: true }), _jsx(Label, { htmlFor: "check3", children: "Disabled option" })] })] }) }));
}
function RadioSection() {
    const [selectedValue, setSelectedValue] = useState('option-1');
    return (_jsx(ComponentDocumentation, { title: "Radio", description: "Allows users to select one option from a set", rationale: "Radio buttons enforce single selection from a group of mutually exclusive options. They make all available choices visible at once, helping users understand the full range of options before making a selection.", whenToUse: [
            'For mutually exclusive selections (only one can be chosen)',
            'When there are 2-7 options to choose from',
            'When you want all options visible without interaction',
            'For settings where users need to see alternatives',
        ], whenNotToUse: [
            'For multi-select scenarios (use Checkbox instead)',
            'When there are too many options (use Select instead)',
            'For binary on/off settings (use Switch instead)',
            'When options can be independently toggled',
        ], bestPractices: [
            'Always have one option selected by default',
            'Keep the number of options between 2-7 for scannability',
            'Use clear, concise labels that differentiate options',
            'Position labels to the right consistently',
            'Group radio buttons with fieldset and legend for context',
        ], accessibility: [
            'Radio groups should be wrapped in a fieldset with legend',
            'Use arrow keys to navigate between options in a group',
            'Labels are properly associated with inputs',
            'One option should always be selected (avoid empty state)',
        ], children: _jsxs(RadioGroup, { value: selectedValue, onValueChange: setSelectedValue, className: "max-w-md", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-1", id: "option-1" }), _jsx(Label, { htmlFor: "option-1", children: "Option 1" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-2", id: "option-2" }), _jsx(Label, { htmlFor: "option-2", children: "Option 2" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-3", id: "option-3", disabled: true }), _jsx(Label, { htmlFor: "option-3", children: "Disabled" })] })] }) }));
}
function SwitchSection() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [airplaneMode, setAirplaneMode] = useState(true);
    return (_jsx(ComponentDocumentation, { title: "Switch", description: "Toggle between on and off states", rationale: "Switches provide immediate binary state changes, typically triggering an action as soon as they're toggled. They're perfect for settings that take effect immediately without requiring a save action.", whenToUse: [
            'For settings that take effect immediately',
            'To enable/disable features or functionality',
            'For binary on/off states in settings panels',
            'When the action happens instantly upon toggle',
        ], whenNotToUse: [
            'In forms that require explicit save/submit (use Checkbox instead)',
            'For mutually exclusive options (use Radio instead)',
            'When multiple items can be selected (use Checkbox instead)',
            'For actions that need confirmation before taking effect',
        ], bestPractices: [
            'Include a descriptive label that makes the on/off state clear',
            'Provide immediate visual feedback when toggled',
            'Consider adding helper text to explain what the switch controls',
            'Use consistent placement (typically right-aligned in settings)',
            'Avoid using switches in forms that have a submit button',
        ], accessibility: [
            'Switches are keyboard accessible (Space/Enter to toggle)',
            'State changes are announced to screen readers',
            'Labels clearly describe what is being toggled',
            'Disabled switches communicate their state appropriately',
        ], children: _jsxs("div", { className: "space-y-6 max-w-md", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "space-y-0.5", children: [_jsx(Label, { htmlFor: "notifications", children: "Notifications" }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "Receive push notifications" })] }), _jsx(Switch, { id: "notifications", checked: notificationsEnabled, onCheckedChange: (state) => setNotificationsEnabled(state) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "space-y-0.5", children: [_jsx(Label, { htmlFor: "airplane", children: "Airplane Mode" }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "Disable all network connections" })] }), _jsx(Switch, { id: "airplane", checked: airplaneMode, onCheckedChange: (state) => setAirplaneMode(state) })] }), _jsxs("div", { className: "flex items-center justify-between opacity-50", children: [_jsxs("div", { className: "space-y-0.5", children: [_jsx(Label, { htmlFor: "disabled-switch", children: "Disabled" }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "This switch is disabled" })] }), _jsx(Switch, { id: "disabled-switch", disabled: true })] })] }) }));
}
function AlertSection() {
    return (_jsx(ComponentDocumentation, { title: "Alert", description: "Displays important messages and notifications", rationale: "Alerts communicate important information that requires user attention. They provide contextual feedback about system status, user actions, or important warnings.", whenToUse: [
            'To display system-level messages or status updates',
            'For success confirmations after user actions',
            'To warn users about potential issues or consequences',
            'For error messages that need immediate attention',
        ], whenNotToUse: [
            'For form field validation errors (use inline validation)',
            'For non-critical information (consider using a less prominent pattern)',
            'When a dialog would be more appropriate for critical actions',
        ], bestPractices: [
            'Use semantic colors (green for success, red for errors, yellow for warnings)',
            'Include relevant icons to reinforce the message type',
            'Keep messages concise and actionable',
            'Provide dismiss functionality for non-critical alerts',
            'Position alerts where they will be noticed without being intrusive',
        ], accessibility: [
            'Use appropriate ARIA roles (alert, status) for screen readers',
            'Ensure sufficient color contrast for readability',
            'Don\'t rely solely on color to convey meaning',
            'Dismiss buttons should be keyboard accessible',
        ], children: _jsxs("div", { className: "space-y-4 max-w-2xl", children: [_jsxs(Alert, { style: { backgroundColor: 'var(--primary-700)', borderColor: 'var(--primary-800)', color: 'white' }, className: "flex items-center gap-3", children: [_jsx("i", { className: "fa-solid fa-circle-info flex-shrink-0", style: { fontSize: '16px' } }), _jsx(AlertDescription, { className: "flex-1", style: { color: 'white' }, children: "This is an informational message with important details." })] }), _jsxs(Alert, { style: { backgroundColor: 'var(--success-700)', borderColor: 'var(--success-700)', color: 'white' }, className: "flex items-center gap-3", children: [_jsx("i", { className: "fa-solid fa-circle-check flex-shrink-0", style: { fontSize: '16px' } }), _jsx(AlertDescription, { className: "flex-1", style: { color: 'white' }, children: "Your changes have been saved successfully!" })] }), _jsxs(Alert, { style: { backgroundColor: 'var(--warning-700)', borderColor: 'var(--warning-700)', color: 'white' }, className: "flex items-center gap-3", children: [_jsx("i", { className: "fa-solid fa-triangle-exclamation flex-shrink-0", style: { fontSize: '16px' } }), _jsx(AlertDescription, { className: "flex-1", style: { color: 'white' }, children: "Warning: This action may have unintended consequences." })] }), _jsxs(Alert, { variant: "destructive", className: "flex items-center gap-3", children: [_jsx("i", { className: "fa-solid fa-circle-exclamation flex-shrink-0", style: { fontSize: '16px' } }), _jsx(AlertDescription, { className: "flex-1", children: "Error: Unable to complete the request. Please try again." })] })] }) }));
}
function BreadcrumbSection() {
    return (_jsx(ComponentDocumentation, { title: "Breadcrumb", description: "Shows the current page location in a navigational hierarchy", rationale: "Breadcrumbs provide secondary navigation that shows users where they are in the site hierarchy and allows them to navigate back up through parent pages.", whenToUse: [
            'In multi-level navigation structures',
            'To show current location in a hierarchy',
            'When users need to navigate up the page tree',
            'For large websites with deep navigation',
        ], whenNotToUse: [
            'On single-level sites',
            'When it duplicates primary navigation',
            'For linear processes (use a stepper instead)',
        ], bestPractices: [
            'Keep breadcrumbs concise and meaningful',
            'Make all but the current page clickable',
            'Use appropriate separators (/, >, ›)',
            'Place near the top of the page',
        ], accessibility: [
            'Use nav element with aria-label="breadcrumb"',
            'Current page should have aria-current="page"',
            'Links should be keyboard accessible',
        ], children: _jsxs("div", { className: "space-y-4", children: [_jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "#", children: "Home" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "#", children: "Components" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Breadcrumb" }) })] }) }), _jsx(Breadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsxs(BreadcrumbLink, { href: "#", children: [_jsx("i", { className: "fa-solid fa-house mr-1", style: { fontSize: '12px' } }), "Home"] }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "#", children: "Products" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "#", children: "Electronics" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Laptops" }) })] }) })] }) }));
}
function TooltipSection() {
    return (_jsx(ComponentDocumentation, { title: "Tooltip", description: "Displays helpful information on hover or focus", rationale: "Tooltips provide contextual information or clarification for UI elements without cluttering the interface. They appear on demand, making them perfect for supplementary information.", whenToUse: [
            'To provide additional context for icons or truncated text',
            'For helpful hints that clarify functionality',
            'To show keyboard shortcuts',
            'When labels would create visual clutter',
        ], whenNotToUse: [
            'For critical information (users might miss it)',
            'On mobile devices (no hover state)',
            'For long-form content (use Popover instead)',
            'For interactive content',
        ], bestPractices: [
            'Keep tooltip text brief and focused',
            'Position tooltips to avoid covering related content',
            'Use consistent delay timing',
            'Don\'t put interactive elements in tooltips',
        ], accessibility: [
            'Tooltips should be triggered by both hover and focus',
            'Use appropriate ARIA attributes',
            'Ensure keyboard users can access tooltip content',
        ], children: _jsxs("div", { className: "flex gap-4 flex-wrap", children: [_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Hover me" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "This is a helpful tooltip" }) })] }) }), _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", size: "icon", children: _jsx("i", { className: "fa-solid fa-info-circle" }) }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "Click for more information" }) })] }) }), _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", children: [_jsx("i", { className: "fa-solid fa-save mr-2" }), "Save"] }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "Save changes (Cmd+S)" }) })] }) })] }) }));
}
function SelectSection() {
    const [value, setValue] = useState('');
    return (_jsx(ComponentDocumentation, { title: "Select", description: "Dropdown menu for selecting from a list of options", rationale: "Select components provide a space-efficient way to choose from many options. They're perfect when you have more than 7 options or when screen space is limited.", whenToUse: [
            'When there are more than 7 options to choose from',
            'For selecting from a predefined list',
            'When space is limited',
            'For country, state, or category selection',
        ], whenNotToUse: [
            'When there are fewer than 5 options (use Radio instead)',
            'For binary choices (use Switch or Checkbox)',
            'When users need to select multiple items (use multi-select or checkboxes)',
        ], bestPractices: [
            'Provide a clear default option or placeholder',
            'Sort options logically (alphabetically or by frequency)',
            'Use consistent labeling patterns',
            'Consider search functionality for long lists',
        ], accessibility: [
            'Provide labels for all selects',
            'Use native select attributes when possible',
            'Ensure keyboard navigation works correctly',
            'Announce changes to screen readers',
        ], children: _jsxs("div", { className: "space-y-6 max-w-md", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "select-1", children: "Select a fruit" }), _jsxs(Select, { value: value, onValueChange: setValue, children: [_jsx(SelectTrigger, { id: "select-1", children: _jsx(SelectValue, { placeholder: "Choose a fruit" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "apple", children: "Apple" }), _jsx(SelectItem, { value: "banana", children: "Banana" }), _jsx(SelectItem, { value: "orange", children: "Orange" }), _jsx(SelectItem, { value: "grape", children: "Grape" }), _jsx(SelectItem, { value: "mango", children: "Mango" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "select-2", children: "Disabled" }), _jsxs(Select, { disabled: true, children: [_jsx(SelectTrigger, { id: "select-2", children: _jsx(SelectValue, { placeholder: "Disabled select" }) }), _jsx(SelectContent, { children: _jsx(SelectItem, { value: "1", children: "Option 1" }) })] })] })] }) }));
}
function LabelSection() {
    return (_jsx(ComponentDocumentation, { title: "Label", description: "Text label for form controls", rationale: "Labels provide essential context for form inputs, improving usability and accessibility. Properly associated labels help all users understand what information is required.", whenToUse: [
            'With every form input for accessibility',
            'To provide context for user input',
            'To improve click targets (clicking label focuses input)',
        ], whenNotToUse: [
            'For purely decorative text',
            'When placeholder text is sufficient (rare)',
        ], bestPractices: [
            'Always associate labels with inputs using htmlFor/id',
            'Keep label text concise and descriptive',
            'Position labels consistently (typically above inputs)',
            'Mark required fields clearly',
        ], accessibility: [
            'Use htmlFor to associate with form controls',
            'Labels improve screen reader experience',
            'Clicking labels should focus their associated input',
        ], children: _jsxs("div", { className: "space-y-4 max-w-md", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name-input", children: "Full Name" }), _jsx(Input, { id: "name-input", placeholder: "John Doe" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "email-input", children: ["Email Address", _jsx("span", { style: { color: 'var(--destructive-600)', marginLeft: '4px' }, children: "*" })] }), _jsx(Input, { id: "email-input", type: "email", placeholder: "john@example.com" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "terms" }), _jsx(Label, { htmlFor: "terms", className: "cursor-pointer", children: "I agree to the terms and conditions" })] })] }) }));
}
function SeparatorSection() {
    return (_jsx(ComponentDocumentation, { title: "Separator", description: "Visual divider between content sections", rationale: "Separators create visual breathing room and hierarchy by dividing content into logical sections. They help organize information without adding heavy visual weight.", whenToUse: [
            'To divide content into logical sections',
            'Between menu items in dropdown menus',
            'To separate groups of related content',
            'In toolbars between different action groups',
        ], whenNotToUse: [
            'Between every element (creates visual noise)',
            'When spacing alone is sufficient',
            'In place of borders for containers',
        ], bestPractices: [
            'Use sparingly to maintain visual clarity',
            'Choose orientation (horizontal/vertical) based on layout',
            'Pair with adequate spacing for breathing room',
            'Use subtle colors that don\'t dominate',
        ], accessibility: [
            'Separators are decorative and don\'t need ARIA labels',
            'Use role="separator" for semantic meaning',
            'Ensure sufficient contrast if conveying grouping',
        ], children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Horizontal Separator" }), _jsxs("div", { children: [_jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Content above separator" }), _jsx(Separator, { className: "my-4" }), _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Content below separator" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Vertical Separator" }), _jsxs("div", { className: "flex items-center gap-4", style: { height: '60px' }, children: [_jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Left content" }), _jsx(Separator, { orientation: "vertical" }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Middle content" }), _jsx(Separator, { orientation: "vertical" }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Right content" })] })] })] }) }));
}
function TabsSection() {
    return (_jsx(ComponentDocumentation, { title: "Tabs", description: "Organize content into multiple panels", rationale: "Tabs allow users to navigate between related sections of content without leaving the page. They're excellent for organizing dense information into manageable, categorized chunks.", whenToUse: [
            'To organize related content into sections',
            'When users need to switch between views',
            'For settings panels with different categories',
            'To reduce page scrolling by grouping content',
        ], whenNotToUse: [
            'For sequential processes (use Stepper instead)',
            'When all content should be visible simultaneously',
            'For primary navigation (use Nav menu instead)',
            'With more than 7-8 tabs (becomes hard to scan)',
        ], bestPractices: [
            'Keep tab labels short and descriptive',
            'Limit to 3-7 tabs for optimal usability',
            'Indicate the active tab clearly',
            'Preserve tab state when switching',
            'Order tabs by importance or logical flow',
        ], accessibility: [
            'Use proper ARIA roles and attributes',
            'Support keyboard navigation (arrow keys)',
            'Announce tab changes to screen readers',
            'Ensure sufficient contrast for active state',
        ], children: _jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs(Tabs, { defaultValue: "account", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "account", children: "Account" }), _jsx(TabsTrigger, { value: "password", children: "Password" }), _jsx(TabsTrigger, { value: "notifications", children: "Notifications" })] }), _jsxs(TabsContent, { value: "account", className: "space-y-4", children: [_jsx("h3", { className: "mb-2", children: "Account Settings" }), _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Manage your account settings and preferences here." }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "username", children: "Username" }), _jsx(Input, { id: "username", placeholder: "johndoe" })] })] }), _jsxs(TabsContent, { value: "password", className: "space-y-4", children: [_jsx("h3", { className: "mb-2", children: "Change Password" }), _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Update your password to keep your account secure." }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "current", children: "Current Password" }), _jsx(Input, { id: "current", type: "password" })] })] }), _jsxs(TabsContent, { value: "notifications", className: "space-y-4", children: [_jsx("h3", { className: "mb-2", children: "Notification Preferences" }), _jsx("p", { style: { color: 'var(--text-secondary)', fontSize: '14px' }, children: "Control how and when you receive notifications." }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Label, { htmlFor: "email-notif", children: "Email Notifications" }), _jsx(Switch, { id: "email-notif" })] })] })] }) }) }) }));
}
function DialogSection() {
    return (_jsx(ComponentDocumentation, { title: "Dialog", description: "Modal window that overlays the main content", rationale: "Dialogs focus user attention on a specific task or message by overlaying the main content. They're perfect for confirmations, forms, or any interaction that requires full user attention.", whenToUse: [
            'For critical confirmations (delete, logout, etc.)',
            'To collect focused user input without navigation',
            'For displaying important messages that require acknowledgment',
            'When you need to break the user\'s flow intentionally',
        ], whenNotToUse: [
            'For non-critical information (use Toast or Alert)',
            'When users need to reference main content',
            'For complex, multi-step processes (consider full page)',
            'On mobile where space is limited (consider Sheet)',
        ], bestPractices: [
            'Provide clear title and description',
            'Include explicit close mechanisms (X button, Cancel)',
            'Make primary action clear and prominent',
            'Use for focused, single-purpose interactions',
            'Trap focus within the dialog',
        ], accessibility: [
            'Focus should move to dialog when opened',
            'ESC key should close the dialog',
            'Background should be inert (not focusable)',
            'Provide aria-labelledby and aria-describedby',
        ], children: _jsxs("div", { className: "flex gap-4 flex-wrap", children: [_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { children: "Open Dialog" }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Confirm Action" }), _jsx(DialogDescription, { children: "Are you sure you want to proceed? This action cannot be undone." })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { variant: "destructive", children: "Delete" })] })] })] }), _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Form Dialog" }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Edit Profile" }), _jsx(DialogDescription, { children: "Make changes to your profile here. Click save when you're done." })] }), _jsxs("div", { className: "space-y-4 py-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { id: "name", placeholder: "Enter your name" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "you@example.com" })] })] }), _jsx(DialogFooter, { children: _jsx(Button, { children: "Save Changes" }) })] })] })] }) }));
}
function AvatarSection() {
    return (_jsx(ComponentDocumentation, { title: "Avatar", description: "User profile image with fallback", rationale: "Avatars personalize the interface by displaying user profile pictures. They help users quickly identify people and provide a visual anchor in lists, comments, and navigation.", whenToUse: [
            'To display user profile pictures',
            'In comment sections and social feeds',
            'In user lists and team member displays',
            'For navigation menus with user profiles',
        ], whenNotToUse: [
            'For non-user entities (use icons instead)',
            'When user identity doesn\'t matter',
            'In contexts where initials would be confusing',
        ], bestPractices: [
            'Always provide fallback (initials or placeholder)',
            'Use consistent sizing across similar contexts',
            'Consider showing online status when relevant',
            'Optimize images for performance',
            'Use appropriate sizes for different contexts',
        ], accessibility: [
            'Provide alt text for profile images',
            'Ensure sufficient contrast for initials',
            'Use aria-label for context when needed',
        ], children: _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Sizes" }), _jsxs("div", { className: "flex items-center gap-4 mb-8", children: [_jsx(Avatar, { className: "w-8 h-8", children: _jsx(AvatarFallback, { style: { fontSize: '12px' }, children: "SC" }) }), _jsx(Avatar, { className: "w-10 h-10", children: _jsx(AvatarFallback, { children: "JD" }) }), _jsx(Avatar, { className: "w-12 h-12", children: _jsx(AvatarFallback, { children: "AB" }) }), _jsx(Avatar, { className: "w-16 h-16", children: _jsx(AvatarFallback, { style: { fontSize: '18px' }, children: "MK" }) })] }), _jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "In Context" }), _jsx("div", { className: "space-y-3 max-w-md", children: [
                        { name: 'Sarah Chen', initials: 'SC', role: 'Product Designer' },
                        { name: 'Mike Johnson', initials: 'MJ', role: 'Developer' },
                        { name: 'Emily Davis', initials: 'ED', role: 'UX Researcher' },
                    ].map((user) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { children: _jsx(AvatarFallback, { children: user.initials }) }), _jsxs("div", { children: [_jsx("div", { style: { fontSize: '14px', color: 'var(--text-primary)' }, children: user.name }), _jsx("div", { style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: user.role })] })] }, user.initials))) })] }) }));
}
function ProgressSection() {
    const [progress, setProgress] = useState(33);
    return (_jsx(ComponentDocumentation, { title: "Progress", description: "Visual indicator of task completion", rationale: "Progress bars provide visual feedback about ongoing processes, helping users understand how much work has been completed and how much remains. This reduces uncertainty during loading states.", whenToUse: [
            'For file uploads and downloads',
            'To show form completion progress',
            'During multi-step processes',
            'For long-running operations',
        ], whenNotToUse: [
            'For indeterminate loading (use spinner instead)',
            'When progress can\'t be accurately measured',
            'For very quick operations (< 1 second)',
        ], bestPractices: [
            'Show percentage or step count when possible',
            'Update progress smoothly, not in large jumps',
            'Provide context about what\'s loading',
            'Consider showing estimated time for long processes',
            'Use appropriate color for different contexts',
        ], accessibility: [
            'Use role="progressbar" for screen readers',
            'Include aria-valuenow, aria-valuemin, aria-valuemax',
            'Announce progress updates to screen readers',
            'Provide text alternative for visual progress',
        ], children: _jsxs("div", { className: "space-y-8 max-w-2xl", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx(Label, { children: "Upload Progress" }), _jsxs("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: [progress, "%"] })] }), _jsx(Progress, { value: progress }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsx(Button, { size: "sm", onClick: () => setProgress(Math.max(0, progress - 10)), children: "-10%" }), _jsx(Button, { size: "sm", onClick: () => setProgress(Math.min(100, progress + 10)), children: "+10%" })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { style: { fontSize: '14px', color: 'var(--text-primary)' }, children: "Design Phase" }), _jsx("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "100%" })] }), _jsx(Progress, { value: 100 })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { style: { fontSize: '14px', color: 'var(--text-primary)' }, children: "Development" }), _jsx("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "65%" })] }), _jsx(Progress, { value: 65 })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { style: { fontSize: '14px', color: 'var(--text-primary)' }, children: "Testing" }), _jsx("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "30%" })] }), _jsx(Progress, { value: 30 })] })] })] }) }));
}
function SliderSection() {
    const [value, setValue] = useState([50]);
    return (_jsx(ComponentDocumentation, { title: "Slider", description: "Input for selecting a value from a range", rationale: "Sliders provide an intuitive way to select numeric values within a range. They're especially useful for settings where users benefit from seeing the full spectrum of options and can adjust values fluidly.", whenToUse: [
            'For volume, brightness, or other continuous values',
            'For price range filtering',
            'To adjust numeric settings visually',
            'When the range is more important than precision',
        ], whenNotToUse: [
            'When precise numeric input is required (use Input)',
            'For discrete options with meaning (use Radio or Select)',
            'On small touch screens where precision is difficult',
        ], bestPractices: [
            'Show the current value prominently',
            'Provide min/max labels for context',
            'Use appropriate step sizes for the value type',
            'Consider including a manual input for precision',
            'Ensure adequate touch target size',
        ], accessibility: [
            'Support keyboard navigation (arrow keys)',
            'Include ARIA attributes for value and range',
            'Announce value changes to screen readers',
            'Ensure sufficient contrast for thumb and track',
        ], children: _jsxs("div", { className: "space-y-8 max-w-2xl", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Label, { children: "Volume" }), _jsxs("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: [value[0], "%"] })] }), _jsx(Slider, { value: value, onValueChange: setValue, max: 100, step: 1 })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Label, { children: "Brightness" }), _jsx("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "75%" })] }), _jsx(Slider, { defaultValue: [75], max: 100, step: 5 })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Label, { children: "Disabled" }), _jsx("span", { style: { fontSize: '14px', color: 'var(--text-tertiary)' }, children: "40%" })] }), _jsx(Slider, { defaultValue: [40], max: 100, disabled: true })] })] }) }));
}
function TableSection() {
    return (_jsx(ComponentDocumentation, { title: "Table", description: "Organize and display data in rows and columns", rationale: "Tables are the most effective way to present structured data in rows and columns. They enable users to scan, compare, and analyze data efficiently, especially when dealing with multiple attributes per item.", whenToUse: [
            'For displaying structured data with multiple columns',
            'When users need to compare data across rows',
            'For admin dashboards and data management',
            'When sorting and filtering are important',
        ], whenNotToUse: [
            'For simple lists (use list components instead)',
            'On small screens where horizontal scrolling is required',
            'When data is better visualized as charts',
            'For hierarchical data (consider tree view)',
        ], bestPractices: [
            'Keep headers clear and concise',
            'Allow sorting on relevant columns',
            'Use zebra striping for easier row scanning',
            'Provide pagination for large datasets',
            'Ensure tables are responsive on mobile',
        ], accessibility: [
            'Use proper table markup (thead, tbody, th, td)',
            'Provide scope attributes for headers',
            'Ensure keyboard navigation is possible',
            'Announce sort states to screen readers',
        ], children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Recent Transactions" }), _jsx(CardDescription, { children: "A list of your recent account transactions" })] }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Date" }), _jsx(TableHead, { children: "Description" }), _jsx(TableHead, { children: "Amount" }), _jsx(TableHead, { children: "Status" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { style: { fontSize: '14px' }, children: "2025-03-15" }), _jsx(TableCell, { style: { fontSize: '14px' }, children: "Monthly Subscription" }), _jsx(TableCell, { style: { fontSize: '14px' }, children: "$29.99" }), _jsx(TableCell, { children: _jsx(Badge, { style: { backgroundColor: 'var(--success-100)', color: 'var(--success-700)', border: '1px solid var(--success-300)' }, children: "Completed" }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { style: { fontSize: '14px' }, children: "2025-03-12" }), _jsx(TableCell, { style: { fontSize: '14px' }, children: "Coffee Shop" }), _jsx(TableCell, { style: { fontSize: '14px' }, children: "$4.50" }), _jsx(TableCell, { children: _jsx(Badge, { style: { backgroundColor: 'var(--success-100)', color: 'var(--success-700)', border: '1px solid var(--success-300)' }, children: "Completed" }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { style: { fontSize: '14px' }, children: "2025-03-10" }), _jsx(TableCell, { style: { fontSize: '14px' }, children: "Online Purchase" }), _jsx(TableCell, { style: { fontSize: '14px' }, children: "$156.00" }), _jsx(TableCell, { children: _jsx(Badge, { style: { backgroundColor: 'var(--warning-100)', color: 'var(--warning-700)', border: '1px solid var(--warning-300)' }, children: "Pending" }) })] })] })] }) })] }) }));
}
function AccordionSection() {
    return (_jsx(ComponentDocumentation, { title: "Accordion", description: "Collapsible sections for organizing content", rationale: "Accordions help manage content density by allowing users to expand only the sections they're interested in. They're perfect for FAQs, progressive disclosure, and organizing related content without overwhelming the interface.", whenToUse: [
            'For FAQ sections',
            'To reduce page length while keeping content accessible',
            'For progressive disclosure of complex information',
            'When space is limited but content is comprehensive',
        ], whenNotToUse: [
            'When most users need to see all content',
            'For critical information that shouldn\'t be hidden',
            'In navigation (use menu components instead)',
        ], bestPractices: [
            'Use clear, descriptive headers',
            'Allow multiple sections open or enforce single selection',
            'Provide visual indicators for expanded/collapsed state',
            'Keep content within sections focused and scannable',
            'Consider default states carefully',
        ], accessibility: [
            'Support keyboard navigation (Enter/Space to toggle)',
            'Use proper ARIA attributes (aria-expanded)',
            'Ensure headers are keyboard focusable',
            'Announce state changes to screen readers',
        ], children: _jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs(Accordion, { type: "single", collapsible: true, children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { children: "What is Campfire Design System?" }), _jsx(AccordionContent, { children: "Campfire is a warm, earthy design system built on shadcn/ui components with Radix UI primitives. It features sophisticated earth tone neutrals and follows an 8px spacing grid for consistent layouts." })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { children: "How many components are included?" }), _jsx(AccordionContent, { children: "The Foundation phase includes 25 carefully crafted components organized into Form Controls, Display, Navigation, Overlays, and Layout categories." })] }), _jsxs(AccordionItem, { value: "item-3", children: [_jsx(AccordionTrigger, { children: "Is it accessible?" }), _jsx(AccordionContent, { children: "Yes! All components follow WAI-ARIA best practices and are fully keyboard accessible. Each component includes detailed accessibility guidelines in the documentation." })] }), _jsxs(AccordionItem, { value: "item-4", children: [_jsx(AccordionTrigger, { children: "Can I customize the colors?" }), _jsx(AccordionContent, { children: "Absolutely! Campfire uses CSS custom properties for easy theming. You can customize colors, spacing, and typography to match your brand while maintaining the warm, grounded aesthetic." })] })] }) }) }) }));
}
function PopoverSection() {
    return (_jsx(ComponentDocumentation, { title: "Popover", description: "Floating panel with rich content", rationale: "Popovers display rich, contextual content in a floating panel without navigating away. Unlike tooltips, they can contain interactive elements and more complex layouts.", whenToUse: [
            'For contextual actions or settings',
            'To display rich content on demand',
            'For color pickers, date pickers, or other complex inputs',
            'When you need interactive content in an overlay',
        ], whenNotToUse: [
            'For simple text hints (use Tooltip instead)',
            'For critical actions (use Dialog instead)',
            'On mobile where space is limited',
        ], bestPractices: [
            'Position carefully to avoid covering related content',
            'Keep content focused and scannable',
            'Provide clear close mechanisms',
            'Use appropriate trigger actions (click, not hover)',
            'Ensure popovers don\'t block important content',
        ], accessibility: [
            'Manage focus appropriately when opened',
            'Support ESC key to close',
            'Use proper ARIA attributes',
            'Ensure keyboard users can access all functionality',
        ], children: _jsxs("div", { className: "flex gap-4 flex-wrap", children: [_jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Popover" }) }), _jsx(PopoverContent, { className: "w-80", children: _jsxs("div", { className: "space-y-3", children: [_jsx("h3", { className: "mb-2", children: "Account Settings" }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-secondary)' }, children: "Manage your account preferences and settings here." }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "popover-input", children: "Display Name" }), _jsx(Input, { id: "popover-input", placeholder: "Enter name" })] }), _jsx(Button, { size: "sm", className: "w-full", children: "Save Changes" })] }) })] }), _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", children: [_jsx("i", { className: "fa-solid fa-palette mr-2" }), "Color"] }) }), _jsx(PopoverContent, { children: _jsxs("div", { className: "space-y-3", children: [_jsx("h3", { style: { fontSize: '14px' }, children: "Choose Color" }), _jsx("div", { className: "grid grid-cols-5 gap-2", children: ['primary', 'secondary', 'success', 'warning', 'destructive'].map((color) => (_jsx("button", { className: "w-8 h-8 rounded cursor-pointer border-2 border-transparent hover:border-gray-400", style: { backgroundColor: `var(--${color}-600)` } }, color))) })] }) })] })] }) }));
}
function DropdownSection() {
    return (_jsx(ComponentDocumentation, { title: "Dropdown Menu", description: "Menu of actions triggered by a button", rationale: "Dropdown menus provide a space-efficient way to group related actions or options. They reveal choices on demand, keeping the interface clean while making multiple actions accessible.", whenToUse: [
            'For grouping related actions (edit, delete, share)',
            'In overflow menus (three-dot menus)',
            'For user account menus',
            'When you have multiple actions but limited space',
        ], whenNotToUse: [
            'For form inputs (use Select instead)',
            'For primary navigation (use Nav menu)',
            'When actions should be immediately visible',
        ], bestPractices: [
            'Group related items logically',
            'Use separators to create clear sections',
            'Include icons for quick scanning',
            'Destructive actions should be separated and styled differently',
            'Keep menu items concise',
        ], accessibility: [
            'Support keyboard navigation (arrow keys)',
            'First item receives focus when opened',
            'ESC key closes the menu',
            'Use proper ARIA roles and attributes',
        ], children: _jsxs("div", { className: "flex gap-4 flex-wrap", children: [_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", children: ["Actions", _jsx("i", { className: "fa-solid fa-chevron-down ml-2", style: { fontSize: '12px' } })] }) }), _jsxs(DropdownMenuContent, { children: [_jsxs(DropdownMenuItem, { children: [_jsx("i", { className: "fa-solid fa-eye mr-2", style: { fontSize: '14px' } }), "View"] }), _jsxs(DropdownMenuItem, { children: [_jsx("i", { className: "fa-solid fa-pencil mr-2", style: { fontSize: '14px' } }), "Edit"] }), _jsxs(DropdownMenuItem, { children: [_jsx("i", { className: "fa-solid fa-copy mr-2", style: { fontSize: '14px' } }), "Duplicate"] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { style: { color: 'var(--destructive-600)' }, children: [_jsx("i", { className: "fa-solid fa-trash mr-2", style: { fontSize: '14px' } }), "Delete"] })] })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", size: "icon", children: _jsx("i", { className: "fa-solid fa-ellipsis" }) }) }), _jsxs(DropdownMenuContent, { children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Profile" }), _jsx(DropdownMenuItem, { children: "Settings" }), _jsx(DropdownMenuItem, { children: "Billing" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Logout" })] })] })] }) }));
}
function HoverCardSection() {
    return (_jsx(ComponentDocumentation, { title: "Hover Card", description: "Displays rich preview content on hover", rationale: "Hover cards provide rich preview information when users hover over an element, perfect for showing user profiles, link previews, or additional context without cluttering the interface.", whenToUse: [
            'For user profile previews',
            'To show link previews or summaries',
            'For rich tooltips with structured content',
            'When additional context would be helpful but not essential',
        ], whenNotToUse: [
            'On touch devices (no hover state)',
            'For critical information',
            'When simple tooltips are sufficient',
        ], bestPractices: [
            'Add slight delay before showing',
            'Keep content concise and scannable',
            'Position to avoid covering the trigger',
            'Include relevant images or icons for context',
            'Don\'t require hover cards for essential functionality',
        ], accessibility: [
            'Ensure content is accessible via keyboard',
            'Provide alternative access method for touch devices',
            'Use appropriate ARIA attributes',
        ], children: _jsx("div", { className: "flex gap-4", children: _jsxs(HoverCard, { children: [_jsx(HoverCardTrigger, { asChild: true, children: _jsx(Button, { variant: "link", style: { fontSize: '14px' }, children: "@sarahchen" }) }), _jsx(HoverCardContent, { className: "w-80", children: _jsxs("div", { className: "flex gap-4", children: [_jsx(Avatar, { children: _jsx(AvatarFallback, { children: "SC" }) }), _jsxs("div", { className: "space-y-1 flex-1", children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '4px' }, children: "Sarah Chen" }), _jsx("p", { style: { fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }, children: "@sarahchen" }), _jsx("p", { style: { fontSize: '14px', color: 'var(--text-secondary)' }, children: "Product Designer focused on creating warm, accessible design systems." }), _jsxs("div", { className: "flex gap-4 mt-3", style: { fontSize: '12px', color: 'var(--text-tertiary)' }, children: [_jsxs("span", { children: [_jsx("strong", { style: { color: 'var(--text-primary)' }, children: "324" }), " Following"] }), _jsxs("span", { children: [_jsx("strong", { style: { color: 'var(--text-primary)' }, children: "1.2K" }), " Followers"] })] })] })] }) })] }) }) }));
}
function SheetSection() {
    return (_jsx(ComponentDocumentation, { title: "Sheet", description: "Slide-in panel from edge of screen", rationale: "Sheets (also called drawers or slide-outs) provide a mobile-friendly alternative to dialogs. They slide in from the edge of the screen, making them perfect for navigation menus, filters, or forms on mobile devices.", whenToUse: [
            'For mobile navigation menus',
            'On mobile as an alternative to dialogs',
            'For filter panels in responsive layouts',
            'For side-by-side content comparison',
        ], whenNotToUse: [
            'When a dialog would be more appropriate',
            'For critical confirmations (use Dialog)',
            'On desktop where dialogs work better',
        ], bestPractices: [
            'Choose appropriate side (left for navigation, right for actions)',
            'Include clear header and close button',
            'Make overlay dismissible',
            'Consider sheet width carefully',
            'Use for mobile-friendly alternatives to modals',
        ], accessibility: [
            'Trap focus within the sheet',
            'Support ESC key to close',
            'Provide clear close mechanisms',
            'Use proper ARIA attributes',
        ], children: _jsxs("div", { className: "flex gap-4 flex-wrap", children: [_jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Sheet" }) }), _jsxs(SheetContent, { children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Edit Profile" }), _jsx(SheetDescription, { children: "Make changes to your profile here. Click save when you're done." })] }), _jsxs("div", { className: "space-y-4 py-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "sheet-name", children: "Name" }), _jsx(Input, { id: "sheet-name", placeholder: "Enter your name" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "sheet-email", children: "Email" }), _jsx(Input, { id: "sheet-email", type: "email", placeholder: "you@example.com" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "sheet-bio", children: "Bio" }), _jsx(Textarea, { id: "sheet-bio", placeholder: "Tell us about yourself", rows: 4 })] })] }), _jsx("div", { className: "flex gap-2", children: _jsx(Button, { className: "flex-1", children: "Save Changes" }) })] })] }), _jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", children: [_jsx("i", { className: "fa-solid fa-bars mr-2" }), "Menu"] }) }), _jsxs(SheetContent, { side: "left", children: [_jsx(SheetHeader, { children: _jsx(SheetTitle, { children: "Navigation" }) }), _jsxs("div", { className: "py-4 space-y-2", children: [_jsxs(Button, { variant: "ghost", className: "w-full justify-start", children: [_jsx("i", { className: "fa-solid fa-home mr-2" }), "Home"] }), _jsxs(Button, { variant: "ghost", className: "w-full justify-start", children: [_jsx("i", { className: "fa-solid fa-user mr-2" }), "Profile"] }), _jsxs(Button, { variant: "ghost", className: "w-full justify-start", children: [_jsx("i", { className: "fa-solid fa-cog mr-2" }), "Settings"] }), _jsxs(Button, { variant: "ghost", className: "w-full justify-start", children: [_jsx("i", { className: "fa-solid fa-question-circle mr-2" }), "Help"] })] })] })] })] }) }));
}
