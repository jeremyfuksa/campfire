import type { Meta } from "@storybook/react";
import { DataTable, Column } from "./data-table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const users: User[] = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Active" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Moderator", status: "Active" },
  { id: 5, name: "Eve Davis", email: "eve@example.com", role: "User", status: "Active" },
  { id: 6, name: "Frank Miller", email: "frank@example.com", role: "Admin", status: "Active" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", role: "User", status: "Inactive" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com", role: "User", status: "Active" },
  { id: 9, name: "Iris Taylor", email: "iris@example.com", role: "Moderator", status: "Active" },
  { id: 10, name: "Jack Anderson", email: "jack@example.com", role: "User", status: "Active" },
];

const columns: Column<User>[] = [
  {
    id: "name",
    header: "Name",
    accessor: (row) => row.name,
    sortable: true,
    filterable: true,
  },
  {
    id: "email",
    header: "Email",
    accessor: (row) => row.email,
    sortable: true,
    filterable: true,
  },
  {
    id: "role",
    header: "Role",
    accessor: (row) => row.role,
    sortable: true,
  },
  {
    id: "status",
    header: "Status",
    accessor: (row) => (
      <span
        className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
        style={{
          backgroundColor: row.status === "Active" ? "var(--success-900)" : "var(--neutral-800)",
          color: row.status === "Active" ? "var(--success-300)" : "var(--neutral-400)",
        }}
      >
        {row.status}
      </span>
    ),
  },
];

const meta = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

export default meta;

export const Default = {
  args: {
    data: users,
    columns,
    pageSize: 5,
  },
};

export const WithSelection = {
  args: {
    data: users,
    columns,
    selectable: true,
    pageSize: 5,
    onSelectionChange: (rows: User[]) => console.log("Selected:", rows),
  },
};

export const LargePageSize = {
  args: {
    data: users,
    columns,
    pageSize: 10,
  },
};

export const EmptyState = {
  args: {
    data: [],
    columns,
  },
};
