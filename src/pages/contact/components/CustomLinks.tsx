import { Stack, styled, Typography } from "@mui/material";
import { Link, useMatch } from "react-router-dom";

type NavLinkProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

export const CustomLink = ({ to, icon, label }: NavLinkProps) => {
  const match = useMatch(`/contact/${to}/*`);

  return (
    <StyledLink to={to} data-active={!!match}>
      <Stack direction="row" spacing={2} alignItems="center">
        {icon}
        <Typography fontWeight={500}>{label}</Typography>
      </Stack>
    </StyledLink>
  );
};

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius,
  display: "block",
  transition: "background-color 0.2s, color 0.2s",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },

  "&[data-active='true']": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    "& svg": {
      color: theme.palette.primary.contrastText,
    },
  },
}));
