import { TableBody } from "@mui/material";
import { TeacherTableHeader } from "./TableHeader";
import { TeacherTableRow } from "./TableRow";
import { useFetchTeachers } from "@/hooks";
import { DefaultTableContainer } from "@/components";

export const TeacherTable = () => {
  const { teachers } = useFetchTeachers();

  return (
    <DefaultTableContainer>
      <TeacherTableHeader />
      <TableBody>
        {teachers.map((teacher) => (
          <TeacherTableRow teacher={teacher} />
        ))}
      </TableBody>
    </DefaultTableContainer>
  );
};
