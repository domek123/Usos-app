import { useEffect, useState } from "react";
import { useFetchTeachers } from "./useFetchTeachers";
import type { Teacher } from "@/types";

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
