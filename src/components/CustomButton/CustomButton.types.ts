import type { ButtonProps, SxProps } from "@mui/material";

export type CustomButtonProps = {
  text?: string;
  textSx?: SxProps;
} & ButtonProps;
