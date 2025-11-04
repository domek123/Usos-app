import { useMenu } from "@/hooks";
import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { useModalContext } from "@/context";
import { AddEditTeacherModal } from "../../modals/AddEditTeacherModal/AddEditTeacherModal";
import type { TeacherTableRowProps } from "./types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export const TeacherMenu = ({ teacher }: TeacherTableRowProps) => {
  const { t } = useTranslation();
  const { anchorEl, handleMenuClose, handleMenuOpen, isMenuOpen } = useMenu();
  const { setChildren, openModal } = useModalContext();

  return (
    <>
      <Button onClick={handleMenuOpen}>
        <MenuIcon fontSize="small" />
      </Button>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setChildren(<AddEditTeacherModal teacher={teacher} />);
            openModal();
          }}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>

          <Typography>{t("teachers.addEditModal.editButton")}</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <Typography>{t("teachers.deleteModal.deleteButton")}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
