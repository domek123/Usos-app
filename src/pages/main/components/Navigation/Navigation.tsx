import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <CustomLink to="grades">
        <WhiteTypography>{t("navigation.grades")}</WhiteTypography>
      </CustomLink>
      <WhiteTypography>|</WhiteTypography>
      <CustomLink to="schedule">
        <WhiteTypography>{t("navigation.schedule")}</WhiteTypography>
      </CustomLink>
      <WhiteTypography>|</WhiteTypography>
      <CustomLink to="contact">
        <WhiteTypography>{t("navigation.contact")}</WhiteTypography>
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
  borderBottom: "2px solid #F08D4F",
});

const CustomLink = styled(NavLink)({
  textDecoration: "none",
});

const WhiteTypography = styled(Typography)({
  color: "white",
});
