import type {CustomTextFieldProps} from "@components/CustomTextField/CustomTextField.types.ts";
import {InputAdornment, styled, TextField} from "@mui/material"

export const CustomTextField = (props:CustomTextFieldProps) => {
    return <StyleTextField
        slotProps={{
            input:{
                startAdornment:(
                    <InputAdornment position="start">
                        {props.icon}
                    </InputAdornment>
                )
            }
        }}
        size="small"
        fullWidth
        required={true}
        sx={props.sx}
        placeholder={props.placeholder}
    />;
}

const StyleTextField = styled(TextField)({
    borderRadius: 4,
})