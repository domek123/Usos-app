import { Stack, styled, TextField, Typography } from "@mui/material";
import { useSemesterContext } from "../../context";
import { SubjectTable } from "../SubjectTable/SubjectTable";
import { useTranslation } from "react-i18next";
import { RowBetweenStack } from "@/styles";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "@/theme";
import { useEditSemester } from "@/hooks";
import { ScheduleTable } from "../Schedule/ScheduleTable";

export const MainContent = () => {
  const { t } = useTranslation();

  const {
    selectedSemester,
    isSidebarOpen,
    editSemesterName,
    setEditSemesterName,
    isEdit,
    setIsEdit,
  } = useSemesterContext();

  const { editSemester } = useEditSemester(selectedSemester.id);

  return (
    <MainContainer
      sx={{ transform: isSidebarOpen ? "translate(0)" : "translate(-10%)" }}
    >
      {selectedSemester.id === "" ? (
        <Typography variant="h4">{t("subjects.noSemester")}</Typography>
      ) : (
        <>
          <RowBetweenStack sx={{ justifyContent: "center", gap: "10px" }}>
            {isEdit ? (
              <>
                <TextField
                  size="small"
                  value={editSemesterName}
                  onChange={(e) => setEditSemesterName(e.target.value)}
                />
                <CheckIcon
                  sx={{ cursor: "pointer", color: theme.palette.primary.main }}
                  onClick={() => {
                    editSemester(editSemesterName);
                    setIsEdit(false);
                  }}
                />
                <CloseIcon
                  sx={{
                    cursor: "pointer",
                    color: theme.palette.secondary.main,
                  }}
                  onClick={() => setIsEdit(false)}
                />
              </>
            ) : (
              <>
                <Typography variant="h3">{selectedSemester.name}</Typography>
                <EditIcon
                  fontSize="large"
                  onClick={() => {
                    setIsEdit(true);
                    setEditSemesterName(selectedSemester.name);
                  }}
                  sx={{ cursor: "pointer" }}
                />
              </>
            )}
          </RowBetweenStack>
          <SubjectInfoContainer>
            <Typography variant="h6">{t("subjects.title")}</Typography>
            <SubjectTable />
          </SubjectInfoContainer>
        </>
      )}
      <ScheduleTable />
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  width: "100%",
  alignItems: "center",
  height: "100%",
  transition: "all 0.3s ease",
  padding: "10px",
  gap: "20px",
});

const SubjectInfoContainer = styled(Stack)({
  width: "100%",
});
