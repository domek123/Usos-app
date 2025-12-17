import { CustomButton, SearchInput, YearSelect } from "@/components";
import { Stack } from "@mui/material";
import { useStudentsContext } from "../context";
import { useFacultyStore } from "@/stores";
import { useTranslation } from "react-i18next";
import { FacultySelect } from ".";

export const StudentFilters = () => {
  const { t } = useTranslation();
  const { faculty } = useFacultyStore();
  const {
    setSearch,
    search,
    selectedFaculty,
    setSelectedFaculty,
    reset,
    selectedYears,
    setSelectedYears,
  } = useStudentsContext();

  return (
    <Stack flexDirection={"row"} gap="10px" flexWrap={"wrap"}>
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: "200px" }}
      />
      {!faculty && (
        <FacultySelect
          value={selectedFaculty}
          setFaculties={setSelectedFaculty}
          width="200px"
        />
      )}
      <YearSelect
        value={selectedYears}
        setYears={(values) => setSelectedYears(values as number[])}
      />
      <CustomButton
        onClick={reset}
        variant="contained"
        text={t("common.reset")}
      />
    </Stack>
  );
};
