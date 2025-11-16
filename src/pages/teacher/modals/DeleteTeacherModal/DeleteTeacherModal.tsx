import { Typography } from "@mui/material";
import type { DeleteTeacherModalProps } from "./types";
import { Trans, useTranslation } from "react-i18next";
import { ModalFooter, ModalHeader } from "@/components";
import { useDeletePerson } from "@/hooks";
import { PermissionType } from "@/types";
export const DeleteTeacherModal = ({
  firstName,
  lastName,
  id,
}: DeleteTeacherModalProps) => {
  const { t } = useTranslation();
  const { deleteUser } = useDeletePerson();

  return (
    <>
      <ModalHeader title={t("teachers.deleteModal.title")} />
      <Typography textAlign={"center"}>
        <Trans
          i18nKey="teachers.deleteModal.message"
          values={{
            teacher: `${firstName} ${lastName}`,
          }}
        />
      </Typography>
      <ModalFooter
        text={t("common.delete")}
        action={() => deleteUser(id, PermissionType.TEACHER)}
      />
    </>
  );
};
