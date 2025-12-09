import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import { type Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchCurrentSemester = (year?: number) => {
  const { faculty } = useFacultyStore();

  const { data, isLoading } = useQuery({
    queryKey: ["currentSemester", faculty!.id],
    queryFn: async (): Promise<Semester> => {
      return await api.get<Semester>(
        `/semester/current/${faculty!.id}/${year}`
      );
    },
    enabled: !!faculty,
  });

  return { currentSemester: data, isLoading };
};
