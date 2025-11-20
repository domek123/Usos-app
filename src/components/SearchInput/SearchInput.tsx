import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { SearchInputProps } from "./SearchInput.types";

export const SearchInput = (props: SearchInputProps) => {
  const { t } = useTranslation();

  return (
    <TextField
      size="small"
      label={t("common.search")}
      {...props}
      onChange={(e) => props.onTextChange(e.target.value)}
    />
  );
};
