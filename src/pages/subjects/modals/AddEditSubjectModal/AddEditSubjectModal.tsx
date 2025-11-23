import { ModalHeader, ModalFooter } from "@/components";
import { Stack, styled, TextField } from "@mui/material";
import type { AddEditSubjectModalProps } from "./types";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subjectSchema } from "./AddEditSubjectModalValidation";
import { useAddEditSubject } from "@/hooks";
import { SubjectTypeSelect, TeacherSelect } from "../../components";
import type { SubjectType } from "@/types";

export const AddEditSubjectModal = ({
  subject,
  semesterId,
}: AddEditSubjectModalProps) => {
  console.log("subejct", subject);

  const { t } = useTranslation();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: subject ?? {
      ects: 0,
      name: "",
      teacherId: undefined,
      gradeTypes: [],
    },
    resolver: zodResolver(subjectSchema),
  });

  const gradeTypes = watch("gradeTypes");

  const { addEditSubject } = useAddEditSubject(semesterId, subject?.id);

  return (
    <>
      <ModalHeader
        title={t(`subjects.addEditModal.${subject ? "edit" : "add"}Title`)}
      />

      <CustomForm
        onSubmit={handleSubmit(addEditSubject)}
        sx={{ width: "100%" }}
      >
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
        <TeacherSelect
          setValue={(val) => setValue("teacherId", val)}
          defaultValue={subject?.teacherId}
        />
        <SubjectTypeSelect
          value={gradeTypes as SubjectType[]}
          setValue={(val) => setValue("gradeTypes", val)}
        />
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
