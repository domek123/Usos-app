import { type ReactNode } from "react";
import { useSemester } from "../../hooks";
import { SemesterContext } from "./useSemesterContext";

type SemesterContextProviderProps = {
  children: ReactNode;
};

export const SemesterContextProvider = ({
  children,
}: SemesterContextProviderProps) => {
  const values = useSemester();

  return (
    <SemesterContext.Provider value={{ ...values }}>
      {children}
    </SemesterContext.Provider>
  );
};
