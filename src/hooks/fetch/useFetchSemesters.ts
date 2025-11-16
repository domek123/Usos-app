import { api } from "@/api/api";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchSemesters = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["semester"],
    queryFn: async (): Promise<Semester[]> => {
      const data = await api.get<Semester[]>("./semester");
      return data;
    },
  });

  return { semesters: data ?? [], isLoading };
};
