import { TableBody } from "@mui/material";
import { SubjectTableHeader } from "./TableHeader";
import { SubjectTableRow } from "./TableRow";
import { DefaultTableContainer } from "@/components";
import type { Subject } from "@/types";

export const SubjectTable = ({ subjects }: { subjects: Subject[] }) => {
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
