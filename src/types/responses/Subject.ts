import type { Grade, Teacher } from "@/types";

export interface Subject {
  id: string;
  ects: number;
  name: string;
  grades: Grade[];
  teacher?: Teacher;
}
