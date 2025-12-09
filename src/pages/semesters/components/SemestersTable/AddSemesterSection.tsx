import { CustomButton, YearSelect } from "@/components";
import { Stack, TextField, Typography } from "@mui/material";
import { useAddSem } from "../../hooks";
import { useTranslation } from "react-i18next";

export const AddSemesterSection = () => {
  const { t } = useTranslation();
  const {
    semesterName,
    setSemesterName,
    handleAddSemester,
    semesterYear,
    setSemesterYear,
  } = useAddSem();

  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap="10px"
    >
      <Typography>{t("semesters.addSemester")}</Typography>
      <TextField
        value={semesterName}
        size="small"
        label={t("subjects.semesterName")}
        onChange={(e) => setSemesterName(e.target.value)}
      />
      <YearSelect
        value={semesterYear}
        multiple={false}
        setYears={(val) => setSemesterYear(val as number)}
      />
      <CustomButton
        variant="contained"
        text={t("common.add")}
        onClick={handleAddSemester}
        sx={{ width: "100px" }}
      />
    </Stack>
  );
};
