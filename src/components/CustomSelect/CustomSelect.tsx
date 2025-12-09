import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import type { SelectFieldProps } from "./CustomSelect.types";

export const SelectField = ({
  label,
  value,
  onChange,
  options,
  disabled = false,
}: SelectFieldProps) => (
  <FormControl size="small" fullWidth disabled={disabled}>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 100,
            overflowY: "auto",
          },
        },
      }}
    >
      {options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          <Typography>{label}</Typography>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
