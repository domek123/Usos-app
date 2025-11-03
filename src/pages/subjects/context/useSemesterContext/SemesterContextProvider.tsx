import { type ReactNode } from "react";
import { useSemester } from "../../hooks";
import { SubjectContext } from "./useSemesterContext";

type SemesterContextProviderProps = {
  children: ReactNode;
};

export const SemesterContextProvider = ({
  children,
}: SemesterContextProviderProps) => {
  const values = useSemester();

  return (
    <SubjectContext.Provider value={{ ...values }}>
      {children}
    </SubjectContext.Provider>
  );
};
