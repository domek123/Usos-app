import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";

export const useAddSemester = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (name: string) => {
      return api.post(`/semester/`, { name });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["semester"] });
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania semetru:", error);
    },
  });

  return { addSemester: (name: string) => mutate(name) };
};
