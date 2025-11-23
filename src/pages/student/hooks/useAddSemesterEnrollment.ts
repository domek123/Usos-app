import { useFetchSemesters } from "@/hooks";
import type { Semester } from "@/types";
import { useMemo, useState } from "react";

export const useAddSemesterEnrollment = (enrolledSemesters: Semester[]) => {
  const { semesters: allSemesters } = useFetchSemesters();

  const [selectedSemestersIds, setSelectedSemestersIds] = useState<string[]>(
    []
  );

  const notAvailableSemesters = useMemo(
    () => enrolledSemesters.map((s) => s.id),
    [enrolledSemesters]
  );

  const emptySemesters = useMemo(
    () =>
      allSemesters
        .filter((semester) => semester.subjects.length === 0)
        .map((s) => s.id),
    [allSemesters]
  );

  const handleClick = (semesterId: string) => {
    setSelectedSemestersIds((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  return {
    allSemesters,
    selectedSemestersIds,
    notAvailableSemesters,
    emptySemesters,
    handleClick,
  };
};
