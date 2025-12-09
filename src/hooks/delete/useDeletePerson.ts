import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PermissionType } from "@/types"; // jeśli masz taki enum
import { useModalContext } from "@/context";
import { api } from "@/api/api";

export const useDeletePerson = () => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async ({ id }: { id: string; table: string }) => {
      await api.delete(`/person/${id}`);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: [variables.table] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania użytkownika:", error);
    },
  });

  const deleteUser = (id: string, type: PermissionType) => {
    const table = type === PermissionType.TEACHER ? "teachers" : "students";
    mutate({ id, table });
  };

  return { deleteUser };
};
