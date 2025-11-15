import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { SubjectDto, Subject } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddEditSubject = (semesterId?: string, subjectId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (subject: SubjectDto) => {
      if (subjectId && semesterId) {
        return await api.put(`/subject/${subjectId}`, subject);
      } else {
        return await api.post("/subject", subject);
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

  const onSubmit = (
    data: Pick<Subject, "name" | "ects"> & { teacherId: string }
  ) => {
    mutate({
      ...data,
      semesterId: semesterId!,
    });
  };

  return { onSubmit };
};
