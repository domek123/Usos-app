import { Table, TableBody, TableContainer } from "@mui/material";
import { theme } from "@/theme";
import { SubjectTableHeader } from "./TableHeader";
import { useSubjectsNetwork } from "../../hooks";
import { SubjectTableRow } from "./TableRow";
import { useSemesterContext } from "../../context";

export const SubjectTable = () => {
  const { selectedSemester } = useSemesterContext();
  console.log(selectedSemester);

  const { subjects } = useSubjectsNetwork(selectedSemester.id);
  return (
    <TableContainer>
      <Table
        size="small"
        sx={{ border: `1px solid ${theme.palette.grey[400]}` }}
      >
        <SubjectTableHeader />
        <TableBody>
          {subjects.map((subject) => (
            <SubjectTableRow subject={subject} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
