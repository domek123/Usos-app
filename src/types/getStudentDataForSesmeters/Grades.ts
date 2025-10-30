import type { SubjectType } from "@/types";

export interface Grade {
  id: string;
  type: SubjectType;
  currentGrade?: number;
  gradeHistory: number[];
}
