import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalContext } from "@/context";
import { api } from "@/api/api";

export const useDeleteSubject = (id: string, semesterId: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async () => {
      await api.delete(`/subject/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
      queryClient.invalidateQueries({
        queryKey: ["scheduleEvents", semesterId],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania przedmiotu:", error);
    },
  });

  return { deleteSubject: () => mutate() };
};
