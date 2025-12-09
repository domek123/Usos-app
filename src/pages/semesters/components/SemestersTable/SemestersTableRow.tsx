import { StyledTableCell } from "@/styles";
import type { Semester } from "@/types";
import {
  Button,
  Stack,
  styled,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDeleteSemester, useSetCurrentSemester } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const SemestersTableRow = ({ semester }: { semester: Semester }) => {
  const { deleteSemester } = useDeleteSemester();
  const { setCurrent } = useSetCurrentSemester();
  const navigate = useNavigate();

  return (
    <TableRow
      sx={{ cursor: "pointer" }}
      onClick={() => navigate("/semester", { state: { id: semester.id } })}
    >
      <StyledTableCell padding="none" align="center">
        {!semester.isCurrent && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(semester.id);
            }}
          >
            <PlayArrowIcon fontSize="small" />
          </Button>
        )}
      </StyledTableCell>
      <StyledTableCell>
        <Stack flexDirection={"row"} alignItems={"center"} gap={"10px"}>
          <IsActiveBox
            sx={{ backgroundColor: semester.isCurrent ? "green" : "red" }}
          />
          <Typography>{semester.name}</Typography>
        </Stack>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Typography>{semester.yearId}</Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Tooltip
          title={semester.subjects.map((subject) => subject.name).join(", ")}
        >
          <Typography>{semester.subjects.length}</Typography>
        </Tooltip>
      </StyledTableCell>
      <StyledTableCell padding="none">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            deleteSemester(semester.id);
          }}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </StyledTableCell>
    </TableRow>
  );
};

const IsActiveBox = styled(Stack)({
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  border: "1px solid black",
});
