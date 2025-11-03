import { createContext, useContext } from "react";
import type { useSemester } from "../../hooks";

export type SubjectContextType = ReturnType<typeof useSemester>;

export const SubjectContext = createContext<SubjectContextType | undefined>(
  undefined
);

export const useSemesterContext = () => {
  const context = useContext(SubjectContext);

  if (!context) {
    throw new Error("useSemesterContext must be used within a SubjectProvider");
  }

  return context;
};
