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
      if (role === PermissionType.STUDENT)
        return api.get<Faculty[]>("/faculty/student/" + id);
      if (role === PermissionType.TEACHER)
        return api.get<Faculty[]>("/faculty/teacher/" + id);

      return [];
    },
  });

  return { faculties: data ?? [], isLoading };
};
