import { useTranslation } from "react-i18next";
import { Stack, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormTextField, ModalFooter, ModalHeader } from "@/components";
import { teacherSchema } from "./AddEditTeacherModalValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddEditTeacher } from "@/hooks";
import type { Teacher } from "@/types";

export const AddEditTeacherModal = ({ teacher }: { teacher?: Teacher }) => {
  const { t } = useTranslation();

  const headerText = t(
    `teachers.addEditModal.${teacher ? "edit" : "add"}Title`
  );
  const footerText = t(`common.${teacher ? "edit" : "add"}`);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: teacher ?? {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
    },
    resolver: zodResolver(teacherSchema),
  });

  const { addEditTeacher } = useAddEditTeacher(teacher?.personId);

  return (
    <>
      <ModalHeader title={headerText} />

      <CustomForm onSubmit={handleSubmit(addEditTeacher)}>
        <Stack flexDirection={"row"} gap="5px">
          <FormTextField
            label={t("teachers.addEditModal.firstName")}
            {...register("firstName")}
            errorHandler={errors.firstName}
          />
          <FormTextField
            label={t("teachers.addEditModal.lastName")}
            {...register("lastName")}
            errorHandler={errors.lastName}
          />
        </Stack>

        {teacher && (
          <FormTextField
            label={t("common.email")}
            {...register("email")}
            errorHandler={errors.email}
          />
        )}

        <FormTextField
          size="small"
          label={t("teachers.table.title")}
          {...register("title")}
          errorHandler={errors.title}
        />
        <FormTextField
          label={t("teachers.table.phone")}
          {...register("phone")}
          errorHandler={errors.phone}
        />
        <ModalFooter text={footerText} />
      </CustomForm>
    </>
  );
};

const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
