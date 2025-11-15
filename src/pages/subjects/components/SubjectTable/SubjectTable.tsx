import { Table, TableBody, TableContainer } from "@mui/material";
import { theme } from "@/theme";
import { SubjectTableHeader } from "./TableHeader";
import { SubjectTableRow } from "./TableRow";
import { useSemesterContext } from "../../context";
import { useFetchSubjects } from "@/hooks/fetch/useFetchSubjects";

export const SubjectTable = () => {
  const { selectedSemester } = useSemesterContext();
  const { subjects } = useFetchSubjects(selectedSemester.id);

  return (
    <TableContainer>
      <Table
        size="small"
        sx={{ border: `1px solid ${theme.palette.grey[400]}` }}
      >
        <SubjectTableHeader />
        <TableBody>
          {subjects.map((subject) => (
            <SubjectTableRow subject={subject} key={subject.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
