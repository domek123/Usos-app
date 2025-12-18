import { createContext, useContext } from "react";
import type { useFilters } from "../../hooks";
type StudentsGradeContextType = ReturnType<typeof useFilters>;

export const StudentsGradeContext = createContext<
  StudentsGradeContextType | undefined
>(undefined);

export const useStudentsGradeContext = (): StudentsGradeContextType => {
  const context = useContext(StudentsGradeContext);
  if (!context) {
    throw new Error(
      "useStudentsGradeContext must be used within a StudentsGradeProvider"
    );
  }
  return context;
};
