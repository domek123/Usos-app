import { FormTextField, ModalFooter, ModalHeader } from "@/components";
import { useChangePassword } from "@/hooks";
import { CustomForm } from "@/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "./ChangePasswordModalValidation";
import { useTranslation } from "react-i18next";
export const ChangePasswordModal = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
  });

  const { changePassword, error, isLoading } = useChangePassword();

  return (
    <>
      <ModalHeader title={t("changePasswordModal.title")} />
      <CustomForm
        onSubmit={handleSubmit((data) => {
          console.log(data);
          changePassword(data);
        })}
        sx={{ width: "100%" }}
      >
        {error && (
          <Alert severity="error">
            {t("changePasswordModal.errorMessage")}
          </Alert>
        )}
        <FormTextField
          label={t("changePasswordModal.currentPassword")}
          {...register("password")}
          errorHandler={errors.password}
          isPasswordField={true}
        />
        <FormTextField
          label={t("changePasswordModal.newPassword")}
          isPasswordField={true}
          {...register("newPassword")}
          errorHandler={errors.password}
        />
        <ModalFooter text={t("common.save")} isLoading={isLoading} />
      </CustomForm>
    </>
  );
};
