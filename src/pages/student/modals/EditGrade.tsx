import { useEditGrade } from "@/hooks";
import type { EditGradeProps } from "./types";
import { ModalFooter, ModalHeader } from "@/components";
import { Select, Typography, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const EditGrade = ({ grade, subjectName }: EditGradeProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const { editGrade } = useEditGrade(grade.id, location.state.id);

  const [value, setValue] = useState<number>(grade.currentGrade || 2);

  const gradeOptions: number[] = [];
  for (let v = 2; v <= 5; v += 0.5) {
    gradeOptions.push(Number(v));
  }

  return (
    <>
      <ModalHeader title={`${t("subjects.editGradeModal.title")}`} />
      <Typography>{`${subjectName} - ${t(
        "gradeType." + grade.type
      )}`}</Typography>
      <Select
        size="small"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        sx={{ minWidth: 120 }}
      >
        {gradeOptions.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
      <ModalFooter text={t("common.save")} action={() => editGrade(value)} />
    </>
  );
};
