import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { PageWithSidebar } from './PageWithSidebar';
import { ComponentDocumentation } from './ComponentDocumentation';
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
    return (_jsxs(PageWithSidebar, { title: "Utilities", description: "Phase 3 \u2014 8+ components", sidebarGroups: sidebarGroups, activeSection: activeSection, onSectionChange: setActiveSection, gradientColor: "var(--primary-400)", children: [activeSection === 'chip' && _jsx(ChipSection, {}), activeSection === 'status-dot' && _jsx(StatusDotSection, {}), activeSection === 'helper-text' && _jsx(HelperTextSection, {}), activeSection === 'link' && _jsx(LinkSection, {}), activeSection === 'copy-button' && _jsx(CopyButtonSection, {}), activeSection === 'keyboard-key' && _jsx(KeyboardKeySection, {}), activeSection === 'code-block' && _jsx(CodeBlockSection, {}), activeSection === 'search-input' && _jsx(SearchInputSection, {}), activeSection === 'stat-card' && _jsx(StatCardSection, {}), activeSection === 'list-group' && _jsx(ListGroupSection, {}), activeSection === 'file-upload' && _jsx(FileUploadSection, {}), activeSection === 'empty-state' && _jsx(EmptyStateSection, {})] }));
}
function ChipSection() {
    return (_jsxs(ComponentDocumentation, { title: "Chip", description: "Compact element for tags, filters, or removable items", rationale: "Chips represent discrete pieces of information like tags, categories, or applied filters. Their compact size and removable nature make them ideal for displaying multiple selections or active filters without cluttering the interface.", whenToUse: [
            'To represent applied filters in a search or list view',
            'For displaying selected items or tags',
            'To show categories or metadata in a compact way',
            'In input fields for multi-select values (like email recipients)',
        ], whenNotToUse: [
            'For navigation (use tabs or links instead)',
            'For actions that modify data (use buttons instead)',
            'When the content needs to be scannable text (use regular text)',
            'For status indicators (use Badge or StatusDot instead)',
        ], bestPractices: [
            'Make chips removable when they represent user selections',
            'Use consistent styling for chips within the same context',
            'Keep chip text concise (1-3 words typically)',
            'Group related chips together visually',
            'Provide clear feedback when chips are added or removed',
        ], accessibility: [
            'Removable chips should announce when they\'re deleted',
            'Use keyboard navigation (Tab to focus, Enter/Space to remove)',
            'Ensure sufficient color contrast between chip and background',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Basic Chips" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Chip, { children: "React" }), _jsx(Chip, { children: "TypeScript" }), _jsx(Chip, { children: "Tailwind CSS" }), _jsx(Chip, { children: "Design System" }), _jsx(Chip, { children: "shadcn/ui" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Close Button" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Chip, { onClose: () => console.log('Close'), children: "Removable" }), _jsx(Chip, { onClose: () => console.log('Close'), children: "Click X to remove" }), _jsx(Chip, { onClose: () => console.log('Close'), children: "Filter Tag" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Icons" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsxs(Chip, { children: [_jsx("i", { className: "fa-solid fa-tag mr-1" }), "Featured"] }), _jsxs(Chip, { children: [_jsx("i", { className: "fa-solid fa-star mr-1" }), "Premium"] }), _jsxs(Chip, { onClose: () => console.log('Close'), children: [_jsx("i", { className: "fa-solid fa-fire mr-1" }), "Trending"] })] })] })] }));
}
function StatusDotSection() {
    return (_jsx(ComponentDocumentation, { title: "Status Dot", description: "Visual indicator for status states", rationale: "Status dots provide at-a-glance status information using color and animation. Their small size and universal meaning (colored dot = status) make them perfect for showing availability, connection states, or process status without text.", whenToUse: [
            'For user availability/presence indicators (online, away, busy)',
            'To show connection or sync status',
            'For indicating process states (running, paused, stopped)',
            'In list items where space is limited but status is important',
        ], whenNotToUse: [
            'When status needs detailed explanation (use Badge with text)',
            'For critical status that requires immediate attention (use Alert)',
            'When color alone isn\'t sufficient (ensure text labels accompany)',
        ], bestPractices: [
            'Always pair with a text label for accessibility',
            'Use pulse animation sparingly for active/live states',
            'Follow standard color conventions (green=good, red=bad, yellow=warning)',
            'Keep dots consistent in size across the interface',
            'Provide hover tooltips for additional context if needed',
        ], accessibility: [
            'Never rely on color alone - always include a text label',
            'Ensure color contrast is sufficient for color-blind users',
            'Pulse animations should not be the only indicator of state',
            'Consider using icons or patterns in addition to color',
        ], children: _jsxs("div", { className: "space-y-4 max-w-md", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(StatusDot, { variant: "success" }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Online" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(StatusDot, { variant: "warning" }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Away" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(StatusDot, { variant: "danger" }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Offline" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(StatusDot, { variant: "info" }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "In a meeting" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(StatusDot, { variant: "success", pulse: true }), _jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Active (with pulse animation)" })] })] }) }));
}
function HelperTextSection() {
    return (_jsx(ComponentDocumentation, { title: "Helper Text", description: "Supplementary text for form fields", rationale: "Helper text provides guidance, validation feedback, and contextual information for form inputs. It helps users understand what's expected, confirms successful input, and clearly communicates errors without disrupting the form layout.", whenToUse: [
            'To provide format examples or input requirements',
            'For real-time validation feedback',
            'To show character counts or limits',
            'To guide users on what information is needed',
        ], whenNotToUse: [
            'For critical information (use labels or inline text)',
            'When the input purpose is completely obvious',
            'For lengthy instructions (consider a tooltip or help link)',
        ], bestPractices: [
            'Place helper text directly below the input field',
            'Use different variants for different states (error, success, warning)',
            'Keep helper text concise and actionable',
            'Update helper text dynamically as users type when appropriate',
            'Use appropriate colors to indicate validation states',
        ], accessibility: [
            'Associate helper text with inputs using aria-describedby',
            'Ensure error messages are announced to screen readers',
            'Don\'t rely solely on color to convey validation state',
            'Helper text should have sufficient contrast',
        ], children: _jsxs("div", { className: "space-y-6 max-w-md", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "username", children: "Username" }), _jsx(Input, { id: "username", placeholder: "Enter username" }), _jsx(HelperText, { children: "Must be at least 3 characters long" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email-helper", children: "Email" }), _jsx(Input, { id: "email-helper", type: "email", placeholder: "Enter email" }), _jsx(HelperText, { variant: "error", children: "This email is already taken" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password-helper", children: "Password" }), _jsx(Input, { id: "password-helper", type: "password", placeholder: "Enter password" }), _jsx(HelperText, { variant: "success", children: "Password strength: Strong" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "bio", children: "Bio" }), _jsx(Input, { id: "bio", placeholder: "Tell us about yourself" }), _jsx(HelperText, { variant: "warning", children: "Character limit: 150/500" })] })] }) }));
}
function LinkSection() {
    return (_jsxs(ComponentDocumentation, { title: "Link", description: "Styled hyperlink component", rationale: "Links are the fundamental navigation element of the web. The Campfire link component provides semantic variants that fit different contexts while maintaining the earthy, grounded aesthetic and ensuring proper accessibility.", whenToUse: [
            'For navigation between pages or sections',
            'To link to external resources or documentation',
            'Within body text for inline references',
            'In navigation menus and breadcrumbs',
        ], whenNotToUse: [
            'For actions that modify data (use Button instead)',
            'For client-side only actions without navigation',
            'When you need button-like visual prominence',
        ], bestPractices: [
            'Use descriptive link text (avoid "click here" or "read more")',
            'Make external links visually distinct (use external prop)',
            'Underline links in body text for clear identification',
            'Use muted variant for secondary or less important links',
            'Ensure sufficient color contrast with surrounding text',
        ], accessibility: [
            'Link text should describe the destination, not the action',
            'External links should indicate they open in a new tab',
            'Links should be keyboard accessible and show focus states',
            'Ensure color is not the only indicator (use underlines)',
        ], children: [_jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Link, { href: "#", children: "Default Link" }), _jsx(Link, { href: "#", variant: "muted", children: "Muted Link" }), _jsxs(Link, { href: "#", className: "inline-flex items-center gap-1", children: ["External Link", _jsx(ChevronRight, { className: "h-3 w-3" })] })] }), _jsx("div", { className: "max-w-md", children: _jsxs("p", { style: { color: 'var(--text-secondary)' }, children: ["Links can be used inline with text. ", _jsx(Link, { href: "#", children: "Click here" }), " to learn more about the Campfire Design System and how to ", _jsx(Link, { href: "#", variant: "muted", children: "get started" }), "."] }) })] }));
}
function CopyButtonSection() {
    return (_jsxs(ComponentDocumentation, { title: "Copy Button", description: "Quick copy-to-clipboard functionality", rationale: "Copy buttons provide one-click functionality to copy text to the clipboard, essential for code snippets, API keys, URLs, and other content users need to reuse. They eliminate manual selection and copying, reducing friction and errors.", whenToUse: [
            'Next to code snippets or command line instructions',
            'For API keys, tokens, or generated IDs',
            'With shareable URLs or links',
            'For any text content that users commonly need to copy',
        ], whenNotToUse: [
            'For very short, easily memorized content',
            'When copying doesn\'t make sense in context',
            'For sensitive information that shouldn\'t be in clipboard',
        ], bestPractices: [
            'Provide clear visual feedback when copy succeeds',
            'Position copy buttons near the content they copy',
            'Use an icon that clearly indicates the copy action',
            'Consider showing "Copied!" confirmation briefly',
            'Ensure the button is accessible via keyboard',
        ], accessibility: [
            'Copy buttons should be keyboard accessible',
            'Announce copy success to screen readers',
            'Include aria-label to describe what will be copied',
            'Ensure focus states are visible',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Basic Usage" }), _jsxs("div", { className: "flex items-center gap-2 max-w-xl", children: [_jsx("code", { className: "px-3 py-2 rounded-md flex-1", style: { backgroundColor: 'var(--bg-muted)', color: 'var(--text-primary)' }, children: "npm install @campfire/design-system" }), _jsx(CopyButton, { text: "npm install @campfire/design-system" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Code Block" }), _jsxs("div", { className: "relative max-w-xl", children: [_jsx("pre", { className: "p-4 rounded-lg overflow-x-auto", style: { backgroundColor: 'var(--bg-muted)', color: 'var(--text-primary)' }, children: _jsx("code", { children: `import { Button } from '@campfire/ui';

function App() {
  return <Button>Click me</Button>;
}` }) }), _jsx("div", { className: "absolute top-2 right-2", children: _jsx(CopyButton, { text: `import { Button } from '@campfire/ui';\n\nfunction App() {\n  return <Button>Click me</Button>;\n}` }) })] })] })] }));
}
function KeyboardKeySection() {
    return (_jsxs(ComponentDocumentation, { title: "Keyboard Key", description: "Displays keyboard shortcuts visually", rationale: "Keyboard key components visualize keyboard shortcuts in a familiar, skeuomorphic style that mimics physical keyboard keys. This makes shortcuts more discoverable and memorable, helping power users work more efficiently.", whenToUse: [
            'To display keyboard shortcuts in help documentation',
            'In tooltips showing available keyboard commands',
            'For onboarding or tutorial screens',
            'In settings or preferences showing custom keybindings',
        ], whenNotToUse: [
            'For every possible shortcut (show only the most useful)',
            'When shortcuts aren\'t actually implemented',
            'In dense interfaces where they add clutter',
        ], bestPractices: [
            'Use platform-specific symbols (⌘ for Mac, Ctrl for Windows)',
            'Show modifier keys in a consistent order',
            'Group related shortcuts together',
            'Keep key labels short (single characters or abbreviations)',
            'Use consistent styling across all keyboard visualizations',
        ], accessibility: [
            'Keyboard key components are presentational',
            'Ensure actual keyboard shortcuts work as shown',
            'Provide text alternatives for screen readers',
            'Don\'t use keyboard styling for non-keyboard content',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Single Keys" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(KeyboardKey, { children: "\u2318" }), _jsx(KeyboardKey, { children: "Ctrl" }), _jsx(KeyboardKey, { children: "Shift" }), _jsx(KeyboardKey, { children: "Alt" }), _jsx(KeyboardKey, { children: "Enter" }), _jsx(KeyboardKey, { children: "Esc" }), _jsx(KeyboardKey, { children: "Tab" }), _jsx(KeyboardKey, { children: "Space" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Keyboard Shortcuts" }), _jsxs("div", { className: "space-y-3 max-w-md", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Copy" }), _jsxs("div", { className: "flex gap-1", children: [_jsx(KeyboardKey, { children: "\u2318" }), _jsx(KeyboardKey, { children: "C" })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Paste" }), _jsxs("div", { className: "flex gap-1", children: [_jsx(KeyboardKey, { children: "\u2318" }), _jsx(KeyboardKey, { children: "V" })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Save" }), _jsxs("div", { className: "flex gap-1", children: [_jsx(KeyboardKey, { children: "\u2318" }), _jsx(KeyboardKey, { children: "S" })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { style: { color: 'var(--text-secondary)' }, children: "Undo" }), _jsxs("div", { className: "flex gap-1", children: [_jsx(KeyboardKey, { children: "\u2318" }), _jsx(KeyboardKey, { children: "Z" })] })] })] })] })] }));
}
function CodeBlockSection() {
    return (_jsxs(ComponentDocumentation, { title: "Code Block", description: "Syntax-highlighted code display", rationale: "Code blocks present code in a readable, formatted manner with syntax highlighting that helps developers quickly parse and understand code structure. Proper formatting and highlighting significantly improve code comprehension in documentation.", whenToUse: [
            'For code snippets in documentation',
            'To show example implementations',
            'In technical blog posts or tutorials',
            'For configuration file examples',
        ], whenNotToUse: [
            'For inline code within sentences (use <code> instead)',
            'When syntax highlighting isn\'t beneficial (plain text)',
            'For very short, single-word code references',
        ], bestPractices: [
            'Include a copy button for easy code copying',
            'Use appropriate language syntax highlighting',
            'Keep code examples concise and focused',
            'Include line numbers for longer code blocks when helpful',
            'Ensure code blocks are scrollable on narrow screens',
        ], accessibility: [
            'Code blocks should have proper semantic markup',
            'Ensure sufficient contrast for syntax colors',
            'Consider providing a plain text alternative for complex code',
            'Syntax highlighting should enhance, not hinder readability',
        ], children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "JavaScript" }), _jsx(CodeBlock, { language: "javascript", code: `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}` })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "TypeScript" }), _jsx(CodeBlock, { language: "typescript", code: `interface User {
  name: string;
  email: string;
}

const user: User = {
  name: 'John Doe',
  email: 'john@example.com'
};` })] })] }));
}
function SearchInputSection() {
    const [recentSearch, setRecentSearch] = useState('');
    const defaultSuggestions = ['Design Tokens', 'Card Component', 'Typography', 'Spacing Scale'];
    return (_jsx(ComponentDocumentation, { title: "Search Input", description: "Input field optimized for search", rationale: "Search inputs are specialized text inputs designed for search functionality. They include a search icon for visual recognition and often clear buttons, making it immediately obvious to users that they can search and easily clear their search terms.", whenToUse: [
            'For search functionality in your application',
            'In navigation bars or headers',
            'For filtering lists or tables',
            'When users need to find specific content',
        ], whenNotToUse: [
            'For regular form inputs (use Input instead)',
            'When filtering is better done with dropdowns or checkboxes',
        ], bestPractices: [
            'Include a search icon to make the purpose clear',
            'Provide a clear/reset button when there\'s search text',
            'Consider implementing search suggestions or autocomplete',
            'Show loading states during search',
            'Maintain search query in URL for shareability when appropriate',
        ], accessibility: [
            'Use appropriate input type and autocomplete attributes',
            'Provide clear labels or aria-label',
            'Announce search results count to screen readers',
            'Ensure clear button is keyboard accessible',
        ], children: _jsxs("div", { className: "space-y-6 max-w-md", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "Default" }), _jsx(SearchInput, { placeholder: "Search...", suggestions: defaultSuggestions, onSearch: (value) => setRecentSearch(value) }), _jsx("p", { className: "mt-2", style: { fontSize: '13px', color: 'var(--text-tertiary)' }, children: recentSearch ? `Showing results for “${recentSearch}”.` : 'Try searching for components or tokens.' })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-4", style: { color: 'var(--text-secondary)' }, children: "With Value" }), _jsx(SearchInput, { placeholder: "Search products...", suggestions: ['Campfire UI Kit', 'Community icons', 'Flex layouts', 'Navigation'], onSearch: (value) => console.log('Searching for:', value) })] })] }) }));
}
function StatCardSection() {
    return (_jsx(ComponentDocumentation, { title: "Stat Card", description: "Displays key metrics and statistics", rationale: "Stat cards present key metrics in a scannable, visual format that makes it easy to monitor important numbers at a glance. They're essential for dashboards where users need to quickly understand performance, trends, and changes in data.", whenToUse: [
            'In dashboards to display key performance indicators',
            'For showing metrics with trend indicators',
            'To highlight important numbers that change over time',
            'In analytics or reporting interfaces',
        ], whenNotToUse: [
            'For static numbers that don\'t change or lack context',
            'When detailed data visualization would be more appropriate',
            'For more than 6-8 metrics on a single screen (causes overwhelm)',
        ], bestPractices: [
            'Show percentage or absolute change with color coding',
            'Include relevant icons to make metrics quickly recognizable',
            'Keep metric labels clear and concise',
            'Use consistent card layouts across dashboards',
            'Consider time periods for context (e.g., "vs last month")',
        ], accessibility: [
            'Ensure color isn\'t the only indicator of positive/negative',
            'Use appropriate semantic markup for numbers',
            'Provide text alternatives for icon meanings',
            'Make cards keyboard focusable if they\'re interactive',
        ], children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(StatCard, { label: "Total Revenue", value: "$45,231", icon: "fa-sack-dollar", trend: { value: 20.1, isPositive: true } }), _jsx(StatCard, { label: "Active Users", value: "2,345", icon: "fa-users", trend: { value: 12.5, isPositive: true } }), _jsx(StatCard, { label: "Orders", value: "1,234", icon: "fa-cart-shopping", trend: { value: 5.2, isPositive: false } }), _jsx(StatCard, { label: "Conversion Rate", value: "3.24%", icon: "fa-chart-line", trend: { value: 2.1, isPositive: true } })] }) }));
}
function ListGroupSection() {
    return (_jsx(ComponentDocumentation, { title: "List Group", description: "Vertical list of actionable items", rationale: "List groups provide a structured way to display a vertical list of interactive items with clear visual boundaries. They're perfect for navigation menus, settings panels, or any interface where users need to select from a set of options.", whenToUse: [
            'For navigation menus in sidebars or mobile views',
            'To display a list of selectable options',
            'In settings panels with multiple options',
            'For action lists or item selections',
        ], whenNotToUse: [
            'For read-only content (use a simple list instead)',
            'When cards would better separate complex items',
            'For tabular data (use Table instead)',
        ], bestPractices: [
            'Use icons to make items more scannable',
            'Show active/selected states clearly',
            'Keep item labels concise and descriptive',
            'Disable items that aren\'t currently available',
            'Ensure the entire item is clickable, not just the text',
        ], accessibility: [
            'List items should be keyboard navigable',
            'Active state should be clearly announced',
            'Use semantic list markup (ul/li)',
            'Disabled items should communicate their state',
        ], children: _jsx("div", { className: "max-w-md", children: _jsxs(ListGroup, { children: [_jsxs(ListGroupItem, { active: true, children: [_jsx("i", { className: "fa-solid fa-house mr-2" }), "Dashboard"] }), _jsxs(ListGroupItem, { children: [_jsx("i", { className: "fa-solid fa-folder mr-2" }), "Projects"] }), _jsxs(ListGroupItem, { children: [_jsx("i", { className: "fa-solid fa-users mr-2" }), "Team"] }), _jsxs(ListGroupItem, { children: [_jsx("i", { className: "fa-solid fa-gear mr-2" }), "Settings"] }), _jsxs(ListGroupItem, { disabled: true, children: [_jsx("i", { className: "fa-solid fa-lock mr-2" }), "Locked Feature"] })] }) }) }));
}
function FileUploadSection() {
    return (_jsx(ComponentDocumentation, { title: "File Upload", description: "Drag and drop file upload component", rationale: "File upload components make it easy for users to add files to your application with both drag-and-drop and traditional file picking. A good upload experience reduces friction and makes file management feel natural and intuitive.", whenToUse: [
            'For uploading images, documents, or other files',
            'When users need to attach files to forms',
            'In profile settings for avatar uploads',
            'For bulk file operations',
        ], whenNotToUse: [
            'For very large files without chunked upload support',
            'When a URL input would be more appropriate',
            'For security-sensitive files without proper validation',
        ], bestPractices: [
            'Show clear file type and size restrictions',
            'Provide visual feedback during upload (progress bars)',
            'Allow both drag-and-drop and click-to-browse',
            'Show preview thumbnails for images when possible',
            'Validate file types and sizes on both client and server',
        ], accessibility: [
            'Ensure the upload area is keyboard accessible',
            'Provide clear instructions and labels',
            'Announce upload progress and completion to screen readers',
            'Handle errors gracefully with clear messaging',
        ], children: _jsx("div", { className: "max-w-md", children: _jsx(FileUpload, { onFilesSelected: (files) => console.log('Files:', files), accept: "image/*" }) }) }));
}
function EmptyStateSection() {
    return (_jsx(ComponentDocumentation, { title: "Empty State", description: "Placeholder for empty content areas", rationale: "Empty states turn potentially confusing blank screens into opportunities for guidance and action. They help users understand why content is missing and what they can do next, preventing frustration and abandonment.", whenToUse: [
            'When a list, table, or collection has no items',
            'For first-time user experiences',
            'When search or filter results return nothing',
            'In error states where content failed to load',
        ], whenNotToUse: [
            'During initial loading (use Skeleton instead)',
            'For transient states that will resolve quickly',
        ], bestPractices: [
            'Include a relevant icon or illustration',
            'Explain why the area is empty in friendly language',
            'Provide a clear call-to-action to resolve the empty state',
            'Keep messaging concise but helpful',
            'Use appropriate tone (encouraging for new users, helpful for errors)',
        ], accessibility: [
            'Ensure empty state text is readable and has sufficient contrast',
            'Make action buttons keyboard accessible',
            'Provide meaningful alternative text for images/icons',
        ], children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(EmptyState, { icon: "fa-inbox", title: "No messages", description: "You don't have any messages yet. Start a conversation to get started.", action: { label: 'New Message', onClick: () => console.log('New message') } }), _jsx(EmptyState, { icon: "fa-folder-open", title: "No projects found", description: "Create your first project to get started with Campfire.", action: { label: 'Create Project', onClick: () => console.log('Create project') } })] }) }));
}
