import { TextField, type TextFieldProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export const SearchInput = (props: TextFieldProps) => {
  const { t } = useTranslation();

  return <TextField size="small" label={t("common.search")} {...props} />;
};
