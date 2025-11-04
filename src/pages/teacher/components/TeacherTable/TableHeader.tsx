import { StyledTableCell } from "@/styles";
import { Button, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import AddIcon from "@mui/icons-material/Add";
import { useModalContext } from "@/context";
import { AddEditTeacherModal } from "../../modals/AddEditTeacherModal/AddEditTeacherModal";
export const TeacherTableHeader = () => {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  const { setChildren } = useModalContext();

  return (
    <TableHead sx={{ backgroundColor: "lightgray" }}>
      <TableRow>
        <StyledTableCell width={"25%"}>
          <Typography>{t("teachers.table.title")}</Typography>
        </StyledTableCell>
        <StyledTableCell width={"25%"}>
          <Typography>{t("teachers.table.name")}</Typography>
        </StyledTableCell>
        <StyledTableCell width={"25%"}>
          <Typography>{t("teachers.table.email")}</Typography>
        </StyledTableCell>
        <StyledTableCell width={"20%"}>
          <Typography>{t("teachers.table.phone")}</Typography>
        </StyledTableCell>
        <StyledTableCell padding="none">
          <Button
            onClick={() => {
              openModal();
              setChildren(<AddEditTeacherModal />);
            }}
          >
            <AddIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
