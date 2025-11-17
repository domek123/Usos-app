import { CustomButton } from "@/components";
import { Stack, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ModalHeader } from "./Header";
import type { DetailsModalProps } from "./types";
import { ModalContent } from "./Content";
import { useModalContext } from "@/context";

export const DetailsModal = ({ name, teacher }: DetailsModalProps) => {
  const { t } = useTranslation();
  const { openModal, setChildren } = useModalContext();

  const content = (
    <Stack width={"100%"}>
      <ModalHeader name={name} />
      <Divider />
      <ModalContent teacher={teacher} />
    </Stack>
  );

  return (
    <>
      <CustomButton
        text={t("grades.table.details")}
        textSx={{ color: "black", textDecoration: "underline" }}
        onClick={() => {
          openModal();
          setChildren(content);
        }}
      />
    </>
  );
};

const Divider = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "1px",
  backgroundColor: theme.palette.grey["300"],
}));
