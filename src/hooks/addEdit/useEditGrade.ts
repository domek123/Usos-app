import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useModalContext } from "@/context";
import { useFacultyStore } from "@/stores";

export const useEditGrade = (id: string, studentId: number) => {
  const queryClient = useQueryClient();
  const { faculty } = useFacultyStore();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (newGrade: number) => {
      return api.patch(`/grade/${id}`, { newGrade });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["enrollment", studentId, faculty!.id],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas edycji oceny:", error);
    },
  });

  return { editGrade: (newGrade: number) => mutate(newGrade) };
};
