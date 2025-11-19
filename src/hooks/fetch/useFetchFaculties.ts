import { api } from "@/api/api";
import { PermissionType, type Faculty } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchFaculties = () => {
  const permission = PermissionType.ADMIN;
  const id = "1";

  const { data, isLoading } = useQuery({
    queryKey: ["faculty"],
    queryFn: async (): Promise<Faculty[]> => {
      if (permission === PermissionType.ADMIN) {
        return await api.get<Faculty[]>("/faculty");
      }
      return api.get<Faculty[]>("person/faculty/" + id);
    },
  });

  return { faculties: data ?? [], isLoading };
};
