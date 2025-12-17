import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useUserStore } from "@/stores";

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  const { id: userId } = useUserStore();

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      const response = await api.patch(`/message/${id}`);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messageReceived", userId],
      });
    },
  });

  return {
    markAsRead: (id: string) => mutate(id),
  };
};
