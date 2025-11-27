import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";

export const useAddSemester = () => {
  const queryClient = useQueryClient();
  const { faculty } = useFacultyStore();

  const { mutate } = useMutation({
    mutationFn: async (name: string) => {
      return api.post(`/semester/`, { name, facultyId: faculty!.id });
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
