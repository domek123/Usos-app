import type { SubjectType } from "@/types";

export type AddEditSubjectModalProps = {
  semesterId: string;
  subject?: {
    id: string;
    teacherId?: string;
    name: string;
    ects: number;
    gradeTypes: SubjectType[];
  };
};
