import { PageWithSidebar } from "./PageWithSidebar";
import { ComponentDocumentation } from "./ComponentDocumentation";

export function GettingStartedPage() {
  const [activeSection, setActiveSection] = useState("install");

  const sidebarGroups = [
    {
      title: "Workflow",
      items: [
        { id: "install", label: "Install via npm", icon: "fa-solid fa-cloud-arrow-down" },
        { id: "clone", label: "Clone the repo", icon: "fa-solid fa-code-branch" },
        { id: "usage", label: "Use the components", icon: "fa-solid fa-puzzle-piece" },
        { id: "publish", label: "Publishing flow", icon: "fa-solid fa-rocket" },
      ],
    },
    {
      title: "Resources",
      items: [
        { id: "tokens", label: "Design tokens", icon: "fa-solid fa-palette" },
        { id: "support", label: "Support", icon: "fa-solid fa-life-ring" },
      ],
    },
  ];

  return (
    <PageWithSidebar
      title="Getting Started"
      description="Install Campfire from npm or clone the repo to explore the docs."
      sidebarGroups={sidebarGroups}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      gradientColor="var(--primary-600)"
    >
      {activeSection === "install" && <InstallSection />}
      {activeSection === "clone" && <CloneSection />}
      {activeSection === "usage" && <UsageSection />}
      {activeSection === "publish" && <PublishSection />}
      {activeSection === "tokens" && <TokensSection />}
      {activeSection === "support" && <SupportSection />}
    </PageWithSidebar>
  );
}

function InstallSection() {
  return (
    <ComponentDocumentation
      title="Install via npm"
      description="Pull the published package into your app."
      rationale="Publishing to npm keeps consumer projects lighter and guarantees consistent versions across teams."
      whenToUse={[
        "You’re embedding Campfire into an existing React/Tailwind project.",
        "You need updates via semantic versioning.",
      ]}
      whenNotToUse={[
        "You’re only browsing the docs/demo — use `npm run dev` locally instead.",
      ]}
      bestPractices={[
        "Pin a specific version in package.json (e.g., ^0.1.0).",
        "Import the stylesheet once in your root entry file.",
      ]}
      accessibility={[]}
    >
      <div className="space-y-4">
        <code className="block rounded-xl px-4 py-3" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
          npm install @jeremyfuksa/campfire
        </code>
        <code className="block rounded-xl px-4 py-3" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
          yarn add @jeremyfuksa/campfire
        </code>
        <p style={{ color: "var(--text-secondary)" }}>
          After installation, import the stylesheet once (typically in your main entry file) and then consume components:
        </p>
        <pre className="rounded-2xl overflow-auto p-4" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
{`import '@jeremyfuksa/campfire/styles.css';
import { Button } from '@jeremyfuksa/campfire';

export function Example() {
  return <Button>Campfire</Button>;
}`}
        </pre>
      </div>
    </ComponentDocumentation>
  );
}

function CloneSection() {
  return (
    <ComponentDocumentation
      title="Clone & run locally"
      description="Explore the docs and component demos."
      rationale="Running the repo locally lets you inspect every token and page before consuming the package."
      whenToUse={[
        "You want to browse or tweak the demo site.",
        "You need to regenerate design tokens or adjust content.",
      ]}
      bestPractices={[
        "Use Node 18+.",
        "Run `npm install`, then `npm run dev` for hot reload.",
      ]}
      accessibility={[]}
    >
      <div className="space-y-4">
        <pre className="rounded-2xl overflow-auto p-4" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
{`git clone https://github.com/jeremyfuksa/campfire.git
cd campfire
npm install
npm run dev`}
        </pre>
        <p style={{ color: "var(--text-secondary)" }}>
          Use `npm run build` for a production build of the docs. The npm package lives in `src/lib/index.ts` and builds with `npm run build:lib`.
        </p>
      </div>
    </ComponentDocumentation>
  );
}

function UsageSection() {
  return (
    <ComponentDocumentation
      title="Consume components"
      description="Use the pre-built primitives in your React projects."
      rationale="Every Campfire component exports its types and accepts Tailwind-friendly classNames."
      bestPractices={[
        "Import only the components you need to keep bundles small.",
        "Override styles by extending `className` or using CSS variables.",
      ]}
      accessibility={[]}
    >
      <div className="space-y-4">
        <p style={{ color: "var(--text-secondary)" }}>
          Because the components rely on the global CSS tokens, remember to import `styles.css` once. You can tree-shake components by cherry-picking from the package.
        </p>
        <pre className="rounded-2xl overflow-auto p-4" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-primary)" }}>
{`import '@jeremyfuksa/campfire/styles.css';
import { Input, Button } from '@jeremyfuksa/campfire';`}
        </pre>
      </div>
    </ComponentDocumentation>
  );
}

function PublishSection() {
  return (
    <ComponentDocumentation
      title="Publishing workflow"
      description="Release new versions to npm."
      rationale="Use semantic versioning so consumers can upgrade safely."
      bestPractices={[
        "`npm version patch|minor|major` to bump versions.",
        "`npm run release` to build & publish (calls `build:lib` + `npm publish`).",
        "Ensure `npm login` is configured before publishing.",
      ]}
      accessibility={[]}
    />
  );
}

function TokensSection() {
  return (
    <ComponentDocumentation
      title="Design tokens"
      description="Export palette data from the docs site."
      rationale="Keep design tools in sync by downloading `campfire-palettes.json`."
      bestPractices={[
        "Visit Design Tokens → Export JSON to download the palette file.",
        "Regenerate tokens by running `npm run tokens`.",
      ]}
      accessibility={[]}
    />
  );
}

function SupportSection() {
  return (
    <ComponentDocumentation
      title="Support & resources"
      description="Get help or contribute."
      rationale="Use GitHub Issues for bugs and feature requests."
      bestPractices={[
        "Open issues at https://github.com/jeremyfuksa/campfire/issues.",
        "Submit pull requests for fixes or new components.",
        "Join discussions to shape the roadmap.",
      ]}
      accessibility={[]}
    />
  );
}
