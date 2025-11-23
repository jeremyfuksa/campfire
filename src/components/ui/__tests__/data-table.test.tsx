import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { DataTable, Column } from '../data-table';

expect.extend(toHaveNoViolations);

interface TestData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const testData: TestData[] = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Moderator', status: 'Active' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'User', status: 'Active' },
];

const columns: Column<TestData>[] = [
  {
    id: 'name',
    header: 'Name',
    accessor: (row) => row.name,
    sortable: true,
    filterable: true,
  },
  {
    id: 'email',
    header: 'Email',
    accessor: (row) => row.email,
    sortable: true,
    filterable: true,
  },
  {
    id: 'role',
    header: 'Role',
    accessor: (row) => row.role,
    sortable: true,
  },
  {
    id: 'status',
    header: 'Status',
    accessor: (row) => row.status,
  },
];

describe('DataTable', () => {
  it('renders data correctly', () => {
    render(<DataTable data={testData} columns={columns} />);

    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();
    expect(screen.getByText('Moderator')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<DataTable data={testData} columns={columns} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('supports sorting ascending', () => {
    render(<DataTable data={testData} columns={columns} />);

    const nameHeader = screen.getByText('Name').closest('th');
    fireEvent.click(nameHeader!);

    const rows = screen.getAllByRole('row').slice(1); // Skip header
    const firstRowName = within(rows[0]).getByText(/Alice Smith/);
    expect(firstRowName).toBeInTheDocument();
  });

  it('supports sorting descending', () => {
    render(<DataTable data={testData} columns={columns} />);

    const nameHeader = screen.getByText('Name').closest('th');
    fireEvent.click(nameHeader!); // Sort asc
    fireEvent.click(nameHeader!); // Sort desc

    const rows = screen.getAllByRole('row').slice(1); // Skip header
    const firstRowName = within(rows[0]).getByText(/Eve Davis/);
    expect(firstRowName).toBeInTheDocument();
  });

  it('clears sorting on third click', () => {
    render(<DataTable data={testData} columns={columns} />);

    const nameHeader = screen.getByText('Name').closest('th');
    fireEvent.click(nameHeader!); // Sort asc
    fireEvent.click(nameHeader!); // Sort desc
    fireEvent.click(nameHeader!); // Clear sort

    const rows = screen.getAllByRole('row').slice(1);
    const firstRowName = within(rows[0]).getByText(/Alice Smith/);
    expect(firstRowName).toBeInTheDocument();
  });

  it('supports global filtering', () => {
    render(<DataTable data={testData} columns={columns} />);

    const searchInput = screen.getByPlaceholderText('Search all columns...');
    fireEvent.change(searchInput, { target: { value: 'alice' } });

    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
  });

  it('supports column filtering', () => {
    render(<DataTable data={testData} columns={columns} />);

    const nameFilterInput = screen.getByPlaceholderText('Filter name...');
    fireEvent.change(nameFilterInput, { target: { value: 'diana' } });

    expect(screen.getByText('Diana Prince')).toBeInTheDocument();
    expect(screen.queryByText('Alice Smith')).not.toBeInTheDocument();
  });

  it('shows "No results found" when filtered data is empty', () => {
    render(<DataTable data={testData} columns={columns} />);

    const searchInput = screen.getByPlaceholderText('Search all columns...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('supports row selection', () => {
    const onSelectionChange = vi.fn();
    render(
      <DataTable
        data={testData}
        columns={columns}
        selectable
        onSelectionChange={onSelectionChange}
      />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    const firstRowCheckbox = checkboxes[1]; // Skip "select all" checkbox

    fireEvent.click(firstRowCheckbox);

    expect(onSelectionChange).toHaveBeenCalledWith([testData[0]]);
  });

  it('supports select all functionality', () => {
    const onSelectionChange = vi.fn();
    render(
      <DataTable
        data={testData}
        columns={columns}
        selectable
        pageSize={5}
        onSelectionChange={onSelectionChange}
      />
    );

    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAllCheckbox);

    expect(onSelectionChange).toHaveBeenCalled();
    const selectedRows = onSelectionChange.mock.calls[0][0];
    expect(selectedRows.length).toBe(5);
  });

  it('supports pagination', () => {
    render(<DataTable data={testData} columns={columns} pageSize={2} />);

    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.queryByText('Charlie Brown')).not.toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: 'Go to next page' });
    fireEvent.click(nextButton);

    expect(screen.getByText('Page 2 of 3')).toBeInTheDocument();
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
  });

  it('supports changing page size', () => {
    render(<DataTable data={testData} columns={columns} pageSize={2} />);

    const pageSizeSelect = screen.getByRole('combobox', { name: 'Rows per page' });
    fireEvent.change(pageSizeSelect, { target: { value: '5' } });

    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.getByText('Eve Davis')).toBeInTheDocument();
  });

  it('disables first/previous buttons on first page', () => {
    render(<DataTable data={testData} columns={columns} pageSize={2} />);

    const firstPageButton = screen.getByRole('button', { name: 'Go to first page' });
    const prevPageButton = screen.getByRole('button', { name: 'Go to previous page' });

    expect(firstPageButton).toBeDisabled();
    expect(prevPageButton).toBeDisabled();
  });

  it('disables next/last buttons on last page', () => {
    render(<DataTable data={testData} columns={columns} pageSize={10} />);

    const nextPageButton = screen.getByRole('button', { name: 'Go to next page' });
    const lastPageButton = screen.getByRole('button', { name: 'Go to last page' });

    expect(nextPageButton).toBeDisabled();
    expect(lastPageButton).toBeDisabled();
  });

  it('handles empty data', () => {
    render(<DataTable data={[]} columns={columns} />);

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('shows selected row count', () => {
    render(<DataTable data={testData} columns={columns} selectable />);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);
    fireEvent.click(checkboxes[2]);

    expect(screen.getByText('2 row(s) selected')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DataTable data={testData} columns={columns} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<DataTable data={testData} columns={columns} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
