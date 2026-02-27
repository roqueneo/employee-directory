import { useParams, Link } from "react-router-dom";
import {
  useGetEmployeeDetailByIdQuery,
  useUpdateEmployeeDetailMutation,
} from "../../data/employee-detailApi";
import { useGetDepartmentsQuery } from "../../../employees/data/employeesApi";
import { EmployeeDetailForm } from "../components/EmployeeDetailForm";

export function EmployeeDetailDetailPage() {
  const { id } = useParams<{ id: string }>();
  const employeeId = Number(id);

  const {
    data: employee,
    isLoading,
    error,
  } = useGetEmployeeDetailByIdQuery(employeeId, {
    skip: isNaN(employeeId),
  });
  const { data: departments } = useGetDepartmentsQuery();
  const [updateEmployee, { isLoading: isUpdating }] =
    useUpdateEmployeeDetailMutation();

  if (isNaN(employeeId)) {
    return (
      <p className="py-10 text-center text-red-600">Invalid employee ID.</p>
    );
  }

  if (isLoading) {
    return (
      <p className="py-10 text-center text-gray-500">
        Loading employee details...
      </p>
    );
  }

  if (error || !employee) {
    return (
      <p className="py-10 text-center text-red-600">
        Failed to load employee details. Make sure the mock API is running.
      </p>
    );
  }

  const departmentNames = departments?.map((d) => d.name) ?? [];

  const handleSubmit = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    department: string;
    startDate: string;
    status: "active" | "inactive";
  }) => {
    await updateEmployee({ id: employeeId, data });
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <Link
        to="/"
        className="mb-4 inline-block text-sm text-blue-600 hover:text-blue-800"
      >
        &larr; Back to employees
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        {employee.firstName} {employee.lastName}
      </h1>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <EmployeeDetailForm
          defaultValues={employee}
          departments={departmentNames}
          onSubmit={handleSubmit}
          isSubmitting={isUpdating}
        />
      </div>
    </div>
  );
}
