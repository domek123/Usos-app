import { api } from "@/api/api";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchStudentsSemesters = (id: number) => {
  const { data, isLoading } = useQuery<Semester[]>({
    queryKey: ["enrollment", id],
    queryFn: async (): Promise<Semester[]> => {
      return await api.get("/student/" + id + "/semesters");
    },
  });

  return { studentSemesters: data ?? [], isLoading };
};
