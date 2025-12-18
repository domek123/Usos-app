import { Stack, styled, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { RowBetweenStack } from "@/styles";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "@/theme";
import { ScheduleTable } from "@/components";
import { useEditSem } from "./hooks";
import { SubjectTable } from "./components";
import { useLocation } from "react-router-dom";
import { useFetchSemesterSubjects } from "@/hooks";
import type { Subject } from "@/types";

export const SemesterInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const semesterId = location.state.id || "";

  const { semester } = useFetchSemesterSubjects(semesterId);

  const { semesterName, setSemesterName, isEdit, setIsEdit, handleEdit } =
    useEditSem(semesterId);

  return (
    <MainContainer>
      <RowBetweenStack sx={{ justifyContent: "center", gap: "10px" }}>
        {isEdit ? (
          <>
            <TextField
              size="small"
              value={semesterName}
              onChange={(e) => setSemesterName(e.target.value)}
            />
            <CheckIcon
              sx={{ cursor: "pointer", color: theme.palette.primary.main }}
              onClick={handleEdit}
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
            <Typography variant="h3">{semester?.name}</Typography>
            <EditIcon
              fontSize="large"
              onClick={() => {
                setIsEdit(true);
                setSemesterName(semester!.name);
              }}
              sx={{ cursor: "pointer" }}
            />
          </>
        )}
      </RowBetweenStack>
      <SubjectInfoContainer>
        <Typography variant="h6">{t("subjects.title")}</Typography>
        <SubjectTable subjects={(semester?.subjects as Subject[]) || []} />
        <Typography variant="h6" textAlign={"left"} width={"100%"}>
          {t("subjects.schedule")}
        </Typography>
        <ScheduleTable semesterId={semesterId} />
      </SubjectInfoContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  width: "100%",
  alignItems: "center",
  height: "100%",
  padding: "10px",
  gap: "20px",
});

const SubjectInfoContainer = styled(Stack)({
  width: "100%",
  gap: "20px",
});
