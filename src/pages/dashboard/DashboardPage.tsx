import { useFetchFaculties } from "@/hooks";
import { Stack, styled } from "@mui/material";
import { FacultyBlock } from "./components";
import { useFacultyStore } from "@/stores";
import { useEffect } from "react";

export const Dashboard = () => {
  const { faculties } = useFetchFaculties();
  const { setFaculty } = useFacultyStore();

  useEffect(() => {
    setFaculty(null);
  }, []);

  return (
    <MainContainer>
      {faculties.map((faculty) => (
        <FacultyBlock faculty={faculty} />
      ))}
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  padding: "40px",
  flexWrap: "wrap",
});
