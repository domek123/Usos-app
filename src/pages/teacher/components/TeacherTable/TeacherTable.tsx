import { Table, TableBody, TableContainer } from "@mui/material";
import { TeacherTableHeader } from "./TableHeader";
import { theme } from "@/theme";
import { TeacherTableRow } from "./TableRow";
import { useFetchTeachers } from "@/hooks";

export const TeacherTable = () => {
  const { teachers } = useFetchTeachers();
  return (
    <TableContainer>
      <Table
        size="small"
        sx={{ border: `1px solid ${theme.palette.grey[400]}` }}
      >
        <TeacherTableHeader />
        <TableBody>
          {teachers.map((teacher) => (
            <TeacherTableRow teacher={teacher} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
