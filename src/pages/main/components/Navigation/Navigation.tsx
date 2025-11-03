import { Stack, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useGetLinks } from "../../hooks";

export const Navigation = () => {
  const { links } = useGetLinks();

  return (
    <MainContainer>
      {links.map((link, index) => (
        <Stack key={link.to} direction={"row"} alignItems={"center"} gap={1}>
          <CustomLink to={link.to}>
            {({ isActive }) => (
              <NavText isActive={isActive}>{link.text}</NavText>
            )}
          </CustomLink>
          {index < links.length - 1 && <Typography color="white">|</Typography>}
        </Stack>
      ))}
    </MainContainer>
  );
};

const MainContainer = styled(Stack)(({ theme }) => ({
  height: "40px",
  backgroundColor: theme.palette.primary.main,
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
}));

const CustomLink = styled(NavLink)({
  textDecoration: "none",
});

const NavText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(({ isActive, theme }) => ({
  color: theme.palette.common.white,
  fontWeight: isActive ? 600 : 400,
  transition: "color 0.2s ease-in-out",
}));
