import { theme } from "@/theme";
import { CustomButton } from "../CustomButton/CustomButton";
import type { ModalFooterProps } from "./types";
import { useModalContext } from "@/context";
import { useTranslation } from "react-i18next";
import { Stack, styled } from "@mui/material";

export const ModalFooter = ({ text, action }: ModalFooterProps) => {
  const { t } = useTranslation();
  const { closeModal } = useModalContext();

  return (
    <ButtonContainer>
      <CustomButton
        variant="contained"
        sx={{ backgroundColor: theme.palette.secondary.main }}
        text={t(`common.cancel`)}
        type="button"
        onClick={closeModal}
      />
      <CustomButton
        variant="contained"
        text={text}
        sx={{ backgroundColor: theme.palette.primary.main }}
        onClick={action}
        type="submit"
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  gap: "5px",
  marginTop: "10px",
});
