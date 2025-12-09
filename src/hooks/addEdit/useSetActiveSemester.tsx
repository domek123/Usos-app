import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useModalContext } from "@/context";
import { useFacultyStore } from "@/stores";

export const useSetCurrentSemester = () => {
  const queryClient = useQueryClient();
  const { faculty } = useFacultyStore();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (semesterId: string) => {
      return api.patch(`semester/current/${semesterId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["semesters", faculty!.id],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas edycji semestru", error);
    },
  });

  return { setCurrent: (semesterId: string) => mutate(semesterId) };
};
