import { Stack, styled, Typography } from "@mui/material";
import { useSemesterContext } from "../../context";
import { SubjectTable } from "../SubjectTable/SubjectTable";
import { useTranslation } from "react-i18next";

export const MainContent = () => {
  const { selectedSemester, isSidebarOpen } = useSemesterContext();
  const { t } = useTranslation();

  return (
    <MainContainer
      sx={{ transform: isSidebarOpen ? "translate(0)" : "translate(-10%)" }}
    >
      <Typography variant="h3">{selectedSemester?.name}</Typography>
      <SubjectInfoContainer>
        <Typography variant="h6">{t("subjects.title")}</Typography>
        <SubjectTable />
      </SubjectInfoContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  width: "100%",
  alignItems: "center",
  height: "100%",
  transition: "all 0.3s ease",
  padding: "10px",
});

const SubjectInfoContainer = styled(Stack)({
  width: "100%",
});
