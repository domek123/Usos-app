import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  styled,
  Typography,
} from "@mui/material";
import { DropdownRow } from "./DropdownRow";
import { useTranslation } from "react-i18next";
import { CustomCell } from "./styles";
import type { DropdownTableProps } from "./types";

export const DropdownTable = ({ subjects }: DropdownTableProps) => {
  const { t } = useTranslation();

  return (
    <TableContainer sx={{ width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <CustomCell width={"45%"}>
              <CellTypography>{t("grades.table.subject")}</CellTypography>
            </CustomCell>
            <CustomCell width={"5%"} align="center">
              <CellTypography>{t("grades.table.ects")}</CellTypography>
            </CustomCell>
            <CustomCell width={"35%"} align="center">
              <CellTypography>{t("grades.table.grade")}</CellTypography>
            </CustomCell>
            <CustomCell
              width={"15%"}
              sx={{ borderRight: "1px solid lightgray" }}
            ></CustomCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subjects.map((item) => (
            <DropdownRow subject={item} key={item.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const CellTypography = styled(Typography)({
  fontWeight: "600",
});
