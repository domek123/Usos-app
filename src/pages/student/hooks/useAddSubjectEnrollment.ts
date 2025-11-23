import { useFetchSubjects } from "@/hooks";
import type { Subject } from "@/types";
import { useMemo, useState } from "react";

export const useAddSubjectEnrollment = (
  semesterId: string,
  enrolledSubjects: Subject[]
) => {
  const { subjects: allSubjects } = useFetchSubjects(semesterId);

  const [selectedSubjectsIds, setSelectedSubjectsIds] = useState<string[]>([]);

  const notAvailableSubjects = useMemo(
    () => enrolledSubjects.map((subject) => subject.id),
    [enrolledSubjects]
  );

  const handleClick = (subjectId: string) => {
    setSelectedSubjectsIds((prev) =>
      prev.includes(subjectId)
        ? prev.filter((id) => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  return {
    allSubjects,
    selectedSubjectsIds,
    notAvailableSubjects,
    handleClick,
  };
};
