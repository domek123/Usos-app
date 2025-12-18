import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Checkbox,
} from "@mui/material";
import type { FacultySelectProps } from "./FacultySelect.types";
import { useFetchFaculties } from "@/hooks";
import { useTranslation } from "react-i18next";

export const FacultySelect = ({
  value,
  setFaculties,
  width = "100%",
}: FacultySelectProps) => {
  const { t } = useTranslation();
  const { faculties } = useFetchFaculties();

  return (
    <FormControl size="small" sx={{ width }}>
      <InputLabel id="faculties-label">
        {t("students.addEditModal.faculties")}
      </InputLabel>

      <Select
        multiple
        value={value}
        labelId="faculties-label"
        label={t("students.addEditModal.faculties")}
        onChange={(e) => {
          setFaculties(e.target.value as string[]);
        }}
        renderValue={(selectedIds) => {
          const selectedNames = faculties
            .filter((f) => selectedIds.includes(f.id))
            .map((f) => f.name);

          return selectedNames.join(", ");
        }}
      >
        {faculties.map((faculty) => (
          <MenuItem key={faculty.id} value={faculty.id}>
            <Checkbox checked={value.includes(faculty.id)} />
            <Typography>{faculty.name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
