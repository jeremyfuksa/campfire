import type { Meta, StoryObj } from "@storybook/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./resizable";

const meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const Panel = ({ label }: { label: string }) => (
  <div className="flex h-full items-center justify-center p-6 text-sm text-muted-foreground">
    {label}
  </div>
);

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border max-w-2xl min-h-48"
    >
      <ResizablePanel defaultSize={30}>
        <Panel label="Sidebar" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <Panel label="Main content" />
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="rounded-lg border max-w-md min-h-72"
    >
      <ResizablePanel defaultSize={40}>
        <Panel label="Top" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <Panel label="Bottom" />
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreeColumn: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border max-w-3xl min-h-48"
    >
      <ResizablePanel defaultSize={20}>
        <Panel label="Nav" />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <Panel label="Editor" />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <Panel label="Preview" />
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
