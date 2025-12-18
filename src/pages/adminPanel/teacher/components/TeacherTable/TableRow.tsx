import { TableRow, Typography } from "@mui/material";
import type { TeacherTableRowProps } from "./types";
import { StyledTableCell } from "@/styles";
import { TeacherMenu } from "./TeacherMenu";

export const TeacherTableRow = ({ teacher }: TeacherTableRowProps) => {
  return (
    <TableRow>
      <StyledTableCell>
        <Typography>{teacher.title}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>
          {teacher.firstName} {teacher.lastName}
        </Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>{teacher.email}</Typography>
      </StyledTableCell>
      <StyledTableCell>
        <Typography>{teacher.phone}</Typography>
      </StyledTableCell>
      <StyledTableCell padding="none">
        <TeacherMenu teacher={teacher} />
      </StyledTableCell>
    </TableRow>
  );
};
