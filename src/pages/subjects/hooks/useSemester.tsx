import { type Semester } from "@/types";
import { useEffect, useState } from "react";
import { useAddSemester, useFetchSemesters } from "@/hooks";

export const useSemester = () => {
  const { semesters, isLoading } = useFetchSemesters();
  const { addSemester } = useAddSemester();

  const [selectedSemester, setSelectedSemester] = useState<Semester>({
    id: "",
    name: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddSemesterVisible, setIsAddSemesterVisible] = useState(false);
  const [semesterName, setSemesterName] = useState("");

  useEffect(() => {
    if (semesters.length > 0) {
      setSelectedSemester(semesters[0]);
    }
  }, [semesters]);

  const handleAddSemester = () => {
    addSemester(semesterName);
    setSemesterName("");
    setIsAddSemesterVisible(false);
  };

  return {
    semesters,
    selectedSemester,
    setSelectedSemester,
    isSidebarOpen,
    setIsSidebarOpen,
    isLoading,
    isAddSemesterVisible,
    setIsAddSemesterVisible,
    semesterName,
    setSemesterName,
    handleAddSemester,
  };
};
