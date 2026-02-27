import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeesPage } from "./features/employees/presentation/pages/EmployeesPage";
import { EmployeeCreatePage } from "./features/employees/presentation/pages/EmployeeCreatePage";
import { EmployeeDetailDetailPage } from "./features/employee-detail/presentation/pages/EmployeeDetailDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <a href="/" className="text-lg font-semibold text-gray-900">
              Employee Directory
            </a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/employees/new" element={<EmployeeCreatePage />} />
          <Route path="/employees/:id" element={<EmployeeDetailDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
