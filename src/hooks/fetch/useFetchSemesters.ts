import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchSemesters = (year?: number) => {
  const { faculty } = useFacultyStore();

  const { data, isLoading } = useQuery({
    queryKey: ["semesters", faculty!.id, year],
    queryFn: async (): Promise<Semester[]> => {
      if (!faculty) return [];
      if (year !== undefined) {
        return await api.get<Semester[]>(
          "/semester/faculty/" + faculty.id + "/year/" + year
        );
      }
      return await api.get<Semester[]>("/semester/faculty/" + faculty.id);
    },
  });

  return { semesters: data ?? [], isLoading };
};
