import { SubjectType } from "@/types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import type { SubjectTypeSelectProps } from "./SubejctTypeSelect.types";

export const SubjectTypeSelect = ({
  value,
  setValue,
}: SubjectTypeSelectProps) => {
  const { t } = useTranslation();
  console.log(value);
  return (
    <FormControl size="small">
      <InputLabel id="teacher-label">{t("subjects.subSubjects")}</InputLabel>
      <Select
        value={value}
        labelId="teacher-label"
        label={t("subjects.subSubjects")}
        onChange={(e) => {
          setValue(e.target.value as SubjectType[]);
        }}
        renderValue={(selectedTypes) => {
          return selectedTypes.join(", ");
        }}
        multiple
      >
        {Object.values(SubjectType).map((value) => (
          <MenuItem key={value} value={value}>
            <Typography>{t(`gradeType.${value}`)}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
