import { useEditSemester } from "@/hooks";
import { useState } from "react";

export const useEditSem = (semesterId: string) => {
  const { editSemester } = useEditSemester(semesterId);

  const [semesterName, setSemesterName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    editSemester(semesterName);
    setSemesterName("");
    setIsEdit(false);
  };
  return {
    semesterName,
    setSemesterName,
    isEdit,
    setIsEdit,
    handleEdit,
  };
};
