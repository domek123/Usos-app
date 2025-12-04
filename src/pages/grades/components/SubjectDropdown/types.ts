import type { EnrolledSubject } from "@/types";

export type DropdownProps = {
  name: string;
  subjects: EnrolledSubject[];
};

export type DropdownTableProps = {
  subjects: EnrolledSubject[];
};

export type DropdownRowProps = {
  subject: EnrolledSubject;
};
