import { CustomButton } from "@/components";
import { useTranslation } from "react-i18next";
import { ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMenu } from "@/hooks";
import { useUserStore } from "@/stores";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "@/context";
import { ChangePasswordModal } from "../../modals";

export const HeaderMenu = () => {
  const { t } = useTranslation();
  const { logout } = useUserStore();
  const { anchorEl, handleMenuClose, handleMenuOpen, isMenuOpen } = useMenu();
  const navigate = useNavigate();
  const { setModalContent } = useModalContext();

  return (
    <>
      <CustomButton
        onClick={handleMenuOpen}
        startIcon={<MenuIcon style={{ color: "white" }} />}
        textSx={{ color: "white" }}
      />
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{ marginLeft: "-55px" }}
      >
        <MenuItem
          onClick={() => {
            setModalContent(<ChangePasswordModal />);
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography>{t("header.changePassword")}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            navigate("login");
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <Typography>{t("header.logOut")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
