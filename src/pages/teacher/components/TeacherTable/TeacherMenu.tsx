import { useModalContext } from "@/context";
import type { TeacherTableRowProps } from "./types";
import { AddEditTeacherModal, DeleteTeacherModal } from "../../modals";
import { EditDeleteMenu } from "@/components";
export const TeacherMenu = ({ teacher }: TeacherTableRowProps) => {
  const { setChildren, openModal } = useModalContext();

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setChildren(<AddEditTeacherModal teacher={teacher} />);
        openModal();
      }}
      openDeleteModal={() => {
        setChildren(
          <DeleteTeacherModal
            firstName={teacher.firstName}
            lastName={teacher.lastName}
            id={teacher.personId}
          />
        );
        openModal();
      }}
    />
  );
};
