import { createContext, useContext } from "react";
import type { useTeacher } from "../../hooks";

export type TeacherContextType = ReturnType<typeof useTeacher>;

export const TeacherContext = createContext<TeacherContextType | undefined>(
  undefined
);

export const useTeacherContext = () => {
  const context = useContext(TeacherContext);

  if (!context) {
    throw new Error("useTeacherContext must be used within a TeacherProvider");
  }

  return context;
};
