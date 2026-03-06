import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import type { Employee } from "../../domain/employee.types";

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    id: "name",
    header: "Name",
    cell: (info) => (
      <Link
        to={`/employees/${info.row.original.id}`}
        className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("position", {
    header: "Position",
  }),
  columnHelper.accessor("department", {
    header: "Department",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      const isActive = status === "active";
      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isActive
              ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
              : "bg-red-50 text-red-800 ring-1 ring-red-600/20"
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              isActive ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
  }),
];

interface EmployeesTableProps {
  data: Employee[];
  onRowClick?: (employee: Employee) => void;
}

export function EmployeesTable({ data, onRowClick }: EmployeesTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative overflow-x-auto rounded-lg border border-gray-200 after:pointer-events-none after:absolute after:top-0 after:right-0 after:h-full after:w-8 after:bg-gradient-to-l after:from-white/80 after:to-transparent sm:after:hidden">
      <table className="min-w-full divide-y divide-gray-200" aria-label="Employees">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-600 uppercase"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`transition-colors duration-150 hover:bg-blue-50 ${onRowClick ? "cursor-pointer" : ""}`}
              onClick={() => onRowClick?.(row.original)}
              onKeyDown={(e) => {
                if (onRowClick && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onRowClick(row.original);
                }
              }}
              {...(onRowClick ? { tabIndex: 0, role: "button" } : {})}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
