import { z } from "zod";

export const changePasswordSchema = z.object({
  password: z.string(),
  newPassword: z.string().min(8, "hasło musi miec 8 znaków"),
});
