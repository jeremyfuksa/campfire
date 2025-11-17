import React, { useState } from 'react';
import type { CheckedState as CheckboxCheckedState } from '@radix-ui/react-checkbox';
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
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Info } from 'lucide-react';

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

  return (
    <PageWithSidebar
      title="Foundation"
      description="Phase 1 — 25 components organized by category"
      sidebarGroups={sidebarGroups}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      gradientColor="var(--primary-500)"
    >
      {activeSection === 'button' && <ButtonSection />}
      {activeSection === 'input' && <InputSection />}
      {activeSection === 'textarea' && <TextareaSection />}
      {activeSection === 'card' && <CardSection />}
      {activeSection === 'badge' && <BadgeSection />}
      {activeSection === 'checkbox' && <CheckboxSection />}
      {activeSection === 'radio' && <RadioSection />}
      {activeSection === 'switch' && <SwitchSection />}
      {activeSection === 'alert' && <AlertSection />}
      {activeSection === 'breadcrumb' && <BreadcrumbSection />}
      {activeSection === 'tooltip' && <TooltipSection />}
      {activeSection === 'select' && <SelectSection />}
      {activeSection === 'label' && <LabelSection />}
      {activeSection === 'separator' && <SeparatorSection />}
      {activeSection === 'tabs' && <TabsSection />}
      {activeSection === 'dialog' && <DialogSection />}
      {activeSection === 'avatar' && <AvatarSection />}
      {activeSection === 'progress' && <ProgressSection />}
      {activeSection === 'slider' && <SliderSection />}
      {activeSection === 'table' && <TableSection />}
      {activeSection === 'accordion' && <AccordionSection />}
      {activeSection === 'popover' && <PopoverSection />}
      {activeSection === 'dropdown' && <DropdownSection />}
      {activeSection === 'hover-card' && <HoverCardSection />}
      {activeSection === 'sheet' && <SheetSection />}
    </PageWithSidebar>
  );
}

function ButtonSection() {
  return (
    <ComponentDocumentation
      title="Button"
      description="Clickable button component with multiple variants, sizes, and states"
      rationale="Buttons are the primary way users trigger actions in your interface. The Campfire button system provides semantic variants that communicate intent, making it clear whether an action is primary, secondary, or potentially destructive."
      whenToUse={[
        'To trigger an immediate action (submit form, open dialog, navigate)',
        'For the primary call-to-action on a page or section',
        'When you need clear visual hierarchy between actions',
        'To perform operations like save, delete, or cancel',
      ]}
      whenNotToUse={[
        'For navigation between pages (use Link component instead)',
        'For toggling states (use Switch or Toggle instead)',
        'In data tables where space is limited (consider icon buttons)',
      ]}
      bestPractices={[
        'Use Primary variant sparingly - typically one per page/section',
        'Destructive actions should use the destructive variant',
        'Include loading states for async operations',
        'Pair icons with labels for clarity (icon-only for common actions)',
        'Maintain consistent sizing within the same context',
      ]}
      accessibility={[
        'Buttons automatically have role="button" and keyboard support',
        'Disabled buttons are not focusable and announce their state',
        'Loading buttons should announce their loading state to screen readers',
        'Icon-only buttons should include aria-label for context',
      ]}
    >
      {/* Variants */}
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Danger</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
            Loading
          </Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            <i className="fa-solid fa-magnifying-glass mr-2"></i>
            Search
          </Button>
          <Button variant="outline">
            Download
            <i className="fa-solid fa-chevron-right ml-2"></i>
          </Button>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function InputSection() {
  const [email, setEmail] = useState('');

  return (
    <ComponentDocumentation
      title="Input"
      description="Text input field for user data entry"
      rationale="The Input component is the foundation of form interaction, allowing users to enter data in a structured way. It's designed with clear states and validation patterns to guide users through data entry tasks."
      whenToUse={[
        'For collecting short, single-line text data',
        'Email addresses, names, search queries, and similar inputs',
        'When you need structured data entry with validation',
        'For forms that require user input',
      ]}
      whenNotToUse={[
        'For long-form text (use Textarea instead)',
        'For selecting from predefined options (use Select, Radio, or Checkbox)',
        'For numeric inputs with steppers (consider custom number input)',
      ]}
      bestPractices={[
        'Always pair with a Label for accessibility and clarity',
        'Use appropriate input types (email, tel, password, etc.)',
        'Provide clear placeholder text as examples, not instructions',
        'Show validation feedback inline and in real-time when appropriate',
        'Use proper autocomplete attributes for common fields',
      ]}
      accessibility={[
        'Always associate inputs with labels using htmlFor/id',
        'Use appropriate input types for mobile keyboard optimization',
        'Required fields should be marked both visually and semantically',
        'Error messages should be associated with the input via aria-describedby',
      ]}
    >
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="disabled">Disabled</Label>
          <Input id="disabled" placeholder="Disabled input" disabled />
        </div>

        <div className="space-y-2">
          <Label htmlFor="with-icon">With Icon</Label>
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}></i>
            <Input id="with-icon" placeholder="Search..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sizes-sm">Small</Label>
          <Input id="sizes-sm" placeholder="Small input" className="h-8" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sizes-lg">Large</Label>
          <Input id="sizes-lg" placeholder="Large input" className="h-12" />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function TextareaSection() {
  const [message, setMessage] = useState('');

  return (
    <ComponentDocumentation
      title="Textarea"
      description="Multi-line text input for longer content"
      rationale="Textarea provides a resizable, multi-line text input for collecting longer-form content like messages, descriptions, or comments. It expands vertically to accommodate more content while maintaining a structured input area."
      whenToUse={[
        'For collecting multi-line text input (comments, descriptions, messages)',
        'When users need to enter more than a sentence of text',
        'For feedback forms, reviews, and detailed responses',
        'When content length is unpredictable',
      ]}
      whenNotToUse={[
        'For single-line inputs (use Input instead)',
        'For selecting from options (use Select or Radio)',
        'When formatting is needed (consider a rich text editor)',
      ]}
      bestPractices={[
        'Set an appropriate initial height (rows attribute)',
        'Allow resizing for user preference',
        'Include character count for limited inputs',
        'Pair with Label for clarity and accessibility',
        'Provide placeholder text as an example format',
      ]}
      accessibility={[
        'Associate with labels using htmlFor/id',
        'Announce character limits to screen readers',
        'Use aria-describedby for helper text',
        'Ensure sufficient color contrast',
      ]}
    >
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio (with character count)</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself..."
            rows={5}
            maxLength={500}
          />
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', textAlign: 'right' }}>
            0 / 500 characters
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="disabled-textarea">Disabled</Label>
          <Textarea
            id="disabled-textarea"
            placeholder="This textarea is disabled"
            disabled
            rows={3}
          />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function CardSection() {
  return (
    <ComponentDocumentation
      title="Card"
      description="Container for grouping related content"
      rationale="Cards provide a flexible container that visually groups related information. The distinct boundary helps users scan and parse content, making them ideal for collections of heterogeneous content or dashboard layouts."
      whenToUse={[
        'To group related information and actions together',
        'For dashboard widgets and metrics displays',
        'In grid layouts where each item needs clear boundaries',
        'To create clickable content blocks that navigate elsewhere',
      ]}
      whenNotToUse={[
        'For simple lists where vertical rhythm is sufficient',
        'When cards create unnecessary visual hierarchy',
        'In dense data tables where borders add clutter',
      ]}
      bestPractices={[
        'Use consistent spacing within cards across your interface',
        'Combine with CardHeader, CardContent, and CardFooter for structure',
        'For interactive cards, add hover states and cursor: pointer',
        'Avoid nesting cards deeply - keep hierarchy flat',
        'Use elevation (shadows) sparingly to indicate importance',
      ]}
      accessibility={[
        'Interactive cards should be keyboard accessible (use button or link)',
        'Use semantic HTML within cards (headings, paragraphs, etc.)',
        'For clickable cards, the entire card should be the click target',
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-2">Basic Card</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Simple card with default styling and subtle border.
            </p>
          </CardContent>
        </Card>

        <Card style={{ boxShadow: 'var(--shadow-lg)' }}>
          <CardHeader>
            <h3>Elevated Card</h3>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Card with elevated shadow for emphasis.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <h3>Interactive Card</h3>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Hover to see the interactive effect.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </ComponentDocumentation>
  );
}

function BadgeSection() {
  return (
    <ComponentDocumentation
      title="Badge"
      description="Small status indicator or label"
      rationale="Badges draw attention to specific metadata like status, counts, or categories. Their compact size makes them perfect for labeling items without overwhelming the interface, while their color coding provides quick visual scanning."
      whenToUse={[
        'To highlight item status or state (new, featured, beta)',
        'For notification counts and numerical indicators',
        'To categorize or tag items with metadata',
        'To show version numbers or labels',
      ]}
      whenNotToUse={[
        'For primary navigation elements',
        'When the information is critical to understand (use Alert instead)',
        'For long text content (badges should be concise)',
        'As buttons or interactive elements (use Button instead)',
      ]}
      bestPractices={[
        'Keep badge text short (1-2 words or numbers)',
        'Use semantic colors (green for success, red for errors)',
        'Maintain consistency in badge usage across similar contexts',
        'Don\'t use too many badges on a single item (max 2-3)',
        'Ensure sufficient color contrast for accessibility',
      ]}
      accessibility={[
        'Badges should have sufficient color contrast with their background',
        'Don\'t rely on color alone to convey meaning',
        'For icon-only badges, include sr-only text for screen readers',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge style={{ backgroundColor: 'var(--success-600)', color: 'white' }}>Success</Badge>
          <Badge style={{ backgroundColor: 'var(--warning-600)', color: 'white' }}>Warning</Badge>
          <Badge style={{ backgroundColor: 'var(--info-600)', color: 'white' }}>Info</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="h-5 px-2" style={{ fontSize: '11px' }}>Small</Badge>
          <Badge>Medium</Badge>
          <Badge className="h-7 px-3">Large</Badge>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function CheckboxSection() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentDocumentation
      title="Checkbox"
      description="Allows users to select one or more options"
      rationale="Checkboxes enable multi-selection scenarios where users need to choose multiple options independently. Unlike radio buttons, checkboxes don't enforce mutual exclusivity, making them ideal for settings, filters, and multi-item selection."
      whenToUse={[
        'For multi-select scenarios (select multiple items from a list)',
        'To toggle individual settings on/off',
        'For accepting terms and conditions or agreements',
        'In forms where options are independent of each other',
      ]}
      whenNotToUse={[
        'For mutually exclusive options (use Radio instead)',
        'For binary settings that need immediate action (use Switch instead)',
        'When only one selection is allowed',
      ]}
      bestPractices={[
        'Always pair checkboxes with clear labels',
        'Position labels to the right of the checkbox for consistency',
        'Use indeterminate state for parent items when children are partially selected',
        'Group related checkboxes together logically',
        'Make the label clickable, not just the checkbox itself',
      ]}
      accessibility={[
        'Checkboxes have proper keyboard support (Space to toggle)',
        'Labels are properly associated using htmlFor/id',
        'Disabled state is announced to screen readers',
        'Use fieldset/legend to group related checkboxes',
      ]}
    >
      <div className="space-y-3 max-w-md">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="check1"
            checked={checked}
            onCheckedChange={(state: CheckboxCheckedState) => setChecked(state === true)}
          />
          <Label htmlFor="check1">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="check2" />
          <Label htmlFor="check2">Subscribe to newsletter</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="check3" disabled />
          <Label htmlFor="check3">Disabled option</Label>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function RadioSection() {
  const [selectedValue, setSelectedValue] = useState('option-1');

  return (
    <ComponentDocumentation
      title="Radio"
      description="Allows users to select one option from a set"
      rationale="Radio buttons enforce single selection from a group of mutually exclusive options. They make all available choices visible at once, helping users understand the full range of options before making a selection."
      whenToUse={[
        'For mutually exclusive selections (only one can be chosen)',
        'When there are 2-7 options to choose from',
        'When you want all options visible without interaction',
        'For settings where users need to see alternatives',
      ]}
      whenNotToUse={[
        'For multi-select scenarios (use Checkbox instead)',
        'When there are too many options (use Select instead)',
        'For binary on/off settings (use Switch instead)',
        'When options can be independently toggled',
      ]}
      bestPractices={[
        'Always have one option selected by default',
        'Keep the number of options between 2-7 for scannability',
        'Use clear, concise labels that differentiate options',
        'Position labels to the right consistently',
        'Group radio buttons with fieldset and legend for context',
      ]}
      accessibility={[
        'Radio groups should be wrapped in a fieldset with legend',
        'Use arrow keys to navigate between options in a group',
        'Labels are properly associated with inputs',
        'One option should always be selected (avoid empty state)',
      ]}
    >
      <RadioGroup value={selectedValue} onValueChange={setSelectedValue} className="max-w-md">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-3" id="option-3" disabled />
          <Label htmlFor="option-3">Disabled</Label>
        </div>
      </RadioGroup>
    </ComponentDocumentation>
  );
}

function SwitchSection() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(true);

  return (
    <ComponentDocumentation
      title="Switch"
      description="Toggle between on and off states"
      rationale="Switches provide immediate binary state changes, typically triggering an action as soon as they're toggled. They're perfect for settings that take effect immediately without requiring a save action."
      whenToUse={[
        'For settings that take effect immediately',
        'To enable/disable features or functionality',
        'For binary on/off states in settings panels',
        'When the action happens instantly upon toggle',
      ]}
      whenNotToUse={[
        'In forms that require explicit save/submit (use Checkbox instead)',
        'For mutually exclusive options (use Radio instead)',
        'When multiple items can be selected (use Checkbox instead)',
        'For actions that need confirmation before taking effect',
      ]}
      bestPractices={[
        'Include a descriptive label that makes the on/off state clear',
        'Provide immediate visual feedback when toggled',
        'Consider adding helper text to explain what the switch controls',
        'Use consistent placement (typically right-aligned in settings)',
        'Avoid using switches in forms that have a submit button',
      ]}
      accessibility={[
        'Switches are keyboard accessible (Space/Enter to toggle)',
        'State changes are announced to screen readers',
        'Labels clearly describe what is being toggled',
        'Disabled switches communicate their state appropriately',
      ]}
    >
      <div className="space-y-6 max-w-md">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notifications">Notifications</Label>
            <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
              Receive push notifications
            </p>
          </div>
          <Switch
            id="notifications"
            checked={notificationsEnabled}
            onCheckedChange={(state: boolean) => setNotificationsEnabled(state)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="airplane">Airplane Mode</Label>
            <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
              Disable all network connections
            </p>
          </div>
          <Switch
            id="airplane"
            checked={airplaneMode}
            onCheckedChange={(state: boolean) => setAirplaneMode(state)}
          />
        </div>

        <div className="flex items-center justify-between opacity-50">
          <div className="space-y-0.5">
            <Label htmlFor="disabled-switch">Disabled</Label>
            <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
              This switch is disabled
            </p>
          </div>
          <Switch 
            id="disabled-switch"
            disabled
          />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function AlertSection() {
  return (
    <ComponentDocumentation
      title="Alert"
      description="Displays important messages and notifications"
      rationale="Alerts communicate important information that requires user attention. They provide contextual feedback about system status, user actions, or important warnings."
      whenToUse={[
        'To display system-level messages or status updates',
        'For success confirmations after user actions',
        'To warn users about potential issues or consequences',
        'For error messages that need immediate attention',
      ]}
      whenNotToUse={[
        'For form field validation errors (use inline validation)',
        'For non-critical information (consider using a less prominent pattern)',
        'When a dialog would be more appropriate for critical actions',
      ]}
      bestPractices={[
        'Use semantic colors (green for success, red for errors, yellow for warnings)',
        'Include relevant icons to reinforce the message type',
        'Keep messages concise and actionable',
        'Provide dismiss functionality for non-critical alerts',
        'Position alerts where they will be noticed without being intrusive',
      ]}
      accessibility={[
        'Use appropriate ARIA roles (alert, status) for screen readers',
        'Ensure sufficient color contrast for readability',
        'Don\'t rely solely on color to convey meaning',
        'Dismiss buttons should be keyboard accessible',
      ]}
    >
      <div className="space-y-4 max-w-2xl">
        <Alert style={{ backgroundColor: 'var(--primary-700)', borderColor: 'var(--primary-800)', color: 'white' }} className="flex items-center gap-3">
          <i className="fa-solid fa-circle-info flex-shrink-0" style={{ fontSize: '16px' }}></i>
          <AlertDescription className="flex-1" style={{ color: 'white' }}>
            This is an informational message with important details.
          </AlertDescription>
        </Alert>

        <Alert style={{ backgroundColor: 'var(--success-700)', borderColor: 'var(--success-700)', color: 'white' }} className="flex items-center gap-3">
          <i className="fa-solid fa-circle-check flex-shrink-0" style={{ fontSize: '16px' }}></i>
          <AlertDescription className="flex-1" style={{ color: 'white' }}>
            Your changes have been saved successfully!
          </AlertDescription>
        </Alert>

        <Alert style={{ backgroundColor: 'var(--warning-700)', borderColor: 'var(--warning-700)', color: 'white' }} className="flex items-center gap-3">
          <i className="fa-solid fa-triangle-exclamation flex-shrink-0" style={{ fontSize: '16px' }}></i>
          <AlertDescription className="flex-1" style={{ color: 'white' }}>
            Warning: This action may have unintended consequences.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="flex items-center gap-3">
          <i className="fa-solid fa-circle-exclamation flex-shrink-0" style={{ fontSize: '16px' }}></i>
          <AlertDescription className="flex-1">
            Error: Unable to complete the request. Please try again.
          </AlertDescription>
        </Alert>
      </div>
    </ComponentDocumentation>
  );
}

function BreadcrumbSection() {
  return (
    <ComponentDocumentation
      title="Breadcrumb"
      description="Shows the current page location in a navigational hierarchy"
      rationale="Breadcrumbs provide secondary navigation that shows users where they are in the site hierarchy and allows them to navigate back up through parent pages."
      whenToUse={[
        'In multi-level navigation structures',
        'To show current location in a hierarchy',
        'When users need to navigate up the page tree',
        'For large websites with deep navigation',
      ]}
      whenNotToUse={[
        'On single-level sites',
        'When it duplicates primary navigation',
        'For linear processes (use a stepper instead)',
      ]}
      bestPractices={[
        'Keep breadcrumbs concise and meaningful',
        'Make all but the current page clickable',
        'Use appropriate separators (/, >, ›)',
        'Place near the top of the page',
      ]}
      accessibility={[
        'Use nav element with aria-label="breadcrumb"',
        'Current page should have aria-current="page"',
        'Links should be keyboard accessible',
      ]}
    >
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <i className="fa-solid fa-house mr-1" style={{ fontSize: '12px' }}></i>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Laptops</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </ComponentDocumentation>
  );
}

function TooltipSection() {
  return (
    <ComponentDocumentation
      title="Tooltip"
      description="Displays helpful information on hover or focus"
      rationale="Tooltips provide contextual information or clarification for UI elements without cluttering the interface. They appear on demand, making them perfect for supplementary information."
      whenToUse={[
        'To provide additional context for icons or truncated text',
        'For helpful hints that clarify functionality',
        'To show keyboard shortcuts',
        'When labels would create visual clutter',
      ]}
      whenNotToUse={[
        'For critical information (users might miss it)',
        'On mobile devices (no hover state)',
        'For long-form content (use Popover instead)',
        'For interactive content',
      ]}
      bestPractices={[
        'Keep tooltip text brief and focused',
        'Position tooltips to avoid covering related content',
        'Use consistent delay timing',
        'Don\'t put interactive elements in tooltips',
      ]}
      accessibility={[
        'Tooltips should be triggered by both hover and focus',
        'Use appropriate ARIA attributes',
        'Ensure keyboard users can access tooltip content',
      ]}
    >
      <div className="flex gap-4 flex-wrap">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a helpful tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <i className="fa-solid fa-info-circle"></i>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click for more information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <i className="fa-solid fa-save mr-2"></i>
                Save
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save changes (Cmd+S)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </ComponentDocumentation>
  );
}

function SelectSection() {
  const [value, setValue] = useState('');

  return (
    <ComponentDocumentation
      title="Select"
      description="Dropdown menu for selecting from a list of options"
      rationale="Select components provide a space-efficient way to choose from many options. They're perfect when you have more than 7 options or when screen space is limited."
      whenToUse={[
        'When there are more than 7 options to choose from',
        'For selecting from a predefined list',
        'When space is limited',
        'For country, state, or category selection',
      ]}
      whenNotToUse={[
        'When there are fewer than 5 options (use Radio instead)',
        'For binary choices (use Switch or Checkbox)',
        'When users need to select multiple items (use multi-select or checkboxes)',
      ]}
      bestPractices={[
        'Provide a clear default option or placeholder',
        'Sort options logically (alphabetically or by frequency)',
        'Use consistent labeling patterns',
        'Consider search functionality for long lists',
      ]}
      accessibility={[
        'Provide labels for all selects',
        'Use native select attributes when possible',
        'Ensure keyboard navigation works correctly',
        'Announce changes to screen readers',
      ]}
    >
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="select-1">Select a fruit</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="select-1">
              <SelectValue placeholder="Choose a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="select-2">Disabled</Label>
          <Select disabled>
            <SelectTrigger id="select-2">
              <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function LabelSection() {
  return (
    <ComponentDocumentation
      title="Label"
      description="Text label for form controls"
      rationale="Labels provide essential context for form inputs, improving usability and accessibility. Properly associated labels help all users understand what information is required."
      whenToUse={[
        'With every form input for accessibility',
        'To provide context for user input',
        'To improve click targets (clicking label focuses input)',
      ]}
      whenNotToUse={[
        'For purely decorative text',
        'When placeholder text is sufficient (rare)',
      ]}
      bestPractices={[
        'Always associate labels with inputs using htmlFor/id',
        'Keep label text concise and descriptive',
        'Position labels consistently (typically above inputs)',
        'Mark required fields clearly',
      ]}
      accessibility={[
        'Use htmlFor to associate with form controls',
        'Labels improve screen reader experience',
        'Clicking labels should focus their associated input',
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="name-input">Full Name</Label>
          <Input id="name-input" placeholder="John Doe" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email-input">
            Email Address
            <span style={{ color: 'var(--destructive-600)', marginLeft: '4px' }}>*</span>
          </Label>
          <Input id="email-input" type="email" placeholder="john@example.com" />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="cursor-pointer">
            I agree to the terms and conditions
          </Label>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function SeparatorSection() {
  return (
    <ComponentDocumentation
      title="Separator"
      description="Visual divider between content sections"
      rationale="Separators create visual breathing room and hierarchy by dividing content into logical sections. They help organize information without adding heavy visual weight."
      whenToUse={[
        'To divide content into logical sections',
        'Between menu items in dropdown menus',
        'To separate groups of related content',
        'In toolbars between different action groups',
      ]}
      whenNotToUse={[
        'Between every element (creates visual noise)',
        'When spacing alone is sufficient',
        'In place of borders for containers',
      ]}
      bestPractices={[
        'Use sparingly to maintain visual clarity',
        'Choose orientation (horizontal/vertical) based on layout',
        'Pair with adequate spacing for breathing room',
        'Use subtle colors that don\'t dominate',
      ]}
      accessibility={[
        'Separators are decorative and don\'t need ARIA labels',
        'Use role="separator" for semantic meaning',
        'Ensure sufficient contrast if conveying grouping',
      ]}
    >
      <div className="space-y-6">
        <div>
          <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Horizontal Separator</h3>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Content above separator</p>
            <Separator className="my-4" />
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Content below separator</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Vertical Separator</h3>
          <div className="flex items-center gap-4" style={{ height: '60px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Left content</span>
            <Separator orientation="vertical" />
            <span style={{ color: 'var(--text-secondary)' }}>Middle content</span>
            <Separator orientation="vertical" />
            <span style={{ color: 'var(--text-secondary)' }}>Right content</span>
          </div>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function TabsSection() {
  return (
    <ComponentDocumentation
      title="Tabs"
      description="Organize content into multiple panels"
      rationale="Tabs allow users to navigate between related sections of content without leaving the page. They're excellent for organizing dense information into manageable, categorized chunks."
      whenToUse={[
        'To organize related content into sections',
        'When users need to switch between views',
        'For settings panels with different categories',
        'To reduce page scrolling by grouping content',
      ]}
      whenNotToUse={[
        'For sequential processes (use Stepper instead)',
        'When all content should be visible simultaneously',
        'For primary navigation (use Nav menu instead)',
        'With more than 7-8 tabs (becomes hard to scan)',
      ]}
      bestPractices={[
        'Keep tab labels short and descriptive',
        'Limit to 3-7 tabs for optimal usability',
        'Indicate the active tab clearly',
        'Preserve tab state when switching',
        'Order tabs by importance or logical flow',
      ]}
      accessibility={[
        'Use proper ARIA roles and attributes',
        'Support keyboard navigation (arrow keys)',
        'Announce tab changes to screen readers',
        'Ensure sufficient contrast for active state',
      ]}
    >
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4">
              <h3 className="mb-2">Account Settings</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Manage your account settings and preferences here.
              </p>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="johndoe" />
              </div>
            </TabsContent>
            <TabsContent value="password" className="space-y-4">
              <h3 className="mb-2">Change Password</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Update your password to keep your account secure.
              </p>
              <div className="space-y-2">
                <Label htmlFor="current">Current Password</Label>
                <Input id="current" type="password" />
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <h3 className="mb-2">Notification Preferences</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Control how and when you receive notifications.
              </p>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notif">Email Notifications</Label>
                <Switch id="email-notif" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </ComponentDocumentation>
  );
}

function DialogSection() {
  return (
    <ComponentDocumentation
      title="Dialog"
      description="Modal window that overlays the main content"
      rationale="Dialogs focus user attention on a specific task or message by overlaying the main content. They're perfect for confirmations, forms, or any interaction that requires full user attention."
      whenToUse={[
        'For critical confirmations (delete, logout, etc.)',
        'To collect focused user input without navigation',
        'For displaying important messages that require acknowledgment',
        'When you need to break the user\'s flow intentionally',
      ]}
      whenNotToUse={[
        'For non-critical information (use Toast or Alert)',
        'When users need to reference main content',
        'For complex, multi-step processes (consider full page)',
        'On mobile where space is limited (consider Sheet)',
      ]}
      bestPractices={[
        'Provide clear title and description',
        'Include explicit close mechanisms (X button, Cancel)',
        'Make primary action clear and prominent',
        'Use for focused, single-purpose interactions',
        'Trap focus within the dialog',
      ]}
      accessibility={[
        'Focus should move to dialog when opened',
        'ESC key should close the dialog',
        'Background should be inert (not focusable)',
        'Provide aria-labelledby and aria-describedby',
      ]}
    >
      <div className="flex gap-4 flex-wrap">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Form Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <DialogFooter>
              <Button>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ComponentDocumentation>
  );
}

function AvatarSection() {
  return (
    <ComponentDocumentation
      title="Avatar"
      description="User profile image with fallback"
      rationale="Avatars personalize the interface by displaying user profile pictures. They help users quickly identify people and provide a visual anchor in lists, comments, and navigation."
      whenToUse={[
        'To display user profile pictures',
        'In comment sections and social feeds',
        'In user lists and team member displays',
        'For navigation menus with user profiles',
      ]}
      whenNotToUse={[
        'For non-user entities (use icons instead)',
        'When user identity doesn\'t matter',
        'In contexts where initials would be confusing',
      ]}
      bestPractices={[
        'Always provide fallback (initials or placeholder)',
        'Use consistent sizing across similar contexts',
        'Consider showing online status when relevant',
        'Optimize images for performance',
        'Use appropriate sizes for different contexts',
      ]}
      accessibility={[
        'Provide alt text for profile images',
        'Ensure sufficient contrast for initials',
        'Use aria-label for context when needed',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Sizes</h3>
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="w-8 h-8">
            <AvatarFallback style={{ fontSize: '12px' }}>SC</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="w-12 h-12">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="w-16 h-16">
            <AvatarFallback style={{ fontSize: '18px' }}>MK</AvatarFallback>
          </Avatar>
        </div>

        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>In Context</h3>
        <div className="space-y-3 max-w-md">
          {[
            { name: 'Sarah Chen', initials: 'SC', role: 'Product Designer' },
            { name: 'Mike Johnson', initials: 'MJ', role: 'Developer' },
            { name: 'Emily Davis', initials: 'ED', role: 'UX Researcher' },
          ].map((user) => (
            <div key={user.initials} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{user.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{user.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function ProgressSection() {
  const [progress, setProgress] = useState(33);

  return (
    <ComponentDocumentation
      title="Progress"
      description="Visual indicator of task completion"
      rationale="Progress bars provide visual feedback about ongoing processes, helping users understand how much work has been completed and how much remains. This reduces uncertainty during loading states."
      whenToUse={[
        'For file uploads and downloads',
        'To show form completion progress',
        'During multi-step processes',
        'For long-running operations',
      ]}
      whenNotToUse={[
        'For indeterminate loading (use spinner instead)',
        'When progress can\'t be accurately measured',
        'For very quick operations (< 1 second)',
      ]}
      bestPractices={[
        'Show percentage or step count when possible',
        'Update progress smoothly, not in large jumps',
        'Provide context about what\'s loading',
        'Consider showing estimated time for long processes',
        'Use appropriate color for different contexts',
      ]}
      accessibility={[
        'Use role="progressbar" for screen readers',
        'Include aria-valuenow, aria-valuemin, aria-valuemax',
        'Announce progress updates to screen readers',
        'Provide text alternative for visual progress',
      ]}
    >
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-2">
          <div className="flex justify-between items-center mb-2">
            <Label>Upload Progress</Label>
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{progress}%</span>
          </div>
          <Progress value={progress} />
          <div className="flex gap-2 mt-4">
            <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</Button>
            <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Design Phase</span>
              <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>100%</span>
            </div>
            <Progress value={100} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Development</span>
              <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>65%</span>
            </div>
            <Progress value={65} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Testing</span>
              <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>30%</span>
            </div>
            <Progress value={30} />
          </div>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function SliderSection() {
  const [value, setValue] = useState([50]);

  return (
    <ComponentDocumentation
      title="Slider"
      description="Input for selecting a value from a range"
      rationale="Sliders provide an intuitive way to select numeric values within a range. They're especially useful for settings where users benefit from seeing the full spectrum of options and can adjust values fluidly."
      whenToUse={[
        'For volume, brightness, or other continuous values',
        'For price range filtering',
        'To adjust numeric settings visually',
        'When the range is more important than precision',
      ]}
      whenNotToUse={[
        'When precise numeric input is required (use Input)',
        'For discrete options with meaning (use Radio or Select)',
        'On small touch screens where precision is difficult',
      ]}
      bestPractices={[
        'Show the current value prominently',
        'Provide min/max labels for context',
        'Use appropriate step sizes for the value type',
        'Consider including a manual input for precision',
        'Ensure adequate touch target size',
      ]}
      accessibility={[
        'Support keyboard navigation (arrow keys)',
        'Include ARIA attributes for value and range',
        'Announce value changes to screen readers',
        'Ensure sufficient contrast for thumb and track',
      ]}
    >
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Volume</Label>
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{value[0]}%</span>
          </div>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Brightness</Label>
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>75%</span>
          </div>
          <Slider defaultValue={[75]} max={100} step={5} />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Disabled</Label>
            <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>40%</span>
          </div>
          <Slider defaultValue={[40]} max={100} disabled />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function TableSection() {
  return (
    <ComponentDocumentation
      title="Table"
      description="Organize and display data in rows and columns"
      rationale="Tables are the most effective way to present structured data in rows and columns. They enable users to scan, compare, and analyze data efficiently, especially when dealing with multiple attributes per item."
      whenToUse={[
        'For displaying structured data with multiple columns',
        'When users need to compare data across rows',
        'For admin dashboards and data management',
        'When sorting and filtering are important',
      ]}
      whenNotToUse={[
        'For simple lists (use list components instead)',
        'On small screens where horizontal scrolling is required',
        'When data is better visualized as charts',
        'For hierarchical data (consider tree view)',
      ]}
      bestPractices={[
        'Keep headers clear and concise',
        'Allow sorting on relevant columns',
        'Use zebra striping for easier row scanning',
        'Provide pagination for large datasets',
        'Ensure tables are responsive on mobile',
      ]}
      accessibility={[
        'Use proper table markup (thead, tbody, th, td)',
        'Provide scope attributes for headers',
        'Ensure keyboard navigation is possible',
        'Announce sort states to screen readers',
      ]}
    >
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>A list of your recent account transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontSize: '14px' }}>2025-03-15</TableCell>
                <TableCell style={{ fontSize: '14px' }}>Monthly Subscription</TableCell>
                <TableCell style={{ fontSize: '14px' }}>$29.99</TableCell>
                <TableCell>
                  <Badge style={{ backgroundColor: 'var(--success-100)', color: 'var(--success-700)', border: '1px solid var(--success-300)' }}>
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: '14px' }}>2025-03-12</TableCell>
                <TableCell style={{ fontSize: '14px' }}>Coffee Shop</TableCell>
                <TableCell style={{ fontSize: '14px' }}>$4.50</TableCell>
                <TableCell>
                  <Badge style={{ backgroundColor: 'var(--success-100)', color: 'var(--success-700)', border: '1px solid var(--success-300)' }}>
                    Completed
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontSize: '14px' }}>2025-03-10</TableCell>
                <TableCell style={{ fontSize: '14px' }}>Online Purchase</TableCell>
                <TableCell style={{ fontSize: '14px' }}>$156.00</TableCell>
                <TableCell>
                  <Badge style={{ backgroundColor: 'var(--warning-100)', color: 'var(--warning-700)', border: '1px solid var(--warning-300)' }}>
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </ComponentDocumentation>
  );
}

function AccordionSection() {
  return (
    <ComponentDocumentation
      title="Accordion"
      description="Collapsible sections for organizing content"
      rationale="Accordions help manage content density by allowing users to expand only the sections they're interested in. They're perfect for FAQs, progressive disclosure, and organizing related content without overwhelming the interface."
      whenToUse={[
        'For FAQ sections',
        'To reduce page length while keeping content accessible',
        'For progressive disclosure of complex information',
        'When space is limited but content is comprehensive',
      ]}
      whenNotToUse={[
        'When most users need to see all content',
        'For critical information that shouldn\'t be hidden',
        'In navigation (use menu components instead)',
      ]}
      bestPractices={[
        'Use clear, descriptive headers',
        'Allow multiple sections open or enforce single selection',
        'Provide visual indicators for expanded/collapsed state',
        'Keep content within sections focused and scannable',
        'Consider default states carefully',
      ]}
      accessibility={[
        'Support keyboard navigation (Enter/Space to toggle)',
        'Use proper ARIA attributes (aria-expanded)',
        'Ensure headers are keyboard focusable',
        'Announce state changes to screen readers',
      ]}
    >
      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Campfire Design System?</AccordionTrigger>
              <AccordionContent>
                Campfire is a warm, earthy design system built on shadcn/ui components with Radix UI primitives.
                It features sophisticated earth tone neutrals and follows an 8px spacing grid for consistent layouts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How many components are included?</AccordionTrigger>
              <AccordionContent>
                The Foundation phase includes 25 carefully crafted components organized into Form Controls, Display, 
                Navigation, Overlays, and Layout categories.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes! All components follow WAI-ARIA best practices and are fully keyboard accessible.
                Each component includes detailed accessibility guidelines in the documentation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I customize the colors?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Campfire uses CSS custom properties for easy theming. You can customize colors,
                spacing, and typography to match your brand while maintaining the warm, grounded aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </ComponentDocumentation>
  );
}

function PopoverSection() {
  return (
    <ComponentDocumentation
      title="Popover"
      description="Floating panel with rich content"
      rationale="Popovers display rich, contextual content in a floating panel without navigating away. Unlike tooltips, they can contain interactive elements and more complex layouts."
      whenToUse={[
        'For contextual actions or settings',
        'To display rich content on demand',
        'For color pickers, date pickers, or other complex inputs',
        'When you need interactive content in an overlay',
      ]}
      whenNotToUse={[
        'For simple text hints (use Tooltip instead)',
        'For critical actions (use Dialog instead)',
        'On mobile where space is limited',
      ]}
      bestPractices={[
        'Position carefully to avoid covering related content',
        'Keep content focused and scannable',
        'Provide clear close mechanisms',
        'Use appropriate trigger actions (click, not hover)',
        'Ensure popovers don\'t block important content',
      ]}
      accessibility={[
        'Manage focus appropriately when opened',
        'Support ESC key to close',
        'Use proper ARIA attributes',
        'Ensure keyboard users can access all functionality',
      ]}
    >
      <div className="flex gap-4 flex-wrap">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-3">
              <h3 className="mb-2">Account Settings</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Manage your account preferences and settings here.
              </p>
              <div className="space-y-2">
                <Label htmlFor="popover-input">Display Name</Label>
                <Input id="popover-input" placeholder="Enter name" />
              </div>
              <Button size="sm" className="w-full">Save Changes</Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <i className="fa-solid fa-palette mr-2"></i>
              Color
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-3">
              <h3 style={{ fontSize: '14px' }}>Choose Color</h3>
              <div className="grid grid-cols-5 gap-2">
                {['primary', 'secondary', 'success', 'warning', 'destructive'].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded cursor-pointer border-2 border-transparent hover:border-gray-400"
                    style={{ backgroundColor: `var(--${color}-600)` }}
                  />
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </ComponentDocumentation>
  );
}

function DropdownSection() {
  return (
    <ComponentDocumentation
      title="Dropdown Menu"
      description="Menu of actions triggered by a button"
      rationale="Dropdown menus provide a space-efficient way to group related actions or options. They reveal choices on demand, keeping the interface clean while making multiple actions accessible."
      whenToUse={[
        'For grouping related actions (edit, delete, share)',
        'In overflow menus (three-dot menus)',
        'For user account menus',
        'When you have multiple actions but limited space',
      ]}
      whenNotToUse={[
        'For form inputs (use Select instead)',
        'For primary navigation (use Nav menu)',
        'When actions should be immediately visible',
      ]}
      bestPractices={[
        'Group related items logically',
        'Use separators to create clear sections',
        'Include icons for quick scanning',
        'Destructive actions should be separated and styled differently',
        'Keep menu items concise',
      ]}
      accessibility={[
        'Support keyboard navigation (arrow keys)',
        'First item receives focus when opened',
        'ESC key closes the menu',
        'Use proper ARIA roles and attributes',
      ]}
    >
      <div className="flex gap-4 flex-wrap">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions
              <i className="fa-solid fa-chevron-down ml-2" style={{ fontSize: '12px' }}></i>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <i className="fa-solid fa-eye mr-2" style={{ fontSize: '14px' }}></i>
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <i className="fa-solid fa-pencil mr-2" style={{ fontSize: '14px' }}></i>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <i className="fa-solid fa-copy mr-2" style={{ fontSize: '14px' }}></i>
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem style={{ color: 'var(--destructive-600)' }}>
              <i className="fa-solid fa-trash mr-2" style={{ fontSize: '14px' }}></i>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <i className="fa-solid fa-ellipsis"></i>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </ComponentDocumentation>
  );
}

function HoverCardSection() {
  return (
    <ComponentDocumentation
      title="Hover Card"
      description="Displays rich preview content on hover"
      rationale="Hover cards provide rich preview information when users hover over an element, perfect for showing user profiles, link previews, or additional context without cluttering the interface."
      whenToUse={[
        'For user profile previews',
        'To show link previews or summaries',
        'For rich tooltips with structured content',
        'When additional context would be helpful but not essential',
      ]}
      whenNotToUse={[
        'On touch devices (no hover state)',
        'For critical information',
        'When simple tooltips are sufficient',
      ]}
      bestPractices={[
        'Add slight delay before showing',
        'Keep content concise and scannable',
        'Position to avoid covering the trigger',
        'Include relevant images or icons for context',
        'Don\'t require hover cards for essential functionality',
      ]}
      accessibility={[
        'Ensure content is accessible via keyboard',
        'Provide alternative access method for touch devices',
        'Use appropriate ARIA attributes',
      ]}
    >
      <div className="flex gap-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" style={{ fontSize: '14px' }}>
              @sarahchen
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>Sarah Chen</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                  @sarahchen
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Product Designer focused on creating warm, accessible design systems.
                </p>
                <div className="flex gap-4 mt-3" style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                  <span>
                    <strong style={{ color: 'var(--text-primary)' }}>324</strong> Following
                  </span>
                  <span>
                    <strong style={{ color: 'var(--text-primary)' }}>1.2K</strong> Followers
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </ComponentDocumentation>
  );
}

function SheetSection() {
  return (
    <ComponentDocumentation
      title="Sheet"
      description="Slide-in panel from edge of screen"
      rationale="Sheets (also called drawers or slide-outs) provide a mobile-friendly alternative to dialogs. They slide in from the edge of the screen, making them perfect for navigation menus, filters, or forms on mobile devices."
      whenToUse={[
        'For mobile navigation menus',
        'On mobile as an alternative to dialogs',
        'For filter panels in responsive layouts',
        'For side-by-side content comparison',
      ]}
      whenNotToUse={[
        'When a dialog would be more appropriate',
        'For critical confirmations (use Dialog)',
        'On desktop where dialogs work better',
      ]}
      bestPractices={[
        'Choose appropriate side (left for navigation, right for actions)',
        'Include clear header and close button',
        'Make overlay dismissible',
        'Consider sheet width carefully',
        'Use for mobile-friendly alternatives to modals',
      ]}
      accessibility={[
        'Trap focus within the sheet',
        'Support ESC key to close',
        'Provide clear close mechanisms',
        'Use proper ARIA attributes',
      ]}
    >
      <div className="flex gap-4 flex-wrap">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="sheet-name">Name</Label>
                <Input id="sheet-name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-email">Email</Label>
                <Input id="sheet-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sheet-bio">Bio</Label>
                <Textarea id="sheet-bio" placeholder="Tell us about yourself" rows={4} />
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">Save Changes</Button>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <i className="fa-solid fa-bars mr-2"></i>
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <i className="fa-solid fa-home mr-2"></i>
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <i className="fa-solid fa-user mr-2"></i>
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <i className="fa-solid fa-cog mr-2"></i>
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <i className="fa-solid fa-question-circle mr-2"></i>
                Help
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </ComponentDocumentation>
  );
}
