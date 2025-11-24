import { useFetchSemesters } from "@/hooks";
import type { Semester } from "@/types";
import { useMemo, useState } from "react";

export const useAddSemesterEnrollment = (enrolledSemesters: Semester[]) => {
  const { semesters: allSemesters } = useFetchSemesters();

  const [selectedSemestersIds, setSelectedSemestersIds] = useState<string[]>(
    []
  );

  const [selectedSemestersWithSubject, setSelectedSemestersWithSubject] =
    useState<string[]>([]);

  const notAvailableSemesters = useMemo(
    () => enrolledSemesters.map((s) => s.id),
    [enrolledSemesters]
  );

  const handleClick = (semesterId: string) => {
    const isSelected = selectedSemestersIds.includes(semesterId);
    const isSelectedWithSubject =
      selectedSemestersWithSubject.includes(semesterId);

    if (isSelected && isSelectedWithSubject) {
      setSelectedSemestersWithSubject((prev) =>
        prev.filter((id) => id !== semesterId)
      );
      setSelectedSemestersIds((prev) => prev.filter((id) => id !== semesterId));
      return;
    }

    return setSelectedSemestersIds((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  const handleClickWithSemesterClick = (semesterId: string) => {
    const isSelectedWithSubject =
      selectedSemestersWithSubject.includes(semesterId);
    const isSelected = selectedSemestersIds.includes(semesterId);

    if (!isSelectedWithSubject && !isSelected) {
      setSelectedSemestersWithSubject((prev) => [...prev, semesterId]);
      setSelectedSemestersIds((prev) => [...prev, semesterId]);
      return;
    }

    return setSelectedSemestersWithSubject((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  return {
    allSemesters,
    selectedSemestersIds,
    notAvailableSemesters,
    handleClick,
    selectedSemestersWithSubject,
    handleClickWithSemesterClick,
  };
};
