import { Stack, styled } from "@mui/material";
import { Header, Navigation } from "./components";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <MainContainer>
      <MainPageContainer>
        <Header />
        <Navigation />
        <Outlet />
      </MainPageContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  width: "100vw",
  flexDirection: "row",
  justifyContent: "center",
});

const MainPageContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: "1000px",
  boxShadow: `0px 0px 24px -5px ${theme.palette.grey[800]}`,
}));
