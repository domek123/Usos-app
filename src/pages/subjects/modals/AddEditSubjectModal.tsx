import { ModalHeader, ModalFooter, TeacherSelect } from "@/components";
import { Stack, styled, TextField } from "@mui/material";
import type { AddEditSubjectModalProps } from "./types";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubjectsNetwork } from "../hooks";
import { subjectSchema } from "./AddEditSubjectModalValidation";

export const AddEditSubjectModal = ({
  semesterId,
  subject,
}: AddEditSubjectModalProps) => {
  const { t } = useTranslation();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      ects: 0,
      name: "",
      teacherId: "",
    },
    resolver: zodResolver(subjectSchema),
  });
  const { onSubmit } = useSubjectsNetwork(semesterId);

  return (
    <>
      <ModalHeader
        title={t(`subjects.addEditModal.${subject ? "edit" : "add"}Title`)}
      />

      <CustomForm onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%" }}>
        <TextField
          size="small"
          label={t("subjects.table.name")}
          {...register("name")}
          fullWidth
        />
        <Stack flexDirection={"row"} gap="5px">
          <TextField
            size="small"
            label={t("subjects.table.ects")}
            {...register("ects", { valueAsNumber: true })}
            fullWidth
          />
        </Stack>
        <TeacherSelect setValue={(val) => setValue("teacherId", val)} />
        <ModalFooter text={t(`common.${subject ? "edit" : "add"}`)} />
      </CustomForm>
    </>
  );
};

const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
