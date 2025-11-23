import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../pagination";

expect.extend(toHaveNoViolations);

describe("Pagination", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(container.querySelector('[data-slot="pagination"]')).toBeInTheDocument();
  });

  it("has proper ARIA label", () => {
    render(
      <Pagination>
        <PaginationContent />
      </Pagination>
    );
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "pagination");
  });

  it("renders pagination items", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#2">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#3">3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    
    expect(screen.getByRole("link", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "3" })).toBeInTheDocument();
  });

  it("renders previous link", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#previous" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(screen.getByRole("link", { name: /previous/i })).toBeInTheDocument();
  });

  it("renders next link", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationNext href="#next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(screen.getByRole("link", { name: /next/i })).toBeInTheDocument();
  });

  it("renders ellipsis for skipped pages", () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#10">10</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    expect(container.querySelector('[data-slot="pagination-ellipsis"]')).toBeInTheDocument();
  });

  it("highlights active page", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#1" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#2">2</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    const activePage = screen.getByRole("link", { name: "1" });
    expect(activePage).toHaveAttribute("aria-current", "page");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#prev" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#1" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#2">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
