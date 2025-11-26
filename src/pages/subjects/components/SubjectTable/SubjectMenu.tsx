import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import { AddEditSubjectModal } from "../../modals";
import { useSemesterContext } from "../../context";
import { useDeleteSubject } from "@/hooks";
import type { Subject } from "@/types";

export const SubjectMenu = ({ subject }: { subject: Subject }) => {
  const { setModalContent } = useModalContext();
  const { selectedSemester } = useSemesterContext();
  const { deleteSubject } = useDeleteSubject(subject.id, selectedSemester.id);

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setModalContent(
          <AddEditSubjectModal
            semesterId={selectedSemester.id}
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
