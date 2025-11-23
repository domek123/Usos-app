import { type Semester } from "@/types";
import { useEffect, useState } from "react";
import { useAddSemester, useFetchSemesters } from "@/hooks";

export const useSemester = () => {
  const { semesters, isLoading } = useFetchSemesters();
  const { addSemester } = useAddSemester();

  const [selectedSemester, setSelectedSemester] = useState<Semester>({
    id: "",
    name: "",
    subjects: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //add semester
  const [isAddSemesterVisible, setIsAddSemesterVisible] = useState(false);
  const [semesterName, setSemesterName] = useState("");

  //edit semester
  const [editSemesterName, setEditSemesterName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (semesters.length === 0) return;

    const currentSemester = semesters.find(
      (semester) => semester.id === selectedSemester.id
    );

    setSelectedSemester(currentSemester || semesters[0]);
  }, [semesters]);

  useEffect(() => {
    setIsEdit(false);
  }, [selectedSemester]);

  const handleAddSemester = () => {
    if (semesterName.length < 3) return null;
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
    editSemesterName,
    setEditSemesterName,
    isEdit,
    setIsEdit,
  };
};
