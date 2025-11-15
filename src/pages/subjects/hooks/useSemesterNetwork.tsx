import { api } from "@/api/api";
import type { Semester } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useSemesterNetwork = () => {
  return useQuery({
    queryKey: ["semester"],
    queryFn: async (): Promise<Semester[]> => {
      const data = await api.get<Semester[]>("./semester");
      return data;
    },
  });
};
