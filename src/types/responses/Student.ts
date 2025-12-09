export interface Student {
  studentId: string;
  personId: string;
  firstName: string;
  lastName: string;
  email: string;
  faculties: {
    facultyId: string;
    year: number;
    facultyName: string;
  }[];
}
