import type { SubjectType } from "../responses";

export interface SubjectDto {
  name: string;
  ects: number;
  teacherId?: string;
  gradeTypes: SubjectType[];
}
