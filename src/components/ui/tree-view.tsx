"use client";

import * as React from "react";
import { cn } from "./utils";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TreeViewProps {
  data: TreeNode[];
  onSelect?: (node: TreeNode) => void;
  selectedId?: string;
  expandedIds?: string[];
  onExpand?: (ids: string[]) => void;
  className?: string;
}

export function TreeView({
  data,
  onSelect,
  selectedId,
  expandedIds: controlledExpandedIds,
  onExpand,
  className,
}: TreeViewProps) {
  const [internalExpandedIds, setInternalExpandedIds] = React.useState<string[]>([]);

  const expandedIds = controlledExpandedIds ?? internalExpandedIds;

  const toggleExpanded = (nodeId: string) => {
    const newExpandedIds = expandedIds.includes(nodeId)
      ? expandedIds.filter((id) => id !== nodeId)
      : [...expandedIds, nodeId];

    if (onExpand) {
      onExpand(newExpandedIds);
    } else {
      setInternalExpandedIds(newExpandedIds);
    }
  };

  const handleSelect = (node: TreeNode) => {
    if (node.disabled) return;
    onSelect?.(node);
  };

  return (
    <div className={cn("text-sm", className)} role="tree">
      {data.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          level={0}
          expandedIds={expandedIds}
          selectedId={selectedId}
          onToggleExpand={toggleExpanded}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

interface TreeNodeComponentProps {
  node: TreeNode;
  level: number;
  expandedIds: string[];
  selectedId?: string;
  onToggleExpand: (nodeId: string) => void;
  onSelect: (node: TreeNode) => void;
}

function TreeNodeComponent({
  node,
  level,
  expandedIds,
  selectedId,
  onToggleExpand,
  onSelect,
}: TreeNodeComponentProps) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedIds.includes(node.id);
  const isSelected = selectedId === node.id;

  return (
    <div role="treeitem" aria-expanded={hasChildren ? isExpanded : undefined}>
      <div
        className={cn(
          "flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          isSelected && "bg-accent text-accent-foreground font-medium",
          node.disabled && "opacity-50 cursor-not-allowed"
        )}
        style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
        onClick={() => {
          if (hasChildren) {
            onToggleExpand(node.id);
          }
          onSelect(node);
        }}
      >
        {hasChildren && (
          <i
            className={cn(
              "fa-solid fa-chevron-right text-xs transition-transform",
              isExpanded && "rotate-90"
            )}
          />
        )}
        {!hasChildren && <span className="w-3" />}
        {node.icon && <span className="text-muted-foreground">{node.icon}</span>}
        <span className="flex-1">{node.label}</span>
      </div>

      {hasChildren && isExpanded && (
        <div role="group">
          {node.children!.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
              expandedIds={expandedIds}
              selectedId={selectedId}
              onToggleExpand={onToggleExpand}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
