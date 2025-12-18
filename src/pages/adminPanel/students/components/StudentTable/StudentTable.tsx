import { StudentTableHeader } from "./TableHeader";
import { DefaultTableContainer } from "@/components";
import { TableBody } from "@mui/material";
import { StudentTableRow } from "./TableRow";
import { StudentFilters } from "../StudentFilters";
import { useStudentsContext } from "../../context";

export const StudentTable = () => {
  const { students } = useStudentsContext();

  return (
    <>
      <StudentFilters />
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
