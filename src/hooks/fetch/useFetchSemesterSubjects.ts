import { api } from "@/api/api";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchSemesterSubjects = (semesterId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["semester", semesterId],
    queryFn: async (): Promise<Semester> => {
      const data = await api.get<Semester>("semester/subjects/" + semesterId);
      return data;
    },
    enabled: semesterId != "",
  });

  return { semester: data, isLoading };
};
