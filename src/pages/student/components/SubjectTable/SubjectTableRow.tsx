import { EditDeleteMenu } from "@/components";
import { useDeleteStudentEnrollment } from "@/hooks";
import { StyledTableCell } from "@/styles";
import type { EnrolledSubject } from "@/types";
import { formatTeacherData, GradeFormatter } from "@/utils";
import { TableRow, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

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
        <GradeFormatter {...subject} />
      </StyledTableCell>

      <StyledTableCell align="center" padding="none">
        <EditDeleteMenu
          openEditModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openDeleteModal={() =>
            deleteEnrollment({ studentId: id, subjectIds: [subject.id] })
          }
        />
      </StyledTableCell>
    </TableRow>
  );
};
