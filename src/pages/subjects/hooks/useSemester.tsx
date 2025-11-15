import { type Semester } from "@/types";
import { useEffect, useState } from "react";
import { useSemesterNetwork } from "./useSemesterNetwork";

export const useSemester = () => {
  const [selectedSemester, setSelectedSemester] = useState<Semester>({
    id: "",
    name: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data, isLoading } = useSemesterNetwork();

  useEffect(() => {
    if (data) {
      setSelectedSemester(data[0]);
    }
  }, [data]);

  return {
    semesters: data || [],
    selectedSemester,
    setSelectedSemester,
    isSidebarOpen,
    setIsSidebarOpen,
    isLoading,
  };
};
