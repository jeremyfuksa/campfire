import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { cn } from './utils';
import { Button } from './button';
import { Input } from './input';
import { Checkbox } from './checkbox';
export function DataTable({ data, columns, pageSize: initialPageSize = 10, selectable = false, onSelectionChange, className, }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const [filters, setFilters] = useState({});
    const [globalFilter, setGlobalFilter] = useState('');
    const [selectedRows, setSelectedRows] = useState(new Set());
    // Filter data
    const filteredData = useMemo(() => {
        let result = [...data];
        // Apply column filters
        Object.entries(filters).forEach(([columnId, filterValue]) => {
            if (filterValue) {
                result = result.filter((row) => {
                    const column = columns.find((col) => col.id === columnId);
                    if (!column)
                        return true;
                    const value = column.accessor(row);
                    return String(value).toLowerCase().includes(filterValue.toLowerCase());
                });
            }
        });
        // Apply global filter
        if (globalFilter) {
            result = result.filter((row) => columns.some((column) => {
                const value = column.accessor(row);
                return String(value).toLowerCase().includes(globalFilter.toLowerCase());
            }));
        }
        return result;
    }, [data, filters, globalFilter, columns]);
    // Sort data
    const sortedData = useMemo(() => {
        if (!sortColumn || !sortDirection)
            return filteredData;
        const column = columns.find((col) => col.id === sortColumn);
        if (!column)
            return filteredData;
        return [...filteredData].sort((a, b) => {
            const aValue = column.accessor(a);
            const bValue = column.accessor(b);
            if (aValue === bValue)
                return 0;
            if (aValue == null)
                return 1;
            if (bValue == null)
                return -1;
            const comparison = aValue < bValue ? -1 : 1;
            return sortDirection === 'asc' ? comparison : -comparison;
        });
    }, [filteredData, sortColumn, sortDirection, columns]);
    // Paginate data
    const paginatedData = useMemo(() => {
        const start = currentPage * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, currentPage, pageSize]);
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const handleSort = (columnId) => {
        const column = columns.find((col) => col.id === columnId);
        if (!column?.sortable)
            return;
        if (sortColumn === columnId) {
            if (sortDirection === 'asc') {
                setSortDirection('desc');
            }
            else if (sortDirection === 'desc') {
                setSortDirection(null);
                setSortColumn(null);
            }
        }
        else {
            setSortColumn(columnId);
            setSortDirection('asc');
        }
    };
    const handleSelectAll = () => {
        if (selectedRows.size === paginatedData.length) {
            setSelectedRows(new Set());
            onSelectionChange?.([]);
        }
        else {
            const newSelection = new Set(paginatedData.map((_, index) => currentPage * pageSize + index));
            setSelectedRows(newSelection);
            onSelectionChange?.(Array.from(newSelection).map((index) => sortedData[index]));
        }
    };
    const handleSelectRow = (index) => {
        const globalIndex = currentPage * pageSize + index;
        const newSelection = new Set(selectedRows);
        if (newSelection.has(globalIndex)) {
            newSelection.delete(globalIndex);
        }
        else {
            newSelection.add(globalIndex);
        }
        setSelectedRows(newSelection);
        onSelectionChange?.(Array.from(newSelection).map((idx) => sortedData[idx]));
    };
    const handlePageSizeChange = (value) => {
        setPageSize(Number(value));
        setCurrentPage(0);
    };
    return (_jsxs("div", { className: cn('space-y-4', className), children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Input, { placeholder: "Search all columns...", value: globalFilter, onChange: (e) => {
                            setGlobalFilter(e.target.value);
                            setCurrentPage(0);
                        }, className: "max-w-sm" }), selectedRows.size > 0 && (_jsxs("span", { className: "text-sm", style: { color: 'var(--neutral-600)' }, children: [selectedRows.size, " row(s) selected"] }))] }), _jsx("div", { className: "rounded-lg border overflow-hidden", style: { borderColor: 'var(--neutral-800)' }, children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { style: { backgroundColor: 'var(--neutral-900)' }, children: _jsxs("tr", { children: [selectable && (_jsx("th", { className: "p-4 text-left", style: { width: '48px' }, children: _jsx(Checkbox, { checked: paginatedData.length > 0 &&
                                                    selectedRows.size === paginatedData.length, onCheckedChange: handleSelectAll }) })), columns.map((column) => (_jsxs("th", { className: cn('p-4 text-left text-sm font-semibold', column.sortable && 'cursor-pointer select-none hover:bg-neutral-800'), style: {
                                                width: column.width,
                                                color: 'var(--neutral-100)',
                                            }, onClick: () => column.sortable && handleSort(column.id), children: [_jsxs("div", { className: "flex items-center gap-2", children: [column.header, column.sortable && (_jsx("span", { style: { color: 'var(--neutral-500)' }, children: sortColumn === column.id ? (sortDirection === 'asc' ? (_jsx("i", { className: "fa-solid fa-arrow-up text-xs" })) : (_jsx("i", { className: "fa-solid fa-arrow-down text-xs" }))) : (_jsx("i", { className: "fa-solid fa-sort text-xs" })) }))] }), column.filterable && (_jsx(Input, { placeholder: `Filter ${column.header.toLowerCase()}...`, value: filters[column.id] || '', onChange: (e) => {
                                                        setFilters({
                                                            ...filters,
                                                            [column.id]: e.target.value,
                                                        });
                                                        setCurrentPage(0);
                                                    }, onClick: (e) => e.stopPropagation(), className: "mt-2" }))] }, column.id)))] }) }), _jsx("tbody", { children: paginatedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "p-8 text-center", style: { color: 'var(--neutral-500)' }, children: "No results found" }) })) : (paginatedData.map((row, rowIndex) => {
                                    const globalIndex = currentPage * pageSize + rowIndex;
                                    const isSelected = selectedRows.has(globalIndex);
                                    return (_jsxs("tr", { className: cn('border-t transition-colors', isSelected && 'bg-primary-900/20'), style: {
                                            borderColor: 'var(--neutral-800)',
                                            backgroundColor: isSelected ? undefined : 'var(--neutral-950)',
                                        }, children: [selectable && (_jsx("td", { className: "p-4", children: _jsx(Checkbox, { checked: isSelected, onCheckedChange: () => handleSelectRow(rowIndex) }) })), columns.map((column) => (_jsx("td", { className: "p-4 text-sm", style: { color: 'var(--neutral-300)' }, children: column.accessor(row) }, column.id)))] }, rowIndex));
                                })) })] }) }) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm", style: { color: 'var(--neutral-600)' }, children: "Rows per page:" }), _jsxs("select", { value: String(pageSize), onChange: (e) => handlePageSizeChange(e.target.value), className: cn('border-input focus-visible:border-ring focus-visible:ring-ring/50', 'h-8 rounded-md border bg-input-background px-2 text-sm', 'outline-none focus-visible:ring-[3px] transition-all'), style: { color: 'var(--neutral-300)' }, "aria-label": "Rows per page", children: [_jsx("option", { value: "5", children: "5" }), _jsx("option", { value: "10", children: "10" }), _jsx("option", { value: "20", children: "20" }), _jsx("option", { value: "50", children: "50" }), _jsx("option", { value: "100", children: "100" })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-sm", style: { color: 'var(--neutral-600)' }, children: ["Page ", currentPage + 1, " of ", totalPages || 1] }), _jsxs("div", { className: "flex gap-1", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => setCurrentPage(0), disabled: currentPage === 0, "aria-label": "Go to first page", children: _jsx("i", { className: "fa-solid fa-angles-left" }) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => setCurrentPage(currentPage - 1), disabled: currentPage === 0, "aria-label": "Go to previous page", children: _jsx("i", { className: "fa-solid fa-angle-left" }) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => setCurrentPage(currentPage + 1), disabled: currentPage >= totalPages - 1, "aria-label": "Go to next page", children: _jsx("i", { className: "fa-solid fa-angle-right" }) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => setCurrentPage(totalPages - 1), disabled: currentPage >= totalPages - 1, "aria-label": "Go to last page", children: _jsx("i", { className: "fa-solid fa-angles-right" }) })] })] })] })] }));
}
