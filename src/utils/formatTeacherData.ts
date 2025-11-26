import type { Teacher } from "@/types";

export const formatTeacherData = (teacher: Teacher) => {
  return `${teacher.title} ${teacher.lastName} ${teacher.lastName}`;
};
