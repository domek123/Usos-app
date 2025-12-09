import {
  useAssignSemestersToStudent,
  useFetchPersonData,
  useFetchSemesters,
} from "@/hooks";
import { useFacultyStore } from "@/stores";
import { PermissionType, type Semester } from "@/types";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const useAddSemesterEnrollment = (enrolledSemesters: Semester[]) => {
  const location = useLocation();
  const { id } = location.state || {};
  const { faculty: globalFaculty } = useFacultyStore();

  const { person } = useFetchPersonData(id, PermissionType.STUDENT);

  const personYear = person?.faculties.find(
    (faculty) => faculty.facultyId == globalFaculty!.id
  )?.year;

  const { assignSemestersToStudent } = useAssignSemestersToStudent();

  const { semesters: allSemesters } = useFetchSemesters(personYear);

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

  const handleAssignSemester = () => {
    assignSemestersToStudent({
      studentId: id,
      semesterIds: selectedSemestersIds,
      semestersWithSubjects: selectedSemestersWithSubject,
    });
  };

  return {
    allSemesters,
    selectedSemestersIds,
    notAvailableSemesters,
    handleClick,
    selectedSemestersWithSubject,
    handleClickWithSemesterClick,
    handleAssignSemester,
  };
};
