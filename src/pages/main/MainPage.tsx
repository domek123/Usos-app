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
  height: "100vh",
  flexDirection: "row",
  justifyContent: "center",
});

const MainPageContainer = styled(Stack)({
  width: "100%",
  maxWidth: "1000px",
});
