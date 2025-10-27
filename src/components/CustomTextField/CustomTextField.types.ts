import type {SxProps} from "@mui/material";
import type {ReactNode} from "react";

export type CustomTextFieldProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    sx?: SxProps;
    icon:ReactNode
}