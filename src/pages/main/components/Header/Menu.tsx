import { CustomButton } from "@/components";
import { useTranslation } from "react-i18next";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMenu } from "@/hooks";
import { useUserStore } from "@/stores";
import { PermissionType } from "@/types";

export const HeaderMenu = () => {
  const { t } = useTranslation();
  const { role } = useUserStore();
  const { anchorEl, handleMenuClose, handleMenuOpen, isMenuOpen } = useMenu();

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
        {role === PermissionType.STUDENT ? (
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>{" "}
            {t("header.changePassword")}
          </MenuItem>
        ) : (
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>{" "}
            {t("header.settings")}
          </MenuItem>
        )}
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          {t("header.logOut")}
        </MenuItem>
      </Menu>
    </>
  );
};
