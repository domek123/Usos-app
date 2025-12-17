import type { SubjectType } from "../enums";
import type { Subject } from "./Subject";
import type { Teacher } from "./Teacher";

export interface ScheduleEvent {
  id: string;
  day: number;
  startTime: number;
  duration: number;
  description: string;
  gradeType: SubjectType;
  subject: Pick<Subject, "id" | "name">;
  teacher: Teacher | null;
}
