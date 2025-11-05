import { type ReactNode, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [children, setChildren] = useState<ReactNode>();
  const [modalWidth, setModalWidth] = useState<string | undefined>();

  const closeModal = () => {
    setIsOpen(false);
    setChildren(undefined);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    closeModal,
    openModal,
    children,
    setChildren,
    modalWidth,
    setModalWidth,
  };
};
