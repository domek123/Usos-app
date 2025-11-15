import { api } from "@/api/api";
import type { Subject } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchSubjects = (semesterId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["subjects", semesterId],
    queryFn: async (): Promise<Subject[]> => {
      const data = await api.get<Subject[]>("/subject/" + semesterId);
      return data;
    },
    enabled: semesterId != "",
  });

  return { subjects: data ?? [], isLoading };
};
