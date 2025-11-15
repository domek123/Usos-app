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

export const TeacherSelect = ({
  defaultValue,
  setValue,
}: TeacherSelectProps) => {
  const { t } = useTranslation();
  const { teachers } = useFetchTeachers();

  return (
    <FormControl size="small">
      <InputLabel id="teacher-label">{t("subjects.table.teacher")}</InputLabel>
      <Select
        defaultValue={defaultValue}
        labelId="teacher-label"
        label={t("subjects.table.teacher")}
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      >
        {teachers.map((teacher) => (
          <MenuItem key={teacher.teacherId} value={teacher.teacherId}>
            <Typography>
              {teacher.title} {teacher.firstName} {teacher.lastName}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
