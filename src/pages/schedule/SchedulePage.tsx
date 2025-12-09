import { ScheduleTable } from "@/components";
import { useFetchCurrentSemester } from "@/hooks";
import { Stack, styled, Typography } from "@mui/material";

export const SchedulePage = () => {
  const { currentSemester, isLoading } = useFetchCurrentSemester(2025);
  console.log("data", currentSemester, "endData");
  if (isLoading || currentSemester === null || currentSemester === undefined) {
    return <Typography>Brak planu</Typography>;
  }

  return (
    <MainContainer>
      <Typography variant="h3">{currentSemester!.name}</Typography>
      <ScheduleTable semesterId={currentSemester!.id} />;
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  padding: "20px",
  gap: "20px",
});
