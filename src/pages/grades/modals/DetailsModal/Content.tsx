import { Stack, styled, Typography } from "@mui/material";
import type { ModalContentProps } from "./types";
import { formatTeacherData } from "@/utils";

export const ModalContent = ({ teacher }: ModalContentProps) => {
  return (
    <ContentContainer>
      <Typography fontWeight={600}>{formatTeacherData(teacher)}</Typography>
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
