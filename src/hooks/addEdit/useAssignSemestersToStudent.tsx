import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useFacultyStore } from "@/stores";
import { useModalContext } from "@/context";

type StudentSemesterPayload = {
  studentId: number;
  semesterIds: string[];
  semestersWithSubjects: string[];
};

export const useAssignSemestersToStudent = () => {
  const queryClient = useQueryClient();
  const { faculty } = useFacultyStore();
  const { closeModal } = useModalContext();

  const { mutate } = useMutation({
    mutationFn: async (data: StudentSemesterPayload) => {
      return api.post(`/student-semester/`, data);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["enrollment", variables.studentId, faculty!.id],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania semetru:", error);
    },
  });

  return {
    assignSemestersToStudent: (payload: StudentSemesterPayload) =>
      mutate(payload),
  };
};
