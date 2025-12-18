import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFetchSemesters } from "@/hooks";
import { useStudentsGradeContext } from "../context";

export const SemesterSelect = () => {
  const { t } = useTranslation();

  const { selectedYear, selectedSemesterId, setSelectedSemesterId } =
    useStudentsGradeContext();

  const { semesters } = useFetchSemesters(selectedYear);

  return (
    <Autocomplete
      size="small"
      sx={{ width: "200px" }}
      options={semesters}
      value={semesters.find((s) => s.id === selectedSemesterId) || null}
      disabled={semesters.length === 0}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(_, newValue) => {
        setSelectedSemesterId(newValue?.id ?? "");
      }}
      renderInput={(params) => (
        <TextField {...params} label={t("teacherPanel.filters.semester")} />
      )}
    />
  );
};
