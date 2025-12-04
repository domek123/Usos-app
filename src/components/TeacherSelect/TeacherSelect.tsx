import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFetchTeachers } from "@/hooks";
import type { TeacherSelectProps } from "./TeacherSelect.types";
import { formatTeacherData } from "@/utils";

export const TeacherSelect = ({ value, setValue }: TeacherSelectProps) => {
  const { t } = useTranslation();
  const { teachers } = useFetchTeachers();

  return (
    <FormControl size="small">
      <InputLabel id="teacher-label">{t("subjects.table.teacher")}</InputLabel>
      <Select
        value={value}
        labelId="teacher-label"
        label={t("subjects.table.teacher")}
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      >
        {teachers.map((teacher) => (
          <MenuItem key={teacher.teacherId} value={teacher.teacherId}>
            <Typography>{formatTeacherData(teacher)}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
