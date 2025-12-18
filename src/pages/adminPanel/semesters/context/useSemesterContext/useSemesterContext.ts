import { createContext, useContext } from "react";
import type { useSemester } from "../../hooks";

export type SemesterContextType = ReturnType<typeof useSemester>;

export const SemesterContext = createContext<SemesterContextType | undefined>(
  undefined
);

export const useSemesterContext = () => {
  const context = useContext(SemesterContext);

  if (!context) {
    throw new Error(
      "useSemesterContext must be used within a SemesterProvider"
    );
  }

  return context;
};
