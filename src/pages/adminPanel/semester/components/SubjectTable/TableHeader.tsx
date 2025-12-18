import { Button, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { useModalContext } from "@/context";
import { StyledTableCell } from "@/styles";
import { AddEditSubjectModal } from "../../modals";
import { useLocation } from "react-router-dom";

export const SubjectTableHeader = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const semesterId = location.state.id || "";
  const { setModalContent } = useModalContext();

  return (
    <TableHead sx={{ backgroundColor: "lightgray" }}>
      <TableRow>
        <StyledTableCell width="10%" align="center">
          <Typography>{t("subjects.table.close")}</Typography>
        </StyledTableCell>
        <StyledTableCell width="40%">
          <Typography>{t("subjects.table.name")}</Typography>
        </StyledTableCell>
        <StyledTableCell width="10%">
          <Typography>{t("subjects.table.ects")}</Typography>
        </StyledTableCell>
        <StyledTableCell width="35%">
          <Typography>{t("subjects.table.teacher")}</Typography>
        </StyledTableCell>

        <StyledTableCell padding="none">
          <Button
            onClick={() => {
              setModalContent(<AddEditSubjectModal semesterId={semesterId} />);
            }}
          >
            <AddIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
