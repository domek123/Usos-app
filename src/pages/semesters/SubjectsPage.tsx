import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { SemestersTable } from "./components";
import { AddSemesterSection } from "./components/SemestersTable/AddSemesterSection";
import { SemesterFilters } from "./components/SemestersTable/SemesterFilters";
import { SemesterContextProvider } from "./context";

export const SemestersPage = () => {
  return (
    <SemesterContextProvider>
      <MainContainer>
        <AddSemesterSection />
        <SemesterFilters />
        <SemestersTable />
      </MainContainer>
    </SemesterContextProvider>
  );
};

const MainContainer = styled(Stack)({
  padding: "20px",
  gap: "10px",
  alignItems: "center",
});
