import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { SearchInputProps } from "./SearchInput.types";

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const { t } = useTranslation();

  return (
    <TextField
      size="small"
      label={t("common.search")}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
