import { useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useFetchStudents } from "@/hooks";

export const useStudents = () => {
  const { students } = useFetchStudents();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const filteredStudents = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    if (!query) return students;

    return students.filter((student) => {
      const searchable =
        `${student.firstName} ${student.lastName} ${student.email} ${student.studentId}`.toLowerCase();
      return searchable.includes(query);
    });
  }, [debouncedSearch, students]);

  return { setSearch, students: filteredStudents, search };
};
