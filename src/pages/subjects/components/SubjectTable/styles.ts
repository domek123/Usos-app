import { styled, TableCell } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
  "&:last-child": {
    borderRight: "none",
  },
}));
