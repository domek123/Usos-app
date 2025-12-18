import { StyledTableCell } from "@/styles";
import { TableHead, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const SemestersHead = ({
  semestersLength,
}: {
  semestersLength: number;
}) => {
  const { t } = useTranslation();

  return (
    <TableHead sx={{ backgroundColor: "lightgray" }}>
      <TableRow>
        <StyledTableCell width={"5%"} align="center">
          <Typography>{t("semesters.table.active")}</Typography>
        </StyledTableCell>
        <StyledTableCell width={"40%"}>
          <Typography>{t("semesters.table.name")}</Typography>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Typography>{t("semesters.table.year")}</Typography>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Typography>{t("semesters.table.subjectCount")}</Typography>
        </StyledTableCell>
        <StyledTableCell width={"5%"} align="center">
          <Typography>{semestersLength}</Typography>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
