import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";

type AddSemesterPayload = {
  name: string;
  yearId: number;
};

export const useAddSemester = () => {
  const queryClient = useQueryClient();
  const { faculty } = useFacultyStore();

  const { mutate } = useMutation({
    mutationFn: async (payload: AddSemesterPayload) => {
      return api.post(`/semester/`, {
        facultyId: faculty!.id,
        ...payload,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["semesters"] });
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania semetru:", error);
    },
  });

  return { addSemester: (payload: AddSemesterPayload) => mutate(payload) };
};
