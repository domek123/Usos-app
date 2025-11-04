import { Stack, styled, Typography } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import type { InfoContainerProps } from "./IntoContainer.types";

export const InfoContainer = ({ children, title }: InfoContainerProps) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <InfoOutlineIcon />
        <Typography>{title}</Typography>
      </HeaderContainer>
      <ContentStack>{children}</ContentStack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  boxShadow: "0px 0px 24px -7px rgba(90, 90, 90, 1)",
  borderRadius: "5px",
});

const HeaderContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  flexDirection: "row",
  gap: "5px",
  padding: "5px",
  borderRadius: "5px 5px 0 0 ",
  color: "white",
}));

const ContentStack = styled(Stack)({
  padding: "5px 15px",
});
