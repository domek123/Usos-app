import { api } from "@/api/api";
import { useUserStore } from "@/stores";
import { PermissionType, type Faculty } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchFaculties = () => {
  const { id, role } = useUserStore();

  const { data, isLoading } = useQuery({
    queryKey: ["faculty"],
    queryFn: async (): Promise<Faculty[]> => {
      if (role === PermissionType.ADMIN) {
        return await api.get<Faculty[]>("/faculty");
      }
      return await api.get<Faculty[]>("/person/faculty/" + id);
    },
  });

  return { faculties: data ?? [], isLoading };
};
