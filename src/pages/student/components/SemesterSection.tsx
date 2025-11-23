import { CustomButton } from "@/components";
import { useModalContext } from "@/context";
import { RowBetweenStack } from "@/styles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AddSemesterEnrollmentModal } from "../modals";
import type { Semester } from "@/types";

export const SemesterSection = ({ semesters }: { semesters: Semester[] }) => {
  const { t } = useTranslation();
  const { setChildren, openModal } = useModalContext();

  return (
    <RowBetweenStack>
      <Typography variant="h6">{t("student.semesters")}</Typography>
      <CustomButton
        variant="contained"
        text={t("student.addSemester")}
        onClick={() => {
          setChildren(
            <AddSemesterEnrollmentModal enrollmentSemesters={semesters} />
          );
          openModal();
        }}
      />
    </RowBetweenStack>
  );
};
