import type { EnrolledSubject, Grade } from "@/types";

export type AddSubjectEnrollmentProps = {
  semesterId: string;
  enrollmentSubjects: EnrolledSubject[];
};

export type EditGradeProps = {
  grade: Grade;
  subjectName: string;
  additionalAction?: () => void;
};
