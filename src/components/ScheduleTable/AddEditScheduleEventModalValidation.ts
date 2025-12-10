import { z } from "zod";
import { SubjectType } from "@/types";

export const gradeTypeValues = [
  SubjectType.EXAM,
  SubjectType.LAB,
  SubjectType.PROJECT,
] as const;

export const scheduleEventSchema = z.object({
  subjectId: z
    .string()
    .min(1, "subjects.addEditScheduleEventModal.errors.subject"),
  gradeType: z.enum(gradeTypeValues).optional(),
  duration: z
    .number()
    .int()
    .min(1, "subjects.addEditScheduleEventModal.errors.duration"),
  description: z.string().optional(),
  teacherId: z
    .string()
    .min(1, "subjects.addEditScheduleEventModal.errors.teacher"),
  day: z.number(),
  startTime: z.number(),
});
