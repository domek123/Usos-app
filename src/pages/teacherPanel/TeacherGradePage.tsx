import { Stack } from "@mui/material";
import { StudentFilters, StudentGradeTable } from "./components";
import { StudentsGradeProvider } from "./context";

export const TeacherGradePage = () => {
  return (
    <StudentsGradeProvider>
      <Stack padding={"20px"} gap="10px">
        <StudentFilters />
        <StudentGradeTable />
      </Stack>
    </StudentsGradeProvider>
  );
};
