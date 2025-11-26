import { api } from "@/api/api";
import type { ScheduleEvent } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchScheduleEvents = (semesterId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["scheduleEvents", semesterId],
    queryFn: async (): Promise<ScheduleEvent[]> => {
      const data = await api.get<ScheduleEvent[]>(
        "/semester-schedule/" + semesterId
      );
      return data;
    },
  });

  return { scheduleEvents: data ?? [], isLoading };
};
