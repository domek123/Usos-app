import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Grade, Subject } from "@/types";

export type GradeFormatterProps = Subject;

export const GradeFormatter = ({ grades }: { grades: Grade[] }) => {
  const { t } = useTranslation();

  return (
    <>
      <GradeStack>
        <Typography>{t("grades.table.finalGrade")}</Typography>
        <Typography fontSize={"13px"}>{`(brak ocen)`}</Typography>
      </GradeStack>
      {grades.map((item) => (
        <GradeStack>
          <Typography>{t(`gradeType.${item.type}`)}</Typography>
          <Stack flexDirection={"row"} gap="5px">
            {item.gradeHistory.map((grade) => (
              <Typography color="red">{`(${grade})`}</Typography>
            ))}
            {item.currentGrade ? (
              <Typography>{item.currentGrade}</Typography>
            ) : (
              <Typography fontSize={"13px"}>{`(brak ocen)`}</Typography>
            )}
          </Stack>
        </GradeStack>
      ))}
    </>
  );
};
const GradeStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
