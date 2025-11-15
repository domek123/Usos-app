import { api } from "@/api/api";
import type { Teacher } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: async (): Promise<Teacher[]> => {
      const data = await api.get<Teacher[]>("/teachers");
      return data;
    },
  });
};
