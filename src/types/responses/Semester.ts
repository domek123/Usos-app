import type { EnrolledSubject, Subject } from "@/types";

export interface Semester {
  id: string;
  name: string;
  isCurrent: boolean;
  subjects: Subject[] | EnrolledSubject[];
}
