import type { TextFieldProps } from "@mui/material";

export type SearchInputProps = {
  onTextChange: (value: string) => void;
} & TextFieldProps;
