import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { TreeView, type TreeNode } from "../tree-view";

expect.extend(toHaveNoViolations);

describe("TreeView", () => {
  const data: TreeNode[] = [
    {
      id: "1",
      label: "Root Node",
      children: [
        { id: "1-1", label: "Child One" },
        { id: "1-2", label: "Child Two" },
      ],
    },
    { id: "2", label: "Leaf Node" },
  ];

  it("renders without crashing", () => {
    render(<TreeView data={data} />);
    expect(screen.getByRole("tree")).toBeInTheDocument();
  });

  it("renders top-level nodes", () => {
    render(<TreeView data={data} />);
    expect(screen.getByText("Root Node")).toBeInTheDocument();
    expect(screen.getByText("Leaf Node")).toBeInTheDocument();
  });

  it("does not show children by default (collapsed)", () => {
    render(<TreeView data={data} />);
    expect(screen.queryByText("Child One")).not.toBeInTheDocument();
  });

  it("expands children when parent is clicked", async () => {
    const user = userEvent.setup();
    render(<TreeView data={data} />);

    await user.click(screen.getByText("Root Node"));
    expect(screen.getByText("Child One")).toBeInTheDocument();
    expect(screen.getByText("Child Two")).toBeInTheDocument();
  });

  it("collapses children when expanded parent is clicked again", async () => {
    const user = userEvent.setup();
    render(<TreeView data={data} />);

    await user.click(screen.getByText("Root Node"));
    expect(screen.getByText("Child One")).toBeInTheDocument();

    await user.click(screen.getByText("Root Node"));
    expect(screen.queryByText("Child One")).not.toBeInTheDocument();
  });

  it("calls onSelect when a node is clicked", async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();
    render(<TreeView data={data} onSelect={handleSelect} />);

    await user.click(screen.getByText("Leaf Node"));
    expect(handleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "2", label: "Leaf Node" })
    );
  });

  it("does not call onSelect for disabled nodes", async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();
    const disabledData: TreeNode[] = [
      { id: "1", label: "Disabled Node", disabled: true },
    ];
    render(<TreeView data={disabledData} onSelect={handleSelect} />);

    await user.click(screen.getByText("Disabled Node"));
    expect(handleSelect).not.toHaveBeenCalled();
  });

  it("supports controlled expandedIds", () => {
    render(<TreeView data={data} expandedIds={["1"]} />);
    expect(screen.getByText("Child One")).toBeInTheDocument();
    expect(screen.getByText("Child Two")).toBeInTheDocument();
  });

  it("highlights selected node", () => {
    render(<TreeView data={data} selectedId="2" />);
    expect(screen.getByText("Leaf Node")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<TreeView data={data} className="custom-tree" />);
    const tree = container.querySelector(".custom-tree");
    expect(tree).toBeInTheDocument();
  });

  it("has tree role on the container", () => {
    render(<TreeView data={data} />);
    expect(screen.getByRole("tree")).toBeInTheDocument();
  });

  it("has treeitem roles on nodes", () => {
    render(<TreeView data={data} />);
    const treeitems = screen.getAllByRole("treeitem");
    expect(treeitems.length).toBeGreaterThanOrEqual(2);
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<TreeView data={data} expandedIds={["1"]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
