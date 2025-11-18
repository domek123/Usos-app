import { api } from "@/api/api";
import type { Student } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchStudents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: async (): Promise<Student[]> => {
      const data = await api.get<Student[]>("/student");
      return data;
    },
  });

  return { students: data ?? [], isLoading };
};
