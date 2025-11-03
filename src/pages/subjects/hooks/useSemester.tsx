import { api } from "@/api/api";
import { type Semester } from "@/types";
import { useEffect, useState } from "react";

export const useSemester = () => {
  const [semesters, setSemesters] = useState<Semester[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<Semester>({
    id: "",
    name: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get<Semester[]>("/semester");
        console.log(data);
        setSemesters(data);

        if (data.length > 0) {
          setSelectedSemester(data[0]);
        }
      } catch (err) {
        console.error("Błąd pobierania semestrów:", err);
      }
    };

    fetchData();
  }, []);

  return {
    semesters,
    selectedSemester,
    setSelectedSemester,
    isSidebarOpen,
    setIsSidebarOpen,
  };
};
