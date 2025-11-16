import { useAddEditSubject } from "@/hooks";
import type { SubjectDto } from "@/types";

export const useAddEditSubjectModal = (
  semesterId?: string,
  subjectId?: string
) => {
  const { addEditSubject } = useAddEditSubject(semesterId, subjectId);

  const onSubmit = (data: SubjectDto) => {
    addEditSubject(data);
  };

  return { onSubmit };
};
