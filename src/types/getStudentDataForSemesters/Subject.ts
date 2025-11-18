import type { Grade, Teacher } from "@/types";

export interface Subject {
  id: string;
  ects: number;
  name: string;
  finalGrade?: number;
  grades: Grade[];
  teacher?: Teacher;
}
