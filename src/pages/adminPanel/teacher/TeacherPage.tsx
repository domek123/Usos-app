import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Info, TeacherTable } from "./components";

export const TeacherPage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Typography variant="h3">{t("teachers.title")}</Typography>
      <Info />
      <TeacherTable />
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  padding: "10px",
  alignItems: "center",
  gap: "20px",
  width: "80%",
  marginLeft: "10%",
});
