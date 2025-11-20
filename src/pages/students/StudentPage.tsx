import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Info, StudentTable } from "./components";
import { StudentsProvider } from "./context";

export const StudentPage = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <StudentsProvider>
        <Typography variant="h3">{t("students.title")}</Typography>
        <Info />
        <StudentTable />
      </StudentsProvider>
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
