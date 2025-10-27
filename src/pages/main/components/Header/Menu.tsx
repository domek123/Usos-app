import { CustomButton } from "@/components";
import { useTranslation } from "react-i18next";
import { useHeader } from "../../hooks";
import { useState } from "react";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const HeaderMenu = () => {
  const { t } = useTranslation();
  const { user } = useHeader();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomButton
        onClick={handleClick}
        icon={<MenuIcon style={{ color: "white" }} />}
        textSx={{ color: "white" }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginLeft: "-55px" }}
      >
        {user.status === "Student" ? (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>{" "}
            {t("header.changePassword")}
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>{" "}
            {t("header.settings")}
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          {t("header.logOut")}
        </MenuItem>
      </Menu>
    </>
  );
};
