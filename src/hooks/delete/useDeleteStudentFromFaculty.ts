import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalContext } from "@/context";
import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";

export const useDeleteStudentFromFaculty = () => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();
  const { faculty } = useFacultyStore();

  const { mutate } = useMutation({
    mutationFn: async (studentId: string) => {
      if (!faculty?.id) return;
      await api.delete(`/student/${studentId}/${faculty.id}`);
    },
    onSuccess: () => {
      if (!faculty?.id) return;
      queryClient.invalidateQueries({ queryKey: ["students", faculty.id] });
      queryClient.invalidateQueries({ queryKey: ["students", "all"] });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania studenta z faculty:", error);
    },
  });

  return { deleteStudentFromFaculty: mutate };
};
