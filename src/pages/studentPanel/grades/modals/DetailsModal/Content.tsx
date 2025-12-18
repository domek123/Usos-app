import { Stack, styled, Typography } from "@mui/material";
import type { ModalContentProps } from "./types";
import { formatTeacherData } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "@/context";
import { useTranslation } from "react-i18next";

export const ModalContent = ({ teacher }: ModalContentProps) => {
  const navigate = useNavigate();
  const { closeModal } = useModalContext();
  const { t } = useTranslation();

  return (
    <ContentContainer>
      <Typography fontWeight={600}>{formatTeacherData(teacher)}</Typography>
      <Typography>{t("grades.detailsModal.contact")}:</Typography>
      <Typography>
        {t("grades.detailsModal.phone")}: {teacher.phone}
      </Typography>
      <Typography
        onClick={() => {
          navigate("/contact/create", { state: { emailTo: teacher.email } });
          closeModal();
        }}
      >
        {t("grades.detailsModal.email")}: {teacher.email}
      </Typography>
    </ContentContainer>
  );
};

const ContentContainer = styled(Stack)({
  paddingTop: "20px",
  gap: "5px",
  justifyContent: "center",
  alignItems: "center",
});
