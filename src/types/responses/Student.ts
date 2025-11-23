import type { Faculty } from "./Faculty";

export interface Student {
  studentId: string;
  personId: string;
  firstName: string;
  lastName: string;
  email: string;
  faculties: Faculty[];
}
