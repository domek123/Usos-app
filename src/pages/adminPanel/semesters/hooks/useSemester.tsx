import { type Semester } from "@/types";
import { useMemo, useState } from "react";
import { useFetchSemesters } from "@/hooks";
import { useDebounce } from "@uidotdev/usehooks";

const defaultSemester = {
  id: "",
  name: "",
  isCurrent: false,
  yearId: 0,
  subjects: [],
};

export const useSemester = () => {
  const { semesters: allSemesters, isLoading } = useFetchSemesters();

  const [selectedSemester, setSelectedSemester] =
    useState<Semester>(defaultSemester);

  const [semesterName, setSemesterName] = useState("");
  const debounceSearch = useDebounce(semesterName, 300);
  const [filterYears, setFilterYears] = useState<number[]>([]);
  const [isCurrent, setIsCurrent] = useState(false);

  const semesters = useMemo(() => {
    if (allSemesters === undefined) return [];

    let result = allSemesters;

    if (isCurrent) {
      result = result.filter((semester) => semester.isCurrent === true);
    }

    if (filterYears.length > 0) {
      result = result.filter((semester) =>
        filterYears.includes(semester.yearId)
      );
    }

    if (debounceSearch.trim() !== "") {
      const nameLower = debounceSearch.toLowerCase();
      result = result.filter((semester) =>
        semester.name.toLowerCase().includes(nameLower)
      );
    }

    return result;
  }, [allSemesters, filterYears, debounceSearch, isCurrent]);

  const reset = () => {
    setFilterYears([]);
    setSemesterName("");
    setIsCurrent(false);
  };

  return {
    semesters,
    selectedSemester,
    setSelectedSemester,
    isLoading,
    filterYears,
    setFilterYears,
    semesterName,
    setSemesterName,
    reset,
    isCurrent,
    setIsCurrent,
  };
};
