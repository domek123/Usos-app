import { CustomButton, SearchInput } from "@/components";
import { Stack } from "@mui/material";
import { useStudentsContext } from "../context";
import { useFacultyStore } from "@/stores";
import { useTranslation } from "react-i18next";
import { FacultySelect } from ".";

export const StudentFilters = () => {
  const { t } = useTranslation();
  const { faculty } = useFacultyStore();
  const { setSearch, search, selectedFaculty, setSelectedFaculty, reset } =
    useStudentsContext();

  return (
    <Stack flexDirection={"row"} gap="10px">
      <SearchInput
        value={search}
        onTextChange={(val) => setSearch(val)}
        sx={{ width: "200px" }}
      />
      {!faculty && (
        <FacultySelect
          value={selectedFaculty}
          setFaculties={setSelectedFaculty}
          width="200px"
        />
      )}
      <CustomButton
        onClick={reset}
        variant="contained"
        text={t("common.reset")}
      />
    </Stack>
  );
};
