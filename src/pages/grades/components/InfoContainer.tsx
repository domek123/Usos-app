import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { useTranslation } from "react-i18next";

export const InfoContainer = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <HeaderContainer>
        <InfoOutlineIcon />
        <Typography>{t("grades.alert.title")}</Typography>
      </HeaderContainer>
      <ContentStack>
        <ul>
          <li>
            <Typography>{t("grades.alert.message")}</Typography>
          </li>
          <li>
            <Typography>{t("grades.alert.secondMessage")}</Typography>
          </li>
        </ul>
      </ContentStack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  boxShadow: "0px 0px 24px -7px rgba(90, 90, 90, 1)",
  borderRadius: "5px",
});

const HeaderContainer = styled(Stack)({
  backgroundColor: "#5E50EF",
  width: "100%",
  flexDirection: "row",
  gap: "5px",
  padding: "5px",
  borderRadius: "5px 5px 0 0 ",
  color: "white",
});

const ContentStack = styled(Stack)({
  padding: "5px 15px",
});
