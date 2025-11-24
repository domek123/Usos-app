import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalContext } from "@/context";
import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";

type StudentSemesterPayload = { studentId: number; semesterId: string };

export const useDeleteSemesterAssignment = () => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();
  const { faculty } = useFacultyStore();

  const { mutate } = useMutation({
    mutationFn: async (data: StudentSemesterPayload) => {
      await api.delete(`/student-semester`, { data });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["enrollment", variables.studentId, faculty!.id],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas usuwania semestru:", error);
    },
  });

  return {
    deleteSemesterAssignment: (payload: StudentSemesterPayload) =>
      mutate(payload),
  };
};
