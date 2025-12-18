import { DefaultTableContainer } from "@/components";
import { useStudentsGradeContext } from "../../context";
import { TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { StyledTableCell } from "@/styles";
import { StudentGradeRow } from "./StudentGradeRow";

export const StudentGradeTable = () => {
  const { filteredStudents } = useStudentsGradeContext();

  return (
    <>
      <DefaultTableContainer>
        <TableHead sx={{ backgroundColor: "lightgray" }}>
          <TableRow>
            <StyledTableCell width={"5%"} align="center">
              <Typography>Id</Typography>
            </StyledTableCell>
            <StyledTableCell width={"30%"}>
              <Typography>Imię i nazwisko</Typography>
            </StyledTableCell>
            <StyledTableCell width={"20%"}>
              <Typography>Email</Typography>
            </StyledTableCell>
            <StyledTableCell width={"40%"}>
              <Typography>Oceny</Typography>
            </StyledTableCell>

            <StyledTableCell width={"5%"}>
              <Typography></Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredStudents.map((student) => (
            <StudentGradeRow studentData={student} />
          ))}
        </TableBody>
      </DefaultTableContainer>
    </>
  );
};
