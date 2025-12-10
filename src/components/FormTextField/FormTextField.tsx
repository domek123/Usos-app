import { TextField } from "@mui/material";
import type { FormTextFieldProps } from "./FormTextField.types";
import { useTranslation } from "react-i18next";

export const FormTextField = ({
  label,
  errorHandler,
  ...props
}: FormTextFieldProps) => {
  const { t } = useTranslation();

  return (
    <TextField
      size="small"
      label={label}
      fullWidth
      error={!!errorHandler}
      helperText={t(errorHandler?.message || "")}
      {...props}
    />
  );
};
