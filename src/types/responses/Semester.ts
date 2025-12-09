import type { EnrolledSubject, Subject } from "@/types";

export interface Semester {
  id: string;
  name: string;
  isCurrent: boolean;
  yearId: number;
  subjects: Subject[] | EnrolledSubject[];
}
