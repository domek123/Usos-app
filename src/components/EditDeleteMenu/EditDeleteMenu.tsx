import { useMenu } from "@/hooks";
import styled from "@emotion/styled";
import {
  Button,
  Menu,
  ListItemIcon,
  Typography,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import type { EditDeleteMenuProps } from "./EditDeleteMenu.types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";

export const EditDeleteMenu = ({
  openEditModal,
  openDeleteModal,
}: EditDeleteMenuProps) => {
  const { t } = useTranslation();
  const { anchorEl, handleMenuClose, handleMenuOpen, isMenuOpen } = useMenu();

  return (
    <>
      <Button onClick={handleMenuOpen}>
        <MenuIcon fontSize="small" />
      </Button>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <CustomMenuItem
          onClick={(e) => {
            e.stopPropagation();
            openEditModal();
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>

          <Typography>{t("common.edit")}</Typography>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={(e) => {
            e.stopPropagation();
            openDeleteModal();
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <Typography>{t("common.delete")}</Typography>
        </CustomMenuItem>
      </Menu>
    </>
  );
};

const CustomMenuItem = styled(MenuItem)({
  height: "30px",
  padding: "10px",
});
