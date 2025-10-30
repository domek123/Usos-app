import { CustomButton, ModalContainer } from "@/components";
import { useModal } from "@/hooks";
import { Stack, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ModalHeader } from "./Header";
import type { DetailsModalProps } from "./types";
import { ModalContent } from "./Content";

export const DetailsModal = ({ name, teacher }: DetailsModalProps) => {
  const { t } = useTranslation();
  const { openModal, isOpen, closeModal } = useModal();

  return (
    <>
      <CustomButton
        text={t("grades.table.details")}
        textSx={{ color: "black", textDecoration: "underline" }}
        onClick={openModal}
      />
      <ModalContainer isOpen={isOpen}>
        <ContentContainer>
          <ModalHeader closeModal={closeModal} name={name} />
          <Divider />
          <ModalContent teacher={teacher} />
        </ContentContainer>
      </ModalContainer>
    </>
  );
};

const ContentContainer = styled(Stack)({
  backgroundColor: "white",
  width: "600px",
  padding: "20px",
  borderRadius: "5px",
  gap: "5px",
});

const Divider = styled(Stack)({
  width: "100%",
  height: "1px",
  backgroundColor: "gray",
});
