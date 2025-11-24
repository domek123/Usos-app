import type { Grade, SubjectType, Teacher } from "@/types";

export interface Subject {
  id: string;
  ects: number;
  name: string;
  gradeTypes: SubjectType[];
  teacher?: Teacher;
}

export interface EnrolledSubject {
  id: string;
  ects: number;
  name: string;
  grades: Grade[];
  teacher?: Teacher;
}
