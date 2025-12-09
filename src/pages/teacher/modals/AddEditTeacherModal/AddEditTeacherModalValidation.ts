import { z } from "zod";

export const teacherSchema = z.object({
  firstName: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  lastName: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
  title: z.string().min(2, "Tytuł musi mieć co najmniej 2 znaki"),
  email: z.string().optional(),
  phone: z
    .string()
    .min(9, "Numer telefonu musi mieć co najmniej 9 cyfr")
    .max(15, "Numer telefonu jest zbyt długi"),
});
