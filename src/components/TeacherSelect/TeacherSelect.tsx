import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFetchTeachers } from "@/hooks";
import type { TeacherSelectProps } from "./TeacherSelect.types";
import { formatTeacherData } from "@/utils";

export const TeacherSelect = ({ value, setValue }: TeacherSelectProps) => {
  const { t } = useTranslation();
  const { teachers } = useFetchTeachers();

  const selectedTeacher = teachers.find((t) => t.teacherId === value) || null;

  return (
    <Autocomplete
      size="small"
      options={teachers}
      value={selectedTeacher}
      disabled={teachers.length === 0}
      getOptionLabel={(option) => formatTeacherData(option)}
      isOptionEqualToValue={(option, value) =>
        option.teacherId === value.teacherId
      }
      onChange={(_, newValue) => {
        setValue(newValue?.teacherId ?? "");
      }}
      renderInput={(params) => (
        <TextField {...params} label={t("subjects.table.teacher")} />
      )}
    />
  );
};
