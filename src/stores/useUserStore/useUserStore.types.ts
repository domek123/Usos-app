import type { Person } from "@/types";

export type UserStore = {
  setUser: (user: Person) => void;
  logout: () => void;
  teacherId: string | null;
  studentId: number | null;
} & Person;
