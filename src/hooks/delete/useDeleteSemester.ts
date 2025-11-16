import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalContext } from "@/context";
import { api } from "@/api/api";

export const useDeleteSemester = (id: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async () => {
      await api.delete(`/semester/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["semesters"] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania semestru:", error);
    },
  });

  return { deleteSemester: () => mutate() };
};
