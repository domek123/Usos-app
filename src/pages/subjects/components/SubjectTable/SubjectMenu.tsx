import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import type { SubjectTableRowProps } from "./types";
import { AddEditSubjectModal } from "../../modals";
import { useSemesterContext } from "../../context";
import { useDeleteSubject } from "@/hooks";
import type { SubjectType } from "@/types";

export const SubjectMenu = ({ subject }: SubjectTableRowProps) => {
  const { setChildren, openModal } = useModalContext();
  const { selectedSemester } = useSemesterContext();
  const { deleteSubject } = useDeleteSubject(subject.id);

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setChildren(
          <AddEditSubjectModal
            semesterId={selectedSemester.id}
            subject={{
              ...subject,
              gradeTypes: subject.grades.map((g) => g.type as SubjectType),
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
