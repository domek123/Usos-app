import { theme } from "@/theme";
import { Table, TableContainer } from "@mui/material";
import type { DefaultTableContainerType } from "./DefaultTableContainer.types";

export const DefaultTableContainer = ({
  children,
  sxStyles,
}: DefaultTableContainerType) => {
  return (
    <TableContainer sx={sxStyles}>
      <Table
        size="small"
        sx={{ border: `1px solid ${theme.palette.grey[400]}` }}
      >
        {children}
      </Table>
    </TableContainer>
  );
};
