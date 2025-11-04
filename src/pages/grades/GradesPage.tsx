import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CustomDropdown, Info } from "./components";
import data from "@/data/mockedData";

export const GradesPage = () => {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <Typography variant="h3">{t("grades.title")}</Typography>
      <Info />
      <Typography variant="h6">
        Informatyka, pierwszego stopnia, stacjonarne
      </Typography>
      <Stack>
        {data.semesters.map((item) => {
          console.log(item);
          return (
            <CustomDropdown
              key={item.id}
              name={item.name}
              subjects={item.subject}
            />
          );
        })}
        {/* <CustomDropdown />  */}
      </Stack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  padding: "40px",
  gap: "20px",
});
