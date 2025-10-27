import {Button, styled, Typography} from "@mui/material";
import type {CustomButtonProps} from "@components/CustomButton/CustomButton.types.ts";

export const CustomButton = (props:CustomButtonProps) => {
    return (
        <Button startIcon={props.icon} {...props}>
            <ButtonTypography sx={props.textSx}>{props.text}</ButtonTypography>
        </Button>
    )
}

const ButtonTypography = styled(Typography)({
    textTransform:"none"
})