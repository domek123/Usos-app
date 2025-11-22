import type { Subject } from "@/types";
import type { ReactNode } from "react";

export type DropdownTableProps = {
  subjects: Subject[];
  modal?: ReactNode;
};

export type DropdownRowProps = {
  subject: Subject;
  modal?: ReactNode;
};

export type CustomDropdownProps = {
  name: string;
  headerChildren?: ReactNode;
  subjects: Subject[];
  modal?: ReactNode;
};
