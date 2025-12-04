import { ScheduleTable } from "@/components";
import { useFetchCurrentSemester } from "@/hooks";
import { Stack, styled, Typography } from "@mui/material";

export const SchedulePage = () => {
  const { currentSemester, isLoading } = useFetchCurrentSemester();
  if (!isLoading)
    return (
      <MainContainer>
        <Typography variant="h3">{currentSemester?.name}</Typography>
        <ScheduleTable semesterId={currentSemester!.id} />;
      </MainContainer>
    );
};

const MainContainer = styled(Stack)({
  padding: "20px",
  gap: "20px",
});
