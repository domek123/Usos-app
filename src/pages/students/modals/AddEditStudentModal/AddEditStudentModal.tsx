import { useTranslation } from "react-i18next";
import { styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { FacultySelect, ModalFooter, ModalHeader } from "@/components";
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

type FormValues = z.infer<typeof studentBaseSchema> & {
  email?: string;
  facultyIds?: string[];
};

export const AddEditStudentModal = ({ student }: { student?: Student }) => {
  const { t } = useTranslation();
  const faculty = useFacultyStore((s) => s.faculty);

  const validation = student ? studentWithEmailSchema : studentBaseSchema;

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: student ?? {
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(validation),
  });

  const { addEditStudent } = useAddEditStudent(student?.personId);

  const [faculties, setFaculties] = useState<string[]>(
    student?.faculties.map((faculty) => faculty.id) || []
  );

  return (
    <>
      <ModalHeader
        title={t(`students.addEditModal.${student ? "edit" : "add"}Title`)}
      />
      <CustomForm
        onSubmit={handleSubmit((data) => {
          addEditStudent(
            faculty === null ? { ...data, facultyIds: faculties } : data
          );
        })}
      >
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
        {!faculty && (
          <FacultySelect
            value={faculties}
            setFaculties={(val) => setFaculties(val)}
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
