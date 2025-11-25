import { Stack, styled, Typography } from "@mui/material";
import { useHeader } from "@pages/main/hooks";
import { HeaderMenu } from "./Menu";
import { useNavigate } from "react-router-dom";
import { useFacultyStore } from "@/stores";

export const Header = () => {
  const { user } = useHeader();
  const navigate = useNavigate();
  const faculty = useFacultyStore((s) => s.faculty);

  return (
    <MainContainer>
      <Typography
        variant="h6"
        component="h1"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        AGH {faculty?.name}
      </Typography>
      <Stack flexDirection="row" gap="5px" alignItems="center">
        <Typography>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography>{`(${user.status})`}</Typography>
        <HeaderMenu />
      </Stack>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "10px",
  paddingRight: 0,
  flexWrap: "wrap",
}));
