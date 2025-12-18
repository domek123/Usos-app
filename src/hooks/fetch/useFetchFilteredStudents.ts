import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import type { Grade, Student } from "@/types";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

export type StudentFilters = {
  yearId?: number;
  semesterId?: string;
  subjectId?: string;
  search?: string;
  page?: number;
  limit?: number;
};

type Response = {
  data: { student: Student; grades: Grade[] }[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export const useFetchFilteredStudents = (filters: StudentFilters = {}) => {
  const { faculty } = useFacultyStore();

  const hasActiveFilters =
    !!filters.search?.trim() ||
    !!filters.yearId ||
    !!filters.semesterId ||
    !!filters.subjectId;

  const { data, isLoading, refetch } = useQuery<Response>({
    queryKey: ["filtered-students", faculty?.id],
    enabled: false,
    queryFn: async (): Promise<Response> => {
      const queryString = qs.stringify(filters, {
        skipNulls: true,
        addQueryPrefix: true,
      });

      return await api.get<Response>(
        `/student/filtered/${faculty!.id}/${queryString}`
      );
    },
  });

  const safeRefetch = async () => {
    if (!hasActiveFilters) return;
    await refetch();
  };

  return {
    students: data?.data ?? [],
    meta: data?.meta,
    isLoading,
    refetch: safeRefetch,
  };
};
