import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import {
  AddSemesterSection,
  SemesterFilters,
  SemestersTable,
} from "./components";
import { SemesterContextProvider } from "./context";

export const SemestersPage = () => {
  return (
    <MainContainer>
      <AddSemesterSection />
      <SemesterContextProvider>
        <SemesterFilters />
        <SemestersTable />
      </SemesterContextProvider>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  padding: "20px",
  gap: "10px",
  alignItems: "center",
});
