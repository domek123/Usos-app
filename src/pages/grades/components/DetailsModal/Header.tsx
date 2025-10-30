import { Button, Stack, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ModalHeaderProps } from "./types";

export const ModalHeader = ({ name, closeModal }: ModalHeaderProps) => {
  return (
    <MainContainer>
      <Typography variant="h6">{name}</Typography>
      <Button onClick={closeModal}>
        <CloseIcon fontSize="medium" style={{ color: "black" }} />
      </Button>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
