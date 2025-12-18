import { CustomButton, SearchInput, YearSelect } from "@/components";
import { SemesterSelect } from "./SemesterSelect";
import { useStudentsGradeContext } from "../context";
import { SubjectSelect } from "./SubjectSelect";
import { Stack, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

export const StudentFilters = () => {
  const { t } = useTranslation();
  const {
    selectedYear,
    setSelectedYear,
    search,
    setSearch,
    refetch,
    reset,
    setIsReset,
  } = useStudentsGradeContext();

  return (
    <FilterContainer>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <YearSelect
        value={selectedYear}
        setYears={(val) => setSelectedYear(val as number)}
        multiple={false}
      />
      <SemesterSelect />
      <SubjectSelect />
      <CustomButton
        text={t("common.search")}
        variant="contained"
        sx={{ width: "100px" }}
        onClick={() => {
          refetch();
          setIsReset(false);
        }}
      />
      <Stack
        flexDirection={"row"}
        gap="10px"
        justifyContent={"flex-end"}
        width={"100%"}
      >
        <CustomButton
          text={t("common.reset")}
          variant="contained"
          onClick={reset}
          sx={{ width: "100px" }}
        />
      </Stack>
    </FilterContainer>
  );
};

const FilterContainer = styled(Stack)({
  flexDirection: "row",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "space-between",
});
