import type { ReactNode } from "react";
import { useFilters } from "../../hooks";
import { StudentsGradeContext } from "./useStudentsGradeContext";

export const StudentsGradeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const students = useFilters();

  return (
    <StudentsGradeContext.Provider value={students}>
      {children}
    </StudentsGradeContext.Provider>
  );
};
