import { EditDeleteMenu } from "@/components";
import { useModalContext } from "@/context";
import type { SubjectTableRowProps } from "./types";
import { AddEditSubjectModal } from "../../modals";
import { useSemesterContext } from "../../context";

export const SubjectMenu = ({ subject }: SubjectTableRowProps) => {
  const { setChildren, openModal } = useModalContext();
  const { selectedSemester } = useSemesterContext();
  const { id, name, ects, teacher } = subject;

  return (
    <EditDeleteMenu
      openEditModal={() => {
        setChildren(
          <AddEditSubjectModal
            subject={{
              id,
              name,
              ects,
              teacherId: teacher.teacherId,
              semesterId: selectedSemester.id,
            }}
          />
        );
        openModal();
      }}
      openDeleteModal={() => {
        openModal();
      }}
    />
  );
};
