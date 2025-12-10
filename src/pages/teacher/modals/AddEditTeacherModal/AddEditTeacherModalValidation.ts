import { z } from "zod";

export const teacherSchema = z.object({
  firstName: z.string().min(2, "teacher.addEditModal.errors.firstName"),
  lastName: z.string().min(2, "teacher.addEditModal.errors.lastName"),
  title: z.string().min(2, "teacher.addEditModal.errors.title"),
  email: z.string().optional(),
  phone: z
    .string()
    .min(9, "teacher.addEditModal.errors.phoneTooShort")
    .max(15, "teacher.addEditModal.errors.phoneTooLong"),
});
