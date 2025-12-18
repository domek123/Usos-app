import { StyledTableCell } from "@/styles";
import type { Grade, Student } from "@/types";
import { GradeFormatter } from "@/utils";
import { Button, TableRow, Typography } from "@mui/material";
import { useStudentsGradeContext } from "../../context";
import LaunchIcon from "@mui/icons-material/Launch";
import { useNavigate } from "react-router-dom";

export const StudentGradeRow = ({
  studentData,
}: {
  studentData: { student: Student; grades: Grade[] };
}) => {
  const { student, grades } = studentData;
  const { selectedSubjectId, selectedSubjectName, refetch } =
    useStudentsGradeContext();
  const navigate = useNavigate();

  return (
    <TableRow>
      <StyledTableCell>
        <Typography>{student.studentId}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>
          {student.firstName} {student.lastName}
        </Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>{student.email}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        {selectedSubjectId && grades != undefined ? (
          <GradeFormatter
            grades={grades}
            onlySubjects={true}
            subjectName={selectedSubjectName}
            additionalAction={() => refetch()}
          />
        ) : (
          <Typography>Wybierz Przedmiot</Typography>
        )}
      </StyledTableCell>
      <StyledTableCell padding="none">
        <Button
          onClick={() =>
            navigate("/student", { state: { id: student.studentId } })
          }
        >
          <LaunchIcon fontSize="small" />
        </Button>
      </StyledTableCell>
    </TableRow>
  );
};
