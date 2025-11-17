import React, { useState } from 'react';
import { PageWithSidebar } from './PageWithSidebar';
import { ComponentDocumentation } from './ComponentDocumentation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Chip } from './ui/chip';
import { StatusDot } from './ui/status-dot';
import { HelperText } from './ui/helper-text';
import { Link } from './ui/link';
import { CopyButton } from './ui/copy-button';
import { KeyboardKey } from './ui/keyboard-key';
import { CodeBlock } from './ui/code-block';
import { SearchInput } from './ui/search-input';
import { StatCard } from './ui/stat-card';
import { ListGroup, ListGroupItem } from './ui/list-group';
import { FileUpload } from './ui/file-upload';
import { EmptyState } from './ui/empty-state';
import { ChevronRight } from 'lucide-react';

export function UtilityComponentsPage() {
  const [activeSection, setActiveSection] = useState('chip');

  const sidebarGroups = [
    {
      items: [
        { id: 'chip', label: 'Chip', icon: 'fa-solid fa-times-circle' },
        { id: 'status-dot', label: 'Status Dot', icon: 'fa-solid fa-circle' },
        { id: 'helper-text', label: 'Helper Text', icon: 'fa-solid fa-circle-info' },
        { id: 'link', label: 'Link', icon: 'fa-solid fa-link' },
        { id: 'copy-button', label: 'Copy Button', icon: 'fa-solid fa-copy' },
        { id: 'keyboard-key', label: 'Keyboard Key', icon: 'fa-solid fa-keyboard' },
        { id: 'code-block', label: 'Code Block', icon: 'fa-solid fa-code' },
        { id: 'search-input', label: 'Search Input', icon: 'fa-solid fa-magnifying-glass' },
        { id: 'stat-card', label: 'Stat Card', icon: 'fa-solid fa-chart-line' },
        { id: 'list-group', label: 'List Group', icon: 'fa-solid fa-list-ul' },
        { id: 'file-upload', label: 'File Upload', icon: 'fa-solid fa-upload' },
        { id: 'empty-state', label: 'Empty State', icon: 'fa-solid fa-inbox' },
      ]
    }
  ];

  return (
    <PageWithSidebar
      title="Utilities"
      description="Phase 3 — 8+ components"
      sidebarGroups={sidebarGroups}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      gradientColor="var(--primary-400)"
    >
      {activeSection === 'chip' && <ChipSection />}
      {activeSection === 'status-dot' && <StatusDotSection />}
      {activeSection === 'helper-text' && <HelperTextSection />}
      {activeSection === 'link' && <LinkSection />}
      {activeSection === 'copy-button' && <CopyButtonSection />}
      {activeSection === 'keyboard-key' && <KeyboardKeySection />}
      {activeSection === 'code-block' && <CodeBlockSection />}
      {activeSection === 'search-input' && <SearchInputSection />}
      {activeSection === 'stat-card' && <StatCardSection />}
      {activeSection === 'list-group' && <ListGroupSection />}
      {activeSection === 'file-upload' && <FileUploadSection />}
      {activeSection === 'empty-state' && <EmptyStateSection />}
    </PageWithSidebar>
  );
}

function ChipSection() {
  return (
    <ComponentDocumentation
      title="Chip"
      description="Compact element for tags, filters, or removable items"
      rationale="Chips represent discrete pieces of information like tags, categories, or applied filters. Their compact size and removable nature make them ideal for displaying multiple selections or active filters without cluttering the interface."
      whenToUse={[
        'To represent applied filters in a search or list view',
        'For displaying selected items or tags',
        'To show categories or metadata in a compact way',
        'In input fields for multi-select values (like email recipients)',
      ]}
      whenNotToUse={[
        'For navigation (use tabs or links instead)',
        'For actions that modify data (use buttons instead)',
        'When the content needs to be scannable text (use regular text)',
        'For status indicators (use Badge or StatusDot instead)',
      ]}
      bestPractices={[
        'Make chips removable when they represent user selections',
        'Use consistent styling for chips within the same context',
        'Keep chip text concise (1-3 words typically)',
        'Group related chips together visually',
        'Provide clear feedback when chips are added or removed',
      ]}
      accessibility={[
        'Removable chips should announce when they\'re deleted',
        'Use keyboard navigation (Tab to focus, Enter/Space to remove)',
        'Ensure sufficient color contrast between chip and background',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Basic Chips</h3>
        <div className="flex flex-wrap gap-2">
          <Chip>React</Chip>
          <Chip>TypeScript</Chip>
          <Chip>Tailwind CSS</Chip>
          <Chip>Design System</Chip>
          <Chip>shadcn/ui</Chip>
        </div>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Close Button</h3>
        <div className="flex flex-wrap gap-2">
          <Chip onClose={() => console.log('Close')}>Removable</Chip>
          <Chip onClose={() => console.log('Close')}>Click X to remove</Chip>
          <Chip onClose={() => console.log('Close')}>Filter Tag</Chip>
        </div>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Chip>
            <i className="fa-solid fa-tag mr-1"></i>
            Featured
          </Chip>
          <Chip>
            <i className="fa-solid fa-star mr-1"></i>
            Premium
          </Chip>
          <Chip onClose={() => console.log('Close')}>
            <i className="fa-solid fa-fire mr-1"></i>
            Trending
          </Chip>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function StatusDotSection() {
  return (
    <ComponentDocumentation
      title="Status Dot"
      description="Visual indicator for status states"
      rationale="Status dots provide at-a-glance status information using color and animation. Their small size and universal meaning (colored dot = status) make them perfect for showing availability, connection states, or process status without text."
      whenToUse={[
        'For user availability/presence indicators (online, away, busy)',
        'To show connection or sync status',
        'For indicating process states (running, paused, stopped)',
        'In list items where space is limited but status is important',
      ]}
      whenNotToUse={[
        'When status needs detailed explanation (use Badge with text)',
        'For critical status that requires immediate attention (use Alert)',
        'When color alone isn\'t sufficient (ensure text labels accompany)',
      ]}
      bestPractices={[
        'Always pair with a text label for accessibility',
        'Use pulse animation sparingly for active/live states',
        'Follow standard color conventions (green=good, red=bad, yellow=warning)',
        'Keep dots consistent in size across the interface',
        'Provide hover tooltips for additional context if needed',
      ]}
      accessibility={[
        'Never rely on color alone - always include a text label',
        'Ensure color contrast is sufficient for color-blind users',
        'Pulse animations should not be the only indicator of state',
        'Consider using icons or patterns in addition to color',
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="flex items-center gap-3">
          <StatusDot variant="success" />
          <span style={{ color: 'var(--text-secondary)' }}>Online</span>
        </div>
        <div className="flex items-center gap-3">
          <StatusDot variant="warning" />
          <span style={{ color: 'var(--text-secondary)' }}>Away</span>
        </div>
        <div className="flex items-center gap-3">
          <StatusDot variant="danger" />
          <span style={{ color: 'var(--text-secondary)' }}>Offline</span>
        </div>
        <div className="flex items-center gap-3">
          <StatusDot variant="info" />
          <span style={{ color: 'var(--text-secondary)' }}>In a meeting</span>
        </div>
        <div className="flex items-center gap-3">
          <StatusDot variant="success" pulse />
          <span style={{ color: 'var(--text-secondary)' }}>Active (with pulse animation)</span>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function HelperTextSection() {
  return (
    <ComponentDocumentation
      title="Helper Text"
      description="Supplementary text for form fields"
      rationale="Helper text provides guidance, validation feedback, and contextual information for form inputs. It helps users understand what's expected, confirms successful input, and clearly communicates errors without disrupting the form layout."
      whenToUse={[
        'To provide format examples or input requirements',
        'For real-time validation feedback',
        'To show character counts or limits',
        'To guide users on what information is needed',
      ]}
      whenNotToUse={[
        'For critical information (use labels or inline text)',
        'When the input purpose is completely obvious',
        'For lengthy instructions (consider a tooltip or help link)',
      ]}
      bestPractices={[
        'Place helper text directly below the input field',
        'Use different variants for different states (error, success, warning)',
        'Keep helper text concise and actionable',
        'Update helper text dynamically as users type when appropriate',
        'Use appropriate colors to indicate validation states',
      ]}
      accessibility={[
        'Associate helper text with inputs using aria-describedby',
        'Ensure error messages are announced to screen readers',
        'Don\'t rely solely on color to convey validation state',
        'Helper text should have sufficient contrast',
      ]}
    >
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter username" />
          <HelperText>Must be at least 3 characters long</HelperText>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email-helper">Email</Label>
          <Input id="email-helper" type="email" placeholder="Enter email" />
          <HelperText variant="error">This email is already taken</HelperText>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password-helper">Password</Label>
          <Input id="password-helper" type="password" placeholder="Enter password" />
          <HelperText variant="success">Password strength: Strong</HelperText>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" placeholder="Tell us about yourself" />
          <HelperText variant="warning">Character limit: 150/500</HelperText>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function LinkSection() {
  return (
    <ComponentDocumentation
      title="Link"
      description="Styled hyperlink component"
      rationale="Links are the fundamental navigation element of the web. The Campfire link component provides semantic variants that fit different contexts while maintaining the earthy, grounded aesthetic and ensuring proper accessibility."
      whenToUse={[
        'For navigation between pages or sections',
        'To link to external resources or documentation',
        'Within body text for inline references',
        'In navigation menus and breadcrumbs',
      ]}
      whenNotToUse={[
        'For actions that modify data (use Button instead)',
        'For client-side only actions without navigation',
        'When you need button-like visual prominence',
      ]}
      bestPractices={[
        'Use descriptive link text (avoid "click here" or "read more")',
        'Make external links visually distinct (use external prop)',
        'Underline links in body text for clear identification',
        'Use muted variant for secondary or less important links',
        'Ensure sufficient color contrast with surrounding text',
      ]}
      accessibility={[
        'Link text should describe the destination, not the action',
        'External links should indicate they open in a new tab',
        'Links should be keyboard accessible and show focus states',
        'Ensure color is not the only indicator (use underlines)',
      ]}
    >
      <div className="flex flex-wrap gap-4">
        <Link href="#">Default Link</Link>
        <Link href="#" variant="muted">Muted Link</Link>
        <Link href="#" className="inline-flex items-center gap-1">
          External Link
          <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="max-w-md">
        <p style={{ color: 'var(--text-secondary)' }}>
          Links can be used inline with text. <Link href="#">Click here</Link> to learn more about 
          the Campfire Design System and how to <Link href="#" variant="muted">get started</Link>.
        </p>
      </div>
    </ComponentDocumentation>
  );
}

function CopyButtonSection() {
  return (
    <ComponentDocumentation
      title="Copy Button"
      description="Quick copy-to-clipboard functionality"
      rationale="Copy buttons provide one-click functionality to copy text to the clipboard, essential for code snippets, API keys, URLs, and other content users need to reuse. They eliminate manual selection and copying, reducing friction and errors."
      whenToUse={[
        'Next to code snippets or command line instructions',
        'For API keys, tokens, or generated IDs',
        'With shareable URLs or links',
        'For any text content that users commonly need to copy',
      ]}
      whenNotToUse={[
        'For very short, easily memorized content',
        'When copying doesn\'t make sense in context',
        'For sensitive information that shouldn\'t be in clipboard',
      ]}
      bestPractices={[
        'Provide clear visual feedback when copy succeeds',
        'Position copy buttons near the content they copy',
        'Use an icon that clearly indicates the copy action',
        'Consider showing "Copied!" confirmation briefly',
        'Ensure the button is accessible via keyboard',
      ]}
      accessibility={[
        'Copy buttons should be keyboard accessible',
        'Announce copy success to screen readers',
        'Include aria-label to describe what will be copied',
        'Ensure focus states are visible',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Basic Usage</h3>
        <div className="flex items-center gap-2 max-w-xl">
          <code className="px-3 py-2 rounded-md flex-1" style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text-primary)' }}>
            npm install @campfire/design-system
          </code>
          <CopyButton text="npm install @campfire/design-system" />
        </div>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Code Block</h3>
        <div className="relative max-w-xl">
          <pre className="p-4 rounded-lg overflow-x-auto" style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--text-primary)' }}>
            <code>{`import { Button } from '@campfire/ui';

function App() {
  return <Button>Click me</Button>;
}`}</code>
          </pre>
          <div className="absolute top-2 right-2">
            <CopyButton
              text={`import { Button } from '@campfire/ui';\n\nfunction App() {\n  return <Button>Click me</Button>;\n}`}
            />
          </div>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function KeyboardKeySection() {
  return (
    <ComponentDocumentation
      title="Keyboard Key"
      description="Displays keyboard shortcuts visually"
      rationale="Keyboard key components visualize keyboard shortcuts in a familiar, skeuomorphic style that mimics physical keyboard keys. This makes shortcuts more discoverable and memorable, helping power users work more efficiently."
      whenToUse={[
        'To display keyboard shortcuts in help documentation',
        'In tooltips showing available keyboard commands',
        'For onboarding or tutorial screens',
        'In settings or preferences showing custom keybindings',
      ]}
      whenNotToUse={[
        'For every possible shortcut (show only the most useful)',
        'When shortcuts aren\'t actually implemented',
        'In dense interfaces where they add clutter',
      ]}
      bestPractices={[
        'Use platform-specific symbols (⌘ for Mac, Ctrl for Windows)',
        'Show modifier keys in a consistent order',
        'Group related shortcuts together',
        'Keep key labels short (single characters or abbreviations)',
        'Use consistent styling across all keyboard visualizations',
      ]}
      accessibility={[
        'Keyboard key components are presentational',
        'Ensure actual keyboard shortcuts work as shown',
        'Provide text alternatives for screen readers',
        'Don\'t use keyboard styling for non-keyboard content',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Single Keys</h3>
        <div className="flex flex-wrap gap-2">
          <KeyboardKey>⌘</KeyboardKey>
          <KeyboardKey>Ctrl</KeyboardKey>
          <KeyboardKey>Shift</KeyboardKey>
          <KeyboardKey>Alt</KeyboardKey>
          <KeyboardKey>Enter</KeyboardKey>
          <KeyboardKey>Esc</KeyboardKey>
          <KeyboardKey>Tab</KeyboardKey>
          <KeyboardKey>Space</KeyboardKey>
        </div>
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Keyboard Shortcuts</h3>
        <div className="space-y-3 max-w-md">
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-secondary)' }}>Copy</span>
            <div className="flex gap-1">
              <KeyboardKey>⌘</KeyboardKey>
              <KeyboardKey>C</KeyboardKey>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-secondary)' }}>Paste</span>
            <div className="flex gap-1">
              <KeyboardKey>⌘</KeyboardKey>
              <KeyboardKey>V</KeyboardKey>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-secondary)' }}>Save</span>
            <div className="flex gap-1">
              <KeyboardKey>⌘</KeyboardKey>
              <KeyboardKey>S</KeyboardKey>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ color: 'var(--text-secondary)' }}>Undo</span>
            <div className="flex gap-1">
              <KeyboardKey>⌘</KeyboardKey>
              <KeyboardKey>Z</KeyboardKey>
            </div>
          </div>
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function CodeBlockSection() {
  return (
    <ComponentDocumentation
      title="Code Block"
      description="Syntax-highlighted code display"
      rationale="Code blocks present code in a readable, formatted manner with syntax highlighting that helps developers quickly parse and understand code structure. Proper formatting and highlighting significantly improve code comprehension in documentation."
      whenToUse={[
        'For code snippets in documentation',
        'To show example implementations',
        'In technical blog posts or tutorials',
        'For configuration file examples',
      ]}
      whenNotToUse={[
        'For inline code within sentences (use <code> instead)',
        'When syntax highlighting isn\'t beneficial (plain text)',
        'For very short, single-word code references',
      ]}
      bestPractices={[
        'Include a copy button for easy code copying',
        'Use appropriate language syntax highlighting',
        'Keep code examples concise and focused',
        'Include line numbers for longer code blocks when helpful',
        'Ensure code blocks are scrollable on narrow screens',
      ]}
      accessibility={[
        'Code blocks should have proper semantic markup',
        'Ensure sufficient contrast for syntax colors',
        'Consider providing a plain text alternative for complex code',
        'Syntax highlighting should enhance, not hinder readability',
      ]}
    >
      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>JavaScript</h3>
        <CodeBlock
          language="javascript"
          code={`function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}`}
        />
      </div>

      <div>
        <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>TypeScript</h3>
        <CodeBlock
          language="typescript"
          code={`interface User {
  name: string;
  email: string;
}

const user: User = {
  name: 'John Doe',
  email: 'john@example.com'
};`}
        />
      </div>
    </ComponentDocumentation>
  );
}

function SearchInputSection() {
  const [recentSearch, setRecentSearch] = useState('');
  const defaultSuggestions = ['Design Tokens', 'Card Component', 'Typography', 'Spacing Scale'];

  return (
    <ComponentDocumentation
      title="Search Input"
      description="Input field optimized for search"
      rationale="Search inputs are specialized text inputs designed for search functionality. They include a search icon for visual recognition and often clear buttons, making it immediately obvious to users that they can search and easily clear their search terms."
      whenToUse={[
        'For search functionality in your application',
        'In navigation bars or headers',
        'For filtering lists or tables',
        'When users need to find specific content',
      ]}
      whenNotToUse={[
        'For regular form inputs (use Input instead)',
        'When filtering is better done with dropdowns or checkboxes',
      ]}
      bestPractices={[
        'Include a search icon to make the purpose clear',
        'Provide a clear/reset button when there\'s search text',
        'Consider implementing search suggestions or autocomplete',
        'Show loading states during search',
        'Maintain search query in URL for shareability when appropriate',
      ]}
      accessibility={[
        'Use appropriate input type and autocomplete attributes',
        'Provide clear labels or aria-label',
        'Announce search results count to screen readers',
        'Ensure clear button is keyboard accessible',
      ]}
    >
      <div className="space-y-6 max-w-md">
        <div>
          <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>Default</h3>
          <SearchInput
            placeholder="Search..."
            suggestions={defaultSuggestions}
            onSearch={(value) => setRecentSearch(value)}
          />
          <p className="mt-2" style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
            {recentSearch ? `Showing results for “${recentSearch}”.` : 'Try searching for components or tokens.'}
          </p>
        </div>

        <div>
          <h3 className="mb-4" style={{ color: 'var(--text-secondary)' }}>With Value</h3>
          <SearchInput
            placeholder="Search products..."
            suggestions={['Campfire UI Kit', 'Community icons', 'Flex layouts', 'Navigation']}
            onSearch={(value) => console.log('Searching for:', value)}
          />
        </div>
      </div>
    </ComponentDocumentation>
  );
}

function StatCardSection() {
  return (
    <ComponentDocumentation
      title="Stat Card"
      description="Displays key metrics and statistics"
      rationale="Stat cards present key metrics in a scannable, visual format that makes it easy to monitor important numbers at a glance. They're essential for dashboards where users need to quickly understand performance, trends, and changes in data."
      whenToUse={[
        'In dashboards to display key performance indicators',
        'For showing metrics with trend indicators',
        'To highlight important numbers that change over time',
        'In analytics or reporting interfaces',
      ]}
      whenNotToUse={[
        'For static numbers that don\'t change or lack context',
        'When detailed data visualization would be more appropriate',
        'For more than 6-8 metrics on a single screen (causes overwhelm)',
      ]}
      bestPractices={[
        'Show percentage or absolute change with color coding',
        'Include relevant icons to make metrics quickly recognizable',
        'Keep metric labels clear and concise',
        'Use consistent card layouts across dashboards',
        'Consider time periods for context (e.g., "vs last month")',
      ]}
      accessibility={[
        'Ensure color isn\'t the only indicator of positive/negative',
        'Use appropriate semantic markup for numbers',
        'Provide text alternatives for icon meanings',
        'Make cards keyboard focusable if they\'re interactive',
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Revenue"
          value="$45,231"
          icon="fa-sack-dollar"
          trend={{ value: 20.1, isPositive: true }}
        />
        <StatCard
          label="Active Users"
          value="2,345"
          icon="fa-users"
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          label="Orders"
          value="1,234"
          icon="fa-cart-shopping"
          trend={{ value: 5.2, isPositive: false }}
        />
        <StatCard
          label="Conversion Rate"
          value="3.24%"
          icon="fa-chart-line"
          trend={{ value: 2.1, isPositive: true }}
        />
      </div>
    </ComponentDocumentation>
  );
}

function ListGroupSection() {
  return (
    <ComponentDocumentation
      title="List Group"
      description="Vertical list of actionable items"
      rationale="List groups provide a structured way to display a vertical list of interactive items with clear visual boundaries. They're perfect for navigation menus, settings panels, or any interface where users need to select from a set of options."
      whenToUse={[
        'For navigation menus in sidebars or mobile views',
        'To display a list of selectable options',
        'In settings panels with multiple options',
        'For action lists or item selections',
      ]}
      whenNotToUse={[
        'For read-only content (use a simple list instead)',
        'When cards would better separate complex items',
        'For tabular data (use Table instead)',
      ]}
      bestPractices={[
        'Use icons to make items more scannable',
        'Show active/selected states clearly',
        'Keep item labels concise and descriptive',
        'Disable items that aren\'t currently available',
        'Ensure the entire item is clickable, not just the text',
      ]}
      accessibility={[
        'List items should be keyboard navigable',
        'Active state should be clearly announced',
        'Use semantic list markup (ul/li)',
        'Disabled items should communicate their state',
      ]}
    >
      <div className="max-w-md">
        <ListGroup>
          <ListGroupItem active>
            <i className="fa-solid fa-house mr-2"></i>
            Dashboard
          </ListGroupItem>
          <ListGroupItem>
            <i className="fa-solid fa-folder mr-2"></i>
            Projects
          </ListGroupItem>
          <ListGroupItem>
            <i className="fa-solid fa-users mr-2"></i>
            Team
          </ListGroupItem>
          <ListGroupItem>
            <i className="fa-solid fa-gear mr-2"></i>
            Settings
          </ListGroupItem>
          <ListGroupItem disabled>
            <i className="fa-solid fa-lock mr-2"></i>
            Locked Feature
          </ListGroupItem>
        </ListGroup>
      </div>
    </ComponentDocumentation>
  );
}

function FileUploadSection() {
  return (
    <ComponentDocumentation
      title="File Upload"
      description="Drag and drop file upload component"
      rationale="File upload components make it easy for users to add files to your application with both drag-and-drop and traditional file picking. A good upload experience reduces friction and makes file management feel natural and intuitive."
      whenToUse={[
        'For uploading images, documents, or other files',
        'When users need to attach files to forms',
        'In profile settings for avatar uploads',
        'For bulk file operations',
      ]}
      whenNotToUse={[
        'For very large files without chunked upload support',
        'When a URL input would be more appropriate',
        'For security-sensitive files without proper validation',
      ]}
      bestPractices={[
        'Show clear file type and size restrictions',
        'Provide visual feedback during upload (progress bars)',
        'Allow both drag-and-drop and click-to-browse',
        'Show preview thumbnails for images when possible',
        'Validate file types and sizes on both client and server',
      ]}
      accessibility={[
        'Ensure the upload area is keyboard accessible',
        'Provide clear instructions and labels',
        'Announce upload progress and completion to screen readers',
        'Handle errors gracefully with clear messaging',
      ]}
    >
      <div className="max-w-md">
        <FileUpload
          onFilesSelected={(files: File[]) => console.log('Files:', files)}
          accept="image/*"
        />
      </div>
    </ComponentDocumentation>
  );
}

function EmptyStateSection() {
  return (
    <ComponentDocumentation
      title="Empty State"
      description="Placeholder for empty content areas"
      rationale="Empty states turn potentially confusing blank screens into opportunities for guidance and action. They help users understand why content is missing and what they can do next, preventing frustration and abandonment."
      whenToUse={[
        'When a list, table, or collection has no items',
        'For first-time user experiences',
        'When search or filter results return nothing',
        'In error states where content failed to load',
      ]}
      whenNotToUse={[
        'During initial loading (use Skeleton instead)',
        'For transient states that will resolve quickly',
      ]}
      bestPractices={[
        'Include a relevant icon or illustration',
        'Explain why the area is empty in friendly language',
        'Provide a clear call-to-action to resolve the empty state',
        'Keep messaging concise but helpful',
        'Use appropriate tone (encouraging for new users, helpful for errors)',
      ]}
      accessibility={[
        'Ensure empty state text is readable and has sufficient contrast',
        'Make action buttons keyboard accessible',
        'Provide meaningful alternative text for images/icons',
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EmptyState
          icon="fa-inbox"
          title="No messages"
          description="You don't have any messages yet. Start a conversation to get started."
          action={{ label: 'New Message', onClick: () => console.log('New message') }}
        />

        <EmptyState
          icon="fa-folder-open"
          title="No projects found"
          description="Create your first project to get started with Campfire."
          action={{ label: 'Create Project', onClick: () => console.log('Create project') }}
        />
      </div>
    </ComponentDocumentation>
  );
}
