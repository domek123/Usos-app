import { InfoContainer } from "@/components";
import { useFacultyStore } from "@/stores";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();
  const { faculty } = useFacultyStore();

  return (
    <InfoContainer title={t("students.infoTitle")}>
      <Typography>
        {t(`students.${!faculty ? "facultyInfoMessage" : "infoMessage"}`)}
      </Typography>
    </InfoContainer>
  );
};
