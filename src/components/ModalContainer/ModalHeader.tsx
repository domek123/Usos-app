import { Button, Stack, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "@/context";

export const ModalHeader = ({ title }: { title: string }) => {
  const { closeModal } = useModalContext();
  return (
    <HeaderContainer>
      <Typography variant="h5">{title}</Typography>
      <Button onClick={closeModal}>
        <CloseIcon />
      </Button>
    </HeaderContainer>
  );
};
const HeaderContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
