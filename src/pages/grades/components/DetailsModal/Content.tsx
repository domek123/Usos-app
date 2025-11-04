import { Stack, styled, Typography } from "@mui/material";
import type { ModalContentProps } from "./types";

export const ModalContent = ({ teacher }: ModalContentProps) => {
  return (
    <ContentContainer>
      <Typography fontWeight={600}>
        {teacher.title} {teacher.firstName} {teacher.lastName}
      </Typography>
      <Typography>Dane kontaktowe:</Typography>
      <Typography>tel: {teacher.phone}</Typography>
      <Typography>mail: {teacher.email}</Typography>
    </ContentContainer>
  );
};

const ContentContainer = styled(Stack)({
  paddingTop: "20px",
  gap: "5px",
  justifyContent: "center",
  alignItems: "center",
});
