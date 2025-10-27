import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <CustomLink to="grades">
        <Typography color="white">{t("navigation.grades")}</Typography>
      </CustomLink>
      <Typography color="white">|</Typography>
      <CustomLink to="schedule">
        <Typography color="white">{t("navigation.schedule")}</Typography>
      </CustomLink>
      <Typography color="white">|</Typography>
      <CustomLink to="contact">
        <Typography color="white">{t("navigation.contact")}</Typography>
      </CustomLink>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  height: "40px",
  backgroundColor: "#5E50EF",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
});

const CustomLink = styled(NavLink)({
  textDecoration: "none",
});
