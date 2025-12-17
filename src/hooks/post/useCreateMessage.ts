import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useUserStore } from "@/stores";

type CreateMessagePayload = {
  to: string;
  subject: string;
  message: string;
};

export const useCreateMessage = () => {
  const { email, id } = useUserStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: CreateMessagePayload) => {
      const response = await api.post(`/message`, {
        from: email,
        ...payload,
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messageSent", id],
      });
    },
  });

  return {
    createMessage: (payload: CreateMessagePayload) => mutate(payload),
    isLoading: isPending,
  };
};
