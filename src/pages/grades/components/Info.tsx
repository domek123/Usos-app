import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InfoContainer } from "@/components";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <InfoContainer title={t("grades.alert.title")}>
      <ul>
        <li>
          <Typography>{t("grades.alert.message")}</Typography>
        </li>
        <li>
          <Typography>{t("grades.alert.secondMessage")}</Typography>
        </li>
      </ul>
    </InfoContainer>
  );
};
