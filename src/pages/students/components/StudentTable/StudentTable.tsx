import { StudentTableHeader } from "./TableHeader";
import { DefaultTableContainer, SearchInput } from "@/components";
import { TableBody } from "@mui/material";
import { StudentTableRow } from "./TableRow";
import { useStudents } from "../../hooks";

export const StudentTable = () => {
  const { students, setSearch, search } = useStudents();

  return (
    <>
      <SearchInput value={search} onChange={(val) => setSearch(val)} />
      <DefaultTableContainer>
        <StudentTableHeader />
        <TableBody>
          {students.map((student) => (
            <StudentTableRow student={student} />
          ))}
        </TableBody>
      </DefaultTableContainer>
    </>
  );
};
