import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import { AddEditSubjectModal } from "../../modals";
import { useDeleteSubject } from "@/hooks";
import type { Subject } from "@/types";
import { useLocation } from "react-router-dom";

export const SubjectMenu = ({ subject }: { subject: Subject }) => {
  const { setModalContent } = useModalContext();
  const location = useLocation();
  const semesterId = location.state.id || "";
  const { deleteSubject } = useDeleteSubject(subject.id, semesterId);

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setModalContent(
          <AddEditSubjectModal
            semesterId={semesterId}
            subject={{
              ...subject,
              teacherId: subject.teacher?.teacherId,
            }}
          />
        );
      }}
      openDeleteModal={deleteSubject}
    />
  );
};
