import { Stack, styled } from "@mui/material";
import { MainContent, Sidebar } from "./components";
import { SemesterContextProvider } from "./context";

export const SubjectsPage = () => {
  return (
    <SemesterContextProvider>
      <MainContainer>
        <Sidebar />
        <MainContent />
      </MainContainer>
    </SemesterContextProvider>
  );
};

const MainContainer = styled(Stack)({
  overflow: "hidden",
  flexDirection: "row",
  width: "100%",
  height: "100%",
});
