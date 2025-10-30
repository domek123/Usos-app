import { Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InfoContainer } from "./components/InfoContainer";
import { CustomDropdown } from "./components";
import data from "@/data/mockedData";

export const GradesPage = () => {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <Typography variant="h3">{t("grades.title")}</Typography>
      <InfoContainer />
      <Typography variant="h6">
        Informatyka, pierwszego stopnia, stacjonarne
      </Typography>
      <Stack>
        {data.map((item) => {
          console.log(item);
          return (
            <CustomDropdown
              key={item.id}
              name={item.name}
              subjects={item.subjects}
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
