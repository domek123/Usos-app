import { api } from "@/api/api";
import type { Semester, Subject } from "@/types";
import { useEffect, useState } from "react";

export const useSubjectsNetwork = (id: string | null) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    console.log(id);
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await api.get<Semester>("/semester/" + id);
        setSubjects(data.subjects!);
      } catch (err) {
        console.error("Błąd pobierania semestrów:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { subjects, isLoading };
};
