import { Stack, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <MainContainer>
      <NavLink
        to="grades"
        style={({ isActive }) => ({
          textDecoration: "none",
          fontWeight: isActive ? 700 : 400,
        })}
      >
        <Typography color="white">Oceny</Typography>
      </NavLink>
      <Typography color="white">|</Typography>
      <NavLink
        to="timetable"
        style={({ isActive }) => ({
          textDecoration: "none",
          fontWeight: isActive ? 700 : 400,
        })}
      >
        <Typography color="white">Plan zajęć</Typography>
      </NavLink>
      <Typography color="white">|</Typography>
      <NavLink
        to="contact"
        style={({ isActive }) => ({
          textDecoration: "none",
          fontWeight: isActive ? 700 : 400,
        })}
      >
        <Typography color="white">Kontakt</Typography>
      </NavLink>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  height: "40px",
  backgroundColor: "#5E50EF",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
});
