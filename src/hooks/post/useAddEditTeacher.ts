import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { TeacherDto } from "@/types";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useAddEditTeacher = (personId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (teacher: TeacherDto) => {
      if (personId) {
        return await api.patch(`/teachers/${personId}`, teacher);
      } else {
        return await api.post("/teachers", teacher);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania/edycji nauczyciela:", error);
    },
  });

  return { addEditTeacher: (teacher: TeacherDto) => mutate(teacher) };
};
