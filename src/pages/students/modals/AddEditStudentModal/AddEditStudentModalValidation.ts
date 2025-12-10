import { z } from "zod";

export const studentBaseSchema = z.object({
  firstName: z.string().min(2, "students.addEditModal.errors.firstName"),
  lastName: z.string().min(2, "students.addEditModal.errors.firstName"),
});

export const studentWithEmailSchema = studentBaseSchema.extend({
  email: z
    .string()
    .min(5, "students.addEditModal.errors.emailRequired")
    .email("students.addEditModal.errors.emailInvalid"),
});
