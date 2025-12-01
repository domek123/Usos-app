import { z } from "zod";
import { SubjectType } from "@/types";

export const gradeTypeValues = [
  SubjectType.EXAM,
  SubjectType.LAB,
  SubjectType.PROJECT,
] as const;

export const scheduleEventSchema = z.object({
  subjectId: z.string().min(1, "Wybierz przedmiot"),
  gradeType: z.enum(gradeTypeValues).optional(),
  duration: z.number().int().min(1, "Czas trwania jest wymagany"),
  description: z.string().optional(),
  teacherId: z.string().min(1),
  day: z.number(),
  startTime: z.number(),
});
