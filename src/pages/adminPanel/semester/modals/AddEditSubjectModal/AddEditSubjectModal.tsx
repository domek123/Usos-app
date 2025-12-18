import {
  ModalHeader,
  ModalFooter,
  TeacherSelect,
  FormTextField,
} from "@/components";
import { Stack } from "@mui/material";
import type { AddEditSubjectModalProps } from "./types";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subjectSchema } from "./AddEditSubjectModalValidation";
import { useAddEditSubject } from "@/hooks";
import { SubjectTypeSelect } from "../../components";
import { SubjectType } from "@/types";
import { CustomForm } from "@/styles";

export const AddEditSubjectModal = ({
  subject,
  semesterId,
}: AddEditSubjectModalProps) => {
  const { t } = useTranslation();

  const headerText = t(
    `teachers.addEditModal.${subject ? "edit" : "add"}Title`
  );
  const footerText = t(`common.${subject ? "edit" : "add"}`);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: subject ?? {
      ects: 0,
      name: "",
      teacherId: undefined,
      gradeTypes: [],
    },
    resolver: zodResolver(subjectSchema),
  });

  const gradeTypes = watch("gradeTypes");
  const teacherId = watch("teacherId");
  const { addEditSubject } = useAddEditSubject(semesterId, subject?.id);

  return (
    <>
      <ModalHeader title={headerText} />

      <CustomForm
        onSubmit={handleSubmit(addEditSubject)}
        sx={{ width: "100%" }}
      >
        <FormTextField
          label={t("subjects.table.name")}
          {...register("name")}
          errorHandler={errors.name}
        />
        <Stack flexDirection={"row"} gap="5px">
          <FormTextField
            label={t("subjects.table.ects")}
            {...register("ects", { valueAsNumber: true })}
            errorHandler={errors.ects}
          />
        </Stack>
        <TeacherSelect
          setValue={(val) => setValue("teacherId", val)}
          value={teacherId}
        />
        <SubjectTypeSelect
          value={gradeTypes as SubjectType[]}
          values={Object.values(SubjectType)}
          setValue={(val) => setValue("gradeTypes", val)}
        />
        <ModalFooter text={footerText} />
      </CustomForm>
    </>
  );
};
