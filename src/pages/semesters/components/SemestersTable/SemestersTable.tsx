import { TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { DefaultTableContainer } from "@/components";
import { StyledTableCell } from "@/styles";
import { useSemesterContext } from "../../context";
import { useTranslation } from "react-i18next";
import { SemestersTableRow } from "./SemestersTableRow";

export const SemestersTable = () => {
  const { t } = useTranslation();
  const { semesters } = useSemesterContext();

  return (
    <DefaultTableContainer>
      <TableHead>
        <TableRow>
          <StyledTableCell width={"5%"} align="center">
            <Typography>Aktywuj</Typography>
          </StyledTableCell>
          <StyledTableCell width={"50%"}>
            <Typography>{t("semesters.table.name")}</Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography>{t("semesters.table.year")}</Typography>
          </StyledTableCell>
          <StyledTableCell align="center">
            <Typography>{t("semesters.table.subjectCount")}</Typography>
          </StyledTableCell>
          <StyledTableCell width={"5%"} align="center">
            <Typography>{semesters.length}</Typography>
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {semesters.map((semester) => (
          <SemestersTableRow key={semester.id} semester={semester} />
        ))}
      </TableBody>
    </DefaultTableContainer>
  );
};
