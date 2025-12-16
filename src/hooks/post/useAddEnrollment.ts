import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { useModalContext } from "@/context";
import { useFacultyStore } from "@/stores";

type EnrollmentPayload = { studentId: number; subjectIds: string[] };

export const useAddEnrollment = () => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalContext();
  const { faculty } = useFacultyStore();

  const { mutate } = useMutation({
    mutationFn: async (payload: EnrollmentPayload) => {
      return api.post(`/enrollment`, payload);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["enrollment", variables.studentId, faculty!.id],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Błąd podczas dodawania enrollmentu:", error);
    },
  });

  return { addEnrollment: (payload: EnrollmentPayload) => mutate(payload) };
};
