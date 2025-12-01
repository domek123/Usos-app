import { useDeleteStudentEnrollment } from "@/hooks";
import { StyledTableCell } from "@/styles";
import type { EnrolledSubject } from "@/types";
import { formatTeacherData, GradeFormatter } from "@/utils";
import { Button, TableRow, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export const SubjectTableRow = ({ subject }: { subject: EnrolledSubject }) => {
  const location = useLocation();
  const { id } = location.state || {};

  const { deleteEnrollment } = useDeleteStudentEnrollment();

  const { name, teacher } = subject;
  const teacherName = teacher && formatTeacherData(teacher);

  return (
    <TableRow>
      <StyledTableCell>
        <Typography>{name}</Typography>
      </StyledTableCell>

      <StyledTableCell>
        <Typography>{teacherName}</Typography>
      </StyledTableCell>

      <StyledTableCell align="center">
        <GradeFormatter grades={subject.grades} subjectName={subject.name} />
      </StyledTableCell>

      <StyledTableCell align="center" padding="none">
        <Button
          onClick={() =>
            deleteEnrollment({ studentId: id, subjectIds: [subject.id] })
          }
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </StyledTableCell>
    </TableRow>
  );
};
