import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import { AddEditSubjectModal } from "../../modals";
import { useSemesterContext } from "../../context";
import { useDeleteSubject } from "@/hooks";
import type { Subject } from "@/types";

export const SubjectMenu = ({ subject }: { subject: Subject }) => {
  const { setChildren, openModal } = useModalContext();
  const { selectedSemester } = useSemesterContext();
  const { deleteSubject } = useDeleteSubject(subject.id);
  console.log(subject);
  return (
    <EditDeleteMenu
      openEditModal={() => {
        setChildren(
          <AddEditSubjectModal
            semesterId={selectedSemester.id}
            subject={{
              ...subject,
              teacherId: subject.teacher?.teacherId,
            }}
          />
        );
        openModal();
      }}
      openDeleteModal={deleteSubject}
    />
  );
};
