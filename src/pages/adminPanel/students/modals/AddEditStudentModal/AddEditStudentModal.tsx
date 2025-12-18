import { useTranslation } from "react-i18next";
import { styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormTextField, ModalFooter, ModalHeader } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddEditStudent } from "@/hooks";
import type { Student } from "@/types";
import {
  studentBaseSchema,
  studentWithEmailSchema,
} from "./AddEditStudentModalValidation";
import { useFacultyStore } from "@/stores";
import { useState } from "react";
import type z from "zod";
import { FacultySelect } from "../../components";

type FormValues = z.infer<typeof studentBaseSchema> & {
  email?: string;
  facultyIds?: string[];
};

export const AddEditStudentModal = ({ student }: { student?: Student }) => {
  const { t } = useTranslation();
  const { faculty } = useFacultyStore();

  const validation = student ? studentWithEmailSchema : studentBaseSchema;

  const headerText = t(
    `students.addEditModal.${student ? "edit" : "add"}Title`
  );
  const footerText = t(`common.${student ? "edit" : "add"}`);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: student ?? {
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(validation),
  });

  const { addEditStudent } = useAddEditStudent(student?.personId);

  const [faculties, setFaculties] = useState<string[]>(
    student?.faculties.map((faculty) => faculty.facultyId) || []
  );

  return (
    <>
      <ModalHeader title={headerText} />
      <CustomForm
        onSubmit={handleSubmit((data) => {
          addEditStudent(
            faculty === null ? { ...data, facultyIds: faculties } : data
          );
        })}
      >
        <FormTextField
          label={t("students.addEditModal.firstName")}
          {...register("firstName")}
          errorHandler={errors.firstName}
        />
        <FormTextField
          label={t("students.addEditModal.lastName")}
          {...register("lastName")}
          errorHandler={errors.lastName}
        />
        {student && (
          <FormTextField
            label={t("common.email")}
            {...register("email")}
            errorHandler={errors.email}
          />
        )}
        {!faculty && (
          <FacultySelect
            value={faculties}
            setFaculties={(val) => setFaculties(val)}
          />
        )}
        <ModalFooter text={footerText} />
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
