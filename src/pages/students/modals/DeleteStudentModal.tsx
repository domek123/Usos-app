import { Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { ModalFooter, ModalHeader } from "@/components";
import { useDeletePerson } from "@/hooks";
import { PermissionType, type Student } from "@/types";

export const DeleteStudentModal = ({
  firstName,
  lastName,
  personId,
}: Omit<Student, "email" | "studentId">) => {
  const { t } = useTranslation();
  const { deleteUser } = useDeletePerson();

  return (
    <>
      <ModalHeader title={t("students.deleteModal.title")} />
      <Typography textAlign={"center"}>
        <Trans
          i18nKey="students.deleteModal.message"
          values={{
            student: `${firstName} ${lastName}`,
          }}
        />
      </Typography>
      <ModalFooter
        text={t("common.delete")}
        action={() => deleteUser(personId, PermissionType.STUDENT)}
      />
    </>
  );
};
