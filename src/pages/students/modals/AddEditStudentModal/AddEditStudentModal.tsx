import { useTranslation } from "react-i18next";
import { styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { ModalFooter, ModalHeader } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddEditStudent } from "@/hooks";
import type { Student } from "@/types";
import { studentSchema } from "./AddEditStudentModalValidation";

export const AddEditStudentModal = ({ student }: { student?: Student }) => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm({
    defaultValues: student ?? {
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(studentSchema),
  });

  const { addEditStudent } = useAddEditStudent(student?.personId);

  return (
    <>
      <ModalHeader
        title={t(`students.addEditModal.${student ? "edit" : "add"}Title`)}
      />
      <CustomForm onSubmit={handleSubmit(addEditStudent)}>
        <TextField
          size="small"
          label={t("students.addEditModal.firstName")}
          {...register("firstName")}
          fullWidth
        />
        <TextField
          size="small"
          label={t("students.addEditModal.lastName")}
          {...register("lastName")}
          fullWidth
        />
        {student && (
          <TextField
            size="small"
            label={t("common.email")}
            {...register("email")}
            fullWidth
          />
        )}
        <ModalFooter text={t(`common.${student ? "edit" : "add"}`)} />
      </CustomForm>
    </>
  );
};

const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "100%",
});
