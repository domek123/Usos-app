import { type ReactNode } from "react";
import { useTeacher } from "../../hooks";
import { TeacherContext } from "./useTeacherContext";

type TeacherContextProviderProps = {
  children: ReactNode;
};

export const TeacherContextProvider = ({
  children,
}: TeacherContextProviderProps) => {
  const values = useTeacher();

  return (
    <TeacherContext.Provider value={{ ...values }}>
      {children}
    </TeacherContext.Provider>
  );
};
