import type { Subject } from "@/types";

export type DropdownProps = {
  name: string;
  subjects: Subject[];
};

export type DropdownTableProps = {
  subjects: Subject[];
};

export type DropdownRowProps = {
  subject: Subject;
};
