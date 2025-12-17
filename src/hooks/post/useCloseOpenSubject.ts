import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";

export const useCloseOpenSubject = (semesterId: string, subjectId: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (state: boolean) => {
      const data = await api.patch(`/subject/close-open/${subjectId}`, {
        state,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["semester", semesterId] });
    },
  });

  return {
    closeOpenSubject: (state: boolean) => mutate(state),
  };
};
