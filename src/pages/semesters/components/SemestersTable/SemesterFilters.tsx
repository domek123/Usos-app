import { CustomButton, YearSelect } from "@/components";
import { useSemesterContext } from "../../context";
import { useTranslation } from "react-i18next";
import { Checkbox, Stack, TextField, Typography } from "@mui/material";
import { RowBetweenStack } from "@/styles";

export const SemesterFilters = () => {
  const { t } = useTranslation();
  const {
    setFilterYears,
    filterYears,
    semesterName,
    setSemesterName,
    reset,
    isCurrent,
    setIsCurrent,
  } = useSemesterContext();

  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap="10px"
    >
      <Typography>{t("semesters.filterSemesters")}</Typography>
      <TextField
        value={semesterName}
        size="small"
        label={t("subjects.semesterName")}
        onChange={(e) => setSemesterName(e.target.value)}
      />
      <YearSelect
        value={filterYears}
        setYears={(val) => setFilterYears(val as number[])}
      />
      <RowBetweenStack onClick={() => setIsCurrent((prev) => !prev)}>
        <Typography>{t("semesters.active")}</Typography>
        <Checkbox checked={isCurrent} />
      </RowBetweenStack>

      <CustomButton
        variant="contained"
        text={t("common.reset")}
        sx={{ width: "100px" }}
        onClick={reset}
      />
    </Stack>
  );
};
