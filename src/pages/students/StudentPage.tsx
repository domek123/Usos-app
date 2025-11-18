import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Info, StudentTable } from "./components";

export const StudentPage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Typography variant="h3">{t("students.title")}</Typography>
      <Info />
      <StudentTable />
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
