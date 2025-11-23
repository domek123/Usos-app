import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import type { Student } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchStudents = () => {
  const faculty = useFacultyStore((s) => s.faculty);

  const queryKey = ["students", faculty?.id ?? "all"];

  const { data, isLoading } = useQuery<Student[]>({
    queryKey,
    queryFn: async (): Promise<Student[]> => {
      if (faculty?.id) {
        return await api.get(`/student/faculty/${faculty.id}`);
      }
      return await api.get("/student/");
    },
  });

  return { students: data ?? [], isLoading };
};
