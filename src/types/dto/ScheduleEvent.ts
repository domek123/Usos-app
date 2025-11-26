import type { SubjectType } from "../enums";

export interface ScheduleEventDto {
  day: number;
  startTime: number;
  duration: number;
  description?: string;
  gradeType: SubjectType;

  teacherId: string;
  semesterId: string;
  subjectId: string;
}
