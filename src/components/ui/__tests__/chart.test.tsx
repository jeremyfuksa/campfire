import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../chart";

expect.extend(toHaveNoViolations);

describe("Chart", () => {
  it("renders chart container", () => {
    const { container } = render(
      <ChartContainer config={{}}>
        <div>Chart content</div>
      </ChartContainer>
    );
    expect(container.querySelector('[data-slot="chart-container"]')).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <ChartContainer config={{}}>
        <div>Chart content</div>
      </ChartContainer>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
