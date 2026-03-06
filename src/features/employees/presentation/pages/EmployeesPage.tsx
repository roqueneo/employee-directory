import { Link, useNavigate } from "react-router-dom";
import { useGetEmployeesQuery } from "../../data/employeesApi";
import { EmployeesTable } from "../components/EmployeesTable";

export function EmployeesPage() {
  const { data: employees, isLoading, error } = useGetEmployeesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <p className="py-10 text-center text-gray-500">Loading employees…</p>;
  }

  if (error) {
    return (
      <p className="py-10 text-center text-red-600">
        Failed to load employees. Make sure the mock API is running.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
        <Link
          to="/employees/new"
          className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Add Employee
        </Link>
      </div>
      <EmployeesTable
        data={employees ?? []}
        onRowClick={(employee) => navigate(`/employees/${employee.id}`)}
      />
    </div>
  );
}
