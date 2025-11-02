import { Button, styled, Typography } from "@mui/material";
import type { CustomButtonProps } from "@components/CustomButton/CustomButton.types.ts";

export const CustomButton = ({
  text,
  textSx,
  ...buttonProps
}: CustomButtonProps) => {
  return (
    <Button {...buttonProps}>
      <ButtonTypography sx={textSx}>{text}</ButtonTypography>
    </Button>
  );
};

const ButtonTypography = styled(Typography)({
  textTransform: "none",
});
