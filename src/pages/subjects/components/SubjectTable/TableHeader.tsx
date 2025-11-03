import { TableHead, TableRow, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import { StyledTableCell } from "./styles";

export const SubjectTableHeader = () => {
  const { t } = useTranslation();

  return (
    <TableHead sx={{ backgroundColor: "lightgray" }}>
      <TableRow>
        <StyledTableCell width="40%">
          <Typography>{t("subjects.table.name")}</Typography>
        </StyledTableCell>
        <StyledTableCell width="10%">
          <Typography>{t("subjects.table.ects")}</Typography>
        </StyledTableCell>
        <StyledTableCell width="45%">
          <Typography>{t("subjects.table.teacher")}</Typography>
        </StyledTableCell>
        <StyledTableCell sx={{ padding: "0px" }}>
          <Button>
            <AddIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
