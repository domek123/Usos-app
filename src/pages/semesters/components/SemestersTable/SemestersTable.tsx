import { TableBody } from "@mui/material";
import { DefaultTableContainer } from "@/components";
import { useSemesterContext } from "../../context";
import { SemestersTableRow } from "./SemestersTableRow";
import { SemestersHead } from "./SemestersHeader";

export const SemestersTable = () => {
  const { semesters } = useSemesterContext();

  return (
    <DefaultTableContainer>
      <SemestersHead semestersLength={semesters.length} />
      <TableBody>
        {semesters.map((semester) => (
          <SemestersTableRow key={semester.id} semester={semester} />
        ))}
      </TableBody>
    </DefaultTableContainer>
  );
};
