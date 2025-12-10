"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils";
export function TreeView({ data, onSelect, selectedId, expandedIds: controlledExpandedIds, onExpand, className, }) {
    const [internalExpandedIds, setInternalExpandedIds] = React.useState([]);
    const expandedIds = controlledExpandedIds ?? internalExpandedIds;
    const toggleExpanded = (nodeId) => {
        const newExpandedIds = expandedIds.includes(nodeId)
            ? expandedIds.filter((id) => id !== nodeId)
            : [...expandedIds, nodeId];
        if (onExpand) {
            onExpand(newExpandedIds);
        }
        else {
            setInternalExpandedIds(newExpandedIds);
        }
    };
    const handleSelect = (node) => {
        if (node.disabled)
            return;
        onSelect?.(node);
    };
    return (_jsx("div", { className: cn("text-sm", className), role: "tree", children: data.map((node) => (_jsx(TreeNodeComponent, { node: node, level: 0, expandedIds: expandedIds, selectedId: selectedId, onToggleExpand: toggleExpanded, onSelect: handleSelect }, node.id))) }));
}
function TreeNodeComponent({ node, level, expandedIds, selectedId, onToggleExpand, onSelect, }) {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedIds.includes(node.id);
    const isSelected = selectedId === node.id;
    return (_jsxs("div", { role: "treeitem", "aria-expanded": hasChildren ? isExpanded : undefined, children: [_jsxs("div", { className: cn("flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer transition-colors", "hover:bg-accent hover:text-accent-foreground", isSelected && "bg-accent text-accent-foreground font-medium", node.disabled && "opacity-50 cursor-not-allowed"), style: { paddingLeft: `${level * 1.5 + 0.5}rem` }, onClick: () => {
                    if (hasChildren) {
                        onToggleExpand(node.id);
                    }
                    onSelect(node);
                }, children: [hasChildren && (_jsx("i", { className: cn("fa-solid fa-chevron-right text-xs transition-transform", isExpanded && "rotate-90") })), !hasChildren && _jsx("span", { className: "w-3" }), node.icon && _jsx("span", { className: "text-muted-foreground", children: node.icon }), _jsx("span", { className: "flex-1", children: node.label })] }), hasChildren && isExpanded && (_jsx("div", { role: "group", children: node.children.map((child) => (_jsx(TreeNodeComponent, { node: child, level: level + 1, expandedIds: expandedIds, selectedId: selectedId, onToggleExpand: onToggleExpand, onSelect: onSelect }, child.id))) }))] }));
}
