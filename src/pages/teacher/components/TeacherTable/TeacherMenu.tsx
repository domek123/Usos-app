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
  const { setChildren, openModal } = useModalContext();

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
          }}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>

          <Typography>{t("common.edit")}</Typography>
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
            openModal();
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
