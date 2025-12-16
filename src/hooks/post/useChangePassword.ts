import { useMutation } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useModalContext } from "@/context";
import { useUserStore } from "@/stores";

type ChangePasswordPayload = {
  password: string;
  newPassword: string;
};

export const useChangePassword = () => {
  const { closeModal } = useModalContext();
  const { id } = useUserStore();

  const { mutate, error, isPending } = useMutation({
    mutationFn: async (payload: ChangePasswordPayload) => {
      const response = await api.patch(`/person/set-password`, {
        id,
        ...payload,
      });

      return response;
    },
    onSuccess: () => {
      closeModal();
    },
  });

  return {
    changePassword: (payload: ChangePasswordPayload) => mutate(payload),
    error,
    isLoading: isPending,
  };
};
