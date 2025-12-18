import { useModalContext } from "@/context";
import type { TeacherTableRowProps } from "./types";
import { AddEditTeacherModal, DeleteTeacherModal } from "../../modals";
import { EditDeleteMenu } from "@/components";
export const TeacherMenu = ({ teacher }: TeacherTableRowProps) => {
  const { setModalContent } = useModalContext();

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setModalContent(<AddEditTeacherModal teacher={teacher} />);
      }}
      openDeleteModal={() => {
        setModalContent(
          <DeleteTeacherModal
            firstName={teacher.firstName}
            lastName={teacher.lastName}
            personId={teacher.personId}
          />
        );
      }}
    />
  );
};
