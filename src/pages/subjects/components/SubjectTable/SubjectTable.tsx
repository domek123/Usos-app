import { TableBody } from "@mui/material";
import { SubjectTableHeader } from "./TableHeader";
import { SubjectTableRow } from "./TableRow";
import { useSemesterContext } from "../../context";
import { useFetchSubjects } from "@/hooks/fetch/useFetchSubjects";
import { DefaultTableContainer } from "@/components";

export const SubjectTable = () => {
  const { selectedSemester } = useSemesterContext();
  const { subjects } = useFetchSubjects(selectedSemester.id);

  return (
    <DefaultTableContainer>
      <SubjectTableHeader />
      <TableBody>
        {subjects.map((subject) => (
          <SubjectTableRow subject={subject} key={subject.id} />
        ))}
      </TableBody>
    </DefaultTableContainer>
  );
};
