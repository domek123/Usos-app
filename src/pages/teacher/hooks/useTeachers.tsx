import { useEffect, useState } from "react";
import type { Teacher } from "@/types";
import { useFetchTeachers } from "@/hooks";

export const useTeacher = () => {
  const { data, isLoading } = useFetchTeachers();
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  return { teachers, isLoading };
};
