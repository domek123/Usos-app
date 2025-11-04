import type { useModal } from "@/hooks";
import { createContext, useContext } from "react";

export type ModalContextType = ReturnType<typeof useModal>;

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};
