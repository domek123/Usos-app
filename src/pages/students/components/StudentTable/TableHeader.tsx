import { StyledTableCell } from "@/styles";
import { Button, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { AddEditStudentModal } from "../../modals/AddEditStudentModal/AddEditStudentModal";
import { useModalContext } from "@/context";

export const StudentTableHeader = () => {
  const { t } = useTranslation();
  const { setChildren, openModal } = useModalContext();

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
        <StyledTableCell width={"5%"} padding="none">
          <Button
            onClick={() => {
              setChildren(<AddEditStudentModal />);
              openModal();
            }}
          >
            <AddIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
