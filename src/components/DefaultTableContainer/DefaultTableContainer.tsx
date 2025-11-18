import { theme } from "@/theme";
import { Table, TableContainer } from "@mui/material";
import type { ReactNode } from "react";

export const DefaultTableContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <TableContainer>
      <Table
        size="small"
        sx={{ border: `1px solid ${theme.palette.grey[400]}` }}
      >
        {children}
      </Table>
    </TableContainer>
  );
};
