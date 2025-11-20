import { useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useFetchStudents } from "@/hooks";

export const useStudents = () => {
  const { students } = useFetchStudents();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [selectedFaculty, setSelectedFaculty] = useState<string[]>([]);

  const filteredStudents = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    return students.filter((student) => {
      const searchable =
        `${student.firstName} ${student.lastName} ${student.email} ${student.studentId}`.toLowerCase();

      const matchesSearch = !query || searchable.includes(query);

      const matchesFaculty =
        selectedFaculty.length === 0 ||
        student.faculties.some((f) => selectedFaculty.includes(f.id));

      return matchesSearch && matchesFaculty;
    });
  }, [debouncedSearch, students, selectedFaculty]);

  const reset = () => {
    setSelectedFaculty([]);
    setSearch("");
  };

  return {
    setSearch,
    students: filteredStudents,
    search,
    selectedFaculty,
    setSelectedFaculty,
    reset,
  };
};
