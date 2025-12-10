import { SubjectType } from "@/types";
import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(5, "subjects.addEditModal.errors.name"),
  ects: z.number().int(),
  teacherId: z.string().optional(),
  gradeTypes: z
    .array(z.enum(SubjectType))
    .min(1, "subjects.addEditModal.errors.type"),
});
