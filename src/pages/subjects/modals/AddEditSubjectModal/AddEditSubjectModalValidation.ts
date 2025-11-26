import { SubjectType } from "@/types";
import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(5, "nazwa musi miec co najmniej 5 znaków"),
  ects: z.number().int(),
  teacherId: z.string().optional(),
  gradeTypes: z.array(z.enum(SubjectType)).min(1),
});
