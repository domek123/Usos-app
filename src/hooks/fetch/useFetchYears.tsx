import { api } from "@/api/api";
import type { Year } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchYears = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["years"],
    queryFn: async (): Promise<Year[]> => {
      const data = await api.get<Year[]>("/year");
      return data;
    },
  });

  return { years: data ?? [], isLoading };
};
