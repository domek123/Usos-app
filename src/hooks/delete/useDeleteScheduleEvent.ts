import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalContext } from "@/context";
import { api } from "@/api/api";

export const useDeleteScheduleEvent = (semesterId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/semester-schedule/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["scheduleEvents", semesterId],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania wydarzenia:", error);
    },
  });

  return { deleteScheduleEvent: (id: string) => mutate(id) };
};
