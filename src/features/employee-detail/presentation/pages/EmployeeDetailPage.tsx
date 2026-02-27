import { useGetEmployeeDetailsQuery } from "../../data/employee-detailApi";
import { EmployeeDetailTable } from "../components/EmployeeDetailTable";

export function EmployeeDetailPage() {
  const { data: employees, isLoading, error } = useGetEmployeeDetailsQuery();

  if (isLoading) {
    return (
      <p className="py-10 text-center text-gray-500">Loading employees...</p>
    );
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
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Employee Details
      </h1>
      <EmployeeDetailTable data={employees ?? []} />
    </div>
  );
}
