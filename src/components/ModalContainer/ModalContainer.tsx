import { Stack, styled } from "@mui/material";
import { useModalContext } from "@/context";

export const ModalContainer = () => {
  const { children, modalWidth, isOpen } = useModalContext();

  if (!isOpen) return null;
  return (
    <Container>
      <Shadow />
      <Content sx={{ width: modalWidth ?? "400px" }}>{children}</Content>
    </Container>
  );
};

const Container = styled(Stack)({
  position: "fixed",
  zIndex: 10,
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease-in-out",
});

const Shadow = styled(Stack)({
  position: "absolute",
  background: "black",
  opacity: 0.4,
  inset: 0,
});

const Content = styled(Stack)({
  position: "sticky",
  maxWidth: "90vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "90vh",
  padding: "10px 20px",
  borderRadius: "10px",
  backgroundColor: "white",
  gap: "30px",
});
