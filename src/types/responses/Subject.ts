import type { Grade, SubjectType, Teacher } from "@/types";

interface DefaultSubject {
  id: string;
  ects: number;
  name: string;
  teacher?: Teacher;
  closed: boolean;
}

export interface Subject extends DefaultSubject {
  gradeTypes: SubjectType[];
}

export interface EnrolledSubject extends DefaultSubject {
  grades: Grade[];
}
