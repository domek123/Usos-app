import { IconButton, TableRow, Typography } from "@mui/material";
import { StyledTableCell } from "@/styles";
import { SubjectMenu } from "./SubjectMenu";
import type { Subject } from "@/types";
import StopIcon from "@mui/icons-material/Stop";
import { useLocation } from "react-router-dom";
import { useCloseOpenSubject } from "@/hooks";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const SubjectTableRow = ({ subject }: { subject: Subject }) => {
  const { state } = useLocation();
  const semesterId = state.id || "";

  const { closeOpenSubject } = useCloseOpenSubject(semesterId, subject.id);

  return (
    <TableRow>
      <StyledTableCell align="center" padding="none">
        <IconButton onClick={() => closeOpenSubject(!subject.closed)}>
          {!subject.closed ? (
            <StopIcon color="error" />
          ) : (
            <PlayArrowIcon color="success" />
          )}
        </IconButton>
      </StyledTableCell>
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
