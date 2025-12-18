import { createContext, useContext } from "react";
import type { useStudents } from "../../hooks";
type StudentsContextType = ReturnType<typeof useStudents>;

export const StudentsContext = createContext<StudentsContextType | undefined>(
  undefined
);

export const useStudentsContext = (): StudentsContextType => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error(
      "useStudentsContext must be used within a StudentsProvider"
    );
  }
  return context;
};
