import { useTranslation } from "react-i18next";
import { Stack, styled, TextField } from "@mui/material";
import type { AddEditTeacherModalProps } from "./types";
import { useAddEditModal } from "../../hooks";
import { useForm } from "react-hook-form";
import { ModalFooter, ModalHeader } from "@/components";
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

  return (
    <>
      <ModalHeader
        title={t(`teachers.addEditModal.${teacher ? "edit" : "add"}Title`)}
      />

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
          label={t("teachers.table.title")}
          {...register("title")}
          fullWidth
        />
        <TextField
          size="small"
          label={t("teachers.table.email")}
          {...register("email")}
          fullWidth
        />
        <TextField
          size="small"
          label={t("teachers.table.phone")}
          {...register("phone")}
          fullWidth
        />
        <ModalFooter text={t(`common.${teacher ? "edit" : "add"}`)} />
      </CustomForm>
    </>
  );
};

const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
