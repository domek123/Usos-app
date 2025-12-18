import { DefaultTableContainer } from "@/components";
import { useStudentsGradeContext } from "../../context";
import { TableBody, TableHead, TableRow, Typography } from "@mui/material";
import { StyledTableCell } from "@/styles";
import { StudentGradeRow } from "./StudentGradeRow";
import { useTranslation } from "react-i18next";

export const StudentGradeTable = () => {
  const { t } = useTranslation();
  const { filteredStudents } = useStudentsGradeContext();

  return (
    <>
      <DefaultTableContainer>
        <TableHead sx={{ backgroundColor: "lightgray" }}>
          <TableRow>
            <StyledTableCell width={"5%"} align="center">
              <Typography>{t("teacherPanel.table.indexNumber")}</Typography>
            </StyledTableCell>
            <StyledTableCell width={"30%"}>
              <Typography>{t("teacherPanel.table.name")}</Typography>
            </StyledTableCell>
            <StyledTableCell width={"20%"}>
              <Typography>{t("teacherPanel.table.email")}</Typography>
            </StyledTableCell>
            <StyledTableCell width={"40%"}>
              <Typography>{t("teacherPanel.table.grades")}</Typography>
            </StyledTableCell>

            <StyledTableCell width={"5%"}>
              <Typography></Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredStudents.map((student) => (
            <StudentGradeRow studentData={student} />
          ))}
        </TableBody>
      </DefaultTableContainer>
    </>
  );
};
