import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { SubjectDto } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddEditSubject = (semesterId?: string, subjectId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (subject: SubjectDto) => {
      if (!semesterId) return null;
      if (subjectId) {
        return await api.put(`/subject/${subjectId}`, subject);
      } else {
        return await api.post("/subject", { ...subject, semesterId });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects", semesterId] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania/edycji przedmiotu:", error);
    },
  });

  return { addEditSubject: (subject: SubjectDto) => mutate(subject) };
};
