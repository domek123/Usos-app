import type {ButtonProps, SxProps} from "@mui/material";
import type {ReactNode} from "react";

export type CustomButtonProps = {
    onClick?: () => void;
    text: string;
    sx?: SxProps
    textSx?: SxProps
    icon?: ReactNode
} & ButtonProps