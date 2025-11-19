import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchSemesters = () => {
  const faculty = useFacultyStore((s) => s.faculty);

  const { data, isLoading } = useQuery({
    queryKey: ["semester"],
    queryFn: async (): Promise<Semester[]> => {
      if (!faculty) return [];

      const data = await api.get<Semester[]>("/semester/" + faculty.id);
      return data;
    },
  });

  return { semesters: data ?? [], isLoading };
};
