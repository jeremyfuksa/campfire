"use client";

import * as React from "react";
import { Command, CommandList, CommandEmpty, CommandItem } from "./command";
import { Popover, PopoverContent } from "./popover";
import { Badge } from "./badge";
import { cn } from "./utils";

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  placeholder?: string;
  emptyText?: string;
  searchPlaceholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  async?: boolean;
  onSearch?: (query: string) => void;
  loading?: boolean;
  maxSelected?: number;
  onCreate?: (value: string) => void;
  creatable?: boolean;
}

export function Autocomplete({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  emptyText = "No results found",
  searchPlaceholder = "Search...",
  multiple = false,
  disabled = false,
  className,
  async = false,
  onSearch,
  loading = false,
  maxSelected,
  onCreate,
  creatable = false,
}: AutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Handle value as array for multiple selection
  const selectedValues = React.useMemo(() => {
    if (multiple) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }
    return value ? [value as string] : [];
  }, [value, multiple]);

  const selectedOptions = React.useMemo(() => {
    return options.filter((opt) => selectedValues.includes(opt.value));
  }, [options, selectedValues]);

  // Filter options based on search (fuzzy search)
  const filteredOptions = React.useMemo(() => {
    if (async) return options; // Server handles filtering

    if (!search) return options;

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

      return (
        searchIndex === searchLower.length ||
        labelLower.includes(searchLower) ||
        valueLower.includes(searchLower)
      );
    });
  }, [options, search, async]);

  // Debounced search for async
  React.useEffect(() => {
    if (!async || !onSearch) return;

    const timer = setTimeout(() => {
      onSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, async, onSearch]);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];

      // Check max selected limit
      if (maxSelected && newValues.length > maxSelected && !selectedValues.includes(optionValue)) {
        return;
      }

      onValueChange?.(newValues);
    } else {
      onValueChange?.(optionValue);
      setOpen(false);
      setSearch("");
    }
  };

  const handleRemove = (optionValue: string, e: React.MouseEvent) => {
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const displayText = React.useMemo(() => {
    if (selectedOptions.length === 0) return placeholder;
    if (multiple) {
      return `${selectedOptions.length} selected`;
    }
    return selectedOptions[0]?.label || placeholder;
  }, [selectedOptions, placeholder, multiple]);

  const showCreateOption = creatable && search && !filteredOptions.some(
    (opt) => opt.label.toLowerCase() === search.toLowerCase()
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "border-input focus-within:border-ring focus-within:ring-ring/50",
          "flex min-h-9 w-full items-center gap-2 rounded-md border bg-input-background px-3 py-2",
          "cursor-pointer transition-all",
          "focus-within:ring-[3px]",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        onClick={() => !disabled && setOpen(true)}
      >
        <div className="flex flex-1 flex-wrap gap-1">
          {multiple && selectedOptions.length > 0 ? (
            selectedOptions.map((option) => (
              <Badge
                key={option.value}
                variant="secondary"
                className="gap-1"
              >
                {option.label}
                <button
                  onClick={(e) => handleRemove(option.value, e)}
                  className="hover:bg-muted rounded-sm"
                  disabled={disabled}
                  aria-label={`Remove ${option.label}`}
                >
                  <i className="fa-solid fa-xmark text-xs"></i>
                </button>
              </Badge>
            ))
          ) : null}
          {!multiple && selectedOptions.length > 0 ? (
            <span className="text-sm">{displayText}</span>
          ) : selectedOptions.length === 0 ? (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          ) : null}
        </div>
        <i className={cn(
          "fa-solid fa-chevron-down text-muted-foreground text-xs transition-transform",
          open && "rotate-180"
        )}></i>
      </div>

      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="start"
        onKeyDown={handleKeyDown}
      >
        <Command>
          <div className="flex items-center border-b px-3">
            <i className="fa-solid fa-search text-muted-foreground mr-2 text-sm"></i>
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
              disabled={disabled}
            />
          </div>
          <CommandList>
            {loading ? (
              <div className="py-6 text-center text-sm">
                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                Loading...
              </div>
            ) : filteredOptions.length === 0 && !showCreateOption ? (
              <CommandEmpty>{emptyText}</CommandEmpty>
            ) : (
              <>
                {filteredOptions.map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => !option.disabled && handleSelect(option.value)}
                      disabled={option.disabled}
                    >
                      {multiple && (
                        <div className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-neutral-300"
                        )}>
                          {isSelected && <i className="fa-solid fa-check text-xs"></i>}
                        </div>
                      )}
                      <span className="flex-1">{option.label}</span>
                      {!multiple && isSelected && (
                        <i className="fa-solid fa-check text-primary ml-2 text-sm"></i>
                      )}
                    </CommandItem>
                  );
                })}
                {showCreateOption && (
                  <CommandItem
                    value={search}
                    onSelect={handleCreate}
                    className="text-primary"
                  >
                    <i className="fa-solid fa-plus mr-2 text-xs"></i>
                    Create "{search}"
                  </CommandItem>
                )}
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
