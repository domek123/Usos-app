import { TableRow, Typography } from "@mui/material";
import { CustomCell } from "./styles";
import { DetailsModal } from "../../modals";
import { GradeFormatter } from "@/utils";
import type { EnrolledSubject } from "@/types";

export const DropdownRow = ({ subject }: { subject: EnrolledSubject }) => {
  return (
    <TableRow>
      <CustomCell>
        <Typography>{subject.name}</Typography>
      </CustomCell>
      <CustomCell align="center">
        <Typography>{subject.ects}</Typography>
      </CustomCell>
      <CustomCell align="center">
        <GradeFormatter grades={subject.grades} />
      </CustomCell>
      <CustomCell align="center" sx={{ borderRight: "1px solid lightgray" }}>
        <DetailsModal name={subject.name} teacher={subject.teacher} />
      </CustomCell>
    </TableRow>
  );
};
