import { TableRow, Typography } from "@mui/material";
import type { SubjectTableRowProps } from "./types";
import { StyledTableCell } from "@/styles";
import { SubjectMenu } from "./SubjectMenu";

export const SubjectTableRow = ({ subject }: SubjectTableRowProps) => {
  return (
    <TableRow>
      <StyledTableCell>
        <Typography>{subject.name}</Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography>{subject.ects}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        {subject.teacher && (
          <Typography>
            {subject.teacher.title} {subject.teacher.firstName}{" "}
            {subject.teacher.lastName}
          </Typography>
        )}
      </StyledTableCell>
      <StyledTableCell padding="none">
        <SubjectMenu subject={subject} />
      </StyledTableCell>
    </TableRow>
  );
};
