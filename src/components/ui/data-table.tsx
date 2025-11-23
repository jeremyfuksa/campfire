import React, { useState, useMemo } from 'react';
import { cn } from './utils';
import { Button } from './button';
import { Input } from './input';
import { Checkbox } from './checkbox';

export interface Column<T> {
  id: string;
  header: string;
  accessor: (row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  selectable?: boolean;
  onSelectionChange?: (selectedRows: T[]) => void;
  className?: string;
}

type SortDirection = 'asc' | 'desc' | null;

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSize: initialPageSize = 10,
  selectable = false,
  onSelectionChange,
  className,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // Filter data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply column filters
    Object.entries(filters).forEach(([columnId, filterValue]) => {
      if (filterValue) {
        result = result.filter((row) => {
          const column = columns.find((col) => col.id === columnId);
          if (!column) return true;
          const value = column.accessor(row);
          return String(value).toLowerCase().includes(filterValue.toLowerCase());
        });
      }
    });

    // Apply global filter
    if (globalFilter) {
      result = result.filter((row) =>
        columns.some((column) => {
          const value = column.accessor(row);
          return String(value).toLowerCase().includes(globalFilter.toLowerCase());
        })
      );
    }

    return result;
  }, [data, filters, globalFilter, columns]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData;

    const column = columns.find((col) => col.id === sortColumn);
    if (!column) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = column.accessor(a);
      const bValue = column.accessor(b);

      if (aValue === bValue) return 0;

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

  const handleSort = (columnId: string) => {
    const column = columns.find((col) => col.id === columnId);
    if (!column?.sortable) return;

    if (sortColumn === columnId) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      }
    } else {
      setSortColumn(columnId);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    } else {
      const newSelection = new Set(
        paginatedData.map((_, index) => currentPage * pageSize + index)
      );
      setSelectedRows(newSelection);
      onSelectionChange?.(
        Array.from(newSelection).map((index) => sortedData[index])
      );
    }
  };

  const handleSelectRow = (index: number) => {
    const globalIndex = currentPage * pageSize + index;
    const newSelection = new Set(selectedRows);

    if (newSelection.has(globalIndex)) {
      newSelection.delete(globalIndex);
    } else {
      newSelection.add(globalIndex);
    }

    setSelectedRows(newSelection);
    onSelectionChange?.(
      Array.from(newSelection).map((idx) => sortedData[idx])
    );
  };

  const handlePageSizeChange = (value: string) => {
    setPageSize(Number(value));
    setCurrentPage(0);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Global filter */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search all columns..."
          value={globalFilter}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
            setCurrentPage(0);
          }}
          className="max-w-sm"
        />
        {selectedRows.size > 0 && (
          <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
            {selectedRows.size} row(s) selected
          </span>
        )}
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--neutral-800)' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: 'var(--neutral-900)' }}>
              <tr>
                {selectable && (
                  <th className="p-4 text-left" style={{ width: '48px' }}>
                    <Checkbox
                      checked={
                        paginatedData.length > 0 &&
                        selectedRows.size === paginatedData.length
                      }
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className={cn(
                      'p-4 text-left text-sm font-semibold',
                      column.sortable && 'cursor-pointer select-none hover:bg-neutral-800'
                    )}
                    style={{
                      width: column.width,
                      color: 'var(--neutral-100)',
                    }}
                    onClick={() => column.sortable && handleSort(column.id)}
                  >
                    <div className="flex items-center gap-2">
                      {column.header}
                      {column.sortable && (
                        <span style={{ color: 'var(--neutral-500)' }}>
                          {sortColumn === column.id ? (
                            sortDirection === 'asc' ? (
                              <i className="fa-solid fa-arrow-up text-xs"></i>
                            ) : (
                              <i className="fa-solid fa-arrow-down text-xs"></i>
                            )
                          ) : (
                            <i className="fa-solid fa-sort text-xs"></i>
                          )}
                        </span>
                      )}
                    </div>
                    {column.filterable && (
                      <Input
                        placeholder={`Filter ${column.header.toLowerCase()}...`}
                        value={filters[column.id] || ''}
                        onChange={(e) => {
                          setFilters({
                            ...filters,
                            [column.id]: e.target.value,
                          });
                          setCurrentPage(0);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-2"
                      />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="p-8 text-center"
                    style={{ color: 'var(--neutral-500)' }}
                  >
                    No results found
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, rowIndex) => {
                  const globalIndex = currentPage * pageSize + rowIndex;
                  const isSelected = selectedRows.has(globalIndex);

                  return (
                    <tr
                      key={rowIndex}
                      className={cn(
                        'border-t transition-colors',
                        isSelected && 'bg-primary-900/20'
                      )}
                      style={{
                        borderColor: 'var(--neutral-800)',
                        backgroundColor: isSelected ? undefined : 'var(--neutral-950)',
                      }}
                    >
                      {selectable && (
                        <td className="p-4">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => handleSelectRow(rowIndex)}
                          />
                        </td>
                      )}
                      {columns.map((column) => (
                        <td
                          key={column.id}
                          className="p-4 text-sm"
                          style={{ color: 'var(--neutral-300)' }}
                        >
                          {column.accessor(row)}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
            Rows per page:
          </span>
          <select
            value={String(pageSize)}
            onChange={(e) => handlePageSizeChange(e.target.value)}
            className={cn(
              'border-input focus-visible:border-ring focus-visible:ring-ring/50',
              'h-8 rounded-md border bg-input-background px-2 text-sm',
              'outline-none focus-visible:ring-[3px] transition-all'
            )}
            style={{ color: 'var(--neutral-300)' }}
            aria-label="Rows per page"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
            Page {currentPage + 1} of {totalPages || 1}
          </span>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
              aria-label="Go to first page"
            >
              <i className="fa-solid fa-angles-left"></i>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              aria-label="Go to previous page"
            >
              <i className="fa-solid fa-angle-left"></i>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              aria-label="Go to next page"
            >
              <i className="fa-solid fa-angle-right"></i>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(totalPages - 1)}
              disabled={currentPage >= totalPages - 1}
              aria-label="Go to last page"
            >
              <i className="fa-solid fa-angles-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
