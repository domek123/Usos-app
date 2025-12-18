import { useFetchFilteredStudents } from "@/hooks";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useMemo, useState } from "react";

export const useFilters = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 300);
  const [selectedYear, setSelectedYear] = useState<number>();
  const [selectedSemesterId, setSelectedSemesterId] = useState("");
  const [selectedSubjectName, setSelectedSubjectName] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [isReset, setIsReset] = useState(false);

  const { students, refetch } = useFetchFilteredStudents({
    yearId: selectedYear,
    semesterId: selectedSemesterId,
    subjectId: selectedSubjectId,
    page: 1,
    limit: 20,
  });
  useEffect(() => {
    setSelectedSemesterId("");
  }, [selectedYear]);

  useEffect(() => {
    setSelectedSubjectId("");
  }, [selectedSemesterId]);

  const filteredStudents = useMemo(() => {
    console.log(isReset, debounceSearch, students);
    if (isReset) return [];

    if (!students) return [];

    if (!debounceSearch.trim()) {
      return students;
    }

    const query = debounceSearch.trim().toLowerCase();

    return students.filter((val) => {
      const searchable =
        `${val.student.firstName} ${val.student.lastName} ${val.student.email} ${val.student.studentId}`.toLowerCase();
      return searchable.includes(query);
    });
  }, [students, debounceSearch, isReset]);

  const reset = () => {
    setSelectedYear(undefined);
    setSelectedSemesterId("");
    setSelectedSubjectId("");
    setIsReset(true);
  };

  return {
    search,
    setSearch,
    selectedYear,
    setSelectedYear,
    selectedSemesterId,
    setSelectedSemesterId,
    selectedSubjectId,
    setSelectedSubjectId,
    debounceSearch,
    filteredStudents,
    refetch,
    reset,
    selectedSubjectName,
    setSelectedSubjectName,
    setIsReset,
  };
};
