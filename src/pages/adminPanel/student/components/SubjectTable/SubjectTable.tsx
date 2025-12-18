import {
  Button,
  styled,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { SubjectTableRow } from "./SubjectTableRow";
import { StyledTableCell } from "@/styles";
import { DefaultTableContainer } from "@/components";
import { useModalContext } from "@/context";
import { AddSubjectEnrollmentModal } from "../../modals";
import type { SubjectTableProps } from "./types";
import { useUserStore } from "@/stores";
import { PermissionType } from "@/types";

export const SubjectTable = ({ subjects, semesterId }: SubjectTableProps) => {
  const { t } = useTranslation();
  const { setModalContent } = useModalContext();
  const { role } = useUserStore();

  return (
    <DefaultTableContainer>
      <TableHead>
        <TableRow>
          <StyledTableCell width={"30%"}>
            <CellTypography>{t("student.table.subject")}</CellTypography>
          </StyledTableCell>
          <StyledTableCell width={"30%"}>
            <CellTypography>{t("student.table.teacher")}</CellTypography>
          </StyledTableCell>
          <StyledTableCell width={"35%"} align="center">
            <CellTypography>{t("student.table.grade")}</CellTypography>
          </StyledTableCell>
          {role === PermissionType.ADMIN && (
            <StyledTableCell sx={{ padding: "0px" }}>
              <Button
                onClick={() => {
                  setModalContent(
                    <AddSubjectEnrollmentModal
                      semesterId={semesterId}
                      enrollmentSubjects={subjects}
                    />
                  );
                }}
              >
                <AddIcon />
              </Button>
            </StyledTableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {subjects.map((subject) => (
          <SubjectTableRow subject={subject} />
        ))}
      </TableBody>
    </DefaultTableContainer>
  );
};

const CellTypography = styled(Typography)({
  fontWeight: "600",
});
