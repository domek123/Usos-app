import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchStudentsSemesters = (id: number) => {
  const { faculty } = useFacultyStore();

  const { data, isLoading } = useQuery<Semester[]>({
    queryKey: ["enrollment", id, faculty!.id],
    queryFn: async (): Promise<Semester[]> => {
      return await api.get(`/student/${id}/semesters/${faculty!.id}`);
    },
  });

  return { studentSemesters: data ?? [], isLoading };
};
