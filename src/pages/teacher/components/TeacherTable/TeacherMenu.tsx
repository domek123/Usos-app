import { useMenu } from "@/hooks";
import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { useModalContext } from "@/context";
import type { TeacherTableRowProps } from "./types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddEditTeacherModal, DeleteTeacherModal } from "../../modals";
export const TeacherMenu = ({ teacher }: TeacherTableRowProps) => {
  const { t } = useTranslation();
  const { anchorEl, handleMenuClose, handleMenuOpen, isMenuOpen } = useMenu();
  const { setChildren, setModalWidth, openModal } = useModalContext();

  return (
    <>
      <Button onClick={handleMenuOpen}>
        <MenuIcon fontSize="small" />
      </Button>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <CustomMenuItem
          onClick={() => {
            handleMenuClose();
            setChildren(<AddEditTeacherModal teacher={teacher} />);
            openModal();
            setModalWidth("400px");
          }}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>

          <Typography>{t("teachers.addEditModal.editButton")}</Typography>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => {
            handleMenuClose();
            setChildren(
              <DeleteTeacherModal
                firstName={teacher.firstName}
                lastName={teacher.lastName}
                id={teacher.personId}
              />
            );
            setModalWidth("400px");
            openModal();
          }}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <Typography>{t("teachers.deleteModal.deleteButton")}</Typography>
        </CustomMenuItem>
      </Menu>
    </>
  );
};

const CustomMenuItem = styled(MenuItem)({
  height: "30px",
  padding: "10px",
});
