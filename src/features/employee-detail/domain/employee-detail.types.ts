export interface EmployeeDetail {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  status: "active" | "inactive";
}

export interface Department {
  id: number;
  name: string;
}

export interface CreateEmployeeDetail {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  status: "active" | "inactive";
}

export type UpdateEmployeeDetail = CreateEmployeeDetail;
