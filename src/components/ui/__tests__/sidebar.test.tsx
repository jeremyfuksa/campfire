import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Sidebar, SidebarProvider } from "../sidebar";

expect.extend(toHaveNoViolations);

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

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar>
          <nav aria-label="Main navigation">
            <a href="/">Home</a>
          </nav>
        </Sidebar>
      </SidebarProvider>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
