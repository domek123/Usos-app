import { z } from "zod";

export const studentBaseSchema = z.object({
  firstName: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  lastName: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
});

export const studentWithEmailSchema = studentBaseSchema.extend({
  email: z.string().min(1, "Email jest wymagany").email("Niepoprawny email"),
});
