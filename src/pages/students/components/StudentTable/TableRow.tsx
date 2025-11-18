import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import { StyledTableCell } from "@/styles";
import type { Student } from "@/types";
import { TableRow, Typography } from "@mui/material";
import { DeleteStudentModal } from "../../modals";
import { AddEditStudentModal } from "../../modals/AddEditStudentModal/AddEditStudentModal";

export const StudentTableRow = ({ student }: { student: Student }) => {
  const { setChildren, openModal } = useModalContext();

  return (
    <TableRow onClick={() => console.log("open")}>
      <StyledTableCell width="20%">
        <Typography>{student.studentId}</Typography>
      </StyledTableCell>
      <StyledTableCell width="35%">
        <Typography>
          {student.firstName} {student.lastName}
        </Typography>
      </StyledTableCell>
      <StyledTableCell width="40%">
        <Typography>{student.email}</Typography>
      </StyledTableCell>
      <StyledTableCell padding="none">
        <EditDeleteMenu
          openDeleteModal={() => {
            setChildren(
              <DeleteStudentModal
                personId={student.personId}
                firstName={student.firstName}
                lastName={student.lastName}
              />
            );
            openModal();
          }}
          openEditModal={() => {
            setChildren(<AddEditStudentModal student={student} />);
            openModal();
          }}
        />
      </StyledTableCell>
    </TableRow>
  );
};
