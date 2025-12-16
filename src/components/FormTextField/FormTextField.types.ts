import type { TextFieldProps } from "@mui/material";
import type { FieldError } from "react-hook-form";

export type FormTextFieldProps = TextFieldProps & {
  label: string;
  errorHandler?: FieldError;
  isPasswordField?: boolean;
};
