import { api } from "@/api/api";
import {
  PermissionType,
  type Person,
  type Student,
  type Teacher,
} from "@/types";
import { useQuery } from "@tanstack/react-query";

type PermissionDataMap = {
  [PermissionType.ADMIN]: Person;
  [PermissionType.TEACHER]: Teacher;
  [PermissionType.STUDENT]: Student;
};

export const useFetchPersonData = <T extends PermissionType>(
  id: string,
  type: T
) => {
  const { data, isLoading } = useQuery<PermissionDataMap[T]>({
    queryKey: ["person"],
    queryFn: async (): Promise<PermissionDataMap[T]> => {
      switch (type) {
        case PermissionType.ADMIN:
          return await api.get(`/person/${id}`);
        case PermissionType.TEACHER:
          return await api.get(`/teacher/${id}`);
        case PermissionType.STUDENT:
          return await api.get(`/student/${id}`);
      }
    },
  });

  return { person: data, isLoading };
};
