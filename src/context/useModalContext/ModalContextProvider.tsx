import { type ReactNode } from "react";
import { ModalContext } from "./useModalContext";
import { useModal } from "@/hooks";

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const values = useModal();

  return (
    <ModalContext.Provider value={{ ...values }}>
      {children}
    </ModalContext.Provider>
  );
};
