import { Stack, styled, Typography } from "@mui/material";
import type { ModalContentProps } from "./types";

export const ModalContent = ({ teacher }: ModalContentProps) => {
  return (
    <MainContainer>
      <ContentContainer>
        <Typography fontWeight={600}>
          {teacher.title} {teacher.firstName} {teacher.lastName}
        </Typography>
        <Typography>Dane kontaktowe:</Typography>
        <Typography>tel: {teacher.phone}</Typography>
        <Typography>mail: {teacher.email}</Typography>
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20px",
});

const ContentContainer = styled(Stack)({
  width: "80%",
  gap: "5px",
});
