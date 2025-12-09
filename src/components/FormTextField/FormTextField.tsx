import { TextField } from "@mui/material";
import type { FormTextFieldProps } from "./FormTextField.types";

export const FormTextField = ({
  label,
  errorHandler,
  ...props
}: FormTextFieldProps) => {
  return (
    <TextField
      size="small"
      label={label}
      fullWidth
      error={!!errorHandler}
      helperText={errorHandler?.message}
      {...props}
    />
  );
};
