import { Box, Stack, styled, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useTranslation } from "react-i18next";
import { useSemesterContext } from "../../context";
export const Sidebar = () => {
  const { t } = useTranslation();

  const {
    semesters,
    selectedSemester,
    setSelectedSemester,
    setIsSidebarOpen,
    isSidebarOpen,
  } = useSemesterContext();

  return (
    <MainContainer
      sx={{
        transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <SidebarHandler onClick={() => setIsSidebarOpen((prev) => !prev)}>
        {isSidebarOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </SidebarHandler>
      <Content>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {t("subjects.semesters")}
        </Typography>

        {semesters.map((semester) => (
          <SidebarItem
            key={semester.id}
            onClick={() => {
              setSelectedSemester(semester);
              setIsSidebarOpen(false);
            }}
            sx={
              selectedSemester?.id == semester.id
                ? {
                    backgroundColor: "primary.main",
                    color: "white",
                  }
                : {}
            }
          >
            <Typography>{semester.name}</Typography>
          </SidebarItem>
        ))}
      </Content>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(({ theme }) => ({
  zIndex: 10,
  position: "relative",
  height: "100%",
  minHeight: "91.5vh",
  width: "20%",
  backgroundColor: theme.palette.grey[300],
  transition: "transform 0.3s ease",
}));

const SidebarHandler = styled(Stack)(({ theme }) => ({
  position: "absolute",
  right: "-20px",
  height: "30px",
  width: "20px",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0 5px 5px 0",
  zIndex: 3,
}));

const Content = styled(Stack)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const SidebarItem = styled(Stack)(({ theme }) => ({
  padding: "8px 10px",
  borderRadius: "6px",
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
