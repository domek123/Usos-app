import { Stack, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import SendIcon from "@mui/icons-material/Send";
import CreateIcon from "@mui/icons-material/Create";
import { CustomLink } from "./components";
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>{t("contact.title")}</SidebarTitle>

        <CustomLink
          to="received"
          icon={<InboxIcon />}
          label={t("contact.sidebar.received")}
        />
        <CustomLink
          to="sent"
          icon={<SendIcon />}
          label={t("contact.sidebar.sent")}
        />
        <CustomLink
          to="create"
          icon={<CreateIcon />}
          label={t("contact.sidebar.create")}
        />
      </Sidebar>

      <Box flex={1} sx={{ background: "white" }}>
        <Outlet />
      </Box>
    </Container>
  );
};

const Container = styled(Stack)({
  flexDirection: "row",
  minHeight: "89vh",
  padding: "10px",
  gap: "5px",
  "@media (max-width:425px)": {
    flexDirection: "column",
  },
});

const Sidebar = styled(Stack)(({ theme }) => ({
  width: "20%",
  minWidth: "200px",
  "@media (max-width:425px)": {
    width: "100%",
    minWidth: "0",
  },
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  gap: theme.spacing(1),
}));

const SidebarTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));
