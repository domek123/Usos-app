import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";

export const useEditSemester = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (name: string) => {
      return api.patch(`/semester/${id}`, { name });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["semester"] });
    },
    onError: (error) => {
      console.error("Błąd podczas edycji semetru:", error);
    },
  });

  return { editSemester: (name: string) => mutate(name) };
};
