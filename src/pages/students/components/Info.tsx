import { InfoContainer } from "@/components";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();
  return (
    <InfoContainer title={t("students.infoTitle")}>
      <Typography>{t("students.infoMessage")}</Typography>
    </InfoContainer>
  );
};
