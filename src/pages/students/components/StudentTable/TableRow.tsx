import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import { StyledTableCell } from "@/styles";
import type { Student } from "@/types";
import { TableRow, Tooltip, Typography } from "@mui/material";
import { DeleteStudentModal } from "../../modals";
import { AddEditStudentModal } from "../../modals/AddEditStudentModal/AddEditStudentModal";
import { useFacultyStore } from "@/stores";
import { useDeleteStudentFromFaculty } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const StudentTableRow = ({ student }: { student: Student }) => {
  const { setModalContent } = useModalContext();
  const { deleteStudentFromFaculty } = useDeleteStudentFromFaculty();
  const { faculty: globalFaculty } = useFacultyStore();

  const navigate = useNavigate();

  return (
    <TableRow
      onClick={() => {
        if (globalFaculty)
          navigate("/student", { state: { id: student.studentId } });
      }}
    >
      <StyledTableCell width="10%" align="center">
        <Typography>{student.studentId}</Typography>
      </StyledTableCell>
      <StyledTableCell width="35%">
        <Typography>
          {student.firstName} {student.lastName}
        </Typography>
      </StyledTableCell>
      <StyledTableCell width="45%">
        <Typography>{student.email}</Typography>
      </StyledTableCell>
      {!globalFaculty && (
        <StyledTableCell width="5%" align="center">
          <Tooltip title={student.faculties.map((f) => f.name).join(", ")}>
            <Typography>{student.faculties.length}</Typography>
          </Tooltip>
        </StyledTableCell>
      )}
      <StyledTableCell padding="none" onClick={(e) => e.stopPropagation()}>
        <EditDeleteMenu
          openDeleteModal={() => {
            if (!globalFaculty) {
              setModalContent(
                <DeleteStudentModal
                  personId={student.personId}
                  firstName={student.firstName}
                  lastName={student.lastName}
                />
              );
            } else {
              deleteStudentFromFaculty(student.studentId);
            }
          }}
          openEditModal={() => {
            setModalContent(<AddEditStudentModal student={student} />);
          }}
        />
      </StyledTableCell>
    </TableRow>
  );
};
