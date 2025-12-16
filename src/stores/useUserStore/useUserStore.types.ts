import type { Person } from "@/types";

export type UserStore = {
  teacherId: string | null;
  studentId: number | null;
  token?: string;
  setUser: (user: Person) => void;
  logout: () => void;
  setTeacherId: (id: string) => void;
  setStudentId: (id: number) => void;
  setToken: (token: string) => void;
} & Person;
