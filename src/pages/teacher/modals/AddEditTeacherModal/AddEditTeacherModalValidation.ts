import { z } from "zod";

export const teacherSchema = z.object({
  firstName: z.string().min(2, "teachers.addEditModal.errors.firstName"),
  lastName: z.string().min(2, "teachers.addEditModal.errors.lastName"),
  title: z.string().min(2, "teachers.addEditModal.errors.title"),
  email: z.string().optional(),
  phone: z
    .string()
    .min(9, "teachers.addEditModal.errors.phoneTooShort")
    .max(15, "teachers.addEditModal.errors.phoneTooLong"),
});
