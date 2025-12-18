import { Button, Stack, styled, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Info, SemesterSection, SubjectTable } from "./components";
import {
  useDeleteSemesterAssignment,
  useFetchPersonData,
  useFetchStudentsSemesters,
} from "@/hooks";
import { CustomDropdown } from "@/components";
import { PermissionType, type EnrolledSubject } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import { theme } from "@/theme";

export const StudentPage = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const { studentSemesters } = useFetchStudentsSemesters(id);
  const { person } = useFetchPersonData(id, PermissionType.STUDENT);
  const { deleteSemesterAssignment } = useDeleteSemesterAssignment();

  return (
    <MainContainer>
      <Typography variant="h3">
        {person?.firstName} {person?.lastName}
      </Typography>
      <Info />
      <SemesterSection semesters={studentSemesters} />
      <Stack>
        {studentSemesters.map((semester) => (
          <CustomDropdown
            headerChildren={
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSemesterAssignment({
                    studentId: id,
                    semesterId: semester.id,
                  });
                }}
              >
                <DeleteIcon
                  sx={{ color: theme.palette.common.white }}
                  fontSize="small"
                />
              </Button>
            }
            children={
              <SubjectTable
                subjects={semester.subjects as EnrolledSubject[]}
                semesterId={semester.id}
              />
            }
            name={semester.name}
            key={semester.id}
          />
        ))}
      </Stack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  padding: "40px",
  gap: "20px",
});
