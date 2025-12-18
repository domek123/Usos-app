import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DropdownTable, Info } from "./components";
import { CustomDropdown } from "@/components";
import { useUserStore } from "@/stores";
import { useFetchStudentsSemesters } from "@/hooks";
import type { EnrolledSubject } from "@/types";

export const GradesPage = () => {
  const { t } = useTranslation();
  const { studentId } = useUserStore();
  const { studentSemesters } = useFetchStudentsSemesters(studentId as number);

  return (
    <MainContainer>
      <Typography variant="h3">{t("grades.title")}</Typography>
      <Info />
      <Stack>
        {studentSemesters.map((item) => {
          return (
            <CustomDropdown
              key={item.id}
              name={item.name}
              children={
                <DropdownTable subjects={item.subjects as EnrolledSubject[]} />
              }
            />
          );
        })}
      </Stack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  padding: "40px",
  gap: "20px",
});
