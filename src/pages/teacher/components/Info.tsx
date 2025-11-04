import { InfoContainer } from "@/components";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();
  return (
    <InfoContainer title={t("teachers.infoTitle")}>
      <Typography>{t("teachers.infoMessage")}</Typography>
    </InfoContainer>
  );
};
