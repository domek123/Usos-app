import { Stack, styled } from "@mui/material";
import { Header, Navigation } from "./components";
import { Outlet } from "react-router-dom";
import { ModalContainer } from "@/components";

export const MainPage = () => {
  return (
    <MainContainer>
      <MainPageContainer>
        <Header />
        <Navigation />
        <Outlet />
        <ModalContainer />
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
  height: "100%",
  minHeight: "100vh",
  boxShadow: `0px 0px 24px -5px ${theme.palette.grey[800]}`,
}));
