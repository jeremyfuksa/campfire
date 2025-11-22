import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../chart";

describe("Chart", () => {
  it("renders chart container", () => {
    const { container } = render(
      <ChartContainer config={{}}>
        <div>Chart content</div>
      </ChartContainer>
    );
    expect(container.querySelector('[data-slot="chart-container"]')).toBeInTheDocument();
  });
});
