import { useAddEditTeacher } from "@/hooks";
import type { Teacher } from "@/types";

export const useAddEditModal = (personId?: string) => {
  const { addEditTeacher } = useAddEditTeacher(personId);

  const onSubmit = (data: Omit<Teacher, "personId" | "teacherId">) => {
    addEditTeacher(data);
  };

  return { onSubmit };
};
