import { Stack, styled } from "@mui/material";
import type { CustomModalProps } from "./ModalContainer.types";

export const ModalContainer = (props: CustomModalProps) => {
  if (props.isOpen) {
    return (
      <ContainerBox>
        <ShadowBox />
        <ContentBox>{props.children}</ContentBox>
      </ContainerBox>
    );
  }
};

const ContainerBox = styled(Stack)({
  position: "fixed",
  zIndex: 10,
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.5s ease-in-out",
});

const ShadowBox = styled(Stack)({
  position: "absolute",
  background: "black",
  opacity: 0.4,
  width: "100%",
  height: "100%",
});

const ContentBox = styled(Stack)({
  position: "sticky",
  width: "100%",
  maxWidth: "90vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "90vh",
});
