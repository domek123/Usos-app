import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import type { SubjectTableRowProps } from "./types";
import { AddEditSubjectModal } from "../../modals";
import { useSemesterContext } from "../../context";
import { useDeleteSubject } from "@/hooks";

export const SubjectMenu = ({ subject }: SubjectTableRowProps) => {
  const { setChildren, openModal } = useModalContext();
  const { selectedSemester } = useSemesterContext();
  const { deleteSubject } = useDeleteSubject(subject.id);
  const { id, name, ects, teacher } = subject;

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setChildren(
          <AddEditSubjectModal
            semesterId={selectedSemester.id}
            subject={{
              id,
              name,
              ects,
              teacherId: teacher?.teacherId,
            }}
          />
        );
        openModal();
      }}
      openDeleteModal={deleteSubject}
    />
  );
};
