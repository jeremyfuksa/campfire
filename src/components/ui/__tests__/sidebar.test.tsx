import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Sidebar, SidebarProvider } from "../sidebar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <div>Sidebar content</div>
        </Sidebar>
      </SidebarProvider>
    );
    expect(container.querySelector('[data-slot="sidebar"]')).toBeInTheDocument();
  });
});
