import { useAddSemester } from "@/hooks";
import { useState } from "react";

export const useAddSem = () => {
  const { addSemester } = useAddSemester();

  const [semesterName, setSemesterName] = useState("");
  const [semesterYear, setSemesterYear] = useState<number>();

  const handleAddSemester = () => {
    if (semesterName.length < 3 || semesterYear === undefined) return null;
    addSemester({ name: semesterName, yearId: semesterYear });
    setSemesterName("");
    setSemesterYear(undefined);
  };

  return {
    semesterName,
    setSemesterName,
    handleAddSemester,
    semesterYear,
    setSemesterYear,
  };
};
