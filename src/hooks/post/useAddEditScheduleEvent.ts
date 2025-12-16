import { api } from "@/api/api";
import { useModalContext } from "@/context";
import type { ScheduleEventDto } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddEditScheduleEvent = (eventId?: string) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (event: ScheduleEventDto) => {
      if (eventId) {
        return await api.patch(`/semester-schedule/${eventId}`, { ...event });
      } else {
        return await api.post("/semester-schedule", { ...event });
      }
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["scheduleEvents", variables.semesterId],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania/edycji przedmiotu:", error);
    },
  });

  return {
    addEditScheduleEventModal: (event: ScheduleEventDto) => mutate(event),
  };
};
