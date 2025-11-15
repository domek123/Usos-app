import { type Semester } from "@/types";
import { useEffect, useState } from "react";
import { useFetchSemesters } from "@/hooks";

export const useSemester = () => {
  const [selectedSemester, setSelectedSemester] = useState<Semester>({
    id: "",
    name: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { semesters, isLoading } = useFetchSemesters();

  useEffect(() => {
    if (semesters.length > 0) {
      setSelectedSemester(semesters[0]);
    }
  }, [semesters]);

  return {
    semesters,
    selectedSemester,
    setSelectedSemester,
    isSidebarOpen,
    setIsSidebarOpen,
    isLoading,
  };
};
