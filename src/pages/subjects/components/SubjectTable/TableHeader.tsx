import { Button, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { useModalContext } from "@/context";
import { StyledTableCell } from "@/styles";
import { AddEditSubjectModal } from "../../modals/AddEditSubjectModal";
import { useSemesterContext } from "../../context";

export const SubjectTableHeader = () => {
  const { t } = useTranslation();
  const { openModal, setChildren } = useModalContext();
  const { selectedSemester } = useSemesterContext();

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
          <Button
            onClick={() => {
              setChildren(
                <AddEditSubjectModal semesterId={selectedSemester.id} />
              );
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
