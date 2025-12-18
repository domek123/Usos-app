import type { Teacher } from "@/types";

export type DetailsModalProps = {
  name: string;
  teacher: Teacher;
};

export type ModalHeaderProps = {
  name: string;
};

export type ModalContentProps = {
  teacher: Teacher;
};
