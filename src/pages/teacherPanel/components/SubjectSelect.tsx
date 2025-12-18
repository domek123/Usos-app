import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFetchSemesterSubjects } from "@/hooks";
import { useStudentsGradeContext } from "../context";
import type { Subject } from "@/types";

export const SubjectSelect = () => {
  const { t } = useTranslation();

  const {
    selectedSemesterId,
    setSelectedSubjectId,
    selectedSubjectId,
    setSelectedSubjectName,
  } = useStudentsGradeContext();

  const { semester } = useFetchSemesterSubjects(selectedSemesterId);

  const subjects = (semester?.subjects as Subject[]) || [];

  return (
    <Autocomplete
      size="small"
      sx={{ width: "200px" }}
      options={subjects}
      value={subjects.find((s) => s.id === selectedSubjectId) || null}
      disabled={semester?.subjects.length === 0 || selectedSemesterId === ""}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(_, newValue) => {
        setSelectedSubjectId(newValue?.id ?? "");
        setSelectedSubjectName(newValue?.name ?? "");
      }}
      renderInput={(params) => (
        <TextField {...params} label={t("teacherPanel.filters.subject")} />
      )}
    />
  );
};
