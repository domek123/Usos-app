import { IconButton, InputAdornment, TextField } from "@mui/material";
import type { FormTextFieldProps } from "./FormTextField.types";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const FormTextField = ({
  label,
  errorHandler,
  isPasswordField,
  ...props
}: FormTextFieldProps) => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(
    isPasswordField ? false : true
  );

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      size="small"
      label={label}
      fullWidth
      error={!!errorHandler}
      type={showPassword ? "text" : "password"}
      helperText={t(errorHandler?.message || "")}
      {...props}
      InputProps={
        isPasswordField
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : {}
      }
    />
  );
};
