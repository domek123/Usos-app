import type { Teacher } from "@/types";

export type DetailsModalProps = {
  name: string;
  teacher: Teacher;
};

export type ModalHeaderProps = {
  closeModal: () => void;
  name: string;
};

export type ModalContentProps = {
  teacher: Teacher;
};
