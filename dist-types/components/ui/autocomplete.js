"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Command, CommandList, CommandEmpty, CommandItem } from "./command";
import { Popover, PopoverContent } from "./popover";
import { Badge } from "./badge";
import { cn } from "./utils";
export function Autocomplete({ options, value, onValueChange, placeholder = "Select...", emptyText = "No results found", searchPlaceholder = "Search...", multiple = false, disabled = false, className, async = false, onSearch, loading = false, maxSelected, onCreate, creatable = false, }) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const inputRef = React.useRef(null);
    // Handle value as array for multiple selection
    const selectedValues = React.useMemo(() => {
        if (multiple) {
            return Array.isArray(value) ? value : value ? [value] : [];
        }
        return value ? [value] : [];
    }, [value, multiple]);
    const selectedOptions = React.useMemo(() => {
        return options.filter((opt) => selectedValues.includes(opt.value));
    }, [options, selectedValues]);
    // Filter options based on search (fuzzy search)
    const filteredOptions = React.useMemo(() => {
        if (async)
            return options; // Server handles filtering
        if (!search)
            return options;
        const searchLower = search.toLowerCase();
        return options.filter((option) => {
            const labelLower = option.label.toLowerCase();
            const valueLower = option.value.toLowerCase();
            // Simple fuzzy matching: check if all characters appear in order
            let searchIndex = 0;
            for (let i = 0; i < labelLower.length && searchIndex < searchLower.length; i++) {
                if (labelLower[i] === searchLower[searchIndex]) {
                    searchIndex++;
                }
            }
            return (searchIndex === searchLower.length ||
                labelLower.includes(searchLower) ||
                valueLower.includes(searchLower));
        });
    }, [options, search, async]);
    // Debounced search for async
    React.useEffect(() => {
        if (!async || !onSearch)
            return;
        const timer = setTimeout(() => {
            onSearch(search);
        }, 300);
        return () => clearTimeout(timer);
    }, [search, async, onSearch]);
    const handleSelect = (optionValue) => {
        if (multiple) {
            const newValues = selectedValues.includes(optionValue)
                ? selectedValues.filter((v) => v !== optionValue)
                : [...selectedValues, optionValue];
            // Check max selected limit
            if (maxSelected && newValues.length > maxSelected && !selectedValues.includes(optionValue)) {
                return;
            }
            onValueChange?.(newValues);
        }
        else {
            onValueChange?.(optionValue);
            setOpen(false);
            setSearch("");
        }
    };
    const handleRemove = (optionValue, e) => {
        e.stopPropagation();
        if (multiple) {
            const newValues = selectedValues.filter((v) => v !== optionValue);
            onValueChange?.(newValues);
        }
    };
    const handleCreate = () => {
        if (creatable && onCreate && search && !filteredOptions.some((opt) => opt.label.toLowerCase() === search.toLowerCase())) {
            onCreate(search);
            setSearch("");
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    };
    const displayText = React.useMemo(() => {
        if (selectedOptions.length === 0)
            return placeholder;
        if (multiple) {
            return `${selectedOptions.length} selected`;
        }
        return selectedOptions[0]?.label || placeholder;
    }, [selectedOptions, placeholder, multiple]);
    const showCreateOption = creatable && search && !filteredOptions.some((opt) => opt.label.toLowerCase() === search.toLowerCase());
    return (_jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsxs("div", { className: cn("border-input focus-within:border-ring focus-within:ring-ring/50", "flex min-h-9 w-full items-center gap-2 rounded-md border bg-input-background px-3 py-2", "cursor-pointer transition-all", "focus-within:ring-[3px]", disabled && "cursor-not-allowed opacity-50", className), onClick: () => !disabled && setOpen(true), children: [_jsxs("div", { className: "flex flex-1 flex-wrap gap-1", children: [multiple && selectedOptions.length > 0 ? (selectedOptions.map((option) => (_jsxs(Badge, { variant: "secondary", className: "gap-1", children: [option.label, _jsx("button", { onClick: (e) => handleRemove(option.value, e), className: "hover:bg-muted rounded-sm", disabled: disabled, "aria-label": `Remove ${option.label}`, children: _jsx("i", { className: "fa-solid fa-xmark text-xs" }) })] }, option.value)))) : null, !multiple && selectedOptions.length > 0 ? (_jsx("span", { className: "text-sm", children: displayText })) : selectedOptions.length === 0 ? (_jsx("span", { className: "text-muted-foreground text-sm", children: placeholder })) : null] }), _jsx("i", { className: cn("fa-solid fa-chevron-down text-muted-foreground text-xs transition-transform", open && "rotate-180") })] }), _jsx(PopoverContent, { className: "w-[--radix-popover-trigger-width] p-0", align: "start", onKeyDown: handleKeyDown, children: _jsxs(Command, { children: [_jsxs("div", { className: "flex items-center border-b px-3", children: [_jsx("i", { className: "fa-solid fa-search text-muted-foreground mr-2 text-sm" }), _jsx("input", { ref: inputRef, value: search, onChange: (e) => setSearch(e.target.value), placeholder: searchPlaceholder, className: "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50", disabled: disabled })] }), _jsx(CommandList, { children: loading ? (_jsxs("div", { className: "py-6 text-center text-sm", children: [_jsx("i", { className: "fa-solid fa-spinner fa-spin mr-2" }), "Loading..."] })) : filteredOptions.length === 0 && !showCreateOption ? (_jsx(CommandEmpty, { children: emptyText })) : (_jsxs(_Fragment, { children: [filteredOptions.map((option) => {
                                        const isSelected = selectedValues.includes(option.value);
                                        return (_jsxs(CommandItem, { value: option.value, onSelect: () => !option.disabled && handleSelect(option.value), disabled: option.disabled, children: [multiple && (_jsx("div", { className: cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border", isSelected
                                                        ? "bg-primary text-primary-foreground border-primary"
                                                        : "border-neutral-300"), children: isSelected && _jsx("i", { className: "fa-solid fa-check text-xs" }) })), _jsx("span", { className: "flex-1", children: option.label }), !multiple && isSelected && (_jsx("i", { className: "fa-solid fa-check text-primary ml-2 text-sm" }))] }, option.value));
                                    }), showCreateOption && (_jsxs(CommandItem, { value: search, onSelect: handleCreate, className: "text-primary", children: [_jsx("i", { className: "fa-solid fa-plus mr-2 text-xs" }), "Create \"", search, "\""] }))] })) })] }) })] }));
}
