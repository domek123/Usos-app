import { DefaultTableContainer } from "@/components";
import { StyledTableCell } from "@/styles";
import { theme } from "@/theme";
import { TableHead, TableRow, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";
import { ScheduleTableBody } from "./ScheduleBody";
import { Days } from "@/types";

export const ScheduleTable = () => {
  const { t } = useTranslation();

  return (
    <DefaultTableContainer>
      <TableHead>
        <TableRow>
          <StyledTableCell />
          {Object.values(Days).map((day) => (
            <StyledTableCell
              key={day}
              align="center"
              sx={{ color: theme.palette.primary.main }}
            >
              <Typography>{t(`days.${day}`)}</Typography>
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <ScheduleTableBody />
    </DefaultTableContainer>
  );
};
