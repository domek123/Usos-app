import { useTranslation } from "react-i18next";
import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import type { AddEditTeacherModalProps } from "./types";
import { useAddEditModal } from "../../hooks/useAddEditTeacherModal";
import { useForm } from "react-hook-form";
import { CustomButton } from "@/components";
import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "@/context";
import { theme } from "@/theme";
import { teacherSchema } from "./AddEditTeacherModalValidation";
import { zodResolver } from "@hookform/resolvers/zod";

export const AddEditTeacherModal = ({ teacher }: AddEditTeacherModalProps) => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm({
    defaultValues: teacher ?? {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(teacherSchema),
  });

  const { onSubmit } = useAddEditModal(teacher?.personId);
  const { closeModal } = useModalContext();

  return (
    <MainContainer>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5">
          {t(`teachers.addEditModal.${teacher ? "edit" : "add"}Title`)}
        </Typography>
        <Button onClick={() => closeModal()} sx={{ height: "40px" }}>
          <>
            <CloseIcon sx={{ color: theme.palette.common.black }} />
          </>
        </Button>
      </Stack>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Stack flexDirection={"row"} gap="5px">
          <TextField
            size="small"
            label={t("teachers.addEditModal.firstName")}
            {...register("firstName")}
            fullWidth
          />
          <TextField
            size="small"
            label={t("teachers.addEditModal.lastName")}
            {...register("lastName")}
            fullWidth
          />
        </Stack>

        <TextField
          size="small"
          label={t("teachers.addEditModal.title")}
          {...register("title")}
          fullWidth
        />
        <TextField
          size="small"
          label={t("teachers.addEditModal.email")}
          {...register("email")}
          fullWidth
        />
        <TextField
          size="small"
          label={t("teachers.addEditModal.phone")}
          {...register("phone")}
          fullWidth
        />
        <Stack
          flexDirection={"row"}
          justifyContent={"flex-end"}
          gap="5px"
          mt={1}
        >
          <CustomButton
            variant="contained"
            sx={{ backgroundColor: theme.palette.secondary.main }}
            text={t(`teachers.addEditModal.cancelButton`)}
            type="button"
            onClick={closeModal}
          />
          <CustomButton
            variant="contained"
            text={t(`teachers.addEditModal.${teacher ? "edit" : "add"}Button`)}
            type="submit"
          />
        </Stack>
      </CustomForm>
    </MainContainer>
  );
};

const MainContainer = styled(Stack)(({ theme }) => ({
  width: "400px",
  backgroundColor: theme.palette.common.white,
  padding: "10px 20px",
  borderRadius: "10px",
  gap: "30px",
}));

const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
