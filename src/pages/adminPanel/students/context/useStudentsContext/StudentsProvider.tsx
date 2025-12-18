import type { ReactNode } from "react";
import { useStudents } from "../../hooks";
import { StudentsContext } from "./useStudentsContext";

export const StudentsProvider = ({ children }: { children: ReactNode }) => {
  const students = useStudents();

  return (
    <StudentsContext.Provider value={students}>
      {children}
    </StudentsContext.Provider>
  );
};
