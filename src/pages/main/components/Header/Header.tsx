import { Stack, styled, Typography } from "@mui/material";
import { useHeader } from "@pages/main/hooks";
import { HeaderMenu } from "./Menu";

export const Header = () => {
  const { user } = useHeader();
  return (
    <MainContainer>
      <Typography variant="h6" component="h1">
        AGH
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
  height: "40px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "10px",
  paddingRight: 0,
}));
