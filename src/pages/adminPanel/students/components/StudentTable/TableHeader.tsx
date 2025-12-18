import { StyledTableCell } from "@/styles";
import { Button, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { AddEditStudentModal } from "../../modals/AddEditStudentModal/AddEditStudentModal";
import { useModalContext } from "@/context";
import { useFacultyStore } from "@/stores";

export const StudentTableHeader = () => {
  const { t } = useTranslation();
  const { setModalContent } = useModalContext();
  const { faculty: globalFaculty } = useFacultyStore();

  return (
    <TableHead sx={{ backgroundColor: "lightgray" }}>
      <TableRow>
        <StyledTableCell>
          <Typography>{t("students.table.indexNumber")}</Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography>{t("students.table.name")}</Typography>
        </StyledTableCell>
        <StyledTableCell>
          <Typography>{t("students.table.email")}</Typography>
        </StyledTableCell>
        {!globalFaculty && (
          <StyledTableCell>
            <Typography>{t("students.table.faculties")}</Typography>
          </StyledTableCell>
        )}
        <StyledTableCell width={"5%"} padding="none">
          <Button
            onClick={() => {
              setModalContent(<AddEditStudentModal />);
            }}
          >
            <AddIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
