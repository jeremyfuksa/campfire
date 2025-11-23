import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../resizable";

describe("Resizable", () => {
  it("renders panel group", () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(container.querySelector('[data-slot="resizable-panel-group"]')).toBeInTheDocument();
  });

  it("renders panels with content", () => {
    const { getByText } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Left Panel</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Right Panel</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(getByText("Left Panel")).toBeInTheDocument();
    expect(getByText("Right Panel")).toBeInTheDocument();
  });
});
