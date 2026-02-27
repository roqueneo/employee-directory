import { Link } from "react-router-dom";
import { EmployeeCreateForm } from "../components/EmployeeCreateForm";

export function EmployeeCreatePage() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <Link
        to="/"
        className="mb-4 inline-block text-sm text-blue-600 hover:text-blue-800"
      >
        &larr; Back to employees
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Add New Employee
      </h1>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <EmployeeCreateForm />
      </div>
    </div>
  );
}
