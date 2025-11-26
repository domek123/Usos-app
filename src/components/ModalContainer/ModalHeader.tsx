import { Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "@/context";
import { RowBetweenStack } from "@/styles";

export const ModalHeader = ({ title }: { title: string }) => {
  const { closeModal } = useModalContext();
  return (
    <RowBetweenStack width="100%">
      <Typography variant="h5">{title}</Typography>
      <Button onClick={closeModal}>
        <CloseIcon />
      </Button>
    </RowBetweenStack>
  );
};
