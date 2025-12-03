import { Stack, styled, Typography } from "@mui/material";
import { HeaderMenu } from "./Menu";
import { useNavigate } from "react-router-dom";
import { useFacultyStore, useUserStore } from "@/stores";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { firstName, lastName, role } = useUserStore();
  const { faculty } = useFacultyStore();

  return (
    <MainContainer>
      <Typography
        variant="h6"
        component="h1"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        {t("header.AGH")} {faculty?.name}
      </Typography>
      <Stack flexDirection="row" gap="5px" alignItems="center">
        <Typography>
          {firstName} {lastName}
        </Typography>
        <Typography>{t(`userRole.${role}`)}</Typography>
        <HeaderMenu />
      </Stack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "10px",
  paddingRight: 0,
  flexWrap: "wrap",
}));
