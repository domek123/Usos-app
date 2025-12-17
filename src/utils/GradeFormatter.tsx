import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Grade } from "@/types";
import { RowBetweenStack } from "@/styles";
import { useModalContext } from "@/context";
import { EditGrade } from "@/pages/student/modals";
import { getFinalGrade } from "./calculateFinalGrade";

type GradeFormatterProps = {
  grades: Grade[];
  subjectName?: string;
  isClosed: boolean;
};

export const GradeFormatter = ({
  grades,
  subjectName,
  isClosed,
}: GradeFormatterProps) => {
  const { t } = useTranslation();
  const { setModalContent } = useModalContext();
  console.log(isClosed);
  return (
    <>
      <RowBetweenStack>
        <Typography>{t("grades.table.finalGrade")}</Typography>
        {!isClosed ? (
          <Typography fontSize={"13px"}>{t("grades.noGrade")}</Typography>
        ) : (
          <Typography>
            {getFinalGrade(grades.map((val) => val.currentGrade || 0))}
          </Typography>
        )}
      </RowBetweenStack>
      {grades.map((item) => (
        <RowBetweenStack
          sx={{ cursor: subjectName && "pointer" }}
          onClick={() => {
            if (subjectName)
              setModalContent(
                <EditGrade grade={item} subjectName={subjectName} />
              );
          }}
        >
          <Typography>{t(`gradeType.${item.type}`)}</Typography>
          {item.currentGrade ? (
            <Typography
              sx={{ color: item.currentGrade === 2 ? "red" : "none" }}
            >
              {item.currentGrade}
            </Typography>
          ) : (
            <Typography fontSize={"13px"}>{t("grades.noGrade")}</Typography>
          )}
        </RowBetweenStack>
      ))}
    </>
  );
};
