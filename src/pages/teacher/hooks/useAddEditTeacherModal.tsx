import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { Teacher } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddEditModal = (personId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (teacher: Omit<Teacher, "personId">) => {
      if (personId) {
        return await api.put(`/teachers/${personId}`, teacher);
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

  const onSubmit = (data: Omit<Teacher, "personId">) => {
    mutate(data);
  };

  return { onSubmit };
};
